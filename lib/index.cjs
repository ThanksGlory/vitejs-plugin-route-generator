"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const b=require("node:fs"),l=require("node:path"),w=require("node:process");function y(r){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const x in r)if(x!=="default"){const t=Object.getOwnPropertyDescriptor(r,x);Object.defineProperty(e,x,t.get?t:{enumerable:!0,get:()=>r[x]})}}return e.default=r,Object.freeze(e)}const _=y(b),c=i;(function(r,e){const x=i,t=r();for(;;)try{if(parseInt(x(293))/1+parseInt(x(311))/2+-parseInt(x(309))/3+parseInt(x(302))/4+parseInt(x(301))/5*(-parseInt(x(314))/6)+-parseInt(x(306))/7+parseInt(x(291))/8===e)break;t.push(t.shift())}catch{t.push(t.shift())}})(u,831212);function i(r,e){const x=u();return i=function(t,n){return t=t-288,x[t]},i(r,e)}function u(){const r=["670040ZosLjq","5837328faiaNK","length","deepRouteDir","root","8556527jNWWev","toLowerCase","push","61350ZwwglI","forEach","266610jIelmN","isDirectory","children","54osxrCq","replace","statSync","dir","13060328XljmFw","cwd","54917GrEeuS","component","[id]","readdirSync","join","name","path","routeList"];return u=function(){return r},u()}const m=process[c(292)]();class j{static{this.camelCase2Underline=e=>{const x=c;return e[x(288)](/\B([A-Z])/g,"-$1")[x(307)]()}}static{this[c(304)]=e=>{const x=c,t=_[x(296)](l[x(297)](m,e[x(290)])),n={name:e[x(298)]===x(295)?"Id":e.name,path:"",component:""};t[x(303)]&&(t[x(303)]>1&&(n[x(313)]=[]),t[x(310)](a=>{const o=x,p=e[o(290)]+"/"+a,v=l.resolve(m,p);if(_[o(289)](v)[o(312)]())this[o(304)]({dir:p,name:a,routeList:n[o(313)],root:!1});else{let s=this.camelCase2Underline(e[o(298)]);s==="[id]"&&(s=":id"),n[o(299)]=e[o(305)]?"/"+s:s,n[o(294)]="() => import('/"+p+"')"}}),e[x(300)][x(308)](n))}}}(function(r,e){const x=d,t=r();for(;;)try{if(parseInt(x(379))/1*(-parseInt(x(382))/2)+parseInt(x(376))/3+-parseInt(x(377))/4*(parseInt(x(372))/5)+-parseInt(x(371))/6+parseInt(x(368))/7*(-parseInt(x(383))/8)+parseInt(x(374))/9+parseInt(x(375))/10*(parseInt(x(386))/11)===e)break;t.push(t.shift())}catch{t.push(t.shift())}})(f,653658);function f(){const r=["path",`)
          };
        `,"7838988wMwUum","6505PGZBdr","forEach","6264468miwKsg","10xRwToq","3604515idYvFG","3352EBPirE","deepRouteDir","269TAGTPY","join","readdirSync","4694vPOhTc","2056TuFJds","stringify","vite-plugin-route-generator","25090571RgpMga","13531zxMNWl"];return f=function(){return r},f()}function d(r,e){const x=f();return d=function(t,n){return t=t-368,x[t]},d(r,e)}const g="virtual:routes-generator",h="\0"+g,I=[];function R(r){const e=d,x=w.cwd();return _[e(381)](l[e(380)](x,r[e(369)]))[e(373)](n=>{const a=e,o=r[a(369)]+"/"+n;j[a(378)]({dir:o,root:!0,name:n,routeList:I})}),{name:e(385),enforce:"pre",resolveId(n){if(n===g)return h},load(n){const a=e;if(n===h)return`
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
            return transformRoutes(`+JSON[a(384)](I)+a(370)}}}exports.viteRoutesGenerator=R;
