import React, { useState} from "react";
import "../../App.css";
import { db } from '../../firebase';

const WhatKindom = () => {
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
    <form className="wrapperKindom wrapperContact" onSubmit={handleSubmit}>
      <h1>Заявка в<br /> королевство</h1>
        <div className='wrapperName'>
        <h4>Ваш ник в дискорде</h4>
        <input
            placeholder="Ник#0000"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    </div>
    <div className='wrapperEmail'>
      <h4>В какое королевство хотите вступить</h4>
      <input
        placeholder="Бездонное"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className='wrapperMassage'>
      <h4>Почему хотите вступить и кем хотите стать</h4>
      <textarea
        placeholder="Почему?"
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

export default WhatKindom;