import React from "react";
import styles from "/styles/CompanyPage/Reprimand/AddNew.module.css";

const AddNewReprimandList = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div
            className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}
          >
            <h3 class="modal-title">Add New Reprimand</h3>
          </div>

          <div class="modal-body ms-3">
            <div className={`col-5`}>
              <h6>Assign To</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <button
              type="button"
              className={`${styles.btnFile} btn btn-outline-secondary mt-3 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              ATTACH FILE (MAX 10 MB)
            </button>
            <div class="d-flex justify-content-start mt-3">
              <div className="form-check me-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Set By System
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Send Email
                </label>
              </div>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Type</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>SP1</option>
              </select>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Started Date</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              ></select>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Expired Date</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              ></select>
            </div>
            <div class="d-flex justify-content-between">
              <div class="col-10 mt-3">
                <label
                  for="content"
                  className={`${styles.formLabel} form-label`}
                >
                  Content
                </label>
                <div className={`input-group mb-3`}>
                  <input
                    type="text"
                    id="content"
                    className={`${styles.inputcontent} form-control`}
                  ></input>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="col-10">
                <label
                  for="content"
                  className={`${styles.formLabel} form-label`}
                >
                  Feedback
                </label>
                <div className={`input-group mb-3`}>
                  <input
                    type="text"
                    id="content"
                    className={`${styles.inputcontent} form-control`}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              SUBMIT REPRIMAND
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              CANCEL
            </button>
          </div>
        </div>
      </main>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default AddNewReprimandList;