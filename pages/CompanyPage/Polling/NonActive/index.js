import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/Polling/Active.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../../../Component/navbar";

const NonActive = () => {
  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <img src="/polling.png" className={styles.image}></img>

        <div className={`d-flex justify-content-end mt-3 me-2`}>
          <a className={`${styles["btn-polls"]} btn btn-sm btn-outline-secondary`} type="button">
            CREATE NEW POLLS
          </a>
        </div>

        <main className={styles.mainContent}>
          <div className={`${styles["bg-content"]} mt-5`}>
            <div className={`${styles["content"]}`}>
              <div className="container-fluid">
                <div className="row">
                  <div className={`${styles["sidebar"]} col-3`}>
                    <div className="d-flex flex-column text-center">
                      <Link href="./Active">
                        <a className={`${styles["btn-sidebar"]} px-5 py-5`}>
                          <div className={`${styles["icon-poll"]}`}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </div>
                          ACTIVE
                        </a>
                      </Link>
                      <Link href="./NonActive">
                        <a className={`${styles["btn-sidebar"]} px-5 py-5`}>
                          <div className={`${styles["icon-poll"]}`}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                          </div>
                          NON-ACTIVE
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className={`${styles["polls"]} col-9`}>
                    <h3 className={`${styles["text-head"]} border-bottom`}>Non-active Poll</h3>
                    <h2>No Polls</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* <div class="modal fade" id="modalCreatePoll" tabindex="-1" aria-labelledby="modalCreateNewPoll" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default NonActive;
