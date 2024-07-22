import { Route } from '../types';
interface DeepRouteDirParams {
    dir: string;
    name: string;
    root: boolean;
    routeList: Route[];
}
export default abstract class Utils {
    static camelCase2Underline: (name: string) => string;
    static deepRouteDir: (params: DeepRouteDirParams) => void;
}
export {};
