export interface Options {
    path: string;
}
export interface Route {
    name: string;
    path: string;
    component: string;
    children?: Route[];
}
