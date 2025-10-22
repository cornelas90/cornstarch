---
Title:
Subject Type:
tags:
aliases:
cssclasses:
Note Created: 2025-10-12
Note Updated: 2025-10-13
---
# Indexing Overview
---
Indexes are data structures that are used to improve performance of querying in large datasets. Instead of querying an entire table, indexes allow for a sort of "lookup" table functionality akin to a filing cabinet, allowing for significantly improved querying. Indexes need to be managed and updated, so it is best practice to only used as few as you can. Inserts, Updates, and Delete operations are slowed down by the existence of indexes.

**Single-column indexes** are self-explanatory in name and are often placed on id columns, though that is not a requirement. **Mutliple-column indexes** are also self-explanatory, using two or more columns in tandem to create an index with the same functionality as before. 

**Unique indexes** are used to enforce uniqueness of records within a table. This is an excellent too to assure dupes are not entered into a table. 

ALTER Statements can be ran with respect to indices to rebuild them as they grow outdated. 

A **Clustered index** are generally what people are talking about when they discuss indexes. They are indexes which sort and store key values (defined columns of given index). Only one clustered index can exist per table.

A **nonclustered** index utilize a different structure, instead having a key value coupled with a pointer (called a **row indicator**) which points to the position of the original record. In clustered indexes, this pointer or row indicator is the index itself. 

In SQL Server, defining a PRIMARY KEY or UNIQUE constraint will automatically generate indexes, clustered for the former andd nonclustered for the latter. If a clustered index already exists within a table, 