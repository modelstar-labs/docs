---
sidebar_label: create
---

# `create`

## Description

This command is used to create objects within your data warehouse. The objects that are supported at the moment are:

-   [**Table**](#table)

## Command

```
modelstar create <sub-command> <object-data-pointer>
```

### Synopsis

#### Available `<sub-command>`

#### `table`

You can use this subcommand to create a table in your data warehouse under the database and schema mentioned in configuration file. The use of the command references a `<object-data-pointer>` which is colon separated local data to warehouse table name mapper such as `<local_data_file_location>:<table_name>`. Example: `sample_data/sales.csv:SALES`, where the `sample_data/sales.csv` is the local relative path to find the `csv` file and the `SALES` is the name of the table that you want to create in your warehouse with this data file.

#### `<object-data-pointer>`

Referen to the individual sub-command for information about this.

### Example

**Usage of the command**

```
$ modelstar create table sample-data/sales.csv:SALES
```

**Output of the command**

```

  Creating `table` as `SALES` from `sales.csv`

+-------------------+--------+-------------+-------------+
|       file        | status | rows_parsed | rows_loaded |
+-------------------+--------+-------------+-------------+
| test/sales.csv.gz | LOADED |    2905     |    2905     |
+-------------------+--------+-------------+-------------+

  Table: SALES available at:  `MODELSTAR_TEST.PUBLIC`

```
