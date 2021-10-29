import React from 'react';
import "./contact.scss";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("xvodjopy");
    if (state.succeeded) {
        return <p>Thanks! I will respond ASAP.</p>;
    }
    return (
        <div className="contact" id="contact">
        <div className="left">
            <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
            <h2>Contact</h2>
                
        <form onSubmit={handleSubmit}>
        
        <label htmlFor="subject">
          Subject
        </label>
        
        <input
          id="subject"
          type="subject" 
          name="subject"
        />
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
        />
        <label htmlFor="message">            
          Message
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      </div>
      </div>
    );
  }

  
