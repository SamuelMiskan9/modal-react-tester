import React from "react";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

const AddPost = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const HandleShowModal = () => {
    setIsModalShow(!isModalShow);
  };
  return (
    <div>
      <ModalComponent show={isModalShow} HideHandler={HandleShowModal} />
      <div className="row justify-content-center align-items-center">
        <h1>Threads Feed</h1>
        <div></div>
        <button
          onClick={HandleShowModal}
          type="button"
          id="ButtonPopUp"
          className="btn btn-success mb-3 w-50 btn-sm "
        >
          Create a Thread
        </button>

        <div className="popup-container" id="MainPopUp">
          <div className="container col-md-6">
            <div className="main-popup sm-2">
              <div className="close float-end">&times;</div>
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
                    <i className="fa-solid fa-plus">woi</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="showContent"></div>
      </div>
      <section className="footer" id="footer">
        <h5>Contact Us</h5>
        <p>ASEAN YOUTH FORUM</p>
      </section>
    </div>
  );
};

export default AddPost;

//   var modal = document.getElementById("MainPopUp");

// var btn = document.getElementById("ButtonPopUp");

// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
