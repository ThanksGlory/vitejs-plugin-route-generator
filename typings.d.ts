import type { Route } from "./src/@types/index";

declare module "virtual:routes-generator" {
  export function routesGenerator(): Route;
}