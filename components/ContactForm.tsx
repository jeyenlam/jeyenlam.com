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
      className='w-96 lg:w-[40rem] p-4 text-indigo-400 text-xs sm:text-sm border border-indigo-400 flex flex-col rounded-2xl gap-3 -b-2 lg:-b-4 justify-evenly'
    >
      <div className='w-full flex justify-between gap-2'>
        <label htmlFor='name'>Name:</label>
        <input
          className='w-4/5 p-2 rounded-xl bg-zinc-800 bg-opacity-10'
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
          className='w-4/5 p-2 rounded-xl bg-zinc-800 bg-opacity-10'
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
          className='w-full h-24 p-2 rounded-xl text-[10px] sm:text-sm bg-zinc-800 bg-opacity-10'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className='self-center p-2 rounded-2xl -b-2 lg:-b-4 px-4 text-indigo-400 border border-indigo-600 hover:bg-indigo-600 hover:scale-110 hover:duration-100 bg-transparent'>Submit</button>
    </form>
  )
}

export default ContactForm