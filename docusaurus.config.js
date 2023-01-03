// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const TwitterSvg =
    '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
const GitHubSvg =
    '<svg style="vertical-align: middle; margin-left: 5px; margin-bottom: 4px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Modelstar",
    tagline:
        "Bringing Python's super-power to SQL through bilingual data programming DevOps.",
    url: "https://docs.modelstar.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "modelstar-labs", // Usually your GitHub org/user name.
    projectName: "modelstar-io-website", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/modelstar-labs/docs/",
                    showLastUpdateTime: true,
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl: "https://github.com/modelstar-labs/docs/",
                // },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                gtag: {
                    trackingID: "G-S874F13DG2",
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [
                {
                    name: "keywords",
                    content:
                        "snowflake, sql, machine, learning, python, data, warehouse",
                },
                {
                    name: "description",
                    content:
                        "Modelstar - Run Machine Learning algorithms inside your data warehouse with 1 line of SQL.",
                },
                // {
                //     property: "og:title",
                //     content:
                //         "Modelstar - Run Machine Learning algorithms inside your data warehouse with 1 line of SQL.",
                // },
                // {
                //     name: "twitter:title",
                //     content:
                //         "Modelstar - Run Machine Learning algorithms inside your data warehouse with 1 line of SQL.",
                // },
                // {
                //     property: "og:description",
                //     content:
                //         "Modelstar - Run Machine Learning algorithms inside your data warehouse with 1 line of SQL.",
                // },
                // {
                //     name: "twitter:description",
                //     content:
                //         "Modelstar - Run Machine Learning algorithms inside your data warehouse with 1 line of SQL.",
                // },
                // {
                //     property: "og:type",
                //     content: "website",
                // },
                // {
                //     property: "og:url",
                //     content: "https://modelstar.io",
                // },
                // {
                //     property: "og:image",
                //     content: "https://cdn.modelstar.io",
                // },
                // {
                //     name: "twitter:image",
                //     content: "https://cdn.modelstar.io",
                // },
                // {
                //     name: "twitter:card",
                //     content: "summary_large_image",
                // },
            ],
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                },
            },
            navbar: {
                // title: "Model Star",
                logo: {
                    alt: "modelstar logo",
                    src: "img/logo_light.png",
                    srcDark: "img/logo_dark.png",
                    // width: 32,
                    // height: 32,
                },
                hideOnScroll: true,
                items: [
                    {
                        type: "doc",
                        docId: "introduction/index",
                        position: "left",
                        label: "Docs",
                    },
                    {
                        to: "/docs/quickstart",
                        label: "Quickstart",
                        position: "left",
                        // activeBaseRegex: `/community/`,
                    },
                    {
                        to: "blog",
                        label: "Blog",
                        position: "left",
                        // activeBaseRegex: `/community/`,
                    },
                    // {
                    //     to: "/docs/api",
                    //     label: "API",
                    //     position: "left",
                    //     // activeBaseRegex: `/community/`,
                    // },
                    {
                        href: "https://github.com/modelstar-labs/modelstar",
                        // label: "GitHub",
                        position: "right",
                        className: "header-github-link",
                        "aria-label": "GitHub repository",
                    },
                ],
            },
            announcementBar: {
                id: "star_us",
                content: `⭐️ If you like Modelstar, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/modelstar-labs/modelstar">GitHub ${GitHubSvg}</a>`,
                isCloseable: false,
            },
            footer: {
                // links: [
                //     {
                //         title: "Docs",
                //         items: [
                //             {
                //                 label: "Quickstart",
                //                 to: "/docs/introduction",
                //             },
                //         ],
                //     },
                //     {
                //         title: "Community",
                //         items: [
                //             {
                //                 label: "Twitter",
                //                 href: "https://twitter.com/docusaurus",
                //             },
                //         ],
                //     },
                //     {
                //         title: "More",
                //         items: [
                //             {
                //                 label: "Blog",
                //                 to: "/blog",
                //             },
                //             {
                //                 label: "GitHub",
                //                 href: "https://github.com/facebook/docusaurus",
                //             },
                //         ],
                //     },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} Modelstar, Adithya Krishnan, Helin Cao.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
