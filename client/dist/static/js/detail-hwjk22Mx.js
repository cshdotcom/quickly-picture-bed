import{a as q,s as G,t as Y,p as te,u as ne,o as U,P as le}from"./index-TExW8zL1.js";import{i as M,a5 as Q,K as P,r as V,o as w,y as J,s as K,p as s,j as c,I as e,k as v,x as d,A as o,B as a,v as h,F as I,z as $,L as j,a as se,C as ae,f as ie,Y as oe}from"./vendor-GbG8F5IP.js";import{_ as ue,a as ce}from"./uplog-md.vue_vue_type_style_index_0_lang-uh_n8sxF.js";import{_ as de}from"./cReward.vue_vue_type_style_index_0_lang-nOmG4gGh.js";const re={class:"plugin-intro"},pe={class:"plugin-intro-left"},_e={class:"plugin-intro-right"},ge={class:"intro-line"},ve=e("div",{class:"intro-line-title"},"插件类型",-1),me={class:"intro-line-content"},fe={class:"intro-line"},he=e("div",{class:"intro-line-title"},"是否收费",-1),ye={class:"intro-line-content"},$e={key:1},ke={class:"intro-line"},be=e("div",{class:"intro-line-title"},"工作环境",-1),Ce={class:"intro-line-content"},we={class:"intro-line"},Pe=e("div",{class:"intro-line-title"},"更多信息",-1),De={class:"intro-line-content"},Be=e("span",null,"插件版本: ",-1),Ee=e("span",null,"插件作者: ",-1),Ve=e("span",null,"安装次数: ",-1),Se=e("span",null,"创建时间: ",-1),Ae=e("span",null,"最近更新: ",-1),Ie={key:0},Me=e("span",null,"安装时间: ",-1),Ne=M({__name:"plugin-intro",props:{detail:{default:()=>({})}},setup(B){const r=B,m=q(),y=Q(),E=P(()=>{const{name:n,version:l}=r.detail;return G()?`${Y}${n}@${l}`:`${Y}${n}/${l}/files`}),f=V(""),k=V(!1),b=P(()=>m.payment_types.reduce((n,l)=>(n[l.value]=l.label,n),{})),g=P(()=>(m.dicts.find(l=>l.code==="plugin_env").values||[]).reduce((l,p)=>(l[p.value]=p.label,l),{})),t=P(()=>(m.dicts.find(l=>l.code==="plugin_type").values||[]).reduce((l,p)=>(l[p.value]=p.label,l),{}));function S(){k.value=!0,fetch(`${E.value}/README.md`).then(n=>n.text()).then(n=>{f.value=n,k.value=!1})}S();function C(n){return te(n,"YYYY-MM-DD")}return(n,l)=>{const p=w("el-tag"),F=J("loading");return K((s(),c("div",re,[e("div",pe,[v(ue,{value:f.value},null,8,["value"])]),e("div",_e,[e("div",ge,[ve,e("div",me,[v(p,null,{default:d(()=>[o(a(t.value[n.detail.category]),1)]),_:1})])]),e("div",fe,[he,e("div",ye,[v(p,null,{default:d(()=>[o(a(b.value[n.detail.payment_type]),1)]),_:1}),n.detail.payment?(s(),h(p,{key:0,effect:"dark"},{default:d(()=>[n.detail.payment_type!=="limited_free"?(s(),c(I,{key:0},[o(a(n.detail.price)+"元",1)],64)):(s(),c("s",$e,a(n.detail.price)+"元",1))]),_:1})):$("",!0)])]),e("div",ke,[be,e("div",Ce,[v(p,null,{default:d(()=>[o(a(g.value[n.detail.platform]),1)]),_:1})])]),e("div",we,[Pe,e("div",De,[e("p",null,[Be,o(a(n.detail.version),1)]),e("p",null,[Ee,o(a(n.detail.author),1)]),e("p",null,[Ve,o(a(n.detail.downloadCounts),1)]),e("p",null,[Se,o(a(C(n.detail.createdAt)),1)]),e("p",null,[Ae,o(a(C(n.detail.updatedAt)),1)]),n.detail.user_plugin.id&&j(y).name==="PluginDetail"?(s(),c("p",Ie,[Me,o(a(C(n.detail.user_plugin.createdAt)),1)])):$("",!0)])])])])),[[F,k.value]])}}}),Ue={class:"plugin-uplog-md"},Ye=M({__name:"plugin-uplog",props:{detail:{default:()=>({})}},setup(B){return(r,m)=>(s(),c("div",Ue,[v(ce,{plugin_name:r.detail.name,plugin_version:r.detail.version},null,8,["plugin_name","plugin_version"])]))}}),Fe={class:"plugin-support-md"},Te=e("p",{class:"title"},"支持作者",-1),je=e("section",null,[e("p",{class:"title"},"联系作者"),e("p",null,"邮箱: itchenliang@163.com"),e("p",null,"QQ: 1825956830"),e("p",null,"Gitee: https://gitee.com/itchenliang"),e("p",null,"Github: https://github.com/ischenliang")],-1),ze=M({__name:"plugin-support",props:{detail:{default:()=>({})}},setup(B){return(r,m)=>(s(),c("div",Fe,[e("section",null,[Te,e("p",null,"作者: "+a(r.detail.author),1),e("p",null,"版本: "+a(r.detail.version),1),e("p",null,"类别: "+a(r.detail.category),1),v(de)]),je]))}}),Le={class:"plugin-runcode"},Re=M({__name:"plugin-runcode",props:{detail:{default:()=>({})}},setup(B){const r=B,m=P(()=>G()?`${Y}${r.detail.name}@${r.detail.user_plugin.version}`:`${Y}${r.detail.name}/${r.detail.user_plugin.version}/files`),y=V(!1);function E(){y.value=!0,fetch(m.value+"/dist/main.js").then(f=>f.text()).then(async f=>{new Function(f)();const b=window.MyPlugin,{name:g,component:t}=b,S="custom-"+g;customElements.get(S)||customElements.define("custom-"+g,window.Vue.defineCustomElement({...t,styles:[await(await fetch(m.value+"/dist/style.css")).text()]}));const C=document.createElement("custom-"+g);C.setAttribute("id",g),document.querySelector(".plugin-runcode").appendChild(C),y.value=!1})}return E(),(f,k)=>{const b=J("loading");return K((s(),c("div",Le,null,512)),[[b,y.value]])}}}),qe={class:"plugin-detail-container"},Ge={class:"plugin-detail-toolbar"},Qe=e("span",null,"返回",-1),Je={class:"plugin-detail-info"},Ke={class:"plugin-detail-info-left"},He=["src"],Oe={key:0,class:"plugin-detail-status status-success"},We={key:1,class:"plugin-detail-status status-danger"},Xe={key:1,class:"plugin-detail-status status-info"},Ze={class:"plugin-detail-platform"},xe={class:"plugin-detail-info-right"},et={class:"plugin-detail-info-title"},tt={class:"plugin-detail-version"},nt={class:"plugin-detail-info-meta"},lt=e("span",{class:"meta-divider"},"|",-1),st=e("span",{class:"meta-divider"},"|",-1),at={class:"plugin-detail-info-desc"},it={class:"plugin-detail-info-tags"},ot={class:"plugin-detail-info-payment"},ut={key:0},ct={key:1},dt={key:0,class:"plugin-detail-info-action"},vt=M({__name:"detail",setup(B){const r={tooler:{active:"禁用后，就不会有在线使用栏目",inactive:"启用后，才能显示在线使用栏目"},themer:{active:"",inactive:""},uploader:{active:"禁用后，创建存储桶时将不会显示该插件",inactive:"启用后，创建存储桶时会显示该插件"},transformer:{active:"",inactive:""},handler:{active:"",inactive:""},commander:{active:"",inactive:""}},m=q(),y=new le,E=oe(),f=Q(),k=ne(),{plugin_id:b}=f.query,g=V("intro"),t=V({}),S=P(()=>m.payment_types.reduce((u,i)=>(u[i.value]=i.label,u),{})),C=P(()=>(m.dicts.find(i=>i.code==="plugin_type").values||[]).reduce((i,_)=>(i[_.value]=_.label,i),{})),n=P(()=>(m.dicts.find(i=>i.code==="plugin_env").values||[]).reduce((i,_)=>(i[_.value]=_.label,i),{}));V("");const l=se({install:!1,uninstall:!1,update:!1,toggle:!1});function p(){b&&y.detail(+b).then(u=>{t.value=u})}p();function F(){const{name:u}=f;return u==="SystemPluginDetail"?E.push({name:"SystemPlugin"}):E.push({name:"Plugin"})}function z(){U(`是否确定${t.value.user_plugin.status?"禁用":"启用"}该插件？`).then(()=>{l.toggle=!0,y.toggleIntsall(t.value.user_plugin.id).then(()=>{const{status:u}=t.value.user_plugin;k.$message({message:u?"禁用成功":"启用成功",type:"success",duration:1e3}),p(),l.toggle=!1})})}function H(){U("是否确定更新插件").then(()=>{l.update=!0,y.updateInstall(t.value.id).then(()=>{k.$message({message:"更新成功",type:"success",duration:1e3}),p(),l.update=!1})})}function O(){const{payment:u,price:i,id:_,payment_type:A}=t.value;u&&A==="paid"?L(_,"该插件是付费插件，卸载后需要再安装需要填写安装秘钥，是否确定卸载"):L(_)}function L(u,i="该操作将删除关联的存储桶，是否确定卸载该插件？"){U(i).then(()=>{l.uninstall=!0,y.uninstall(u).then(()=>{k.$message({message:"更新成功",type:"success",duration:1e3}),p(),l.uninstall=!1,t.value.category==="themer"&&window.location.reload()})})}function W(){const{payment:u,price:i,id:_,payment_type:A}=t.value;u&&A==="paid"?ie.prompt("提示","请输入安装秘钥，该秘钥找客服生成",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{10}$/,inputErrorMessage:"请填写长度为10的安装秘钥"}).then(({value:D})=>{R(_,D)}).catch(()=>{}):R(_)}function R(u,i=""){U("是否确定安装该插件？").then(()=>{l.install=!0,y.install(u,i).then(_=>{p(),k.$message({message:"插件安装成功",type:"success",duration:1e3}),l.install=!1})})}return(u,i)=>{const _=w("Back"),A=w("el-icon"),D=w("el-button"),X=w("el-tooltip"),Z=w("el-tag"),N=w("el-tab-pane"),x=w("el-tabs");return s(),c("div",qe,[e("div",Ge,[e("div",{class:"back-btn",onClick:F},[v(A,null,{default:d(()=>[v(_)]),_:1}),Qe]),t.value.user_plugin.id&&j(f).name==="PluginDetail"?(s(),h(X,{key:0,placement:"bottom",effect:"dark",content:t.value.user_plugin.status?r[t.value.category].active:r[t.value.category].inactive},{default:d(()=>[t.value.user_plugin.status?(s(),h(D,{key:0,type:"danger",size:"small",loading:l.toggle,onClick:z},{default:d(()=>[o(" 禁用插件 ")]),_:1},8,["loading"])):(s(),h(D,{key:1,type:"primary",size:"small",loading:l.toggle,onClick:z},{default:d(()=>[o("启用插件")]),_:1},8,["loading"]))]),_:1},8,["content"])):$("",!0)]),e("div",Je,[e("div",Ke,[e("img",{src:t.value.logo||"https://downloads-51growth.oss-cn-beijing.aliyuncs.com/assets/img/apps/claude.svg",alt:""},null,8,He),t.value.user_plugin.id?(s(),c(I,{key:0},[t.value.user_plugin.status?(s(),c("span",Oe,"已启用")):(s(),c("span",We,"已禁用"))],64)):(s(),c("span",Xe,"未安装")),e("div",Ze,a(n.value[t.value.platform]),1)]),e("div",xe,[e("div",et,[e("span",null,a(t.value.title),1),e("span",tt,a(t.value.version),1)]),e("div",nt,[e("span",null,"作者: "+a(t.value.author),1),lt,e("span",null,"安装次数: "+a(t.value.downloadCounts),1),st,e("span",null,"插件类型: "+a(C.value[t.value.category]),1)]),e("div",at,a(t.value.description),1),e("div",it,[e("span",ot,[o(a(S.value[t.value.payment_type])+" ",1),t.value.payment?(s(),c("span",ut,[o(" ("),e("span",null,[t.value.payment_type!=="limited_free"?(s(),c(I,{key:0},[o(a(t.value.price)+"元",1)],64)):(s(),c("s",ct,a(t.value.price)+"元",1))]),o(") ")])):$("",!0)]),(s(!0),c(I,null,ae(t.value.tags,(T,ee)=>(s(),h(Z,{key:ee},{default:d(()=>[o(a(T),1)]),_:2},1024))),128))])]),j(f).name==="PluginDetail"?(s(),c("div",dt,[t.value.user_plugin.id?(s(),c(I,{key:0},[v(D,{type:"warning",onClick:O,loading:l.uninstall},{default:d(()=>[o("卸载")]),_:1},8,["loading"]),t.value.version!==t.value.user_plugin.version?(s(),h(D,{key:0,type:"primary",loading:l.update,onClick:H},{default:d(()=>[o("更新")]),_:1},8,["loading"])):$("",!0)],64)):(s(),h(D,{key:1,type:"success",onClick:W,loading:l.install},{default:d(()=>[o("安装")]),_:1},8,["loading"]))])):$("",!0)]),v(x,{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=T=>g.value=T),class:"plugin-detail-tabs"},{default:d(()=>[v(N,{label:"插件介绍",name:"intro"},{default:d(()=>[g.value==="intro"?(s(),h(Ne,{key:0,detail:t.value},null,8,["detail"])):$("",!0)]),_:1}),v(N,{label:"支持",name:"support"},{default:d(()=>[g.value==="support"?(s(),h(ze,{key:0,detail:t.value},null,8,["detail"])):$("",!0)]),_:1}),v(N,{label:"更新日志",name:"uplog"},{default:d(()=>[g.value==="uplog"?(s(),h(Ye,{key:0,detail:t.value},null,8,["detail"])):$("",!0)]),_:1}),t.value.user_plugin.status&&t.value.category==="tooler"?(s(),h(N,{key:0,label:"在线使用",name:"onlineuse"},{default:d(()=>[g.value==="onlineuse"?(s(),h(Re,{key:0,detail:t.value},null,8,["detail"])):$("",!0)]),_:1})):$("",!0)]),_:1},8,["modelValue"])])}}});export{vt as default};