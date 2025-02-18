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
      className='p-4 border flex flex-col rounded-xl gap-3 justify-evenly'
    >
      <div className='grid grid-flow-col'>
        <label htmlFor='name'>Name:</label>
        <input
          className='col-span-3 p-2 rounded-lg bg-[var(--teritary)] border'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='grid grid-flow-col'>
        <label htmlFor="email">Email:</label>
        <input
          className='col-span-3 p-2 rounded-lg bg-[var(--teritary)] border'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='grid grid-flow-col'>
        <label htmlFor="message">Message:</label>
        <textarea
          className='col-span-3 h-24 p-2 rounded-lg bg-[var(--teritary)] border'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className='self-center p-2 -b-2 px-4 hover:scale-110 hover:duration-100 rounded-lg bg-[var(--pop)] text-[var(--teritary)] border'>Submit</button>
    </form>
  )
}

export default ContactForm