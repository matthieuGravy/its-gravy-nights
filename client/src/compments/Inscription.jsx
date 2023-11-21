const Inscription = () => {
  return (
    <form
      action="/inscription"
      method="post"
      className="grid grid-cols-2 p-10 gap-5 border-2 border-secondary rounded-xl backdrop-blur-sm bg-fuchsia-700/30"
    >
      <h1 className="mb-5 text-5xl font-bold col-span-2">Become a Member</h1>
      <label htmlFor="firstname">First Name: </label>
      <input
        type="text"
        placeholder="Cordell"
        id="firstname"
        className="input input-bordered input-secondary w-full max-w-xs"
      />

      <label htmlFor="lastname">Last Name: </label>
      <input
        type="text"
        placeholder="Walker"
        id="lastname"
        className="input input-bordered input-secondary w-full max-w-xs"
      />

      <label htmlFor="email">Email: </label>
      <input
        type="text"
        placeholder="cordellwalker@texas.com"
        id="email"
        className="input input-bordered input-secondary w-full max-w-xs"
      />

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="choose a password"
        id="password"
        className="input input-bordered input-secondary w-full max-w-xs"
      />

      <label htmlFor="password">Confirm Password: </label>
      <input
        type="password"
        placeholder="confirm your password"
        id="password"
        className="input input-bordered input-secondary w-full max-w-xs"
      />

      <button
        className="btn btn-outline btn-secondary col-span-2 w-40 place-self-center mt-5"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export { Inscription };
