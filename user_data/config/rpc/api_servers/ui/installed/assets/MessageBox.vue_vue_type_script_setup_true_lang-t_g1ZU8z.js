import{o as d,c as x,a as $,g as L,r as k,u as N,k as q,t as V,n as K,b as g,w as C,h as _,z as P,L as R,F as T,K as z,y as w,e as b,x as A,A as B,Z as E,Y as F,N as O,P as U,_ as j,ah as M,ai as D}from"./index-B2p78N-x.js";import{a as H,b as I}from"./InfoBox.vue_vue_type_script_setup_true_lang-Dr_hBaFv.js";const J={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Y=$("path",{fill:"currentColor",d:"M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"},null,-1),Z=[Y];function G(p,l){return d(),x("svg",J,[...Z])}const Q={name:"mdi-lock",render:G},W=["title"],X=L({__name:"PairSummary",props:{pairlist:{required:!0,type:Array},currentLocks:{required:!1,type:Array,default:()=>[]},trades:{required:!0,type:Array},sortMethod:{default:"normal",type:String},backtestMode:{required:!1,default:!1,type:Boolean}},setup(p){const l=k(""),o=p,f=N(),v=q(()=>{const i=[];return o.pairlist.forEach(e=>{const a=o.trades.filter(u=>u.pair===e),s=o.currentLocks.filter(u=>u.pair===e);let r="",c;s.sort((u,S)=>u.lock_end_timestamp>S.lock_end_timestamp?-1:1),s.length>0&&([c]=s,r=`${V(c.lock_end_timestamp)} - ${c.reason}`);let n="",m=0,y=0;a.forEach(u=>{m+=u.profit_ratio,y+=u.profit_abs??0});const t=a.length,h=t?a[0]:void 0;a.length>0&&(n=`Current profit: ${K(m)}`),h&&(n+=`
Open since: ${V(h.open_timestamp)}`),(l.value===""||e.toLocaleLowerCase().includes(l.value.toLocaleLowerCase()))&&i.push({pair:e,trade:h,locks:c,lockReason:r,profitString:n,profit:m,profitAbs:y,tradeCount:t})}),o.sortMethod==="profit"?i.sort((e,a)=>e.profit>a.profit?-1:1):i.sort((e,a)=>e.trade&&!a.trade?-1:e.trade&&a.trade?e.trade.trade_id>a.trade.trade_id?1:-1:!e.locks&&a.locks?-1:e.locks&&a.locks?e.locks.lock_end_timestamp>a.locks.lock_end_timestamp?1:-1:1),i});return(i,e)=>{const a=E,s=F,r=Q,c=H,n=I,m=O,y=U;return d(),x("div",null,[g(s,{"label-for":"trade-filter",class:R(["mb-2 ms-2",{"me-4":p.backtestMode,"me-2":!p.backtestMode}])},{default:C(()=>[g(a,{id:"trade-filter",modelValue:_(l),"onUpdate:modelValue":e[0]||(e[0]=t=>P(l)?l.value=t:null),type:"text",placeholder:"Filter"},null,8,["modelValue"])]),_:1},8,["class"]),g(y,null,{default:C(()=>[(d(!0),x(T,null,z(_(v),t=>(d(),w(m,{key:t.pair,button:"",class:"d-flex justify-content-between align-items-center py-1",active:t.pair===_(f).activeBot.selectedPair,title:`${t.pair} - ${t.tradeCount} trades`,onClick:h=>_(f).activeBot.selectedPair=t.pair},{default:C(()=>[$("div",null,[b(A(t.pair)+" ",1),t.locks?(d(),x("span",{key:0,title:t.lockReason},[g(r)],8,W)):B("",!0)]),t.trade&&!p.backtestMode?(d(),w(c,{key:0,trade:t.trade},null,8,["trade"])):B("",!0),p.backtestMode&&t.tradeCount>0?(d(),w(n,{key:1,"profit-ratio":t.profit,"stake-currency":_(f).activeBot.stakeCurrency},null,8,["profit-ratio","stake-currency"])):B("",!0)]),_:2},1032,["active","title","onClick"]))),128))]),_:1})])}}}),ae=j(X,[["__scopeId","data-v-788daab4"]]),oe=L({__name:"MessageBox",setup(p,{expose:l}){const o=k(!1),f=k(""),v=k(""),i=k(()=>{console.warn("Accepted not set.")}),e=()=>{i.value(),o.value=!1};return l({show:s=>{f.value=s.title,v.value=s.message,o.value=!0,i.value=s.accept}}),(s,r)=>{const c=D;return d(),w(c,{id:"MsgBoxModal",ref:"removeTradeModal",modelValue:_(o),"onUpdate:modelValue":r[0]||(r[0]=n=>P(o)?o.value=n:null),title:_(f),onOk:e,onCancel:r[1]||(r[1]=n=>o.value=!1),onKeyup:[r[2]||(r[2]=M(n=>o.value=!1,["esc"])),M(e,["enter"])]},{default:C(()=>[b(A(_(v)),1)]),_:1},8,["modelValue","title"])}}});export{oe as _,ae as a};
//# sourceMappingURL=MessageBox.vue_vue_type_script_setup_true_lang-t_g1ZU8z.js.map