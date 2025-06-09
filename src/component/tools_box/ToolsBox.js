import React, { useState } from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import chatGpt from "./chatgpt.png";
import check from "./check-mark.png";

function ToolsBox() {
  const location = useLocation();
  return (
    <>
         <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
        Home
      </Link>
      <Link to="/add-tools" className={`nav-link ${location.pathname === '/add-tools' ? 'active' : ''}`}>
        Add Tools
      </Link>

      <h2 className='developerCO'>Select Tools</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search Tools..."
        className="search-input"
      />

      {/* Tool cards */}
      <div className="tool-grid">
          <div className="tool-card">
           
              <img src={chatGpt} className="logo" />
              <span className="site-title">Chat GPT</span>
             <img src={check} className="logo check-icon" />
             <button>Select</button>
      
          </div>
      </div>
    </>
  );
}

export default ToolsBox;
