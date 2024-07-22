import * as fs from 'fs';
import path from 'path';
import { Route } from '../types';

interface DeepRouteDirParams {
  dir: string;
  name: string;
  root: boolean;
  routeList: Route[];
}

const dirname = process.cwd();

export default abstract class Utils {

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
        if (name === '[id]') name = ':id';
        route.path = params.root ? '/' + name : name;
        route.component = `() => import('/${relativePath}')`;
      }
    });

    params.routeList.push(route);
  }
}