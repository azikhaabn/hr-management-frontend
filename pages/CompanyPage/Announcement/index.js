import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Announcement/announcementList.module.css";
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
