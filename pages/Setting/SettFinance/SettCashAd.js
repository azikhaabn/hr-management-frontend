import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Setting/SettFinance/SettCashAd.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
import Navbar from "../../Component/navbar";

const Advance = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <main className={styles.mainContent}>
          <div className={`container-fluid m-0`}>
            <div className={`row`}>
              <div className={`${styles["sidebar"]} col-2 pt-4`}>
                <h2 className={`${styles.h2} ps-2 mb-3`}>Settings</h2>
                <div className={`d-flex flex-column`}>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Account Preference
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Company
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Time Management
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Payroll
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./SettCashAd">
                    <a
                      className={
                        currentRoute === "/Setting/SettFinance/SettCashAd"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-1`
                          : `${styles["btn-cash"]} py-2 px-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Finance
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>

                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; ESS
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Users
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Integration
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className={`col-10 pt-3 ps-4`}>
                <div className={styles["task-header"]}>
                  <div className={styles.link}>
                    <a href="">Settings</a> /<a href="">Finance</a>
                  </div>
                  <h2 className={`${styles["all-cash-text"]} mb-4`}>
                    Cash Advance
                  </h2>
                </div>
                <div className={`border-bottom border-1`}>
                  <span
                    className={`${styles["span-underline"]} ${styles["links"]} me-3`}
                  >
                    Policies
                  </span>
                  <span className={`${styles["categories"]} me-3`}>
                    Categories
                  </span>
                  <span className={`${styles["categories"]} me-3`}>
                    Employee Enrollment
                  </span>
                </div>
                <table class="table table-bordered bg-light mt-5">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Effective date</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <div
                  className={`${styles["content"]} d-flex justify-content-center text-center`}
                >
                  <div>
                    <img src="/image_580.png" />
                    <h4>There is no data to display</h4>
                    <p>Your cash adavance policy will display here</p>
                    <a  href="/Setting/SettFinance/CreatePolicy" className={`${styles["btn-create"]}  btn btn-primary`}>
                      Create Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};
export default Advance;
