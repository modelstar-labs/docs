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

This will create a project folder named _my_project_ at the location you are running this command.

:::tip
`modelstar init <project_name>` is the base command, where <project_name> can be replaced with the name of your choice. 

`modelstar init .` can be used to initialize the project inside the current folder location. Running this command will create all the necessary files within the current folder location and name the project using the folder's name. 
:::


<!-- TODO: Need an end-to-end example to push a simple UDF. -->