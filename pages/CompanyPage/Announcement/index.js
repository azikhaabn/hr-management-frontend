import React from "react";
import styles from "/styles/Announcement/announcementList.module.css";
import AddNew from "./AddNew";
import Navbar from "../../Component/navbar"

export default function announcement() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.image}>
          <img src="/image_618.png" className={styles.image}></img>
        </div>
        <div className={styles.box}>
          <div className={styles.link}>
            <a>Announcement List</a>
          </div>
          <div className={styles.content}>
            <div class="d-flex justify-content-between align-items-center">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mt-4 ms-4 mb-3"
                data-bs-toggle="modal"
                data-bs-target="#modalCreate"
              >
                ADD NEW
              </button>
            </div>
            <div className={styles.horizontal}></div>
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
            <AddNew />
          </div>
        </div>
      </main>
    </div>
  );
}
