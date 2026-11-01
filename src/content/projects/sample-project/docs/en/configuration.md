---
title: Configuration reference
description: Documentation series use a project relationship and an explicit chapter
  order.
series: sample-project-docs
language: en
updatedAt: '2026-11-01'
translationOf: sample-project/configuration
---

## Project relationship

The series links to its project using `project: sample-project`.

## Chapter order

`relatedDocuments` defines the chapter order. Chinese and English share chapter IDs; the language switcher opens the matching translation.

## Content isolation

READMEs and documents live together in `src/content/projects/<project>/`, with manuals in its `docs/` subdirectory. Neither is added to article lists or article RSS.
