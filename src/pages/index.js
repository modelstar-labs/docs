import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const LogoSvg = require("@site/static/img/logo.svg").default;
    const youtubeID = "DdNXVcBEuuY";
    return (
        <header className="container">
            <div className={styles.homepageHero}>
                <LogoSvg className={styles.heroLogo} role="img" />
                <h1>{siteConfig.title}</h1>
                <h3>Bringing ML's Super-power to Snowflake SQL</h3>
                <p>1 Line SQL for End-to-end Forecasting and Churn Prediction</p>
                <div className={styles.heroCTA}>
                    <Link
                        className="button button--secondary button--md"
                        to="/docs/quickstart"
                    >
                        Get Started&nbsp;&nbsp;→
                    </Link>
                </div>

                {/* <video
                        src={"https://www.youtube.com/watch?v=DdNXVcBEuuY"}
                        controls="controls"
                        autoplay="true"
                    /> */}
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Bringing Python's super-power to SQL"
        >
            <main>
                <HomepageHeader />
                {/* <div className={styles.homepageVideoContainer}>
                    <iframe
                        className={styles.homepageVideo}
                        src="https://www.youtube.com/embed/${youtubeID}?controls=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div> */}
            </main>
        </Layout>
    );
}
