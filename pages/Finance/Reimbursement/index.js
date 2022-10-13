import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/Finance/Reimbursement/Reimbursement.module.css";
import Navbar from "../../Component/navbar";
import Pagination from "../../Component/pagination";
import ShowingSearch from "../../Component/showingSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretUp, faCaretDown, faCircleInfo, faXmark, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

export default function Reimbursement() {
  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <div className={`${styles.container} mx-3 mt-2`}>
          <div className={`${styles["user-icon"]} d-flex justify-content-start`}>
            <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: 80 }} />
            <div className={`mt-3 ms-3`}>
              <h4>Kendall Jenner</h4>
              <p>CEO</p>
            </div>
          </div>

          <div className={`${styles["content"]} mt-2`}>
            <div>
              <img src="/image_618.png" className={styles.image}></img>
            </div>
            <div className={`${styles["box"]}`}>
              <div className={`${styles["first-box-content"]} d-flex justify-content-between`}>
                <div>
                  <h5>ASSIGN/UPDATE/REQUEST REIMBURSEMENT</h5>
                  <Link href="Reimbursement/Assign">
                    <a type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                      ASSIGN OR UPDATE
                    </a>
                  </Link>
                  <Link href="Reimbursement/Request">
                    <a type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                      REQUEST
                    </a>
                  </Link>
                </div>
                <div>
                  <h5>UPDATE REIMBURSEMENT BALANCE VIA EXCEL</h5>
                  <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                    EXPORT
                  </button>
                  <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                    IMPORT
                  </button>
                </div>
              </div>

              <div className={`${styles["second-box-content"]} d-flex justify-content-between`}>
                <div>
                  <h5>CREATE OR VIEW SETTING REIMBURSEMENT</h5>
                  <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                    NEW
                  </button>
                  <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                    VIEW SETTING
                  </button>
                </div>
                <div className={`${styles["btn"]}`}>
                  <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary `}>
                    REIMBURSEMENT SIMULATION
                  </button>
                </div>
              </div>

              <ShowingSearch />

              <section class="section-table">
                <table class="table">
                  <thead className={`${styles["table-head"]}`}>
                    <tr>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>No</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Reimbursement Name</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Reimbursement Limit</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Expired In</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Effective Date</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>
                          <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#039BE5" }} />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`${styles["table-body"]}`}>
                    <tr>
                      <th>1</th>
                      <td>Medical Claim</td>
                      <td>1000000</td>
                      <td>31 Desember</td>
                      <td>2000-01-01</td>
                      <td className={`${styles["modal-list"]}`}>
                        <ul>
                          <li>
                            <a>
                              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a>
                              <FontAwesomeIcon icon={faXmark} style={{ color: "#8C8C8C", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a>
                              <FontAwesomeIcon icon={faBars} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a>
                              <FontAwesomeIcon icon={faUser} style={{ color: "#A21517" }} />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Transportasi</td>
                      <td>UNLIMITED</td>
                      <td>UNLIMITED</td>
                      <td>2000-01-01</td>
                      <td className={`${styles["modal-list"]}`}>
                        <ul>
                          <li>
                            <a>
                              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a>
                              <FontAwesomeIcon icon={faXmark} style={{ color: "#8C8C8C", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a>
                              <FontAwesomeIcon icon={faBars} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a>
                              <FontAwesomeIcon icon={faUser} style={{ color: "#A21517" }} />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
