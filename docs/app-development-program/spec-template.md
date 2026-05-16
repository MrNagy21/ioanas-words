# Feature Spec Package Template

Use this template when creating detailed specs from the app development program.

Create a folder:

```txt
docs/app-development-program/features/<feature-slug>/
```

Required files:

```txt
spec.md
plan.md
status.md
```

Use the sections below for `spec.md`. Use the existing `features/admin-words-inventory/` package as the reference example.

## Feature

Name:

Route or module:

Program source:

## Problem

What user or development problem does this solve?

## Goals

- Goal 1
- Goal 2
- Goal 3

## Non-Goals

- Explicit non-goal 1
- Explicit non-goal 2

## Current Code Context

Relevant files:

- `path/to/file`
- `path/to/file`

Existing behavior:

- Behavior 1
- Behavior 2

## Proposed Architecture

Describe data flow, components, helpers, and content model changes.

## UX

Describe the screen, controls, empty states, and accessibility behavior.

## Content And Validation

Describe schema changes, derived data, validation rules, and human review requirements.

## Acceptance Criteria

- Criterion 1
- Criterion 2
- Criterion 3

## QA Plan

Commands:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

Browser checks:

- Check 1
- Check 2

## Rollout Notes

Describe whether the feature is public, hidden, protected later, or dependent on content.
