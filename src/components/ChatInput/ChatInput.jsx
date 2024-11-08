// src/components/ChatInput/ChatInput.jsx
import React from 'react';
import './ChatInput.css';

export default function ChatInput({ onKeyDown }) {
  return (
    <div className="ChatInput">
      <input onKeyDown={onKeyDown} placeholder="Enter a message" type="text" />
    </div>
  );
}
