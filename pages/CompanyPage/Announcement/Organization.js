import React from "react";
import Head from "next/head";
import styles from "/styles/Announcement/organization.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Organization = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div
            className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3`}
          >
            <h3 class="modal-title">Organization</h3>
          </div>

          <div class="modal-body ms-3">
            <div class="row mt-3 justify-content-end me-3">
              <div class="col-3">
                <label
                  for="select"
                  className={`${styles.formLabel} form-label`}
                >
                  Showing
                </label>
                <select
                  className={`${styles.formSelect} form-select`}
                  id="select"
                >
                  <option selected>10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div class="col-4">
                <label
                  for="search"
                  className={`${styles.formLabel} form-label`}
                >
                  Search
                </label>
                <div className={`input-group mb-5`}>
                  <span className={`${styles.spanIcon} input-group-text`}>
                    <FontAwesomeIcon
                      className={styles.searchIcon}
                      icon={faMagnifyingGlass}
                    />
                  </span>
                  <input
                    type="text"
                    className={`${styles.searchInput} form-control`}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnfilter} btn btn-outline-secondary mt-2 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              Filter
            </button>
            <button
              type="button"
              className={`${styles.btnclear} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              Clear
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Organization;
