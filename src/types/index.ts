/**
 * @description 插件参数
 */
export interface Options {
  path: string;
}

/**
 * @description 路由项
 */
export interface Route {
  name: string;
  path: string;
  component: string;
  children?: Route[]
}