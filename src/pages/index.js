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
                <h3>Bringing Python's super-power to SQL</h3>
                <p>through bilingual data programming DevOps.</p>
                <div className={styles.heroCTA}>
                    <Link
                        className="button button--secondary button--md"
                        to="/docs/quickstart"
                    >
                        Get Started&nbsp;&nbsp;→
                    </Link>
                </div>
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
                <div className={styles.homepageVideoContainer}>
                    <video
                        className={styles.homepageVideo}
                        src={"https://cdn.modelstar.io/demo.mp4"}
                        controls="controls"
                        autoPlay={true}
                    />
                </div>
            </main>
        </Layout>
    );
}
