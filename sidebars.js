// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
    docs: [
        {
            type: "doc",
            id: "introduction/index",
            label: "What is Modelstar?",
        },
        {
            type: "doc",
            id: "quickstart/index",
            label: "Quickstart",
        },
        {
            type: "category",
            label: "Tutorials",
            link: {
                type: "generated-index",
            },
            collapsed: false,
            items: ["tutorials/sales-forecasting-inside-snowflake/index"],
        },
        // Currently in Draft, Will be hidden in production .
        /*
        {
            type: "doc",
            id: "bilingualism/index",
            label: "Python + SQL",
        },
        */
        {
            type: "category",
            label: "Modelstar API",
            link: {
                type: "doc",
                id: "api/index",
            },
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "CLI",
                    link: {
                        type: "doc",
                        id: "api/cli/index",
                    },
                    collapsed: true,
                    items: ["api/cli/use", "api/cli/register", "api/cli/create", "api/cli/check"],
                },
                {
                    type: "category",
                    label: "ML SQL functions",
                    link: {
                        type: "doc",
                        id: "api/ml-sql-functions/index",
                    },
                    collapsed: true,
                    items: [
                        "api/ml-sql-functions/univariant-time-series-forecast",
                        /* "api/modelstar-module/write_file_path", */
                    ],
                },
            ],
        },
    ],
};

module.exports = sidebars;
