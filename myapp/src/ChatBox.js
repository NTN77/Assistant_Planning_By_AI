import { useState } from "react";
import "./ChatApp.css";

function ChatMessage({ message }) {
  return (
    <div className={`message ${message.sender === "User 1" ? "right" : "left"}`}>
      {message.sender !== "User 1" && <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar" className="avatar" />}
      <div className="message-content">
        <p className="message-text">{message.text}</p>
        <p className="message-time">{message.time}</p>
      </div>
      {message.sender === "User 1" && <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar" className="avatar" />}
    </div>
  );
}

function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
    </div>
  );
}

function InputBox({ input, setInput, sendMessage }) {
  return (
    <div className="input-box">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar" className="avatar" />
      <input
        type="text"
        className="input-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type message"
      />
      <button className="send-button" onClick={sendMessage}>
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
}

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "Hi", sender: "User 1", time: "23:58" },
    { text: "How are you ...???", sender: "User 1", time: "23:59" },
  ]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("User 1");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: user, time: new Date().toLocaleTimeString() }]);
    setInput("");
    setUser(user === "User 1" ? "User 1" : "User 1");
  };

  return (
    <section className="chat-container">
      <div className="chat-card">
        <div className="chat-header">
          <h5>Chat</h5>
          <button className="chat-button">Let's Chat App</button>
        </div>
        <ChatBox messages={messages} />
        <InputBox input={input} setInput={setInput} sendMessage={sendMessage} />
      </div>
    </section>
  );
}
