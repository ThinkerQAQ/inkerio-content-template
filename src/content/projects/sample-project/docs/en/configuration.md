---
title: Configuration reference
description: Documentation series use a project relationship and an explicit chapter order.
language: en
updatedAt: '2026-11-01'
translationOf: sample-project/configuration
project: sample-project
---

## Project relationship

Each document links to its project using `project: sample-project`.

## Chapter order

`documents` in `project.md` defines the chapter order. Chinese and English share chapter IDs; the language switcher opens the matching translation.

## Content isolation

READMEs and documents live together in `src/content/projects/<project>/`, with manuals in its `docs/` subdirectory. Neither is added to article lists or article RSS.
