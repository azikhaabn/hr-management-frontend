import React from "react";
import styles from "/styles/CompanyPage/AddNewReprimand.module.css";

const Edit = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div
            className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}
          >
            <h3 class="modal-title">Edit Reprimand</h3>
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
              >
              </select>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Expired Date</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
              </select>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Content</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
              </select>
            </div>
          </div>

          <div class="modal-footer border-top mb-2">
           
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
                
              SUBMIT REPRIMAND
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              CANCEL REPRIMAND
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
    </div>
  );
};

export default Edit;