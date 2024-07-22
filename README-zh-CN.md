## vite-plugin-route-generator
**简化Vue项目的路由配置。使用这个插件可以通过文件目录约定生成项目路由。**

[English](./README.md)    [简体中文](./README-zh-CN.md)

## 用法

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

添加一行 /// <**reference types="vite-plugin-route-generator/typings.d.ts"** />

**main.ts**

```ts
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
const app = createApp(App);
app.use(router);
```

## 目录结构

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
## 生成的数据结构

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

