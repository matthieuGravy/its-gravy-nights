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
    // console.log(body);
  };
  return (
    <>
      <div>
        <h1>Contact</h1>
      </div>

      <form
        action={action}
        method={method}
        onSubmit={handleSubmit}
        className="m-auto grid grid-cols-2 p-10 gap-5 border-2 border-secondary rounded-xl backdrop-blur-sm bg-fuchsia-700/30 md:w-1/2 w-10/12 xl:w-1/3"
      >
        <label htmlFor="name">Name:</label>
        <input
          placeholder="Cordell Walker"
          type="text"
          id="name"
          name="name"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <label htmlFor="email">Email:</label>
        <input
          placeholder="cordellwalker@texas.com"
          type="email"
          id="email"
          name="email"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          className="input input-bordered input-secondary w-full max-w-xs"
        ></textarea>
        <button
          type="submit"
          className="btn btn-outline btn-secondary col-span-2 w-40 place-self-center mt-5"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

export default Contact;
