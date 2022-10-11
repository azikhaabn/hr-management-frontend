import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/CompanyPage/Announcement/announcementList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import AddNew from "./AddNew";

export default function announcement() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Company Name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        ></link>
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faBars}
            style={{ fontSize: 32, color: "white" }}
          />
          <div className={styles.logo}>
            <Image
              src="/EasyHandler_Hitam.png"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.headerRight}>
            <FontAwesomeIcon
              className={styles.icon2}
              icon={faEnvelope}
              style={{ fontSize: 29, color: "white" }}
            />
          </div>
        </div>
        <div className={styles.image}>
          <img src="/image_618.png" className={styles.image}></img>
        </div>
        <div className={styles.box}>
          <div className={styles.link}>
          <a href="/CompanyPage/Announcement">Announcement List</a>
          </div>
          <div className={styles.content}>
            <div className="d-flex justify-content-between align-items-center">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mt-4 ms-4 mb-3"
                data-bs-toggle="modal"
                data-bs-target="#modalCreate"
              >
                ADD NEW
              </button>
              <div className={styles.dropdown}>
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
              </div>
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

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}
