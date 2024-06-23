// components/ChatBox.js
import React, { useState } from "react";

const ChatBox = ({ messages }) => {
  const [input, setInput] = useState("Type your message here...");

  const handleSendMessage = () => {
    // Logic to send message to AI assistant and receive a response
    // For now, we'll just add the message to the chat
    messages.push({ sender: "user", text: input });
    setInput("");
  };

  return (
    <div>
      <div
        style={{
          height: "150px",
          overflowY: "scroll",
          border: "1px solid #ddd",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%" }}
      />
      <button onClick={handleSendMessage} style={{ width: "20%" }}>
        Send
      </button>
    </div>
  );
};

export default ChatBox;
