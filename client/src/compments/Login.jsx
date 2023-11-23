const login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="pseudo">Pseudo </label>
        <input type="text" placeholder="HighKicker58"></input>
        <label htmlFor="password">Password </label>
        <input type="password" placeholder="choose a password"></input>
      </form>
    </div>
  );
};

export { login };
