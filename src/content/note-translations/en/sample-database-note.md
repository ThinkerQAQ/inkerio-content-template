---
title: "Database Index Design Notes"
description: "Use an order-query example to understand composite index order, table lookups, and execution plans—a sample of the recent-notes preview."
translationOf: sample-database-note
language: en
updatedAt: 2026-10-26T00:00:00Z
---

# Database Index Design Notes

Suppose an orders table contains `user_id`, `status`, `created_at`, and `amount`. A frequent query retrieves a user's paid orders, with the newest first.

## Start with the query

```sql
SELECT id, amount, created_at
FROM orders
WHERE user_id = 42 AND status = 'paid'
ORDER BY created_at DESC
LIMIT 20;
```

A possible composite index is `(user_id, status, created_at)`. The first two columns support equality filters, while the third may reduce sorting work. Whether the optimizer chooses the index still depends on data distribution and its cost estimates.

## Measure the trade-offs

- **Table lookups:** An index that does not cover all selected columns may require additional reads of the underlying rows.
- **Write overhead:** Indexes use storage and increase the work needed to insert, update, and delete data.
- **Execution plans:** Inspect `EXPLAIN` to verify scanned rows, index selection, and sorting behavior. Do not assume an index is effective solely from its definition.

This is a simplified demonstration note. A production index design must be validated against the actual database version, data distribution, and workload.
