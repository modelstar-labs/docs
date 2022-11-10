---
sidebar_label: use
---

# `use`

## Description

This command lets you set the data warehouse configurations that you would like Modelstar to use. The configuration is set in the `modelstar.config.yaml`.

## Command

```
modelstar use <session_config_name>
```

### Synopsis

#### `<session_config_name>`

This refers to the name of the session pointing to its credentails in the file `modelstar.config.yaml`.

### Example

**Usage of the command**

```
>>> modelstar use snowflake-demo-config
```

**Output of the command**

```
  Setting session with configuration:  snowflake-demo-config

  Loaded session:  snowflake-demo-config

  Showing available databases for config:  snowflake-demo-config

+----------------------+-----------------------+-------------------------------------------------------+--------------+
|      created_on      |         name          |                        origin                         |    owner     |
+----------------------+-----------------------+-------------------------------------------------------+--------------+
| Sep 05, 2022 - 14:19 |    MODELSTAR_TEST     |                                                       | ACCOUNTADMIN |
| Aug 15, 2022 - 23:43 |       SNOWFLAKE       |                SNOWFLAKE.ACCOUNT_USAGE                |              |
| Aug 15, 2022 - 23:43 | SNOWFLAKE_SAMPLE_DATA | SFSALESSHARED.SFC_SAMPLES_AWS_US_WEST_2_2.SAMPLE_DATA | ACCOUNTADMIN |
| Aug 19, 2022 - 17:05 | SNOWPARK_PYTHON_DEMOS |                                                       | ACCOUNTADMIN |
+----------------------+-----------------------+-------------------------------------------------------+--------------+
```

**Notes**

For the `modelstar.config.yaml` file containing:

```
# MODELSTAR CONFIGURATION FILE
---
sessions:
    - name: snowflake-demo-config
      connector: snowflake
      config:
          account: "<account>"
          username: "<username>"
          password: "<password>"
          role: "<role>"
          database: "<database>"
          schema: "<schema>"
          stage: "<stage>"
          warehouse: "<warehosue>"
```