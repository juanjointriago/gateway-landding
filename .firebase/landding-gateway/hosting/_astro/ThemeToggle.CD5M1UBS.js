import{j as a}from"./jsx-runtime.D_zvdyIk.js";import{r as m}from"./index.CQ95-tCy.js";import{B as i}from"./button.BnftyeDx.js";import{c as h}from"./createLucideIcon.CREaFIaf.js";import"./utils.CBfrqCZ4.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],l=h("moon",d);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],k=h("sun",g);function v(){const[o,r]=m.useState("light");m.useEffect(()=>{const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches,c=e||(t?"dark":"light");r(c),s(c)},[]);const s=e=>{const t=document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem("theme",e)},n=()=>{const e=o==="light"?"dark":"light";r(e),s(e)};return a.jsx(i,{variant:"ghost",size:"icon",onClick:n,className:"rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200","aria-label":"Toggle theme",children:o==="light"?a.jsx(l,{className:"h-5 w-5 text-gray-700 dark:text-gray-300"}):a.jsx(k,{className:"h-5 w-5 text-gray-700 dark:text-gray-300"})})}export{v as ThemeToggle};
