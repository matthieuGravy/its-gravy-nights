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

  const Messages = ({ _id, name, email, message }) => {
    const handleDelete = async () => {
      try {
        if (!_id) {
          console.error("ID du message non défini.");
          return;
        }

        // Faites une requête pour supprimer le message avec l'ID
        await fetch(`http://localhost:3000/delete-message/${_id}`, {
          method: "DELETE",
        });

        // Mise à jour de l'état avec les messages mis à jour (moins le message supprimé)
        setMessages((prevMessages) =>
          prevMessages.filter((prevMessage) => prevMessage._id !== _id)
        );
      } catch (error) {
        console.error("Erreur lors de la suppression du message :", error);
      }
    };

    return (
      <div className="card w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <p>{message}</p>
          <button onClick={handleDelete}>Remove</button>
        </div>
      </div>
    );
  };

  const [messages, setMessages] = useState([]);

  const fetchMessage = async () => {
    try {
      const response = await fetch("http://localhost:3000/list-contact");
      const data = await response.json();
      const messages = data.messages;
      setMessages(messages);
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
