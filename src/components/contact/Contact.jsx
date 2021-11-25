import {useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_89m99n8",
      "template_qxr5iwe",
      formRef.current,
      "user_TMB3AHIu3OTPdOMpbE6Py"
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: "white"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: "white"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thanks, I will reply ASAP!"}
          </form>
      </div>
    </div>
  );
}
