import React from "react";
import LeaveRewievFormAppear from "../LeaveRewievFormAppear";

import "./modalWindow.css";

const SimpleModal = ({ isOpen, handleClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      handleClose();
    }
  };
  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <LeaveRewievFormAppear handleClose={handleClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleModal;
