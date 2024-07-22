## vite-plugin-route-generator
**Simplify the routing configuration of the Vue project. Use this plug-in to generate project routes through file directory conventions.**

[English](./README.md)       [简体中文](./README-zh-CN.md)

## Usage

**vite.config.ts**

```ts
import { defineConfig, loadEnv } from 'vite';
import { viteRoutesGenerator } from 'vite-plugin-route-generator';

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      viteRoutesGenerator({ path: 'src/views' })
    ]
  });
};
```

**src/router/index.ts**

```ts
import { createRouter, createWebHistory} from 'vue-router';
import { routesGenerator } from 'virtual:routes-generator';

const route = routesGenerator();
const router = createRouter({
  history: createWebHistory(),
  routes: route
});

export default router;
```

**src/vue-shims.d.ts**

```ts
/// <reference types="vite/client" />
+ /// <reference types="vite-plugin-route-generator/typings.d.ts" />

declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}
```

Add a line /// <**reference types="vite-plugin-route-generator/typings.d.ts"** />

**main.ts**

```ts
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
const app = createApp(App);
app.use(router);
```
## Directory structure

```txt
root
├─src
│  ├─views
│  │   ├─About
│  │   │   └─index.vue
│  │   ├─Home
│  │   │   └─index.vue
│  │   │User
│  │   │   ├─[id]
│  │   │   │   └─index.vue
│  │   │   └─index.vue
│  │   ├─Duty
│  │   │   ├─Task
│  │   │   │   ├─TaskList
│  │   │   │   │   └─index.vue
│  │   │   │   └─index.vue
│  │   │   └─DutyHome
│  │   │       └─index.vue
```
## The generated data structure

```json
[
  {
    "name": "About",
    "path": "/about"
  },
  {
    "name": "Duty",
    "path": "/duty",
    "children":
      [
        {
          "name": "DutyHome",
          "path": "duty-home"
        },
        {
          "name": "Task", 
          "path": "task",
          "children":
            [
              {
                "name": "TaskList",
                "path": "task-list"
              }
            ]
        }
      ]
  },
  {
    "name": "Home",
    "path": "/home"
  },
  {
    "name": "User",
    "path": "/user",
    "children": [{ "name": "Id", "path": ":id" }]
  }
]
```
