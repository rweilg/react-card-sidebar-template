import React from "react";
import "./canvas.css";
import BellIcon from "./icons/bell";
import PhoneIcon from "./icons/phone";
import MoreIcon from "./icons/more";

function Window3() {
  return (
    <div className="canvas-container">
      <div className="title-bar-container">
        <div className="title-bar-area">
          <h1 className="bigtitle">Messages</h1>
          <div className="icons">
            <BellIcon />
            <PhoneIcon />
            <MoreIcon />
          </div>
        </div>
        <div className="separator"></div>
      </div>
      <div className="content-area">
        <h3></h3>
        <div className="text-field-container">
          <input
            type="text"
            name="nome"
            placeholder="Type something here..  Hit enter to send"
            className="text-field"
          />
          {/* <input type="send" value="Send" className="send-btn" /> */}
        </div>
      </div>
    </div>
  );
}

export default Window3;
