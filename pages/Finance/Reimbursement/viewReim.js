import React from "react";
import styles from "/styles/Finance/Reimbursement/ViewReim.module.css";

const ViewReimbursement = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content rounded-0`}>
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ color: "#9F0111" }}>
            Reimbursement
          </h1>
        </div>
        <div className={`${styles["modal-body"]} modal-body mx-3`}>
          <div className={`input`}>
            <div className={`d-flex justify-content-between mb-2`}>
              <div className={`col-6 me-2`}>
                <div className={`mb-3`}>
                  <label for="reimName" className={`${styles["form-label"]} form-label`}>
                    Reimbursement Name
                  </label>
                  <div className={`input-group mb-3`}>
                    <input type="text" id="reimName" className={`${styles["input-group"]} form-control`}></input>
                  </div>
                </div>
              </div>
              <div className={`col-6`}>
                <div className={`mb-3`}>
                  <label for="effectiveDate" className={`${styles["form-label"]} form-label`}>
                    Effective Date
                  </label>
                  <div className={`input-group mb-3`}>
                    <input type="date" id="effectiveDate" className={`${styles["input-group"]} form-control`}></input>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`mb-3`}>
                <label for="reimDesc" className={`${styles["form-label"]} form-label`}>
                  Reimbursement Description
                </label>
                <div className={`input-group mb-3`}>
                  <textarea type="date" id="reimDesc" className={`${styles["input-group"]} form-control`}></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-between`}>
            <div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="include" />
                <label className={`${styles["form-label"]} form-check-label`} for="include">
                  Include in Take Home Pay
                </label>
              </div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="protate" />
                <label className={`${styles["form-label"]} form-check-label`} for="protate">
                  Prorate
                </label>
              </div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="texable" />
                <label className={`${styles["form-label"]} form-check-label`} for="texable">
                  Taxable
                </label>
              </div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="policy" />
                <label className={`${styles["form-label"]} form-check-label`} for="policy">
                  This Policy has unlimited amount
                </label>
              </div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="noExpiryDate" />
                <label className={`${styles["form-label"]} form-check-label`} for="noExpiryDate">
                  No Expiry Date
                </label>
              </div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="default" />
                <label className={`${styles["form-label"]} form-check-label`} for="default">
                  Default Reimbursement for new employee
                </label>
              </div>
              <div className={`d-flex justify-content-between`}>
                <div class="form-check">
                  <input className={`${styles["check-radio"]}`} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className={`${styles["form-label"]} form-check-label ms-2`} for="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div class="form-check" style={{ marginRight: "100px" }}>
                  <input className={`${styles["check-radio"]}`} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className={`${styles["form-label"]} form-check-label ms-2`} for="flexRadioDefault2">
                    Select
                  </label>
                </div>
              </div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="maxRequest" />
                <label className={`${styles["form-label"]} form-check-label`} for="maxRequest">
                  Max Request Per Emerge
                </label>
              </div>
            </div>

            <div>
              <h1>Hello</h1>
            </div>
          </div>
        </div>
        <div class="modal-footer border-top mb-2">
          <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`} data-bs-dismiss="modal">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewReimbursement;
