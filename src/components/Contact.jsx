import React from 'react';
import {useState} from 'react';

const ContactForm = () => { 
        return (
      <form >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className='contact-message'>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>
        <button className="contact-submit"type="submit">Submit</button>
      </form>
    );
  };

const Contact=()=>{
    return (
        <>
        <div className='body-contact'>
        <div className='container-contact'>
            <div className='message-contact'>
            <h2>Contact Us</h2>
            </div>
            <ContactForm />
        </div>
        
        </div>
        </>
    )

}

export default Contact;