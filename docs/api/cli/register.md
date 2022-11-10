---
sidebar_label: register
---

# `register`

## Description

This command lets you regsiter a Python function into your data warehouse as a User Defined Function (UDF) or a Stored Procedure (SProc). 

Modelstar provides a bunch of builtin ML functions that can be deployed and used in your warehouse. For a list of the functions, refer to: [ML-SQL-Functions](/docs/api/ml-sql-functions/)

## Command

For registering a Modelstar builtin function:

```
modelstar register <modelstar_function_pointer>
```

### Synopsis

#### `<modelstar_function_pointer>`

This refers to a colon separated function name reference that you would like to register. 

**Available builtin ML functions are:**

- `forecast:univariate_time_series_forecast` : [univariate_time_series_forecast](/docs/api/ml-sql-functions/univariant-time-series-forecast)

### Example

**Usage of the command**

```
>>> modelstar register forecast:univariate_time_series_forecast
```

**Output of the command**

```

  Registering `univariate_time_series_forecast` into MODELSTAR_TEST.PUBLIC of your data warehouse.

+----------------------------------------------------------------+
|                             status                             |
+----------------------------------------------------------------+
| Function UNIVARIATE_TIME_SERIES_FORECAST successfully created. |
+----------------------------------------------------------------+

  Stored Procedure available at:  `MODELSTAR_TEST.PUBLIC`

```

**Notes**

The function is regsitered to the `database`, `schema` and the `stage` that is set in the configuration file `modelstar.config.yaml`. Before you run this, you need to first set the session using the `modelstar use <session-config-name>` described [here](/docs/api/cli/use).