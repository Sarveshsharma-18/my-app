// src/Card.js
import React from 'react';
import './Card.css';

function Card({ title, content }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <pre>{content}</pre>
    </div>
  );
}

export default Card;
