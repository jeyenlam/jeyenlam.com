"use client"
import React, { useState } from 'react'
const sendEmailURL = process.env.NEXT_PUBLIC_SEND_EMAIL_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    
    try {
      const response = await fetch(`${sendEmailURL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok){
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        alert("Message sent!");
      } else {
        alert("Error sending message!");
      }
    } catch (error) {
      alert("Error:" + error);
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='w-4/5 lg:w-1/3 lg:h-3/5 p-4 text-xs sm:text-sm bg-indigo-50 flex flex-col rounded-2xl gap-2 border border-zinc-900 border-b-2 lg:border-b-4 justify-evenly'
    >
      <div className='w-full flex justify-between gap-2'>
        <label htmlFor='name'>Name:</label>
        <input
          className='w-4/5 p-2 rounded-xl border border-zinc-800'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='w-full flex items-center justify-between gap-2'>
        <label htmlFor="email">Email:</label>
        <input
          className='w-4/5 p-2 rounded-xl border border-zinc-800'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='w-full flex items-center gap-2'>
        <label htmlFor="message">Message:</label>
        <textarea
          className='w-full h-24 p-2 rounded-xl border border-zinc-800 text-[10px] sm:text-sm'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className='self-center bg-indigo-400 p-2 rounded-2xl border border-zinc-900 border-b-2 lg:border-b-4 hover:border-b hover:mt-[1px] hover:bg-lime-200 px-4'>Submit</button>
    </form>
  )
}

export default ContactForm