import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.send(
        'your_service_id',  // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          message: formData.message,
          to_name: 'Your Name or Brand',  // You can make this static or dynamic
          reply_to: formData.email,
        },
        'your_user_id'  // Replace with your EmailJS public key (user ID)
      ).then((result) => {
          console.log(result.text);
          toast.error(' Failed to send the message. Please try again later.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }, (error) => {
          console.log(error.text);
          toast.success('Message sent successfully!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
  
      // Optionally reset the form fields
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    };
  
    return (<>
      <hr className="border-gray-600 mb-8" />

        <div className="text-center mt-16">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl mt-10 lg:mt-3 tracking-wide mt-16 text-bold ">
        Contact Us {" "}
        </h2>
      </div>
      <div className="flex justify-center items-center h-screen bg-black-900 w-full">
        
        <ToastContainer />
        <form 
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full "
        >
    
          <div className="mb-4 ">
            <label className="block text-black-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="company">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded h-32"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </>);
  };
  
  export default ContactForm;
  