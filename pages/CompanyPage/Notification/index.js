import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Notification/Notification.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faMagnifyingGlass, faCaretUp, faCaretDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Notification() {
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

        <main className={`${styles["content"]}`}>
          <div className={`styles["bg-content"] mt-5`}>
            <button type="button" className={`${styles["btn-notif"]} btn btn-sm btn-outline-secondary mt-2`} data-bs-toggle="modal" data-bs-target="#skipNotif">
              SKIP ALL NOTIFICATION
            </button>

            <section className={`${styles["section-option"]} section-sellect-search mb-4`}>
              <div class="container-fluid">
                <div class="row mt-3">
                  <form className={`form-inline`} role="form">
                    <div class="container-fluid">
                      <div className={`${styles["form-group"]} row`}>
                        <div class="form-group col-2">
                          <div class="input-group mb-3">
                            <label for="taskName" className={`form-label mt-4`}>
                              Start Date
                            </label>
                            <div className={`input-group`}>
                              <input type="date" id="taskName" placeholder="New Task" className={`${styles["input-group-user"]} form-control`}></input>
                            </div>
                          </div>
                        </div>

                        <div class="form-group col-2">
                          <div class="input-group mb-3">
                            <label for="taskName" className={`form-label mt-4`}>
                              End Date
                            </label>
                            <div className={`input-group`}>
                              <input type="date" id="taskName" placeholder="New Task" className={`${styles["input-group-user"]} form-control`}></input>
                            </div>
                          </div>
                        </div>

                        <div class="form-group col-2">
                          <div class="input-group mb-3">
                            <label for="select" className={`${styles["form-label"]} form-label mt-4`}>
                              Status
                            </label>
                            <div className={`input-group`}>
                              <select className={`${styles["input-group-user"]} form-select`} id="select">
                                <option selected>-Status-</option>
                                <option value="1">Bank Account Invalid</option>
                                <option value="2">Employee Transfer</option>
                                <option value="3">Reminder</option>
                                <option value="4">Resign</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className={`form-group col-2`}>
                          <div class="input-group mb-3">
                            <label for="select" className={`${styles["form-label"]} form-label mt-4`}>
                              Type
                            </label>
                            <div className={`input-group`}>
                              <select className={`${styles["input-group-user"]} form-select`} id="select">
                                <option selected>-Type-</option>
                                <option value="1">Bank Account Invalid</option>
                                <option value="2">Employee Transfer</option>
                                <option value="3">Reminder</option>
                                <option value="4">Resign</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles["filter-button"]} form-group col`}>
                          <div class="input-group mt-5">
                            <button type="button" className={`${styles["btn-notif"]} p-2 btn btn-sm btn-outline-secondary`}>
                              APPLY
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div class="input-group mt-4">
                    <button type="button" className={`${styles["btn-notif"]} p-2 btn btn-sm btn-outline-secondary`}>
                      EXPORT
                    </button>
                  </div>

                  <section class="section-sellect-search mb-4">
                    <div class="container-fluid">
                      <div class="row mt-3 justify-content-end me-1">
                        <div class="col-1">
                          <label for="select" className={`${styles.formLabel} form-label`}>
                            Showing
                          </label>
                          <select className={`${styles["form-select"]} form-select`} id="select">
                            <option selected>10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="75">75</option>
                            <option value="100">100</option>
                          </select>
                        </div>
                        <div class="col-2">
                          <label for="search" className={`${styles.formLabel} form-label`}>
                            Search
                          </label>
                          <div className={`input-group mb-3`}>
                            <span className={`${styles["form-select"]} input-group-text`}>
                              <FontAwesomeIcon className={styles["search-icon"]} icon={faMagnifyingGlass} />
                            </span>
                            <input type="text" className={`${styles["form-select"]} form-control`}></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Type</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Description</span>
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
                          <span className={`ms-3`}>Payroll Name</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Payroll Date</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Created By</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Created Date</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Status</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className={`bg-light`}>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>No data available in table</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section class="section-paginate mt-3">
              <div className={`container-fluid`}>
                <div className={`${styles.rowPaginate}`}>
                  <p className={styles.textShow}>Showing 0 to 0 of 0 entries</p>
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

          <div class="modal fade" id="skipNotif" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div className={`${styles["modal-notif"]} modal-content rounded-0`}>
                <div class="modal-body mt-4">
                  <p>Are you sure to skip all notifications?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" className={`${styles["btn-notif"]} btn btn-outline-secondary`}>
                    YES
                  </button>
                  <button type="button" className={`${styles["btn-notif"]} btn btn-outline-secondary`} data-bs-dismiss="modal">
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
