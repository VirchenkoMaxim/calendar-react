import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./ModalWindow.scss";

export const ModalWindow = ({ setModalShow, ...props }) => {
  const month = useSelector((state) => state.month);
  const day = useSelector((state) => state.day);
  const weekDay = useSelector((state) => state.weekDay);
  return (
    <Modal
      className="modal"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <button className="modal_btn" onClick={() => setModalShow(false)}>
          {""}
        </button>
        <div className="modal_container">
          <div className="modal_item">
            <label htmlFor="month">Month</label>
            <input id="month" type="text" value={month} readOnly />
          </div>
          <div className="modal_item">
            <label htmlFor="day">Day</label>
            <input
              id="day"
              type="text"
              value={`${day}th ${weekDay}`}
              readOnly
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
