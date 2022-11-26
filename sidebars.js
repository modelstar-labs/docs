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
                title: "ML in SQL Tutorials",
                description:
                    "Let's learn how to use Modelstar to run Machine Learning with SQL inside Swnoflake!",
            },
            collapsed: false,
            items: [
                "tutorials/sales-forecasting-inside-snowflake/index",
                "tutorials/churn-prediction-inside-snowflake/index",
            ],
        },
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
                    items: [
                        "api/cli/use",
                        "api/cli/register",
                        "api/cli/create",
                        "api/cli/check",
                    ],
                },
                {
                    type: "category",
                    label: "ML functions for SQL",
                    link: {
                        type: "doc",
                        id: "api/ml-sql-functions/index",
                    },
                    collapsed: true,
                    items: [
                        "api/ml-sql-functions/univariate-time-series-forecast/index",
                        /* "api/modelstar-module/write_file_path", */
                    ],
                },
            ],
        },
    ],
};

module.exports = sidebars;
