import * as l from "node:fs";
import m from "node:path";
import g from "node:process";
const c = i;
(function(n, e) {
  const x = i, t = n();
  for (; ; )
    try {
      if (parseInt(x(293)) / 1 + parseInt(x(311)) / 2 + -parseInt(x(309)) / 3 + parseInt(x(302)) / 4 + parseInt(x(301)) / 5 * (-parseInt(x(314)) / 6) + -parseInt(x(306)) / 7 + parseInt(x(291)) / 8 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(u, 831212);
function i(n, e) {
  const x = u();
  return i = function(t, r) {
    return t = t - 288, x[t];
  }, i(n, e);
}
function u() {
  const n = ["670040ZosLjq", "5837328faiaNK", "length", "deepRouteDir", "root", "8556527jNWWev", "toLowerCase", "push", "61350ZwwglI", "forEach", "266610jIelmN", "isDirectory", "children", "54osxrCq", "replace", "statSync", "dir", "13060328XljmFw", "cwd", "54917GrEeuS", "component", "[id]", "readdirSync", "join", "name", "path", "routeList"];
  return u = function() {
    return n;
  }, u();
}
const _ = process[c(292)]();
class R {
  static {
    this.camelCase2Underline = (e) => {
      const x = c;
      return e[x(288)](/\B([A-Z])/g, "-$1")[x(307)]();
    };
  }
  static {
    this[c(304)] = (e) => {
      const x = c, t = l[x(296)](m[x(297)](_, e[x(290)])), r = { name: e[x(298)] === x(295) ? "Id" : e.name, path: "", component: "" };
      t[x(303)] && (t[x(303)] > 1 && (r[x(313)] = []), t[x(310)]((a) => {
        const o = x, d = e[o(290)] + "/" + a, v = m.resolve(_, d);
        if (l[o(289)](v)[o(312)]()) this[o(304)]({ dir: d, name: a, routeList: r[o(313)], root: !1 });
        else {
          let s = this.camelCase2Underline(e[o(298)]);
          s === "[id]" && (s = ":id"), r[o(299)] = e[o(305)] ? "/" + s : s, r[o(294)] = "() => import('/" + d + "')";
        }
      }), e[x(300)][x(308)](r));
    };
  }
}
(function(n, e) {
  const x = p, t = n();
  for (; ; )
    try {
      if (parseInt(x(379)) / 1 * (-parseInt(x(382)) / 2) + parseInt(x(376)) / 3 + -parseInt(x(377)) / 4 * (parseInt(x(372)) / 5) + -parseInt(x(371)) / 6 + parseInt(x(368)) / 7 * (-parseInt(x(383)) / 8) + parseInt(x(374)) / 9 + parseInt(x(375)) / 10 * (parseInt(x(386)) / 11) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(f, 653658);
function f() {
  const n = ["path", `)
          };
        `, "7838988wMwUum", "6505PGZBdr", "forEach", "6264468miwKsg", "10xRwToq", "3604515idYvFG", "3352EBPirE", "deepRouteDir", "269TAGTPY", "join", "readdirSync", "4694vPOhTc", "2056TuFJds", "stringify", "vite-plugin-route-generator", "25090571RgpMga", "13531zxMNWl"];
  return f = function() {
    return n;
  }, f();
}
function p(n, e) {
  const x = f();
  return p = function(t, r) {
    return t = t - 368, x[t];
  }, p(n, e);
}
const w = "virtual:routes-generator", h = "\0" + w, I = [];
function E(n) {
  const e = p, x = g.cwd();
  return l[e(381)](m[e(380)](x, n[e(369)]))[e(373)]((r) => {
    const a = e, o = n[a(369)] + "/" + r;
    R[a(378)]({ dir: o, root: !0, name: r, routeList: I });
  }), { name: e(385), enforce: "pre", resolveId(r) {
    if (r === w) return h;
  }, load(r) {
    const a = e;
    if (r === h) return `
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
            return transformRoutes(` + JSON[a(384)](I) + a(370);
  } };
}
export {
  E as viteRoutesGenerator
};
