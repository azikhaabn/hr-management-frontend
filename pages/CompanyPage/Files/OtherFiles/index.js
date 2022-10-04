import React, { Component, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Files/Cfiles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faAngleLeft, faAngleRight, faMagnifyingGlass, faTrashCan, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function OtherFiles() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Image className={styles.imageLogo} src="/EasyHandler_Hitam.png" alt="logo" width={42} height={42} />
            </li>
            <li className={styles.navItem}>
              <FontAwesomeIcon className={`${styles.navIcon}`} icon={faEnvelope} />
            </li>
            <li className={styles.navItem}>
              <FontAwesomeIcon className={`${styles.navIcon}`} icon={faUser} />
            </li>
          </ul>
        </nav>

        <img src="/files.png" className={styles.image}></img>

        <main className={styles.mainContent}>
          <div className={`${styles["bg-content"]} mt-5`}>
            <div className={`ms-1`}>
              <div className={`${styles.container}`}>
                <div className={`${styles["main-toggle"]}`}>
                  <section class="section-link-assets">
                    <Link href="./CompanyFiles">
                      <div className={currentRoute === "/CompanyPage/Files/CompanyFiles" ? `${styles["btn-head"]} ${styles["btn-head-active"]}` : `${styles["btn-head"]}`}>
                        <a>Company Files</a>
                      </div>
                    </Link>
                    <Link href="./EmployeeFiles">
                      <div className={currentRoute === "/CompanyPage/Files/EmployeeFiles" ? `${styles["btn-head"]} ${styles["btn-head-active"]}` : `${styles["btn-head"]}`}>
                        <a>Employee Files</a>
                      </div>
                    </Link>
                    <Link href="./OtherFiles">
                      <div className={currentRoute === "/CompanyPage/Files/OtherFiles" ? `${styles["btn-head"]} ${styles["btn-head-active"]}` : `${styles["btn-head"]}`}>
                        <a>Other Files</a>
                      </div>
                    </Link>
                  </section>
                </div>
              </div>

              <div className={`${styles["content"]} mt-5 ms-3`}>
                <div className={`mb-3`}>
                  <h3 className={`mt-5`}>Your Company has 2 Files</h3>
                  <p className={`text-secondary`}><i>This Company Files</i></p>
                </div>

                <h5 className={`${styles["text-h5"]}`}>Drop files here, paste or <span className={`text-primary`}>browse</span></h5>

                <section className="export-table-filter mb-3">
                  <div class="col-12 pt-4">
                    <div class="mx-3">
                      <div className={`${styles["task-content"]} d-flex`}>
                        <div className={`${styles["first-item"]} mt-4`}>
                          <button type="button" className={`${styles["btn-add"]} btn btn-outline-secondary`}>
                            <FontAwesomeIcon icon={faTrashCan} /> &nbsp; Delete
                          </button>
                        </div>
                        <div className={`${styles["select-option"]} col-1 mb-2 me-2`}>
                          <label for="select" className={`${styles["form-label"]} form-label`}>
                            Showing
                          </label>
                          <select className={`${styles["input-group"]} form-select`} aria-label="Default select example">
                            <option selected>10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                        </div>
                        <div className={`col-2`}>
                          <label for="search" className={`${styles["formLabel"]} form-label`}>
                            Search
                          </label>
                          <div className={`input-group mb-3`}>
                            <span className={`${styles["input-group"]} input-group-text`}>
                              <FontAwesomeIcon
                                className={`${styles["search-icon"]}`}
                                icon={faMagnifyingGlass}
                              />
                            </span>
                            <input
                              type="text"
                              className={`${styles["input-group"]} form-control`}
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="section-table">
                  <div className={`${styles.contentTable} container-fluid`}>
                    <div className={`${styles["scroll-table"]} row align-items-start mx-2`}>
                      <table class="table">
                        <thead className={`${styles["table-thead"]}`}>
                          <tr>
                            <th scope="col">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              </div>
                            </th>
                            <th scope="col">
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                                <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                              </span>
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                              <span className={`ms-3`}>File Name</span>
                            </th>
                            <th scope="col">
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                                <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                              </span>
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                              <span className={`ms-3`}>Type File</span>
                            </th>
                            <th scope="col">
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                                <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                              </span>
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                              <span className={`ms-3`}>Uploader</span>
                            </th>
                            <th scope="col">
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                                <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                              </span>
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                              <span className={`ms-3`}>Date Created</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className={`${styles["table-tbody"]}`}>
                          <tr>
                            <th scope="row">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              </div>
                            </th>
                            <td>Ketentuan Reimbursment</td>
                            <td>Company</td>
                            <td>Viona Pasha</td>
                            <td>Thu Nov 01, 2018</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              </div>
                            </th>
                            <td>Form Pengajuan Cash Advance dummy.docs</td>
                            <td>Company</td>
                            <td>Viona Pasha</td>
                            <td>Thu Sep 29, 2020</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section class="section-paginate mt-3">
                  <div className={`container-fluid`}>
                    <div className={`${styles.rowPaginate}`}>
                      <p className={styles.textShow}>Showing 1 to 2 of 2 entries</p>
                      <div>
                        <Link href="#">
                          <FontAwesomeIcon icon={faAngleLeft} className={styles.arrowIcon} />
                        </Link>
                        &nbsp; &nbsp; <span className={styles.numberPage}></span> &nbsp; &nbsp;
                        <Link href="#">
                          <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
                        </Link>
                      </div>
                      <ul class="pagination">
                        <li className={`${styles.prevPage} page-item disabled`}>
                          <a className={`${styles.pageLinkPrev} page-link`}>Previous</a>
                        </li>
                        <li className={`${styles.nextPage} page-item`}>
                          <a className={`${styles.pageLinkNext} page-link`} href="#">
                            Go
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div class="modal fade" id="deleteFiles" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div className={`${styles["modal-delete"]} modal-content rounded-0`}>
                <div class="modal-body mt-3 ms-3">
                  <p>Are you sure want to delete this file?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    YES
                  </button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    NO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
