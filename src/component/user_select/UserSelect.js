import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import checkMark from './check-mark.png';
const toolsData = [
   {
    title: 'Gemini Chat',
    path: '/gemini-chat',
    
  },
  {
    title: 'Logo(PNG)',
    path: '/flaticon-logo-one',
  
  },
  {
    title: 'Emojis',
    path: '/emoji-one',
 
  },
  {
    title: 'PDF Converter',
    path: '/i-love-img-risize',
    
  },
  {
    title: 'ChatGPT',
    path: '/chatgpt-tools',
   
  }
];

function UserSelect() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = toolsData.filter(tool =>
    tool.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2 className='developerCO'>Load Tools</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search Load..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Tool cards */}
      <div className="tool-grid">
        {filteredTools.map((tool, index) => (
          <div key={index} className="tool-card">
           
             
              <span className="site-title">{tool.title}</span> &nbsp; &nbsp;<span className="site-titles">❌</span>
              
         
              <Link to={tool.path} className="logo-link"><button>Selected ✅</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserSelect;
