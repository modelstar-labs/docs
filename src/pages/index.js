import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import req_1 from "./assets/req_1.png";
import req_2 from "./assets/req_2.png";
import req_3 from "./assets/req_3.png";
import uc_1 from "./assets/uc_1.png";
import uc_2 from "./assets/uc_2.png";
import integ_dbt from "./assets/integ_dbt.png";
import integ_af from "./assets/integ_af.png";
import integ_gh from "./assets/integ_gh.png";
import integ_gl from "./assets/integ_gl.png";
import integ_sf from "./assets/integ_sf.png";
import integ_db from "./assets/integ_db.png";
import integ_rs from "./assets/integ_rs.png";

function HomepageHero() {
    return (
        <header className={styles.homepageHero}>
            <div className="container" style={{ width: "50%" }}>
                <h1>
                    The Fastest Way For Data Analysts To Ship{" "}
                    <span
                        style={{
                            fontStyle: "italic",
                            borderBottom: "3px solid #8D4FDB",
                        }}
                    >
                        ML-in-SQL
                    </span>
                </h1>
                <h3 style={{ fontWeight: "300" }}>
                    1 line of SQL to ship a{" "}
                    <span className="italic">Classification Model</span>
                </h3>
            </div>
            <div style={{ width: "50%" }}>
                <div
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        textAlign: "center",
                        height: "150px",
                        width: "400px",
                        backgroundColor: "#efefef",
                    }}
                >
                    -
                </div>
            </div>
        </header>
    );
}

function HomepageHeroBanner() {
    return (
        <div
            style={{
                backgroundColor: "#3A24BD",
                textAlign: "center",
                color: "white",
                position: "relative",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
            }}
        >
            <p
                style={{
                    display: "contents",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                }}
            >
                Warning: continue only if you meet the following requirements
            </p>
        </div>
    );
}

function HomepageSectionRequirements() {
    return (
        <div className={clsx("", styles.homepageSecReq)}>
            <div
                className="container"
                style={{
                    textAlign: "center",
                    marginBottom: "3rem",
                }}
            >
                <p
                    style={{
                        fontSize: "1.7rem",
                        fontWeight: 300,
                    }}
                >
                    Minimum Requirements to Start ML-in-SQL
                </p>
            </div>
            <div
                className="container row"
                style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <div className="col col--4">
                    <div className={styles.homepageSecReqCol}>
                        <img
                            src={req_1}
                            className={styles.homepageSecReqColImg}
                        />
                        <p className={styles.homepageSecReqColP}>
                            Data in Snowflake
                        </p>
                    </div>
                </div>
                <div className="col col--4">
                    <div className={styles.homepageSecReqCol}>
                        <img
                            src={req_2}
                            className={styles.homepageSecReqColImg}
                        />
                        <p className={styles.homepageSecReqColP}>
                            Comfortable with SQL
                        </p>
                    </div>
                </div>
                <div className="col col--4">
                    <div className={styles.homepageSecReqCol}>
                        <img
                            src={req_3}
                            className={styles.homepageSecReqColImg}
                        />
                        <p className={styles.homepageSecReqColP}>
                            Have a business goal
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="container"
                style={{
                    textAlign: "center",
                    marginTop: "3rem",
                    marginBottom: "3rem",
                }}
            >
                <p
                    style={{
                        fontSize: "0.8rem",
                        fontWeight: 300,
                        fontStyle: "italic",
                    }}
                >
                    Yes. Python, Pandas, Tensorflow, Docker, Jupyter Notebook,
                    ML infra and Ops support are not required.
                </p>
            </div>
            <div
                className="container"
                style={{
                    textAlign: "center",
                    marginTop: "3rem",
                    marginBottom: "3rem",
                }}
            >
                <button
                    style={{
                        backgroundColor: "#3A24BD",
                        padding: "0.5rem 1rem",
                        color: "white",
                        outline: "none",
                        border: "2px solid #3A24BD",
                        borderRadius: "5px",
                        fontSize: "1rem",
                        fontWeight: 500,
                    }}
                >
                    Book a Demo
                </button>
            </div>
        </div>
    );
}

function HomepageSectionUsecase() {
    return (
        <div className={clsx("container", styles.homepageSecUC)}>
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "3rem",
                }}
            >
                <p
                    style={{
                        fontSize: "1.7rem",
                        fontWeight: 300,
                    }}
                >
                    Use Cases
                </p>
            </div>
            <div class="row">
                <div class="col col--6">
                    <img src={uc_1} />
                </div>
                <div class="col col--6">
                    <img src={uc_2} />
                </div>
            </div>

            <div
                style={{
                    marginTop: "3rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <input
                        type="text"
                        name="email"
                        style={{
                            padding: "0.5rem 1rem",
                            width: "250px",
                            marginRight: "25px",
                        }}
                    />
                    <button
                        style={{
                            backgroundColor: "white",
                            padding: "0.5rem 1rem",
                            color: "#3A24BD",
                            outline: "none",
                            border: "2px solid #3A24BD",
                            borderRadius: "5px",
                            fontSize: "1rem",
                            fontWeight: 500,
                        }}
                    >
                        Subscribe
                    </button>
                </div>
                <p
                    style={{
                        fontSize: "0.8rem",
                        fontWeight: 300,
                        marginTop: "0.5rem",
                    }}
                >
                    Sign up to receive updates on new features and algorithms.
                </p>
            </div>
        </div>
    );
}

function HomepageSectionIntegrations() {
    return (
        <div className={clsx("container", styles.homepageSecInteg)}>
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "3rem",
                }}
            >
                <p
                    style={{
                        fontSize: "1.7rem",
                        fontWeight: 300,
                    }}
                >
                    Modelstar Works Even Better with Your Modern Data Stack
                </p>
            </div>
            <div>
                <img src={integ_sf} className={styles.homepageSecIntegLogo} />
                <img src={integ_db} className={styles.homepageSecIntegLogo} />
                <img src={integ_rs} className={styles.homepageSecIntegLogo} />
            </div>
            <div>
                <img src={integ_dbt} className={styles.homepageSecIntegLogo} />
                <img src={integ_af} className={styles.homepageSecIntegLogo} />
                <img src={integ_gh} className={styles.homepageSecIntegLogo} />
                <img src={integ_gl} className={styles.homepageSecIntegLogo} />
            </div>
        </div>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Bringing Python's super-power to SQL"
        >
            <main className={styles.homepageMain}>
                <HomepageHero />
                <HomepageHeroBanner />
                <HomepageSectionRequirements />
                <HomepageSectionUsecase />
                <HomepageSectionIntegrations />
            </main>
        </Layout>
    );
}
