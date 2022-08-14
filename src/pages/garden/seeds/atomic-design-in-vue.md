---
title: 'Atomic Design in vue'
slug: "atomic-design-in-vue"
description: ''
planted: '2022-05-30'
author: 'Jesus Guerrero'
tags: ['Development']
language: 'english'
status: seedling
layout: '../../../layouts/Seed.astro'
---

How we organize our components structure in a project is a fundamental decision to make, because it will dictate in a big part how extensible, maintainable and testable our application will be. In this post I will try to explain how we can use Atomic Design to organize our components in a Vue project.

## What is Atomic Design?

The main idea is to organize our components in a way that we can reuse them in different contexts and that they are easy to maintain and test from the minimal component atoms to the most complex organisms and compose our templates and pages.

## Benefits
- **Hint of complexity**
You get a hint about the complexity of your components ahead. just by seeing some component is is placed in atoms is an indicator that the complexity is low and  vice-versa if is placed in organisms

- **Reusability**
- **Maintainability**
- **Testability**
- **Extensibility**
- **Perfect match with design systems**

## Cons
