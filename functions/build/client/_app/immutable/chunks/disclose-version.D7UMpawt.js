import{A as _}from"./runtime.C2i9DcWR.js";function h(e){console.warn("hydration_mismatch")}const w=1,g=2,x=4,O=8,T=1,S=2,I="[",y="[!",E="]",R={},b=Symbol();let a=!1;function C(e){a=e}let r;function c(e){return r=e}function l(){if(r===null)throw h(),R;return r=r.nextSibling}function D(e){a&&(r=e)}function L(){a&&l()}function M(){for(var e=0,n=r;;){if(n.nodeType===8){var t=n.data;if(t===E){if(e===0)return n;e-=1}else(t===I||t===y)&&(e+=1)}var s=n.nextSibling;n.remove(),n=s}}var d;function U(){if(d===void 0){d=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function f(){return document.createTextNode("")}function H(e){if(!a)return e.firstChild;var n=r.firstChild;return n===null&&(n=r.appendChild(f())),c(n),n}function Y(e,n){if(!a){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function k(e,n=!1){if(!a)return e.nextSibling;var t=r.nextSibling,s=t.nodeType;if(n&&s!==3){var i=f();return t==null||t.before(i),c(i),i}return c(t),t}function B(e){e.textContent=""}function N(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function o(e,n){var t;(t=_).nodes??(t.nodes={start:e,end:n})}function F(e,n){var t=(n&T)!==0,s=(n&S)!==0,i,m=!e.startsWith("<!>");return()=>{if(a)return o(r,null),r;i||(i=N(m?e:"<!>"+e),t||(i=i.firstChild));var u=s?document.importNode(i,!0):i.cloneNode(!0);if(t){var v=u.firstChild,p=u.lastChild;o(v,p)}else o(u,u);return u}}function Z(){if(!a){var e=f();return o(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=f()),c(n)),o(n,n),n}function j(){if(a)return o(r,null),r;var e=document.createDocumentFragment(),n=document.createComment(""),t=f();return e.append(n,t),o(n,t),e}function q(e,n){if(a){_.nodes.end=r,l();return}e!==null&&e.before(n)}const A="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(A);export{I as H,x as P,b as U,w as a,g as b,O as c,q as d,l as e,Y as f,f as g,a as h,R as i,C as j,c as k,r as l,E as m,h as n,U as o,B as p,o as q,H as r,k as s,F as t,D as u,L as v,y as w,M as x,j as y,Z as z};