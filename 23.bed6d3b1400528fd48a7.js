(function(){var v=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[23],{ln0a:function(h,d,u){"use strict";u.r(d),u.d(d,"countWidgetTypes",function(){return p}),u.d(d,"collectWidgetCount",function(){return f});var m=u("yXPU"),s=u.n(m);function p(){const n=document.querySelectorAll("[data-widget-type], [data-element-type]"),o=Array.from(n).reduce((e,i)=>{const t=i.getAttribute("data-widget-type")||i.getAttribute("data-element-type"),a=i.getAttribute("data-widget-id");let r=`widget-${t}`;return a&&(r=`widget-${t}-${a}`),e[r]||(e[r]={feature:r,count:0}),e[r].count+=1,e},{});return Object.values(o)}function y(){const n=document.querySelectorAll('[data-element-type="mapextension"][provider="mappy"][data-radius-toggle="true"]');return n.length?[{feature:"maps-mappy-radius",conunt:n.length}]:[]}function f(){return l.apply(this,arguments)}function l(){return l=s()(function*(){var n,o;if(!((n=window.rtCommonProps)!==null&&n!==void 0&&n["scripts.widgetCount.enabled"]))return;let e=p();e=e.concat(y());const{_currentPage:i,Parameters:t}=window,a={features:e,siteAlias:t==null?void 0:t.SiteAlias,sitePublicationDate:t!=null&&t.PublicationDate?new Date(t==null?void 0:t.PublicationDate).getTime():0,pageType:t==null?void 0:t.pageType,pageUuid:(i==null||(o=i.pageContent)===null||o===void 0?void 0:o.uuid)||(t==null?void 0:t.InitialPageUuid)||`${i==null?void 0:i.pageID}`,path:location.pathname};g(a)}),l.apply(this,arguments)}function g(n){return c.apply(this,arguments)}function c(){return c=s()(function*(n){try{var o;const e=(o=window.rtCommonProps)===null||o===void 0?void 0:o["runtimecollector.url"];if(!e)return;yield fetch(`${e}/feature/metrics`,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)})}catch(e){console.debug("Failed send metrics for feature count",e)}}),c.apply(this,arguments)}}}])})();