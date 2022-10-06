import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/CompanyRelational/CompanyRelational.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

const CompanyRelational = () => {
	return (
		<div className={styles.body}>
			<main className={styles.main} id="main">
				<nav className={styles.navbar}>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<Image
								className={styles.imageLogo}
								src="/EasyHandler_Hitam.png"
								alt="logo"
								width={42}
								height={42}
							/>
						</li>
						<li className={styles.navItem}>
							<FontAwesomeIcon className={`${styles.navIcon}`} icon={faEnvelope} />
						</li>
						<li className={styles.navItem}>
							<FontAwesomeIcon className={`${styles.navIcon}`} icon={faUser} />
						</li>
					</ul>
				</nav>

				<main className={styles.mainContent}>
					{/* <div className=> */}
					<section className="container text-center">
						<h1 className="d-inline-block mt-3 mb-4">Company Relational</h1>
						<h2 className="text-uppercase">Zegen Gan!!</h2>

						{/* <div className={styles.container}>
              <Image src="/asset-img.png" alt="Avatar" width={500} height={300} className={styles.image} />
              <div className={styles.overlay}>
                <div className={styles.text}>Hello World</div>
              </div>
            </div> */}

						<div className={`${styles["bg-content"]} row my-2`}>
							<div className={`${styles["relational-img"]}`}>
								<div className={`row my-2`}>
									<Link
										className={`${styles["link-img"]}`}
										href="/Assets/EmployeeAssets"
									>
										<div className={`${styles["container"]} col`}>
											<a className={`${styles["text-img"]}`}>Assets</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/asset-img.png"
												width={500}
												height={300}
											/>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/Reprimand/ReprimandList">
										<div className={`${styles["container"]} col`}>
											<a className={`${styles["text-img"]}`}>Reprimand</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/reprimand-img.png"
												width={500}
												height={300}
											/>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Task/AllTask">
										<div className={`${styles["container"]} col`}>
											<a className={`${styles["text-img"]}`}>Task</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/task-img.png"
												width={500}
												height={300}
											/>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/Announcement">
										<div className={`${styles["container"]} col`}>
											<a className={`${styles["text-img"]}`}>Announcement</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/announce-img.png"
												width={500}
												height={300}
											/>
											<div className={styles.overlay}></div>
										</div>
									</Link>
								</div>
								<div className={`row my-2`}>
									<Link href="/CompanyPage/UserActivityLog">
										<div className={`${styles["container"]} col`}>
											<a className={`${styles["text-img"]}`}>User Activity Log</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/user-activity-log-img.png"
												width={500}
												height={300}
											/>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Notification">
										<div className={`${styles["container"]} col`}>
											<a className={`${styles["text-img"]}`}>Notification</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/notification-img.png"
												width={500}
												height={300}
											/>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Onboarding/OnProgress">
										<div className={`${styles["container"]} col`}>
											<a className={`${styles["text-img"]}`}>Onboarding</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/onboarding-img.png"
												width={500}
												height={300}
											/>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Files/CompanyFiles">
										<div className={`${styles["container"]} col`}>
											<a className={`${styles["text-img"]}`}>Files</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/files-img.png"
												width={500}
												height={300}
											/>
											<div className={styles.overlay}></div>
										</div>
									</Link>
								</div>
								<div className={`row my-2`}>
									<Link href="/CompanyPage/Polling/Active">
										<div className={`col-3`}>
											<a className={`${styles["text-img"]}`}>Polling</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/polling-img.png"
												width={500}
												height={300}
											/>
										</div>
									</Link>
									<Link href="/CompanyPage/DocumentTemplate">
										<div className={`col-3`}>
											<a className={`${styles["text-img"]}`}>Document Template</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/document-template-img.png"
												width={500}
												height={300}
											/>
										</div>
									</Link>
									<Link href="/CompanyPage/ReportBuilder">
										<div className={`col-3`}>
											<a className={`${styles["text-img"]}`}>Report Builder</a>
											<Image
												className={`${styles["row-img"]} img-fluid`}
												src="/report-builder-img.png"
												width={500}
												height={300}
											/>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</section>
					{/* </div> */}
				</main>
			</main>
		</div>
	);
};

export default CompanyRelational;
