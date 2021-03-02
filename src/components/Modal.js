import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { addItem, closeModal, isModalOpen } = useGlobalContext();
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
    };
    addItem(newItem);
    closeModal()
  };

  return (
    <div
      className={`${
        isModalOpen ? "modal-container modal-open" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <div className="modal-title">
          <h3>Add To Shopping List</h3>
          <button onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="item">Item </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter Item To Add"
            />
          </div>
          <button className="add-btn" onClick={handleSubmit}>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
