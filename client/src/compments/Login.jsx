const Login = () => {
  const [pseudo, setPseudo] = useState("");
  const [password1, setPassword1] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          pseudo,
          password1,
        }),
      });
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      } else {
        alert("Authentication successful");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleAuth}>
        <label htmlFor="pseudo">Pseudo </label>
        <input
          type="text"
          placeholder="HighKicker58"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          placeholder="Choose a password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
