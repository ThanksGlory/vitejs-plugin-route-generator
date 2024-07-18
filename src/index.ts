import fs from 'fs';
import path from 'path';
import process from 'process';
import type { Plugin } from 'vite';
import type { Route, Options } from './types';

interface DeepRouteDirParams {
  dir: string;
  name: string;
  root: boolean;
  routeList: Route[];
}

const dirname = process.cwd();

abstract class Utils {

  /**
   * @description 驼峰转换下划线
   * @param {string} name
   */
  static camelCase2Underline = (name: string) => {
    return name.replace(/\B([A-Z])/g, '-$1').toLowerCase();
  }

  static deepRouteDir = (params: DeepRouteDirParams) => {
    // 读取目录
    const files = fs.readdirSync(path.join(dirname, params.dir));
    // 创建初始化路由对象
    const route: Route = {
      name: params.name === '[id]' ? 'Id' : params.name,
      path: '',
      component: ''
    };
    if (!files.length) return;
    if (files.length > 1) {
      route.children = [];
    }
    files.forEach(item => {
      const relativePath = params.dir + '/' + item;
      const itemPath = path.resolve(dirname, relativePath);
      const isdir = fs.statSync(itemPath).isDirectory();
      if (isdir) {
        this.deepRouteDir({
          dir: relativePath,
          name: item,
          routeList: route.children!,
          root: false
        });
      } else {
        let name = this.camelCase2Underline(params.name);
        if (name === '[id]') name = ':' + name;
        route.path = params.root ? '/' + name : name;
        route.component = `() => import('/${relativePath}')`;
      }
    });

    params.routeList.push(route);
  }
}

const virtualModuleId = 'virtual:routes-generator';
const resolvedVirtualModuleId = '\0' + virtualModuleId;
const routeList: Route[] = [];

export function viteRoutesGenerator(opts: Options): Plugin {
  const dir = process.cwd();
  const files = fs.readdirSync(path.join(dir, opts.path));
  files.forEach((item: string) => {
    const dir = opts.path + '/' + item;
    Utils.deepRouteDir({ dir, root: true, name: item, routeList });
  });

  return {
    name: 'vite-plugin-route-generator',
    enforce: 'pre',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `
          function deepRoutes(list) {
            list.forEach((item) => {
              const component = eval(item.component)
              item.component = component;
              if (item.children) {
                deepRoutes(item.children)
              }
            });
          }
          function transformRoutes(routes) {
            const routeList = [...routes];
            deepRoutes(routeList);
            return routeList;
          }
          export const routesGenerator = () => {
            console.log(${JSON.stringify(routeList)})
            return transformRoutes(${JSON.stringify(routeList)})
          };
        `;
      }
    },
  }
}