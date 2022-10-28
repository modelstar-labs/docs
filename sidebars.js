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
            label: "Install Modelstar",
        },
        {
            type: "category",
            label: "Tutorials",
            link: {
                type: "generated-index",
            },
            collapsed: false,
            items: ["tutorials/sales-forecasting-inside-snowflake"],
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
            label: "API",
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
                    items: ["api/cli/use"],
                },
                {
                    type: "category",
                    label: "modelstar",
                    link: {
                        type: "doc",
                        id: "api/modelstar-module/index",
                    },
                    collapsed: true,
                    items: [
                        "api/modelstar-module/univariant-time-series-forecast",
                        /* "api/modelstar-module/write_file_path", */
                    ],
                },
            ],
        },
    ],
};

module.exports = sidebars;
