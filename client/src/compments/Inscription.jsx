import { useState } from "react";

const Inscription = () => {
  const [pseudo, setPseudo] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          pseudo,
          firstname,
          lastname,
          email,
          password1,
          password2,
        }),
      });
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      } else {
        alert("You are now registered");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <article className="container-sm max-w-md  m-auto">
      <form
        onSubmit={handleRegister}
        className="grid grid-cols-3 p-10 gap-5 border-2 border-secondary rounded-xl backdrop-blur-sm bg-fuchsia-700/30 shadow-xl"
      >
        <h1 className="mb-5 text-5xl font-bold col-span-3 text-center">
          Become a Member
        </h1>
        <label htmlFor="pseudo">Create your pseudo: </label>
        <input
          type="text"
          placeholder="HighKicker58"
          id="pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="input input-bordered input-secondary w-full max-w-xs col-span-2"
        />

        <label htmlFor="firstname">First Name: </label>
        <input
          type="text"
          placeholder="Cordell"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="input input-bordered input-secondary w-full max-w-xs col-span-2"
        />

        <label htmlFor="lastname">Last Name: </label>
        <input
          type="text"
          placeholder="Walker"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="input input-bordered input-secondary w-full max-w-xs col-span-2"
        />

        <label htmlFor="email">Email: </label>
        <input
          type="text"
          placeholder="cordellwalker@texas.com"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered input-secondary w-full max-w-xs col-span-2"
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="choose a password"
          id="password1"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          className="input input-bordered input-secondary w-full max-w-xs col-span-2"
        />

        <label htmlFor="password">Confirm Password: </label>
        <input
          type="password"
          placeholder="confirm your password"
          id="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className="input input-bordered input-secondary w-full max-w-xs col-span-2"
        />

        <button
          className="btn btn-outline btn-secondary col-span-3 w-40 place-self-center mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </article>
  );
};

export { Inscription };
