import React from "react";
import Head from "next/head";
import styles from "/styles/Reprimand/AddNew.module.css";

const AddNewReprimandType = ({ closeModal }) => {
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
            <div class="col-10 mt-3">
              <label for="content" className={`${styles.formLabel} form-label`}>
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

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              SUBMIT REPRIMAND TYPE
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

export default AddNewReprimandType;
