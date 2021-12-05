import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [imageUrl, setImageUrl] = useState(
    "https://www.linkpicture.com/q/generated_photos_5e68893b6d3b380006f22f8b.jpg"
  );

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("Modal Window popup");
  return (
    <div className="App">
      <header>Profile Pic</header>
      <div className="ImageSection" onClick={() => setShowModal(true)}>
        <div className="profile">
          {" "}
          <img
            src={imageUrl}
            alt=""
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          ></img>
        </div>
      </div>
      {showModal && (
        <div className="ModalWindow">
          <div className="modal-content">
            <span onClick={() => setShowModal(false)}>X</span>
            <header>{title} </header>
            <div>Name: Rajesh</div>
          </div>
        </div>
      )}
    </div>
  );
}
// file:///C:/Users/rajes/Desktop/Documents/Photo%20&%20Signature/DSC_8161.JPG
