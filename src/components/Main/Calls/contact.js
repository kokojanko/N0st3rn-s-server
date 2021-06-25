import React, { useState} from "react";
import "../../../App.css";
import { db } from "../../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="ADwrapperContact wrapperContact" onSubmit={handleSubmit}>
      <h1>Поддержка</h1>
        <div className='wrapperName'>
        <h4>Укажите ваше имя</h4>
        <input
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    </div>
    <div className='wrapperEmail'>
      <h4>Как с вами связаться</h4>
      <input
        placeholder="например ссылка VK"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className='wrapperMassage'>
      <h4>Опишите проблему</h4>
      <textarea
        placeholder="проблема"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
    </div>
    <div className='wrapperSubmit'>
      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(16, 152, 214)" }}
      >
        Submit
      </button>
    </div>
    </form>
  );
};

export default Contact;