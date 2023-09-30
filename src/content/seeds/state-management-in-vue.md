---
title: 'State Management in Vue'
description: 'Techniques to manage state in Vue'
planted: '2022-03-05'
author: 'Jesus Guerrero'
tags: ['Web Development', 'Vue', 'Javascript', 'State Management']
language: 'english'
status: evergreen
---

While working with medium/large sized apps you will find a case to have some data, functionality or logic available globally in a single source of truth because you need them in different components and pages across the app, it could be: user data, settings, permissions, etc. Sounds familiar? We refer to the solutions to address this problem as State Management

In this post we are going to review some use cases when we might need a state management solution and the options we have in Vue to work with them.
 
Some use cases are:
- Sharing data that are used deeply in components
- Sharing global state
- Working with SSR

### Sharing data that are used deeply in components

Since vue 2 the framework provide an alternative to props to pass down data to a deep child without the need of a state manager library. This is the **provide/inject** in the composition API those functions are available and ready to share reactivity too.

We can find an Illustration for the idea in this picture from Vue documentation: 

![provide/inject idea](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jon2uub0102d7ahuijvs.png)

Let's see how the code will look like for the following use case:

- We have a `main layout` that have a selectedDate and a component `WeekContainer` that have the last 7 days rendered as an individual component `WeekDay` component, we need the selectedDate data from the parent to see if one of the WeekDays is the selected one.

#### Components Schema:
```
  -- Parent [selectedDate]
  --- WeekContainer
  ---- WeekDay [needs selected day]
```

```html
<script setup>
/** Parent **/

import { provide } from "vue"
const selectedDate = ref(new Date())
</script>

<template>
 <!--...-->
</template>
```

```html
<script setup>
/** WeekContainer **/
</script>

<template>
 <div v-for="day in week" :day="day"> 
</template>
```

```html
<script setup>
/** WeekDay Component **/

import { inject, computed } from "vue"
const props = defineProps({
  date: {
    type: Date,
    required: true
  } 
})

const selectedDate = inject('selectedDate')
const isSelectedDate = computed(() => selectedDate.value == props.date)
</script>

<template>
 <!--...-->
</template>
```

[Live example](https://freesgen-vue-provide-inject.stackblitz.io//)
[live code](https://stackblitz.com/edit/freesgen-vue-provide?file=src/utils.js)


### Sharing global state 

The second case is maybe one of the most common, In general if our application requires authentication, permissions and settings eventually we are going to need to have access to these data without the need to make an API call each time we need them.  

Here we can combine some techniques to avoid an external library with vue 3 and the [Composition Api](https://dev.to/jesusantguerrero/from-my-point-of-vue-composition-api-18de) we can use an `reactive` object to store the data an access to them when we need it. I wrote about this concept previously in [build and auth flow with auth0 and Vue 3](https://dev.to/jesusantguerrero/build-an-authentication-flow-with-auth0-and-vue3-1f3h)

Let's see some code:

Here we are exporting a reactive object with Auth Information

```
/** AuthState.js
import { reactive } from 'vue';

export const AuthState = reactive({
    user: null,
    loading: false,
    isAuthenticated: false,
    provider: null,
    // settings?
});
```

Next we can build a function that interacts with our AuthState to set the user in case of login/registration an unset in case of logout.

```
export const useAuth = (state) => { 
 // The implementation will go here

  return {
     login,
     logout,
     init
  }
}
```

Then in the main App.vue we can import our functions to setup the initial state. Then we an import the AuthState anywhere.

```
<script setup>
import { useAuth, AuthState } from "./utils/useAuth";
const { login, logout, init } = useAuth0(AuthState);

init();
</script>

<template>
  <div v-if="!AuthState.loading">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-if="!AuthState.isAuthenticated">
      <button @click="login()" class="btn btn-primary">Login</button>
    </div>

    <div v-else>
      <p> Welcome to VueAuth <strong>{{ AuthState.user.name }}</strong></p>
      <button @click="logout()" class="btn btn-secondary">Logout</button>
    </div>
  </div>

  <div v-else>
    Loading ...
  </div>
</template>
``` 

You can check a complete code applying this technique [here](https://github.com/jesusantguerrero/vue-auth0) and applied to an app running in the wild [zen](https://github.com/jesusantguerrero/zen/blob/master/src/utils/useFirebase.js)

### Working with SSR

We are heading to our last but not least use case, with Server Side Rendering our app have some special needs so far At this point the minimal requirement is sharing state between the server side generated content and the frontend once is hydrated.

In that case we can go with a library like [pinia](https://pinia.vuejs.org/) (the spiritual successor of Vuex🙏🏽). It gives us a SSR compatibility, modular and intuitive design in a light package with devtool support.

**Usage:** Declaring the store
```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```
Once it is declared you can use it in your components:

```js
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    counter.count++
    // with autocompletion ✨
    counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    counter.increment()
  },
}
```

### Wrapping up



 


