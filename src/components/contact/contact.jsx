import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_29x5e49",
        "template_tpkojez",
        form.current,
        "oEMDlAxcOzHCR_XMu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>teambozorov@gmail.com</h5>
            {/* <a href="" target="_blank">
              Send a message
            </a> */}
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Abdurashid Bozorov</h5>
            <a
              href="https://www.messenger.com/t/100039325390232"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>+821058347771</h5>
            {/* <a href="" target="_blank">
              Send a message
            </a> */}
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="number"
            name="user_number"
            placeholder="Your  number"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
