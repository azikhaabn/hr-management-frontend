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
                  <Link className={`${styles["link-img"]}`} href="/Assets/EmployeeAssets">
                    <div className={`${styles["container"]} col ms-2`}>
                      <a className={`${styles["text-img"]}`}>Assets</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/asset-img.png"} layout="fill" />
                      </div>
                      {/* <Image
												className={`${styles["row-img"]} img-fluid`}
												src="/asset-img.png"
												width={500}
												height={300}
												// layout="fill"
											/> */}
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                  <Link href="/Reprimand/ReprimandList">
                    <div className={`${styles["container"]} col ms-2`}>
                      <a className={`${styles["text-img"]}`}>Reprimand</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/reprimand-img.png"} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                  <Link href="/CompanyPage/Task/AllTask">
                    <div className={`${styles["container"]} col ms-2`}>
                      <a className={`${styles["text-img"]}`}>Task</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/task-img.png"} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                  <Link href="/Announcement">
                    <div className={`${styles["container"]} col ms-2 me-2`}>
                      <a className={`${styles["text-img"]}`}>Announcement</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/announce-img.png"} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                </div>
                <div className={`row my-2`}>
                  <Link href="/CompanyPage/UserActivityLog">
                    <div className={`${styles["container"]} col ms-2`}>
                      <a className={`${styles["text-img"]}`}>User Activity Log</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/user-activity-log-img.png"} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                  <Link href="/CompanyPage/Notification">
                    <div className={`${styles["container"]} col ms-2`}>
                      <a className={`${styles["text-img"]}`}>Notification</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/notification-img.png"} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                  <Link href="/CompanyPage/Onboarding/OnProgress">
                    <div className={`${styles["container"]} col ms-2`}>
                      <a className={`${styles["text-img"]}`}>Onboarding</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/onboarding-img.png"} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                  <Link href="/CompanyPage/Files/CompanyFiles">
                    <div className={`${styles["container"]} col ms-2 me-2`}>
                      <a className={`${styles["text-img"]}`}>Files</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/files-img.png"} width={500} height={300} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                </div>
                <div className={`row my-2`}>
                  <Link href="/CompanyPage/Polling/Active">
                    <div className={`${styles["container"]} col-3`}>
                      <a className={`${styles["text-img"]}`}>Polling</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/polling-img.png"} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                  <Link href="/CompanyPage/DocumentTemplate">
                    <div className={`${styles["container"]} col-3`}>
                      <a className={`${styles["text-img"]}`}>Document Template</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/document-template-img.png"} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  </Link>
                  <Link href="/CompanyPage/ReportBuilder">
                    <div className={`${styles["container"]} col-3 me-2`}>
                      <a className={`${styles["text-img"]}`}>Report Builder</a>
                      <div style={{ width: "100px", height: "150px" }}>
                        <Image className={`${styles["row-img"]} img-fluid`} src={"/report-builder-img.png"} layout="fill" />
                      </div>
                      <div className={styles.overlay}></div>
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
