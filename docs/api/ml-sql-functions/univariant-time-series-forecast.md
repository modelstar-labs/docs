import Dashboard from './forecast-dashboard.png';
import SampleData from './time-series-sample-data.png';

# univariant_time_series_forecast

## Use case and tutorial
- [Sales Forecasting with 1 Line of SQL](../../tutorials/sales-forecasting-inside-snowflake.md)

---

## Input data prerequisite
Input data is a univariant time series data: a sequence of integer or float data points indexed in timestamp. The table to be used should include in the following two columns: 
- A Time stamp column. Data type: `Date & Time Data Types`. 
- A value column. Data type: `Fixed-point Number` or `Floating-point Number`. 

:::note
Extended reading. Snowflake docs about:
[Date & Time data types](https://docs.snowflake.com/en/sql-reference/data-types-numeric.html); 
[Numeric data types](https://docs.snowflake.com/en/sql-reference/data-types-numeric.html).
:::

Sample dataset:

<img src={SampleData} width="300"/>

---
## Syntax
```javascript
univariant_time_series_forecast(<table_name>, 
                                <time_column_name>, 
                                <value_column_name>, 
                                <forecast_period>,
                                <period_unit>)
```

### Arguments

`<table_name>` (string) - the datatable's name.

`<time_column_name>` (string) - the name of a timestamp column in the datatable.

`<value_column_name>` (string) - the name of a value column to be forecasted.

`<forecast_period>` (integer) - forecast period.

`<period_unit>` (string) - unit alias of the period. 

**Available unit aliases and descriptions:**

| Alias string  | Description       |
| ------------- | ------------- |
| 'B'  | business day |
| 'D'  | calendar day |
| 'W'  | week |
| 'M'  | month |
| 'Q'  | quarter |
| 'Y'  | year |


### Example

#### SQL statement
```sql
CALL univariant_time_series_forecast('sales_table', 'sales_date', 'total_sales', 24, 'M');
```

#### Description

Based on historical `sales_date` and `total_sales` data in `sales_table`, forecast the `total_sales` value for the next `24` `M` (months).

#### Result

All historical and forecased data is materilized as a new table. 

A forecast dashboard is auto-generated for checking modeling accuracy, discovered trends, and predictions.

<img src={Dashboard} width="400"/>