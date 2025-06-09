import React from 'react';
import './style.css';
import ToolsBox from '../tools_box/ToolsBox';
import FooterBar from '../footer_bar/FooterBar';
import UserSelect from '../user_select/UserSelect';
import ToolsImg from "./tools.png";

function AddTools() {
  return (
    <><div className="container">
    <div className="left">
        <ToolsBox />
    </div>
    <div className="center">
      <div className="form-container">
  <h2 className="form-title">🛠️ Tool Upload Form</h2>


  <div className="image-preview">
    <img src={ToolsImg} alt="Tool Icon" id="preview-img" />
  </div>


  <form>
  
    <div className="form-group">
      <label><i className="fas fa-heading"></i> Tool Name</label>
      <input type="text" placeholder="Enter tool name" />
    </div>

  
    <div className="form-group">
      <label><i className="fas fa-link"></i> Tool Link</label>
      <input type="url" placeholder="https://example.com" />
    </div>


    <div className="form-group">
      <label><i className="fas fa-image"></i> Upload Tool Icon</label>
      <input type="file" accept="image/*" onchange="previewImage(event)" />
    </div>

    <button type="submit" className="submit-btn">🚀 Submit</button>
  </form>
</div>

      <FooterBar />
    </div>
    <div className="right">
      <UserSelect />
    </div>
  </div></>
  )
}

export default AddTools;