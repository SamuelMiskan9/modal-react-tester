import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalComponent = ({ show, HideHandler }) => {
  return (
    <div clasName="mt-5">
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={HideHandler}
        size="lg"
      >
        <div>
          <div className="main-popup sm-2">
            <div onClick={HideHandler} className="close float-end">
              &times;
            </div>
            <div className="title">
              <h3>POST YOUR THREADS</h3>
            </div>
            <form id="form">
              <input
                className="input-title"
                type="text"
                name="title"
                id="title"
                placeholder="Masukkan judul artikel"
              ></input>
              <textarea
                className="input-articles"
                name="content"
                id="content"
                cols="30"
                rows="10"
                placeholder="Masukkan artikel disini"
              ></textarea>
              <input type="hidden" name="publish" value="false"></input>
              <div className="text-end">
                <button type="submit" id="submit" className="btn btn-dark">
                  <i className="fa-solid fa-plus">Add </i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
