import React from "react";
import styles from "/styles/Finance/Loan/New.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Component/navbar";
import { useRouter } from "next/router";
import NewLoan from "./NewLoan";

export default function New() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />
        <main className={styles.mainContent}>
          <div className={styles.content}>
            <div class="d-flex justify-content-start ms-4">
              <div className={`col-2 mt-3`}>
                <label>Effective Date</label>
                <input
                  type="date"
                  id="btnnew"
                  className={`${styles["input-date"]} form-control`}
                ></input>
              </div>
              <div className={`col-3 ms-5 mt-4`}>
                <div className={`input-group `}>
                  <input
                    type="text"
                    id="new"
                    placeholder="Choose the employee"
                    className={`${styles.inputcontent} form-control`}
                  ></input>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-start ms-4">
              <div className={`col-2 mt-4`}>
                <label className={styles.Label}>Loan Name</label>
                <select
                  class={`${styles.inputselect} form-select`}
                  aria-label="Default select example"
                >
                  <option selected>Select Loan Name</option>
                  <option value="">Personal Loan</option>
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-start ms-4">
            <FontAwesomeIcon className={styles.icon} icon={faCirclePlus} />
            <a
                type="button"
                class= {`${styles.newloan} mt-2`}
                data-bs-toggle="modal"
                data-bs-target="#modalCreate"
              >
                Add new loan name
              </a>
              </div>
              <div class="col-5 mt-2 ms-4">
              <label className={styles.Label}>Description</label>
              <div className={`input-group`}>
                <input
                  type="text"
                  id="Loan"
                  className={`${styles.inputdeskripsi} form-control`}
                ></input>
              </div>
            </div>
          </div>
          <div
          class="modal fade"
          id="modalCreate"
          tabindex="-1"
          aria-labelledby="modalCreate"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <NewLoan />
          </div>
        </div>
        </main>
        
      </main>
    </div>
  );
}
