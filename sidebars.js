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
            items: ["tutorials/create-a-udf-project"],
        },
        // Currently in Draft, Will be hidden in production .
        {
            type: "doc",
            id: "bilingualism/index",
            label: "Python + SQL",
        },
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
                    items: ["api/cli/use", "api/cli/register"],
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
                        "api/modelstar-module/read_file_path",
                        "api/modelstar-module/write_file_path",
                    ],
                },
            ],
        },
    ],
};

module.exports = sidebars;
