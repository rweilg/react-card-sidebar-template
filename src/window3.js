import React from "react";
import "./canvas.css";

function Window3() {
  return (
    <div className="canvas-container">
      <div className="title-bar">
        <h1 className="bigtitle">Messages</h1>
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
