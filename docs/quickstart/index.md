# Quickstart

In just a few minutes you can deploy a Python function to your Data Warehouses/Lakehouses and run them as SQL functions.

-   You don't have to write any special syntax specific to your data platform.
-   You don't have to setup any environment or compute server instance. All the compute and Python execution is done within the data platform.
-   You don't have to move data away from your data platform.

## Installation

To get started with Moelstar, install the Modelstar Python package into your local Python environment.

```bash
pip install modelstar
```

:::tip

Install `modelstar` within a Python virtual environment.

Hint: `pyenv`, `virtualenv`, `poetry`

:::

:::caution

Modelstar currently supports only Python 3.8.

:::

## Create a project

Modelstar provides a project template out-of-the-box with sample UDFs that you can deploy to your data platform.

Initialize a project from template using:

```shell
modelstar init my_project
```

This will create a project folder named **_my_project_** at the location you are running this command.

:::tip

`modelstar init <project_name>` is the base command, where <project_name> can be replaced with the name of your choice.

`modelstar init .` can be used to initialize the project inside the current folder location. Running this command will create all the necessary files within the current folder location and name the project using the folder's name.

:::

**_my_project_** is created using a Modelstar project template, which provides you with a few sample Python UDFs and Stored Procedures to push to your data platform. This helps you get started with modelstar quickly. Your project folder should look like this. Check out the Readme.md file for quick to access commands on subsequent project creation and execution.

```
.
└── my_project
    ├── README.md
    ├── modelstar.toml
    └── samples
        ├── data_functions
        │   ├── country-capitals.csv
        │   └── find_capital.py
        └── machine_learning
            ├── ad_sales.csv
            ├── inference.py
            └── training.py
```

## Connect to your data-platform

:::note

Modelstar currently supports only Snowflake. Support for other data-platforms are on the roadmap.

:::

The `modelstar.toml` file is used to set and configure the parameter of modelstar. This file will also be used to enter your credentials to communication with your data platform.

The following is an example to use a Snowflake account:

```toml title="./modelstar.toml"

[snowflake-test]

username = "<username>"
password = "<password>"
account = "<account>"
warehouse = "<warehouse_name>"
role = "<role_name>"
database = "<database>"
schema = "<schema>"
stage = "<stage>"

```

First, you name the account you will be working with. As an example, the name `snowflake-test` is used to describe this account. You will later use this account name when starting a modelstar session. 

<!-- TODO: Need an end-to-end example to push a simple UDF. -->
