import * as fs from 'fs';
import path from 'path';
import process from 'process';
import type { Plugin } from 'vite';
import type { Route, Options } from './types';
import Utils from './utils';

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
            return transformRoutes(${JSON.stringify(routeList)})
          };
        `;
      }
    },
  }
}