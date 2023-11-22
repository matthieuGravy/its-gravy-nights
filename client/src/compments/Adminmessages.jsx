import { useEffect, useState } from "react";

function Adminmessages() {
  const MessageComponent = (props) => {
    return (
      <div>
        {props.messages.map((message, index) => (
          <Messages key={index} {...message} />
        ))}
      </div>
    );
  };

  const Messages = ({ name, email, message }) => {
    return (
      <div className="card w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <p>{message}</p>
        </div>
      </div>
    );
  };

  const [messages, setMessages] = useState([]);

  const fetchMessage = async () => {
    try {
      const response = await fetch("http://localhost:3000/list-contact");
      const data = await response.json();
      const messages = data.messages; // Accédez à la clé 'messages' dans les données
      setMessages(messages);
      console.log(messages);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <>
      <section>
        <h2>Panel</h2>
        <h3>Liste de message</h3>
        <MessageComponent messages={messages} />
      </section>
    </>
  );
}

export { Adminmessages };
