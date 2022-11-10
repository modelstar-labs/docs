---
sidebar_label: check
---

# `check`

## Description

This command let's you check the records (including artifacts, run & warehouse information) of a function run in your data warehouse. You would need the `run_id` to check the run. 

## Command

```
modelstar check <run_id>
```

### Synopsis

#### `<run_id>`

This refers to the unique id of the run that is generated and given as an output of a `CALL` for the stored procedure.

### Example

**Usage of the command**

```
$ modelstar check 3NvQXnHQqUdYG4Fu
```

**Output of the command**

```

  Loaded session:  snowflake-demo-config

  Snowflake run record:  Downloaded

  Opening the report in a new tab in your browser.

```

**Notes**

The report opens in a new tab in your browser. 