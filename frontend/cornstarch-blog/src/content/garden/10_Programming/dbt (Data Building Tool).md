---
Title: dbt
Subject Type:
tags:
aliases:
cssclasses:
Note Created: 2025-10-13
Note Updated: 2025-10-14
---
# dbt Overview

---

## dbt's Place in modern Warehousing

Simply put, dbt is the "T" in ELT. It does not extract data and expects raw data to be available to it. It takes said raw data and transforms it for use by the business. In this sense, dbt "loads" data into a data warehouse, but it does not load Raw data in the traditional sense. A typical tech stack utilizing dbt may look like PostgreSQL > ADF > dbt > Databricks > Tableau. Dbt runs directly within a data warehouse.

## Core Concepts

### Models

SQL queries that identify and transform raw data which are then materailized as a table or view in a data warehouse. These files usually take the form of:

```SQL
WITH Movies as (
	SELET [MovieTitle]
		,[ReleaseYear]
		,[Director]
		,[Genre]
		,[Language]
	FROM TMDB.dbo.Movie
)
SELECT * FROM Movies
```


Materialization is determined in YAML files on a project or model level, or even within a model's .sql file itself. Models can reference other models via {{ ref }}.

### Macros

Macros are analogous to functions in tsql or python, taking parameters and pre-written code for scalable and reusable development. For example, you may have a macro with a transformative piece of code that is widely usable, perhaps to break down a date into its constituent pieces of information. You would make one macro that accepts a date and returns subsequent data. 

### Tests

Quality assurance in models is achievable in dbt via tests in two forms. **Generic Tests** will check data for NULL status, uniqueness, data relations, etc. This is all available on a per-column basis. These are defined within the project.yml file. **Singular Tests** are more bespoke and can be as complex as you can make a sql query. An example may be to create a sql query that checks for COUNT(\*) > 0 to assure that data has been processed.  

## Snapshots

Used to capture changes in slow-changing dimensions, such as customer physical addresses. **Timestamp Strategies**  will utilize update dates to check for changes in value while the **check strategy** will check the column value directly for changes. 
