import React from "react";
import PizzaLeft from "../assets/images/pizzaLeft.jpg";
import "../styles/contact.css";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div className="contact"
     initial={{opacity:0}}
     animate={{opacity:1}}
     exit={{opacity:0}}
    >
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="9"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </motion.div>

    
  );
}

export default Contact;