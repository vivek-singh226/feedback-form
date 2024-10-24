import React, { useState } from 'react';
import './contact.css';

export default function App() {
  const WEB3FORMS_ACCESS_KEY = "0cdf0e6d-aa31-41ed-a3cf-466601460c92";  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = async (event) => {
    event.preventDefault(); // Buddy this will prevent the default form submission

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      // Buddy you can optionally clear the form or show a success message
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.error("Submission failed:", result);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="contact flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={submitForm} className="bg-gray-500 text-gray-900 p-6 rounded w-full max-w-lg shadow-2xl">
        <h2 className="font-sans font-bold text-white text-3xl mb-4 text-center">Contact Form</h2>
        <div className="input-box mb-4">
          <label htmlFor="name" className="block text-white mb-2">Full Name</label>
          <input 
            type="text" 
            className="field p-2 border rounded w-full" 
            placeholder="Enter your name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-box mb-4">
          <label htmlFor="email" className="block text-white mb-2">Email Address</label>
          <input 
            type="text" 
            className="field p-2 border rounded w-full" 
            placeholder="Enter your email address" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-box mb-4">
          <label htmlFor="message" className="block text-white mb-2">Your message</label>
          <textarea 
            name="message" 
            className="field message p-2 border rounded w-full" 
            placeholder="Enter your message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>
        <div>
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-indigo-500">Send Message</button>
        </div>
      </form>
    </section>
  );
}
