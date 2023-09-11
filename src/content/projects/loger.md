---
title: "Loger"
slug: "loger"
description: "The Digital Home Management Software"
author: 'Jesus Guerrero'
technologies: ["PHP", "Laravel", "Inertia.js", "Vue", "MySql", "Github Actions"]
imageUrl: "https://user-images.githubusercontent.com/17421742/212417292-19f319c5-1cf4-48a8-ba40-1e9b040e820f.png" 
---

## About Loger

Loger (House in french) as a family managing home is almost like being CEO of a company. There are a lot of things going on that you have to keep in mind. Things like budgeting, expenses, subscriptions to keep healthy financial habits managing goals/savings like an emergency fund or planning your next vacation or Christmas; having a Meal Plan, grocery list generated with the things you need... well, you get the point.

All the things mentioned above are part of our family/personal routine. We do it in our minds or paper or if you are like me with different software. Loger aims to be a central point to manage all that an more.

## ✨Features:

Loger is organized in "concerns" by the moment it have 4

* ### 💵 Finance:
    - [x] Monthly Budget
    - [x] Watchlists
    - [x] Accounts
    - [x] Transactions
    - [x] Statistics/Net Worth
    - [ ] Scheduled Transactions*

* ### 🍗 Meal Planner
    - [x] Recipes   
    - [x] Ingredients
    - [x] Meal Planner
    - [x] Random Meal Generator
    - [ ] Menus*

* ### 👨‍👩‍👧 Relationship**
    I don't want to automate/digitalize the humanity of a relationship here but save reminders of activities that would strengthen it like:

    - Goals/Projects like travels and activities 

* ### 🏡Home/Family Projects**
    - [ ] Chores
    - [x] Occurrence Checks
    - [ ] Plans (Events and activities / Repairs / ETC)
        - [ ] Quick Create Budget from plans
        - [ ] Quikc Create Transactions from plans? 
    - [ ] Equipment 

>  (*) Feature is planned but not finished yet
(**) Section is considered but not planned still in research

<!-- ## Demo

<a href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/jesusantguerrero/atmosphere/tree/staging" target="_blank"><img src="https://www.deploytodo.com/do-btn-blue.svg" width="240" alt="Deploy to DO"></a> -->

## Showcase

### Dashboard 
![Dashboard](https://user-images.githubusercontent.com/17421742/212417292-19f319c5-1cf4-48a8-ba40-1e9b040e820f.png)

### Meals
![Meals Section](https://user-images.githubusercontent.com/17421742/212419093-5c589843-4f2d-4058-b2e6-165c8d9ceaa5.png)


### Finance Overview
![Finance Overview](https://user-images.githubusercontent.com/17421742/212419763-90dab10b-3c48-46cd-ba79-6e1cc155980f.png)

### Budget & Goals
![Budget & Goals](https://user-images.githubusercontent.com/17421742/212420274-1c361875-916d-4cd0-9c94-69b6d1c850b7.png)

### Housing
![image](https://user-images.githubusercontent.com/17421742/212420956-322378e0-d491-4259-ba93-8a6f68dec803.png)


## Motivation
- This was an Idea initially considered as a part of a 12x12 SaaS challenge.
- I married and needed something like this to keep my things organized and planned.
- Financial software had fixed categories, bank sync didn't work in my country or just. worked more like expense tracker than budget (Except YNAB).
- I didn't want to have multiple apps to manage things of the same context and need a relation (Budgeting app, calendars, meal planner, custom notion template).


## Technical Stuff
Loger is a Monolith app using laravel 9, jetstream, inertia, vue3, Tailwindcss and some hand crafted packages [Atmosphere UI](https://github.com/jesusantguerrero/atmosphere-ui), [Journal](https://github.com/insane-code/journal), and others.

Check more details in [Loger](https://github.com/jesusantguerrero/atmosphere)