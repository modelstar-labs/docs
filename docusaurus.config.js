// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
    projectName: "docs", // Usually your repo name.

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
                copyright: `Copyright © ${new Date().getFullYear()} ModelStar, Adithya Krishnan, Helin Cao.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
