function k(){}const M=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function S(){return Object.create(null)}function j(t){t.forEach(E)}function A(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function C(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function D(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t,n,e){t.$$.on_destroy.push(q(n,e))}function U(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const i=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)i[u]=n.dirty[u]|o[u];return i}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,i){if(o){const _=m(n,e,r,i);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function K(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function L(t,n,e){return t.set(e),n}function N(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function d(t){f=t}function y(){if(!f)throw new Error("Function called outside component initialization");return f}function Q(t){y().$$.on_mount.push(t)}function R(t){y().$$.after_update.push(t)}const a=[],g=[];let c=[];const p=[],x=Promise.resolve();let b=!1;function v(){b||(b=!0,x.then(z))}function T(){return v(),x}function O(t){c.push(t)}function V(t){p.push(t)}const h=new Set;let s=0;function z(){if(s!==0)return;const t=f;do{try{for(;s<a.length;){const n=a[s];s++,d(n),F(n.$$)}}catch(n){throw a.length=0,s=0,n}for(d(null),a.length=0,s=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,h.clear(),d(t)}function F(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function W(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{L as A,w as B,K as C,J as D,V as E,C as a,R as b,P as c,g as d,U as e,G as f,I as g,O as h,A as i,M as j,S as k,z as l,D as m,k as n,Q as o,W as p,f as q,j as r,B as s,T as t,H as u,d as v,E as w,a as x,v as y,N as z};