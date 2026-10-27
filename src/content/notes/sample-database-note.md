---
title: "数据库索引设计速记"
description: "用订单查询为例，说明复合索引的列顺序、回表与执行计划，演示最近笔记的摘要展示。"
sourcePath: "Database/sample-database-note.md"
category: database
categoryLabel: Database
order: 1
tags:
  - Example
  - Database
updatedAt: 2026-10-26T00:00:00Z
status: active
language: zh
featured: false
indexable: true
---

# 数据库索引设计速记

假设订单表包含 `user_id`、`status`、`created_at` 和 `amount`，常见查询是检索某个用户的已完成订单，并按时间倒序展示。

## 从查询条件出发

```sql
SELECT id, amount, created_at
FROM orders
WHERE user_id = 42 AND status = 'paid'
ORDER BY created_at DESC
LIMIT 20;
```

可考虑建立复合索引 `(user_id, status, created_at)`。前两列用于等值过滤，第三列可能帮助减少排序成本；是否选择该索引仍取决于数据分布及查询计划。

## 关注实际代价

- **回表**：如果索引不包含查询所需的全部列，存储引擎可能还需要读取原始数据行。
- **写入成本**：索引会占用存储空间，并增加插入、更新和删除操作的维护成本。
- **执行计划**：使用 `EXPLAIN` 验证扫描行数、索引选择和排序策略，而不是只凭索引名称判断性能。

这是一篇简化的演示笔记。真实索引方案需要结合数据库版本、数据分布与实际负载评估。
