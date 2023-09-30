---
title: 'Understanding js under the hood'
description: 'How js code is executed'
planted: '2022-05-14'
author: 'Jesus Guerrero'
tags: ['Web Development', 'JavaScript', 'Fundamentals']
language: 'english'
status: seedling
---

## Understanding js under the hood

In this series we are going to go through some of the core concepts of JavaScript and the first one is the **Call Stack** while investigating about it I realised it we get a better understanding of the call stack if we analize how interacts with other elements in the execution process  of the code. That's why here we are going to cover how JavaScript process our code under the hood.


Even when JavasScript is a single threaded language, meaning that it  just can handle one task at a time. Concurrency is possible 

### Browser Runtime
- #### Engine:
	-  **Call Stack**
	-  **Heap**
  
- **Callback Queue**
- **Microtask Queue:** It was introduced in ES6 to handle Promises
- **Web API's**
- **Event Loop** basic job is to look both at the stack and the task queue, pushing the first thing on to the stack when it see stack as empty

### Engine: 
When the engine runs our code it creates the Global Memory (Also called Global Scope) and the Execution context

### Execution context
The **Execution Context** is the abstract environment where js code is evaluated and executed and it can be one of three types:
-  Global EC 
-  Functional EC 
-  Eval Function EC.

