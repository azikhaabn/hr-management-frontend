import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/CompanyPage/Announcement/announcementList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Component/navbar";
import AddNew from "./AddNew";

export default function announcement() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.image}>
          <img src="/image_618.png" className={styles.image}></img>
        </div>
        <div className={styles.box}>
          <div className={styles.link}>
            <a href="/CompanyPage/Announcement">Announcement List</a>
          </div>
          <div className={styles.content}>
            <div className="d-flex justify-content-between align-items-center">
              <button type="button" class="btn btn-outline-secondary btn-sm mt-4 ms-4 mb-3" data-bs-toggle="modal" data-bs-target="#modalCreate">
                ADD NEW
              </button>
              <div className={`${styles.dropdown} dropdown`}>
                <button
                  class="btn btn-outline-secondary mt-4 me-4 mb-3 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Action
                </button>
                <div className={styles.drop}>
                  <ul className={`${styles.dropdownMenu} dropdown-menu`}>
                    <li>
                      <button className={styles.item}>Delete Selected</button>
                    </li>
                  </ul>
                </div>
                {/* <button class="btn btn-outline-secondary mt-4 me-4 mb-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className={styles.horizontal}></div>
          </div>
        </div>
        <div class="modal fade" id="modalCreate" tabindex="-1" aria-labelledby="modalCreate" aria-hidden="true">
          <div class="modal-dialog">
            <AddNew />
          </div>
        </div>
      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </div>
  );
}
