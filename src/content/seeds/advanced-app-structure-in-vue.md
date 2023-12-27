Choosing the right folder structure for a middle size or big vue application might be intimidating and its even more when are no many suggestions about the topic

From 2017 to the moment of writing this post I've been working on Vue applications years from medium to large, stablished apps migrating to Vue to projects at the start of the process. from Nuxt, Laravel and Vue SPA an here I will try my best to describe what I thing have been the more intuitive easy to work and maintain folder structure

## The alternatives
First I want to talk about the alternatives considered. 

### **Atomic Design**: 
This is a very complete structure to define your building blogs according to the complexity, size and how they interact with each other taking inspiration from one of the most well structured system the building blocks that compose our body

It is organized as follows:

Atoms:
Molecules:
Organisms:

Those will help us to aisle functionality, making portable and reusable components and even easier to unit test.

Then we used group those organisms in **templates** to give them context and form in a layout and pages that are the single entry point of the content we show to our users.

- Atoms
- Molecules
- Organisms
- Templates
- Pages

```
|_atoms/
   |__Input.vue
   |__Button.vue
   |__Label.vue
|_molecules
   |__FieldGroup.vue
   |__
|__organisms
   |__
```

### Benefits
- **Hint of complexity**
You get a hint about the complexity of your components ahead. just by seeing where the component is  placed: atoms is an indicator that the complexity is low and if is placed in organisms it is more complex.

- **Reusability**
As you are working with building blocks they are like Legos that you can move around atoms can be part of many molecules and organisms


- **Testability**
As components tend to be smaller and only doing and in aisle 

- **Perfect match with design systems**
If you are starting an application from 0 and need to build a consistent design system this is almost a no brainer 

### Cons
-  When applied directly in an application structure you'll feel your components are all over the place .
- If  atom is just used by one molecule or single organism you cant group them by context
- Business logic 

In my experience we can get the most from Atomic Design when we are building a component library that will be the foundation of our system: Buttons, Input, Input groups, Form Wizards, SearchBars, Selectors etc.

## The Chosen one

When you are building an application you need as much context as possible in your project in the components that handle the business logic. For example if I have a budget 

```
|_Budget/
   |__Budget.vue
   |__BudgetCategory.vue
   |__BudgetCategoryItem.vue
```

Puede mejorar la experiencia de desarrollo al momento de agregar una nueva funcionalidad, eliminando o refactorizando el componente porque tiene mucho contexto de que propiedades puede recibir (BudgetCategoryItem puede tener un prop `BudgetCategory` y no una generica como `row` por ejemplo) en que dominio se utiliza y cual es su componente padre cercano.

## Estructura propuesta:

```
|__ assets
|__ components/
|__ locales/
|__ plugins
    |__ i18n/index.ts
    |__ auth0/index.ts
    |__ loger/index.ts
    |__ axios/index.ts
|__ config/
|   |__ index.ts
|__ domains/
    |__ [domain]
       |__ api/  
       |__ models/
       |__ enums/
       |__ components/
           |__ RequestModal.vue
       |__ composables/
       |__ tests/unitTest.ts 
|__ pages
|   |__ auth/
|       |__ Partials/
|           |__ AuthLayout.vue     
|	    |__ AuthSignIn.vue
|	    |__ AuthSignUp.vue
|	    |__ AuthRecover.vue
|	    |__ AuthReset.vue
|   |__ [domain]
|        |__ Partials/
|            |__ SubpageLayout.vue
|            |__ [ComponentUsedOnce].vue
|        |__ subpageList.vue
|        |__ subpageEdit.vue
|        |__ subpagesCreate.vue
|__ router/index.ts     
|__ store/
     |__ Modules/
     |__ index.ts 
|__ utils/   
|__ App.vue
|__ main.ts
 
```

### assets

This directory can contain images, svg, css or scss for the application
### components

This component holds all the shared components of the application and they can be used in any part of the system.

### config

Access to env variables with `import.env.VITE_VARIABLE_NAME` across our app load too much dependency of the bundler to centralize all this in a single place and give us some good ts support and add default values.  

In one of my projects it looks like:
```
``// config/index.ts 
interface AppConfig {
    FIREBASE_API_KEY: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_APP_ID: string;
    FIREBASE_SENDER_ID: string;
    PUSH_PK: string;
    MEASUREMENT_ID: string;
    GOOGLE_APP_KEY: string;
    GOOGLE_APP_CLIENT: string;
    FIREBASE_VAPID_KEY: string;
    IS_DEMO: boolean;
}

const isDemo = import.meta.env?.VITE_APP_DEMO

export const config: AppConfig = {
    FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_APP_KEY,
    FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
    FIREBASE_SENDER_ID: import.meta.env.VITE_FIREBASE_SENDER_ID,
    PUSH_PK: import.meta.env.VITE_PUSH_PK,
    MEASUREMENT_ID: import.meta.env.VITE_MEASUREMENT_ID,
    GOOGLE_APP_KEY: import.meta.env.VITE_GOOGLE_APP_KEY,
    GOOGLE_APP_CLIENT: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    FIREBASE_VAPID_KEY: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    IS_DEMO: Boolean(isDemo) && isDemo !== 'false'
}
```


###   domains

Contains the business logic of the application gouped by domain (remember DDD?) and each domain will have the sections: api, models, components, composables, unit tests

_**Subfolders**_**:**

- **api** : Carpeta que contiene las llamadas a los endpoints de backend
    
- **models**: Carpeta que contiene todas las interfaces y tipos del dominio
    
- **components**: Todos los componentes que estan atados al contexto del dominio irian en esta carpeta
    
- **composables**: Todas las funcionalidades
    
- **tests**: contienenen los unit test de la logica o componentes
    

### Pages

Estos componentes serian los accesibles por el router generalmente harian la llamada principal al backend para pasar la data a componentes de dominios, permisos y se encargarian de acoplar diferentes componentes de negocio y `Partials` .

_**Subcarpetas**_

- **Partials**: Los partials son el unico directorio permitido en pages. Son componentes que solamentes se usan en las paginas del dominio pero en multiples paginas como layouts.  
      
    

### Plugins

Servicios de terceros y de framework que pueden ser intercambiables eg. Auth0, Axios, i18n, router*, store*

## Trade offs

**Pros:**

- Provee contexto visual del negocio en la aplicacion. Ideal para mejorar el onboarding de nuevos integrantes
    
- La estructura de dominios es utilizada en backend por lo que seguiria una homogeneidad en el proyecto
    

**Cons**

- Anidacion de folders
    
- Elementos pueden tener dos o mas dominios
    

## Puntos de conflicto:

A continuacion un FAQ de como abordar posibles escenarios de conflicto implementando la estructura descrita con anterioridad

1. **¿Como evitar sobreanidacion de componentes?** Aveces tendemos a agrupar subcomponentes por su implicacion tecnica eg.  
      
    
    `Components |__ Notifications |__ NotificationCard |__ NotificationTypes/ |__ TaskApproved |__ TaskRejected`
    

Se podria reducir una anidacion innesesaria nombrando el componente con el dominio delante o separandolo en su propio dominio

Eg.1

`Components |__ Notifications |__ NotificationCard |__ NotificationTypeTaskApproved |__ NotificationTypeTaskRejected`

Eg. 2

`Components |__ Notifications |__ NotificationCard |__ // ...more components |__ NotificationTypes |_ NotificationTypeTaskApproved |_ NotificationTypeTaskRejected`

2. **¿Qué hacer cuando mi componente se usa en dos dominios?**  
    Habra situaciones en que un dominio se cruce con otro ejemplo los widgets del dashboard se deberian poner en el dominio de dashboard o de su respectivo dominio (Request/ Tasks/ Library).  
      
    En este caso habria que analizar la composicion del componente y requerimientos en este caso especifico los widgets del dashboard solamente se utilizan en el dashboard. si vamos a la composicion del componente el titulo, tipo de grafico estarian tambien atados al dashboard del dominio externo (Request/ Task / Users) solo necesitariamos data, entonces en ese caso es más lógico que se ponga cada widget en el dominio de Dashboard.
    

3. **¿Qué hacer si un componente se usa en más de dos dominios?**  
    Se debe tener en consideracion que puede haber un caso falso ejemplo tanto el dominio de `Assets` como el dominio de `Requests` necesitan un componente para visualizar informacion del activo aunque la tentacion esta en hacer un solo componente que varia el aspecto los ideal es hacer uno para cada dominio `AssetInfo` y `RequestAssetInfo`.  
      
    Un caso mas complejo seria el de `RequestGroup` que se utiliza tanto en `Tasks` como en `Requests` en ese caso su dominio es normal que esté en `Requests` quiza deberian llamarse `FormGroup` `FormGroupFile` y `FormGroupAttribute` y ponerse en components
    

Add label