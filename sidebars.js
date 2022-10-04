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
            type: "doc",
            id: "tutorial/index",
            label: "Tutorial",
        },
        {
            type: "category",
            label: "Building a project",
            link: {
                type: "generated-index",
            },
            collapsed: true,
            items: ["project-build/create-a-project"],
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
