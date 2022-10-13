import React from "react";
import styles from "/styles/CompanyPage/Announcement/organization.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { useTable, useRowSelect } from "react-table";
import {
  useRowSelectColumn
} from "@lineup-lite/hooks";

const Organization = ({ closeModal }) => {
  const data = React.useMemo(
    () => [
      {
        Organization: "Accounting",
      },
      {
        Organization: "BOD",
      },
      {
        Organization: "Finance",
      },
      {
        Organization: "Finance & Accounting",
      },
      {
        Organization: "GA",
      },
      {
        Organization: "HRD",
      },
      {
        Organization: "HRD & GA",
      },
      {
        Organization: "IT Division",
      },
      {
        Organization: "Marketing",
      },
      {
        Organization: "Sales",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Organization",
        accessor: "Organization",
      },
    ],
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useRowSelect,
      useRowSelectColumn
    );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div
            className={`${styles.modalContent} modal-header mt-4 ms-4 mb-3 me-3`}
          >
            <h3 class="modal-title">Organization</h3>
          </div>

          <div class="modal-body ms-3">
            <div class="row mt-3 justify-content-end me-3">
              <div class="col-3">
                <label
                  for="select"
                  className={`${styles.formLabel} form-label`}
                >
                  Showing
                </label>
                <select className={`${styles.formSelect} form-select`}> 
                    <option selected>10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                </select>
              </div>
              <div class="col-4">
                <label
                  for="search"
                  className={`${styles.formLabel} form-label`}
                >
                  Search
                </label>
                <div className={`input-group mb-5`}>
                  <span className={`${styles.spanIcon} input-group-text`}>
                    <FontAwesomeIcon
                      className={styles.searchIcon}
                      icon={faMagnifyingGlass}
                    />
                  </span>
                  <input
                    type="text"
                    className={`${styles.searchInput} form-control`}
                  ></input>
                </div>
              </div>
            </div>

            <section class="section-table">
              <div className={`${styles.contentTable} container-fluid`}>
                <div class="row align-items-start mx-2">
                  <table
                    {...getTableProps()}
                    className="table mb-3 shadow-sm rounded-0 overflow-hidden align-middle mb-0 bg-white"
                  >
                    <thead className="bg-light">
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                              {column.render("Header")}
                              {column.id === "selection" &&
                                column.render("Summary")}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td {...cell.getCellProps()}>
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
           {/* <section class="section-paginate mt-3">
              <div className={`container-fluid`}>
                <div className={`${styles.rowPaginate}`}>
                  <p className={styles.textShow}>
                    Showing 0 to {pageSize} of {pageSize} entries
                  </p>
                   <div>
                    <Link href="#">
                      <FontAwesomeIcon
                        onClick={() => previousPage()}
                        icon={faAngleLeft}
                        className={`${
                          !canPreviousPage
                            ? styles["arrow-icon-disabled"]
                            : styles["arrow-icon"]
                        } `}
                      />
                    </Link>
                    &nbsp; &nbsp;{" "}
                    <span className={styles.numberPage}>{pageIndex + 1}</span>{" "}
                    &nbsp; &nbsp;
                    <Link href="#">
                      <FontAwesomeIcon
                        onClick={() => nextPage()}
                        icon={faAngleRight}
                        className={`${
                          !canNextPage
                            ? styles["arrow-icon-disabled"]
                            : styles["arrow-icon"]
                        } `}
                      />
                    </Link>
                  </div> 
                </div>
              </div>
            </section>*/}
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnfilter} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              onClick={() => closeModal(false)}
            >
              Filter
            </button>
            <button
              type="button"
              className={`${styles.btnclear} btn btn-outline-secondary mt-2 me-4 btn-sm`}
              data-bs-dismiss="modal"
            >
              Clear
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Organization;