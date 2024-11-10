// src/components/ChatInput/ChatInput.jsx
import React from 'react';
import './ChatInput.css';

export default function ChatInput({ onKeyDown, value, onChange }) {
  return (
    <div className="ChatInput">
      <input 
      onKeyDown={onKeyDown}
      value={value}
      onChange={onChange}
      placeholder="Enter a message" type="text" />
    </div>
  );
}
