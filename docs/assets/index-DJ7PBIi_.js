(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,a,n=[])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(a).forEach(t=>{s.setAttribute(t,String(a[t]))}),n.length&&n.forEach(t=>{const o=R(...t);s.appendChild(o)}),s};var Q=([e,a,n])=>R(e,a,n);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=e=>Array.from(e.attributes).reduce((a,n)=>(a[n.name]=n.value,a),{}),G=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",X=e=>e.flatMap(G).map(n=>n.trim()).filter(Boolean).filter((n,s,t)=>t.indexOf(n)===s).join(" "),_=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(a,n,s)=>n.toUpperCase()+s.toLowerCase()),z=(e,{nameAttr:a,icons:n,attrs:s})=>{var i;const t=e.getAttribute(a);if(t==null)return;const o=_(t),l=n[o];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const A=Y(e),[h,M,k]=l,L={...M,"data-lucide":t,...s,...A},S=X(["lucide",`lucide-${t}`,A,s]);S&&Object.assign(L,{class:S});const c=Q([h,L,k]);return(i=e.parentNode)==null?void 0:i.replaceChild(c,e)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=["svg",r,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=["svg",r,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=["svg",r,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=["svg",r,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=["svg",r,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=["svg",r,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=["svg",r,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=["svg",r,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=["svg",r,[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=["svg",r,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=["svg",r,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=["svg",r,[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=["svg",r,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=["svg",r,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=["svg",r,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=["svg",r,[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=["svg",r,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=["svg",r,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=["svg",r,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=["svg",r,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=["svg",r,[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=["svg",r,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=["svg",r,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=["svg",r,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=["svg",r,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=["svg",r,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=["svg",r,[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=["svg",r,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=["svg",r,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=["svg",r,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=["svg",r,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=["svg",r,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=["svg",r,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=["svg",r,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=["svg",r,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=["svg",r,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=["svg",r,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=["svg",r,[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=["svg",r,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=["svg",r,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=({icons:e={},nameAttr:a="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const s=document.querySelectorAll(`[${a}]`);if(Array.from(s).forEach(t=>z(t,{nameAttr:a,icons:e,attrs:n})),a==="data-lucide"){const t=document.querySelectorAll("[icon-name]");t.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(t).forEach(o=>z(o,{nameAttr:"icon-name",icons:e,attrs:n})))}},V={ArrowRight:J,ArrowUpRight:W,BadgeCheck:ee,Bell:re,BellRing:te,CalendarDays:ae,Check:ne,ChevronRight:oe,CircleDashed:se,CirclePlay:ce,Clock3:ie,Cookie:le,Database:ue,DatabaseZap:de,FileCheck2:he,FileQuestion:pe,FolderCheck:me,FolderOpen:ve,Info:fe,Landmark:ye,LoaderCircle:ge,Mail:Me,MapPin:Se,Menu:be,Minus:xe,Plus:Ae,Quote:we,Radar:qe,RefreshCw:Le,ScanSearch:Ee,Search:Ce,Settings2:ke,Shield:Ve,ShieldAlert:Oe,ShieldCheck:Ne,SlidersHorizontal:He,Sparkles:ze,TimerOff:Be,Users:Te,X:Ie};N({icons:V,attrs:{"stroke-width":1.8}});const O=document.querySelector("[data-header]"),f=document.querySelector("[data-menu-toggle]"),x=document.querySelector("[data-mobile-menu]"),y=document.querySelector("[data-toast-box]"),B=document.querySelector("[data-toast-message]");let T;const j=e=>{!y||!B||(window.clearTimeout(T),B.textContent=e,y.hidden=!1,requestAnimationFrame(()=>y.classList.add("is-visible")),T=window.setTimeout(()=>{y.classList.remove("is-visible"),window.setTimeout(()=>{y.hidden=!0},220)},4200))},Pe=()=>{!x||!f||(x.hidden=!0,f.setAttribute("aria-expanded","false"),f.setAttribute("aria-label","Ouvrir le menu"),f.innerHTML='<i data-lucide="menu" aria-hidden="true"></i>',N({icons:V,attrs:{"stroke-width":1.8}}))};f==null||f.addEventListener("click",()=>{const e=x.hidden;x.hidden=!e,f.setAttribute("aria-expanded",String(e)),f.setAttribute("aria-label",e?"Fermer le menu":"Ouvrir le menu"),f.innerHTML=`<i data-lucide="${e?"x":"menu"}" aria-hidden="true"></i>`,N({icons:V,attrs:{"stroke-width":1.8}})});x==null||x.querySelectorAll("a").forEach(e=>e.addEventListener("click",Pe));window.addEventListener("scroll",()=>{O==null||O.classList.toggle("is-scrolled",window.scrollY>24)},{passive:!0});document.querySelectorAll("[data-toast]").forEach(e=>{e.addEventListener("click",()=>j(e.dataset.toast))});var $;($=y==null?void 0:y.querySelector("button"))==null||$.addEventListener("click",()=>{y.classList.remove("is-visible"),window.setTimeout(()=>{y.hidden=!0},220)});document.querySelectorAll("[data-accordion] .accordion-item button").forEach(e=>{e.addEventListener("click",()=>{const a=e.closest(".accordion-item"),n=a.querySelector(".accordion-panel"),s=a.classList.contains("is-open");document.querySelectorAll("[data-accordion] .accordion-item").forEach(t=>{var l;t.classList.remove("is-open"),(l=t.querySelector("button"))==null||l.setAttribute("aria-expanded","false");const o=t.querySelector(".accordion-panel");o&&(o.hidden=!0)}),s||(a.classList.add("is-open"),e.setAttribute("aria-expanded","true"),n.hidden=!1)})});const m=document.querySelector("#audit-form"),C=document.querySelector("[data-audit-result]"),I=document.querySelector("[data-club-result]"),U=(e,a)=>{var s;const n=document.querySelector(`[data-error-for="${e.id}"]`);(s=e.closest(".form-field"))==null||s.classList.toggle("has-error",!!a),e.setAttribute("aria-invalid",String(!!a)),n&&(n.textContent=a)};m==null||m.addEventListener("submit",e=>{var s,t;e.preventDefault();const a=[...m.querySelectorAll("[required]")];let n=!0;if(a.forEach(o=>{let l="";o.value.trim()?o.type==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.value)?l="Saisissez une adresse email valide.":o.type==="number"&&(Number(o.value)<1||Number(o.value)>5e3)&&(l="Indiquez un nombre entre 1 et 5 000."):l="Ce champ est nécessaire.",U(o,l),l&&(n=!1)}),!n){(s=m.querySelector('[aria-invalid="true"]'))==null||s.focus();return}I&&(I.textContent=m.elements.clubName.value.trim()),m.hidden=!0,C.hidden=!1,(t=C.focus)==null||t.call(C)});m==null||m.querySelectorAll("input").forEach(e=>{e.addEventListener("input",()=>{e.getAttribute("aria-invalid")==="true"&&U(e,"")})});var D;(D=document.querySelector("[data-reset-audit]"))==null||D.addEventListener("click",()=>{var e;C.hidden=!0,m.hidden=!1,(e=m.querySelector("input"))==null||e.focus()});const P=document.querySelectorAll(".reveal");if("IntersectionObserver"in window){const e=new IntersectionObserver((a,n)=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),n.unobserve(s.target))})},{threshold:.12,rootMargin:"0px 0px -40px"});P.forEach(a=>e.observe(a))}else P.forEach(e=>e.classList.add("is-visible"));const q=document.querySelector("[data-cookie-banner]"),$e=document.querySelectorAll("[data-open-cookies]"),Z="clubpilot-cookie-choice",K=()=>{q&&(q.hidden=!1,requestAnimationFrame(()=>q.classList.add("is-visible")))},De=()=>{q&&(q.classList.remove("is-visible"),window.setTimeout(()=>{q.hidden=!0},240))};document.querySelectorAll("[data-cookie-choice]").forEach(e=>{e.addEventListener("click",()=>{localStorage.setItem(Z,e.dataset.cookieChoice),De(),j(e.dataset.cookieChoice==="accepted"?"Préférences enregistrées. Aucun outil de mesure n’est connecté dans ce prototype.":"Cookies optionnels refusés. Votre choix est enregistré.")})});$e.forEach(e=>e.addEventListener("click",K));localStorage.getItem(Z)||window.setTimeout(K,900);document.querySelectorAll("[data-year]").forEach(e=>{e.textContent=new Date().getFullYear()});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",a=>{const n=e.getAttribute("href");if(!n||n==="#")return;const s=document.querySelector(n);s&&(a.preventDefault(),s.scrollIntoView({behavior:"smooth",block:"start"}))})});window.matchMedia("(prefers-reduced-motion: reduce)").matches&&document.documentElement.classList.add("reduce-motion");const d=document.querySelector("#subsidy-survey");var F;if(d){const e=[...d.querySelectorAll("[data-survey-step]")],a=document.querySelector("[data-progress-bar]"),n=document.querySelector("[data-step-label]"),s=d.querySelector("[data-survey-back]"),t=d.querySelector("[data-survey-next]"),o=d.querySelector("[data-survey-submit]"),l=d.querySelector("[data-error-summary]"),A=document.querySelector("[data-survey-result]");let h=0;const M=()=>{l.hidden=!0,l.textContent="",d.querySelectorAll(".has-error").forEach(c=>c.classList.remove("has-error")),d.querySelectorAll(".field-error").forEach(c=>{c.textContent=""}),d.querySelectorAll('[aria-invalid="true"]').forEach(c=>c.removeAttribute("aria-invalid"))},k=(c,i)=>{l.textContent=c,l.hidden=!1,i instanceof HTMLFieldSetElement&&i.classList.add("has-error"),i==null||i.setAttribute("aria-invalid","true"),l.focus()},L=()=>{M();const i=e[h].querySelector("fieldset");if(i){const u=i.querySelector("input");if(!i.querySelectorAll("input:checked").length){const v=i.querySelector("[data-group-error]"),g="Sélectionnez une réponse avant de continuer.";return v&&(v.textContent=g),k(g,i),u==null||u.focus(),!1}}if(h===e.length-1){const u=d.elements.clubName,p=d.elements.email,v=[[u,u.value.trim()?"":"Saisissez le nom du club."],[p,p.value.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.value.trim())?"":"Saisissez une adresse email valide.":"Saisissez une adresse email."]],g=v.find(([,b])=>b);if(v.forEach(([b,w])=>{var H;const E=d.querySelector(`[data-error-for="${b.id}"]`);(H=b.closest(".form-field"))==null||H.classList.toggle("has-error",!!w),b.setAttribute("aria-invalid",String(!!w)),E&&(E.textContent=w)}),g)return k(g[1],g[0]),g[0].focus(),!1}return!0},S=c=>{var i;h=Math.max(0,Math.min(c,e.length-1)),e.forEach((u,p)=>{const v=p===h;u.hidden=!v,u.classList.toggle("is-active",v)}),M(),a.style.width=`${(h+1)/e.length*100}%`,n.textContent=`Étape ${h+1} sur ${e.length}`,s.hidden=h===0,t.hidden=h===e.length-1,o.hidden=h!==e.length-1,(i=e[h].querySelector("input"))==null||i.focus({preventScroll:!0})};d.querySelectorAll('input[name="financeurs"]').forEach(c=>{c.addEventListener("change",()=>{const i=[...d.querySelectorAll('input[name="financeurs"]')];if(c.dataset.exclusive!==void 0&&c.checked)i.forEach(u=>{u!==c&&(u.checked=!1)});else if(c.checked){const u=i.find(p=>p.dataset.exclusive!==void 0);u&&(u.checked=!1)}M()})}),d.querySelectorAll("input").forEach(c=>{c.addEventListener("change",M),c.addEventListener("input",()=>{c.getAttribute("aria-invalid")==="true"&&M()})}),t.addEventListener("click",()=>{L()&&S(h+1)}),s.addEventListener("click",()=>S(h-1)),d.addEventListener("submit",async c=>{var E;if(c.preventDefault(),!L())return;const i=(E=document.querySelector('meta[name="clubpilot-form-endpoint"]'))==null?void 0:E.content.trim(),u=d.querySelector("[data-submit-status]");if(!i){u.textContent="Le point de réception Google Sheets doit encore être configuré.";return}const p=new FormData(d),v=p.getAll("financeurs").join(", ");p.delete("financeurs"),p.append("financeurs",v);const g=new URLSearchParams(p);o.disabled=!0,o.setAttribute("aria-busy","true"),u.textContent="Envoi en cours…";try{await fetch(i,{method:"POST",mode:"no-cors",body:g})}catch{u.textContent="L’envoi a échoué. Vérifiez votre connexion et réessayez.",o.disabled=!1,o.removeAttribute("aria-busy");return}const b=d.elements.clubName.value.trim(),w=document.querySelector("[data-club-result]");w&&(w.textContent=`au ${b}`),d.hidden=!0,document.querySelector(".survey-meta").hidden=!0,document.querySelector(".survey-progress").hidden=!0,A.hidden=!1,A.focus(),u.textContent="",o.disabled=!1,o.removeAttribute("aria-busy")}),(F=document.querySelector("[data-survey-reset]"))==null||F.addEventListener("click",()=>{A.hidden=!0,d.hidden=!1,document.querySelector(".survey-meta").hidden=!1,document.querySelector(".survey-progress").hidden=!1,S(0)}),S(0)}
