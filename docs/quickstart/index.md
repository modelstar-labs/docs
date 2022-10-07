# Quickstart

In just a few minutes you can deploy a Python function to your Data Warehouses/Lakehouses and run them as SQL functions.

-   You don't have to write any special syntax specific to your data platform.
-   You don't have to setup any environment or compute server instance. All the compute and Python execution is done within the data platform.
-   You don't have to move data away from your data platform.

## Installation

To get started with Moelstar, install the Modelstar Python package into your local Python environment.

```shell
$ pip install modelstar
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
$ modelstar init my_project
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

:::info

These credentials are never shared with Modelstar and only live on your local machine.

:::

:::danger

Don't forget to remove this file from your version control, since it ocntains sensitive information.

:::

First, you configure a named session, which will contain the details of your account you will be working with. As an example, here we are using a Snowflake account, and naming the session as `snowflake-test`, which contains the account details. You will later use this session name when starting a modelstar session.

<!-- TODO: Need an end-to-end example to push a simple UDF. -->

## Start your Modelstar session

The `modelstar` command line interface is available when you installed Modelstar in the first step. We can now start a Modelstar session from your terminal. Run the following:

```shell
$ modelstar use snowflake-test
```

:::note

Make sure you are running all the `modelstar` commands from the root of your project folder and have also activate the Python virtual environment that contains the `modelstar` package.

:::

This will give the following output, which shows you the available databases for your named-seesion, here it is `snowflake-test`.

```
	Loading configuration: [snowflake-test]


	Showing available databases for config: [snowflake-test]

+----------------------+-----------------------+-------------------------------------------------------+--------------+
|      created_on      |         name          |                        origin                         |    owner     |
+----------------------+-----------------------+-------------------------------------------------------+--------------+
| Sep 05, 2022 - 15:19 |    MODELSTAR_TEST     |                                                       | ACCOUNTADMIN |
| Aug 16, 2022 - 00:43 |       SNOWFLAKE       |                SNOWFLAKE.ACCOUNT_USAGE                |              |
| Aug 16, 2022 - 00:43 | SNOWFLAKE_SAMPLE_DATA | SFSALESSHARED.SFC_SAMPLES_AWS_US_WEST_2_2.SAMPLE_DATA | ACCOUNTADMIN |
| Aug 19, 2022 - 18:05 |   SNOWPARK_EXAMPLE    |                                                       | ACCOUNTADMIN |
+----------------------+-----------------------+-------------------------------------------------------+--------------+
```

:::tip

The `modelstar use <named-session>` could also be used to debug your `modelstart.toml` configuration.

:::

## Register a Python UDF

Using the `modelstar` cli you can register a function as a UDF using the command `modelstar register function <file_location>:<function_handler>` along with the location of the function and the function handler. Let's use the sample function provided with the project template:

```py title="./samples/functions/find_capital.py"

from modelstar import modelstar_read_path
import pandas as pd

FILE_1 = modelstar_read_path(local_path='./samples/functions/country-capitals.csv')

# highlight-start
def find_capital(country_name: str) -> str:

    cinfo = pd.read_csv(FILE_1)

    country_details = cinfo.loc[cinfo['CountryName'] == country_name]
    capital_name = country_details.iloc[0]['CapitalName']

    return capital_name
# highlight-end
```

The function `find_capital` loads a file that contains a list of country names and its capital. It takes in the `country_name` as an argument and returns it's `capital_name`.

:::note

When you are defining a Python function that you want register as a UDF, you need to also define the parameter types and the return type. The types that are available to be used for a UDF are: `str`, `int`, `float`, `bool`, `dict`, `list`.

:::

:::note

`modelstar` takes care of finding and packaging the dependencies that you have specified in your .py file. This also includes any file (such as a .csv, .txt, .pkl, .joblib) you are loading. To make local data files availalbe for your function execution, please use the `modelstar_read_path` from the `modelstar` package to load the file.

Why do we do this?

Doing it this was way you can make sure your functions can be tested locally with its depenedencies (modules, libraries and local data files) without involving any specific code dependent of your data platform. Modelstar takes care of packaing and your functions as UDFs as it is required by the data platform.

:::

<!-- TODO: For more information on writing a UDF can be found here... API. -->

To register the UDF to your data-platform, you would have to run the following command:

```
$ modelstar register function samples/data_functions/find_capital.py:find_capital
```

The final argument of the command is the colon representation of the function handler along with the location of the file that contains it as: `<file_location>:<function_handler>`.

After the registration is complete, you get the output with information about the status and, about how to use your UDF and where it is located.

```

	Registering function: `find_capital` from `find_capital.py`

+---------------------------------------------+
|                   status                    |
+---------------------------------------------+
| Function FIND_CAPITAL successfully created. |
+---------------------------------------------+


	Function available at: `MODELSTAR_TEST.PUBLIC`

```
