import{f as d,r as c,s as b,d as m,t as v,u as p}from"../chunks/disclose-version.D7UMpawt.js";import{D as a,t as $,m as h,a as x,b as _,z as w,C as z,B}from"../chunks/runtime.C2i9DcWR.js";import{s as f}from"../chunks/render.BQc3hvKV.js";import{i as C}from"../chunks/lifecycle.CIB9LcBL.js";import{s as D}from"../chunks/entry.0-3npzez.js";function E(s,r,t){if(s==null)return r(void 0),a;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function S(s,r,t){const e=t[r]??(t[r]={store:null,source:h(void 0),unsubscribe:a});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=a;else{var n=!0;e.unsubscribe=E(s,u=>{n?e.source.v=u:_(e.source,u)}),n=!1}return x(e.source)}function j(){const s={};return $(()=>{for(var r in s)s[r].unsubscribe()}),s}const q=()=>{const s=D;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},y={subscribe(s){return q().page.subscribe(s)}};var A=v("<h1> </h1> <p> </p>",1);function K(s,r){w(r,!1);const t=j(),e=()=>S(y,"$page",t);C();var n=A(),u=d(n),g=c(u);p(u);var i=b(b(u,!0)),l=c(i);p(i),z(()=>{var o;f(g,e().status),f(l,(o=e().error)==null?void 0:o.message)}),m(s,n),B()}export{K as component};