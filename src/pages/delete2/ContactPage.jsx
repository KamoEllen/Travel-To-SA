// ContactPage.jsx
import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! If you have any questions, suggestions,
        or would like to share your South Africa experiences, please feel free
        to reach out to us.
      </p>
      <form>

            <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
              <label htmlFor=''>Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor=''>Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
              <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default ContactPage;
