import React, { useState } from "react";

function Contact() {
  return (
    <>
      <div>
        <h1>Contact</h1>
      </div>
      <form action="http://localhost:3000/send-form" method="post">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Contact;
