import React, { useState } from "react";

function Contact() {
  const action = "http://localhost:3000/send-form";
  const method = "POST";
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());
    console.log(formData);
    const response = await fetch("http://localhost:3000/send-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const body = await response.text();
    console.log(body);
  };
  return (
    <>
      <div>
        <h1>Contact</h1>
      </div>
      <form action={action} method={method} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default Contact;
