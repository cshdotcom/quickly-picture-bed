import{i as s,j as o,I as c,p as i}from"./vendor-GbG8F5IP.js";const a={style:{padding:"10px"}},u=c("custom-button",{type:"primary"},null,-1),d=[u],l=s({__name:"test2",setup(m){return fetch("/index2.js").then(t=>t.text()).then(async t=>{new Function(t)();const n=window.MyPlugin;customElements.define("custom-button",window.Vue.defineCustomElement({...n.component,styles:[await(await fetch("/bundle.css")).text()]}))}),(t,e)=>(i(),o("div",a,d))}});export{l as default};