---
sidebar_label: create
---

# `create`

## Description

This command is used to create objects within your data warehouse. The objects that are supported at the moment are:

- **Table**

## Command

```
modelstar create <sub-command> <object-data-pointer>
```

### Synopsis

#### Available `<sub-command>`

##### `table` 

`<object-data-pointer>`

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