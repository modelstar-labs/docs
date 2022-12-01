# train_binary_classifier

## Tutorial and use case

-   [Churn prediction with 1 Line of SQL](/docs/tutorials/churn-prediction-inside-snowflake/)


---

## Syntax

```sql
train_binary_classifier(<table_name>, 
                        <target_column_name>,
                        <excluded_column_name_list>)
```

### Arguments

`<table_name>` (string) - the data table's name.

`<target_column_name>` (string) - the name of the target column in the data table.

`<excluded_column_name_list>` (list) - a list of the column names that should be excluded (ignored) from training.

### Algorithm details

12 ML algorithms are used in the training process. They are:

- Logistic Regression
- Naive Bayes
- Linear Discriminant Analysis
- Gradient Boosting Classifier
- Ada Boost Classifier
- Quadratic Discriminant Analysis
- Ridge Classifier
- Light Gradient Boosting Machine
- Random Forest Classifier
- K Neighbors Classifier
- Extra Trees Classifier
- Decision Tree Classifier
- Support Vector Machine

## Example

### SQL statement

```sql
CALL TRAIN_BINARY_CLASSIFIER('CUSTOMER', 'CHURN', ['CUSTOMERID']);
```

### Description

Train a binary classifier using data in "CUSTOMER" table, where column "CHURN" is the `target`, and "CUSTOMERID" column should be ignored as it's not a good feature.

### Result

All historical and forecasted data is materialized as a new table.

A model performance dashboard is auto-generated for checking modeling accuracy, discovered trends, and predictions.


## Prerequisite

### Input data format

Input data must include at least one `feature` and one `target` column. And the `target` column should only contain 2 values.