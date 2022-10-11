import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/Company/CompanyPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
	faPenToSquare,
	faMagnifyingGlass,
	faAngleRight,
	faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import DeleteModalCompany from "./deleteModalCompany";
import EditModalCompany from "./editModalCompany";
import AddModalCompany from "./addModalCompany";
import Navbar from "../../../Component/navbar";
import { useRouter } from "next/router";

export default function CompanyAssets() {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<div className={styles.body}>
			<main className={styles.main} id="main">
				<Navbar />

				<img src="/image497.png" className={styles.image}></img>

				<main className={styles.mainContent}>
					<div className={`${styles.container} bg-light m-0`}>
						<div className={`${styles.mainToggle}`}>
							<section class="section-link-assets d-flex text-center">
								<Link href="./EmployeeAssets">
									<div
										className={
											currentRoute === "/CompanyPage/Assets/EmployeeAssets"
												? `${styles.toggleAssets} ${styles.active} col-6 py-4`
												: `${styles.toggleAssets} col-6 py-4`
										}
									>
										<a>Employee Assets</a>
									</div>
								</Link>
								
								<Link href="./CompanyAssets">
									<div
										className={
											currentRoute === "/CompanyPage/Assets/CompanyAssets"
												? `${styles.toggleAssets} ${styles.active} col-6 py-4`
												: `${styles.toggleAssets} col-6 py-4`
										}
									>
										<a>Company Assets</a>
									</div>
								</Link>
							</section>
						</div>

						<section class="section-button-assets">
							<div class="container-fluid mt-4">
								<div class="row align-items-start mt-5 ms-0">
									<div class="col-lg-4">
										<a
											className={`${styles["btnAssets"]} btn`}
											type="button"
											data-bs-toggle="modal"
											data-bs-target="#addModal"
										>
											Add New
										</a>
									</div>
								</div>
							</div>
						</section>

						<section class="section-sellect-search mb-4">
							<div class="container-fluid">
								<div class="row mt-3 justify-content-end me-1">
									<div class="col-1">
										<label for="select" className={`${styles.formLabel} form-label`}>
											Showing
										</label>
										<select className={`${styles.formSelect} form-select`} id="select">
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
							</div>
						</section>

						<section class="section-table">
							<div className={`${styles.contentTable} container-fluid`}>
								<div class="row align-items-start mx-2">
									<table class="table table-hover border-5">
										<thead>
											<tr>
												<td class="py-3" scope="col"></td>
												<td class="py-3" scope="col">
													Asset Name
												</td>
												<td class="py-3" scope="col">
													Quantity
												</td>
												<td class="py-3" scope="col">
													Update Date
												</td>
												<td class="py-3" scope="col">
													Files
												</td>
												<td class="py-3" scope="col">
													Action
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="py-4" scope="row">
													1
												</td>
												<td class="py-4">sffs</td>
												<td class="py-4">0</td>
												<td class="py-4">2022-08-02 16:45</td>
												<td class="py-4"></td>
												<td class="py-4">
													<a
														class="btn"
														type="button"
														data-bs-toggle="modal"
														data-bs-target="#editModal"
													>
														<FontAwesomeIcon icon={faPenToSquare} color="red" width={15} />
													</a>
													<a
														class="btn"
														type="button"
														data-bs-toggle="modal"
														data-bs-target="#deleteModal"
													>
														<FontAwesomeIcon icon={faXmark} color="red" width={15} />
													</a>
												</td>
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
										&nbsp; &nbsp; <span className={styles.numberPage}>1</span> &nbsp;
										&nbsp;
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

					{/* Modal Create */}
					<div
						class="modal fade"
						id="addModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered">
							<div>
								<AddModalCompany />
							</div>
						</div>
					</div>

					{/* Edit Create */}
					<div
						class="modal fade"
						id="editModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered">
							<div>
								<EditModalCompany />
							</div>
						</div>
					</div>

					{/* Modal Delete */}
					<div
						class="modal fade"
						id="deleteModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog">
							<div>
								<DeleteModalCompany />
							</div>
						</div>
					</div>
				</main>
			</main>
		</div>
	);
}
