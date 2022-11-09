# Quickstar: Install Modelstar and Connect to Snowflake

In just a few minutes you can train and deploy a ML model inside your data warehouses/lakehouse.


## Step #1: Install Modelstar CLI tool

To get started with Moelstar, install the Modelstar Python package into your local Python environment.

```shell
$ pip install modelstar
```

:::tip

It's recommended to install `modelstar` within a Python virtual environment using `pyenv`, `virtualenv`, or `poetry`.

:::

---
## Step #2: Initialize a Modelstar ML Project

This step creates a local project folder, named **_my_project_**, at the location you are running this command. The folder includes config, command and algorithm files.

```shell
$ modelstar init my_project
```

:::tip

`modelstar init <project_name>` is the base command, where <project_name> can be replaced with the name of your choice.

`modelstar init .` can be used to initialize the project inside the current folder location. Running this command will create all the necessary files within the current folder location and name the project using the folder's name.

** For DBT users: ** You can also initialize a Modelstar project inside a DBT project. A more detailed tutorial on how to use DBT to orchestrate Modelstar ML will be posted.
:::

---
## Step #3: Handshake with Snowflake

#### Config `modelstar.config.yaml`
:::note

This step requires manual editing of a yaml file. Find the file and open it with your favorite editor.

:::

The `modelstar.config.yaml` file is used to set and configure the parameter of modelstar. This file will also be used to enter your credentials to communication with your data platform.

The following is an example to use a Snowflake account:

```yaml title="./modelstar.config.yaml"

# MODELSTAR CONFIGURATION FILE
---
sessions:
    - name: snowflake-test
      connector: snowflake
      config:
          account: WQA6****
          username: [username]
          password: [password]
          database: MODELSTAR_TEST
          schema: PUBLIC
          stage: test
          warehouse: COMPUTE_WH

```

:::info

These credentials are never shared with Modelstar and only live on your local machine.

:::

:::danger

Don't commit this file to your version control, since it contains sensitive information. The best way is to add it to gitignore file.

:::

First, you configure a named session, which will contain the details of your account you will be working with. As an example, here we are using a Snowflake account, and naming the session as `snowflake-test`, which contains the account details. You will later use this session name when starting a modelstar session.


#### Ping Snowflake

We can now start a Modelstar session from your terminal. Run the following:

```shell
$ modelstar use snowflake-test
```

:::note

Make sure you are running all the `modelstar` commands from the root of your project folder and have also activate the Python virtual environment that contains the `modelstar` package.

:::

This will give the following output, which shows you the available databases for your named-session, here it is `snowflake-test`.

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

---
<!-- Need more revision -->
## Step #4: Register a Modelstar ML Algorithm

Using the `modelstar` cli you can register a function as a UDF using the command `modelstar register function <file_location>:<function_handler>` along with the location of the function and the function handler. 

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
