!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mimbl=t():e.mimbl=t()}(this,function(){return function(e){var t={};function s(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=9)}([function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))(function(r,o){function n(e){try{u(i.next(e))}catch(e){o(e)}}function l(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){e.done?r(e.value):new s(function(t){t(e.value)}).then(n,l)}u((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=s(5);class o{constructor(e){e&&(this.props=e)}updateMe(){this.vn&&this.vn.requestUpdate()}callMe(e,t=!1){this.vn&&this.vn.scheduleCall(e,t)}}t.Component=o;t.Ref=class{constructor(e,t){this.changedEvent=new r.EventSlot,void 0!==e&&this.changedEvent.add(e),this._r=t}addListener(e){this.changedEvent.add(e)}removeListener(e){this.changedEvent.remove(e)}get r(){return this._r}set r(e){this._r!==e&&(this._r=e,this.changedEvent.fire(e))}clear(){this._r=void 0,this.changedEvent.clear()}},t.setRef=function(e,t,s){if("object"==typeof e){let i=e;void 0!==s&&i.r!==s||(i.r=t)}else"function"==typeof e&&e(t)},t.updatable=function(e,t){let s="_m_"+t;Object.defineProperty(e,t,{set(e){this[s]!==e&&(this[s]=e,this.updateMe())},get(){return this[s]}})},t.Fragment=function(e){},t.registerCustomAttribute=function(e,t){!function(e,t){u.ElmAttr.registerProperty(e,{type:3,handlerClass:t})}(e,t)};t.FuncProxy=class extends o{constructor(e){super(),this.update=()=>{this.vn&&this.vn.requestUpdate()},this.func=e}render(){return this.func()}};t.Waiting=class extends o{constructor(e,t,s){super(),this.content=t,this.watchPromise(e,s)}render(){return this.content}watchPromise(e,t){return i(this,void 0,void 0,function*(){try{this.content=yield e}catch(e){if(this.content=null,void 0!==t)try{this.content=t(e)}catch(e){}}})}},t.isSvg=function(e){return"ownerSVGElement"in e},t.isSvgSvg=function(e){return null===e.ownerSVGElement};const n=s(10),l=s(3);t.jsx=function(e,t,...s){let i=1===s.length&&Array.isArray(s[0])?s[0]:s;return l.createNodesFromJSX(e,t,i)},t.mountSync=function(e,t=null){n.RootVN.mountRootSync(e,t)},t.unmountSync=function(e=null){n.RootVN.unmountRootSync(e)},t.mount=function(e,t=null){n.RootVN.mountRoot(e,t)},t.unmount=function(e=null){n.RootVN.unmountRoot(e)};const u=s(4)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(e,t){this.shouldCommit=e,this.shouldRender=t}static getStockValue(e,t){return e?t?i.DoCommitDoRender:i.DoCommitNoRender:t?i.NoCommitDoRender:i.NoCommitNoRender}}function r(e){if(e.ownDN)return e.ownDN;if(!e.subNodes)return null;let t;for(let s=e.subNodes.length-1;s>=0;s--)if(null!=(t=r(e.subNodes[s])))return t;return null}i.DoCommitDoRender=new i(!0,!0),i.DoCommitNoRender=new i(!0,!1),i.NoCommitDoRender=new i(!1,!0),i.NoCommitNoRender=new i(!1,!1),t.VNUpdateDisp=i,t.getFirstDN=function e(t){if(t.ownDN)return t.ownDN;if(!t.subNodes)return null;let s;for(let i of t.subNodes)if(s=e(i))return s;return null},t.getLastDN=r,t.getImmediateDNs=function(e){let t=[];return function e(t,s){if(t.ownDN)s.push(t.ownDN);else if(t.subNodes)for(let i of t.subNodes)e(i,s)}(e,t),t},t.getNextDNUnderSameAnchorDN=function e(t,s){if(t.subNodes&&t.subNodes.length>0){let e=r(t.subNodes[t.subNodes.length-1]);if(e){let t=e.nextSibling;if(null!==t)return t}}for(let e=t.next;void 0!==e;e=e.next){if(!e.anchorDN)return null;const t=r(e);if(t)return t}return t.parent&&t.parent.anchorDN===s?e(t.parent,s):null},t.getVNPath=function(e){let t=e.depth,s=Array(t);for(let i=0,r=e;i<t;i++,r=r.parent)s[i]=r.name;return s}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(0),r=s(1),o=s(6),n=s(11);function l(){try{let[e,t,...s]=arguments;return e?t.apply(e,s):t(...s)}catch(e){let t=this.findService("StdErrorHandling");if(!t)throw e;t.reportError(e,r.getVNPath(this))}}t.VNBase=class{init(e){this.parent=e,this.depth=this.parent?this.parent.depth+1:0}term(){void 0!==this.publishedServices&&(this.publishedServices.forEach((e,t)=>n.notifyServiceUnpublished(t,this)),this.publishedServices.clear()),void 0!==this.subscribedServices&&(this.subscribedServices.forEach((e,t)=>{n.notifyServiceUnsubscribed(t,this)}),this.subscribedServices.clear()),this.next=void 0,this.prev=void 0,this.subNodes=void 0,this.keyedSubNodes=void 0,this.depth=void 0,this.parent=void 0}requestUpdate(){this.updateRequested||(o.requestNodeUpdate(this),this.updateRequested=!0)}scheduleCall(e,t=!1){o.scheduleFuncCall(e,t)}publishService(e,t){void 0===this.publishedServices&&(this.publishedServices=new Map),this.publishedServices.get(e)!==t&&(this.publishedServices.set(e,t),n.notifyServicePublished(e,this))}unpublishService(e){void 0!==this.publishedServices&&(this.publishedServices.delete(e),n.notifyServiceUnpublished(e,this),0===this.publishedServices.size&&(this.publishedServices=void 0))}subscribeService(e,t,s,r){void 0===this.subscribedServices&&(this.subscribedServices=new Map);let o=new u;o.ref=t,o.defaultService=s,o.useSelf=!!r,this.subscribedServices.set(e,o),n.notifyServiceSubscribed(e,this),i.setRef(t,this.getService(e,s))}unsubscribeService(e){if(void 0===this.subscribedServices)return;let t=this.subscribedServices.get(e);void 0!==t&&(i.setRef(t.ref,void 0),this.subscribedServices.delete(e),n.notifyServiceUnsubscribed(e,this),0===this.subscribedServices.size&&(this.subscribedServices=void 0))}getService(e,t,s){let i=this.findService(e,s);return void 0!==i?i:t}findService(e,t){if(t&&void 0!==this.publishedServices){let t=this.publishedServices.get(e);if(void 0!==t)return t}return this.parent?this.parent.findService(e,!0):void 0}notifyServiceChanged(e){if(void 0===this.subscribedServices)return;let t=this.subscribedServices.get(e);void 0!==t&&i.setRef(t.ref,this.getService(e,t.defaultService))}wrapCallback(e,t){return l.bind(this,t,e)}};class u{}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(0),r=s(2),o=s(12),n=s(13),l=s(14),u=s(15),d=s(17);function a(e){if(null==e||!1===e||"function"==typeof e)return null;if("string"==typeof e)return new d.TextVN(e);if(e instanceof r.VNBase)return e;if("function"==typeof e.render)return e.vn?e.vn:new o.IndependentCompVN(e);if(Array.isArray(e)){if(0===e.length)return null;let t=[];for(let s of e){let e=a(s);if(null!==e)if(Array.isArray(e))for(let s of e)t.push(s);else t.push(e)}return t.length>0?t:null}if(e instanceof Promise)throw e;return new d.TextVN(e.toString())}t.createNodesFromContent=a,t.createVNChainFromContent=function(e){let t=a(e);return t?Array.isArray(t)?t:[t]:null},t.createNodesFromJSX=function(e,t,s){return"string"==typeof e?new u.ElmVN(e,t,s):e===i.Fragment?a(s):"function"==typeof e?"function"==typeof e.prototype.render?new n.ManagedCompVN(e,t,s):new l.FuncVN(e,t,s):void 0}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{static registerProperty(e,t){i.propInfos[e]=t}static getPropertyInfo(e){return i.propInfos[e]}static setAttr(e,t,s,i){if(void 0===s)e.setAttribute(t,"string"==typeof i?i:i.toString());else{let r=s.attrName;void 0===r&&(r=t),void 0!==s.set?s.set(e,r,i):e.setAttribute(r,"string"==typeof i?i:i.toString())}}static updateAttr(e,t,s,i,r){if(void 0===s)return i!==r&&(e.setAttribute(t,"string"==typeof r?r:r.toString()),!0);let o;if(void 0!==s.diff){if(void 0===(o=s.diff(t,i,r)))return!1}else i!==r&&(o=r);let n=s.attrName;return void 0===n&&(n=t),void 0!==s.update?s.update(e,n,o):(void 0!==s.remove&&s.remove(e,n),void 0!==s.set?s.set(e,n,o):e.setAttribute(n,"string"==typeof o?o:o.toString())),!0}static removeAttr(e,t,s){if(void 0===s)e.removeAttribute(t);else{let i=s.attrName;void 0===i&&(i=t),void 0!==s.remove?s.remove(e,i):e.removeAttribute(i)}}}function r(e,t,s){e.value=s}function o(e,t,s){}function n(e,t){}function l(e,t,s){e.checked=s}i.propInfos={style:{type:1,set:function(e,t,s){if(null==s)e.removeAttribute("style");else{const t=e.style;for(let e in s){const i=s[e];t[e]!==i&&(t[e]=i)}}},diff:function(e,t,s){if(typeof t!=typeof s)return s;{const e=t,i=s,r={};let o=!1;for(let t in e){const s=e[t],n=i[t];void 0===n?(o=!0,r[t]=void 0):n!==s&&(o=!0,r[t]=n)}for(let t in i){void 0===e[t]&&(o=!0,r[t]=i[t])}return o?r:void 0}},update:function(e,t,s){const i=e.style;for(let e in s){const t=s[e];i[e]=void 0===t?null:t}}},value:{type:1,set:r,diff:function(e,t,s){return s},remove:function(e,t){e.value=null}},defaultValue:{type:1,set:r,diff:o,remove:n},checked:{type:1,set:l,diff:function(e,t,s){return s},remove:function(e,t){e.checked=!1}},defaultChecked:{type:1,set:l,diff:o,remove:n},mouseenter:{type:2,isBubbling:!1},mouseleave:{type:2,isBubbling:!1}},t.ElmAttr=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(){this.fire=this.realFire,this.listeners=null}add(e){null===this.listeners&&(this.listeners=new Set),this.listeners.add(e)}remove(e){null!==this.listeners&&(this.listeners.delete(e),0===this.listeners.size&&(this.listeners=null))}clear(){this.listeners=null}realFire(){if(null!==this.listeners)for(let e of this.listeners)e(...arguments)}}t.EventSlot=i;t.EventMultiSlot=class{addListener(e,t){void 0===this.slots&&(this.slots=new Map);let s=this.slots.get(e);void 0===s&&(s=new i,this.slots.set(e,s)),s.add(t)}removeListener(e,t){if(void 0!==this.slots){let s=this.slots.get(e);void 0!==s&&s.remove(t)}}};t.SimpleEventSlot=class extends i{}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),r=s(3),o=s(18);var n;!function(e){e[e.Idle=0]="Idle",e[e.BeforeUpdate=1]="BeforeUpdate",e[e.Update=2]="Update",e[e.AfterUpdate=3]="AfterUpdate"}(n||(n={}));let l=new Set,u=new Set,d=new Set,a=0,c=n.Idle,h=0,p=null;function f(){0===a&&(a=requestAnimationFrame(m))}t.updateNodeSync=function(e){h++;let t=new Array(1);t[0]=[e],c=n.Update,N(v(t)),c=n.Idle},t.requestNodeUpdate=function(e){e.anchorDN||console.warn(`Update requested for virtual node '${i.getVNPath(e).join("->")}' that doesn't have anchor DOM node`),l.add(e),c!==n.BeforeUpdate&&f()},t.scheduleFuncCall=function(e,t=!1){e&&(t?(u.add(e),f()):(d.add(e),c!==n.BeforeUpdate&&c!==n.Update&&f()))};let m=()=>{if(a=0,h++,u.size>0){c=n.BeforeUpdate;let e=u;u=new Set,y(e,"before")}if(l.size>0){c=n.Update;let e=l;l=new Set,N(v(function(e){let t=new Array(100);return e.forEach(e=>{let s=t[e.depth];s||(s=[],t[e.depth]=s),s.push(e)}),t}(e)))}if(d.size>0){c=n.AfterUpdate;let e=d;d=new Set,y(e,"after")}c=n.Idle};function v(e){let t,s=[];return e.forEach(e=>{e.forEach(e=>{try{if(e.updateRequested=!1,e.lastUpdateTick===h)return;V(t=new o.VNDisp(e,0,e)),s.push(t)}catch(t){let s=e.getService("StdErrorHandling",void 0,!1);if(!s)throw t;s.reportError(t,p?i.getVNPath(p):null)}p=null})}),s}function N(e){e.forEach(e=>{E(e)})}function y(e,t){e.forEach(e=>{try{e()}catch(e){console.error(`Exception while invoking function ${t} updating components\n`,e)}})}function b(e,t){e.init(t),e.parent=t,e.depth=e.parent?e.parent.depth+1:0;let s=e;if(p=s,e.willMount)try{e.willMount()}catch(t){if(!e.supportsErrorHandling||!e.supportsErrorHandling())throw t;e.handleError(t,i.getVNPath(p)),e.willMount()}if(e.render)try{g(e)}catch(t){if(!e.supportsErrorHandling||!e.supportsErrorHandling())throw t;e.handleError(t,i.getVNPath(p)),g(e)}p=s}function g(e){if(e.subNodes=r.createVNChainFromContent(e.render()),e.subNodes){let t;e.subNodes.length>1&&(e.keyedSubNodes=new Map);for(let s of e.subNodes)b(s,e),void 0!==e.keyedSubNodes&&void 0!==s.key&&e.keyedSubNodes.set(s.key,s),t&&(t.next=s,s.prev=t),t=s}}function S(e,t,s){e.anchorDN=t;let i=e.mount?e.mount():void 0;if(i&&e.anchorDN.insertBefore(i,s),e.subNodes){let r=i||t,o=i?null:s;for(let t of e.subNodes)S(t,r,o)}}function w(e){if(e.subNodes)for(let t of e.subNodes)w(t);if(e.willUnmount)try{e.willUnmount()}catch(t){console.error(`Node ${e.name} threw exception '${t.message}' in willUnmount`)}}function D(e){let t=e.ownDN;if(e.unmount&&e.unmount(),t)t.remove();else if(e.subNodes)for(let t=e.subNodes.length-1;t>=0;t--)D(e.subNodes[t]);e.term(),e.anchorDN=void 0}function V(e){let t=e.oldVN,s=t;p=s;try{A(e)}catch(s){if(!t.supportsErrorHandling||!t.supportsErrorHandling())throw s;t.handleError(s,i.getVNPath(p)),A(e)}t.lastUpdateTick=h,p=s}function A(e){if(e.buildSubNodeDispositions(),e.subNodesToRemove)for(let t of e.subNodesToRemove)w(t);if(e.subNodeDisps){let t,s,i=e.oldVN;for(let r of e.subNodeDisps)t=r.oldVN,s=r.newVN,2===r.action?t!==s&&t.prepareUpdate&&(r.updateDisp=t.prepareUpdate(s),r.updateDisp.shouldRender&&V(r)):1===r.action&&b(s,i)}}function E(e){if(e.subNodesToRemove)for(let t of e.subNodesToRemove)D(t);let t=e.oldVN;if(!t.anchorDN)return;let s=t.ownDN,r=null!=s?s:t.anchorDN,o=null!=s?null:i.getNextDNUnderSameAnchorDN(t,r);t.subNodes=e.subNodeDisps?new Array(e.subNodeDisps.length):void 0,t.keyedSubNodes=void 0!==t.subNodes&&t.subNodes.length>1?new Map:void 0,e.subNodeGroups?(function(e,t,s,r,o){let n,l,u,d,a,c,h=t.length-1;for(let p=s.length-1;p>=0;p--){let f=s[p];for(let s=f.last;s>=f.first;s--)u=t[s],d=u.newVN,a=u.oldVN,l=2===f.action?a:d,e.subNodes[h--]=l,2===f.action?(a!==d&&(u.updateDisp.shouldCommit&&a.commitUpdate(d),u.updateDisp.shouldRender&&E(u)),null!=(c=i.getFirstDN(a))&&(o=c)):1===f.action&&(S(d,r,o),null!=(c=i.getFirstDN(d))&&(o=c)),void 0!==e.keyedSubNodes&&void 0!==l.key&&e.keyedSubNodes.set(l.key,l),l.next=l.prev=void 0,n&&(n.prev=l,l.next=n),n=l;f.determineDNs(),f.firstDN&&(o=f.firstDN)}}(t,e.subNodeDisps,e.subNodeGroups,r,o),function(e,t,s,i,r){for(let o=s.length-1;o>0;o--){let n=s[o],l=s[o-1];null!=n.lastDN&&(n.lastDN.nextSibling!==r&&(n.lastDN.nextSibling===l.firstDN&&n.count>l.count?C(e,t,l,i,n.firstDN):C(e,t,n,i,r)),r=n.firstDN)}}(t,e.subNodeDisps,e.subNodeGroups,r,o)):e.subNodeDisps&&function(e,t,s,r){let o,n,l,u,d,a;for(let c=t.length-1;c>=0;c--){if(l=t[c],u=l.newVN,d=l.oldVN,n=2===l.action?d:u,e.subNodes[c]=n,2===l.action){d!==u&&(l.updateDisp.shouldCommit&&d.commitUpdate(u),l.updateDisp.shouldRender&&E(l));let e=i.getImmediateDNs(d);if(e.length>0){if(e[e.length-1].nextSibling!==r)for(let t of e)s.insertBefore(t,r);r=e[0]}}else 1===l.action&&(S(u,s,r),null!=(a=i.getFirstDN(u))&&(r=a));void 0!==e.keyedSubNodes&&void 0!==n.key&&e.keyedSubNodes.set(n.key,n),n.next=n.prev=void 0,o&&(o.prev=n,n.next=o),o=n}}(t,e.subNodeDisps,r,o)}function C(e,t,s,r,o){for(let e=s.first;e<=s.last;e++){let n=2===s.action?t[e].oldVN:t[e].newVN,l=i.getImmediateDNs(n);for(let e of l)r.insertBefore(e,o)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(2);t.ClassCompVN=class extends i.VNBase{get updateStrategy(){return this.comp.getUpdateStrategy?this.comp.getUpdateStrategy():void 0}render(){return this.comp.render()}supportsErrorHandling(){return void 0!==this.comp.handleError}handleError(e,t){this.comp.handleError(e,t)}}},function(e,t,s){"use strict";function i(e){if(!e)return 5;let t=e.length,s=10+t;for(let i=0;i<t;i++)s+=e.charCodeAt(i);return s}Object.defineProperty(t,"__esModule",{value:!0}),t.deepCompare=function e(t,s){if(t===s)return!0;if(null==t&&null==s)return!0;if(null==t||null==s)return!1;if(typeof t!=typeof s)return!1;if("object"==typeof t){for(let i in t)if(!e(t[i],s[i]))return!1;for(let e in s)if(!(e in t))return!1}else{if(Array.isArray(t)!==Array.isArray(s))return!1;if(!Array.isArray(t))return!1;if(t.length!==s.length)return!1;for(let i=0,r=t.length;i<r;i++)if(!e(t[i],s[i]))return!1}return!0},t.hashObject=function e(t){if(void 0===t)return 0;if(null===t)return 1;if(isNaN(0))return 2;if(!0===t)return 3;if(!1===t)return 4;if("number"==typeof t)return 10+t;if("string"==typeof t)return i(t);if("function"==typeof t)return i(t.name);if(Array.isArray(t)){let s=t.length,i=10+s;for(let r=0;r<s;r++)i+=r+e(t[r]);return i}{let s=10;for(let r in t)s+=i(r)+e(t[r]);return s}},t.hashString=i;class r{static MergeClasses(...e){let t;for(let s of e){if(!s)continue;void 0===t?t="":t+=" ",t+="string"==typeof s?s:r.ArrayToString(s)}return t}static ArrayToString(e){return e.join(" ")}}t.Classes=r;class o{static MergeStyles(...e){let t={};return o.MergeStylesTo(t,...e),t}static MergeStylesTo(e,...t){for(let s of t){if(!s)continue;let t="object"==typeof s?s:o.ParseStyleString(s);for(let s in t)e[s]=t[s]}}static ParseStyleString(e){if(!e)return{};let t={},s=e.split(";");for(let e of s){let s=e.split(":");!s||0===s.length||s.length>2||(t[o.DashToCamel(s[0].trim())]=s[1].trim())}return t}static DashToCamel(e){if(!e)return e;let t,s=-1,i=0;for(;(s=e.indexOf("-",s+1))>=0;)void 0===t&&(t=""),t+=e.substr(i,s-i),s!=e.length-1&&(t+=e[s+1].toUpperCase()),i=s+2;return void 0===t?e:(i<e.length&&(t+=e.substr(i)),t)}}t.Styles=o;class n{static MergeSlices(...e){let t={};return n.MergeSlicesTo(t,...e),t}static MergeSlicesTo(e,...t){if(null!=e)for(let s of t)if(s){if(s.style&&(void 0===e.style&&(e.style={}),o.MergeStylesTo(e.style,s.style)),s.className&&(void 0===e.className&&(e.className=""),e.className=r.MergeClasses(e.className,s.className)),s.props){void 0===e.props&&(e.props={});for(let t in s.props)e[t]=s[t]}if(s.content)if(void 0===e.content)e.content=s.content;else{if(!Array.isArray(e.content)){let t=e.content;e.content=[],e.content.push(t)}e.content.push(s.content)}}}}t.Slices=n},function(e,t,s){"use strict";function i(e){for(var s in e)t.hasOwnProperty(s)||(t[s]=e[s])}Object.defineProperty(t,"__esModule",{value:!0}),i(s(0)),i(s(4)),i(s(8)),i(s(5)),i(s(20))},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(6),r=s(2),o=s(19);class n extends r.VNBase{constructor(e){super(),this.thrownPromises=new Set,this.type=0,this.anchorDN=e,this.parent=null,this.depth=0,this.content=null,this.willMount()}get name(){return"Root"}setContent(e,t){this.content=e,t?i.updateNodeSync(this):i.requestNodeUpdate(this)}static mountRootSync(e,t){let s=t||document.body,i=s[n.mimblAnchorPropName];i||(i=new n(s),s[n.mimblAnchorPropName]=i),i.setContent(e,!0)}static unmountRootSync(e){let t=e||document.body;if(!t)return;let s=t[n.mimblAnchorPropName];s&&(delete t[n.mimblAnchorPropName],s.setContent(null,!0),s.term())}static mountRoot(e,t){let s=t||document.body,i=s[n.mimblAnchorPropName];i||(i=new n(s),s[n.mimblAnchorPropName]=i),i.setContent(e,!1)}static unmountRoot(e){let t=e||document.body;if(!t)return;let s=t[n.mimblAnchorPropName];s&&(delete t[n.mimblAnchorPropName],s.setContent(null,!1),s.scheduleCall(()=>s.willUnmount()))}render(){return this.errorUI?this.errorUI:this.waitingUI?this.waitingUI:this.content}willMount(){this.publishService("StdErrorHandling",this)}willUnmount(){this.unpublishService("StdErrorHandling")}supportsErrorHandling(){return!0}handleError(e,t){if(e instanceof Promise){let t=e;this.thrownPromises.add(t),t.then(()=>{this.onPromiseFulfilled(t)}),t.catch(()=>{this.onPromiseFulfilled(t)}),this.waitingUI||(this.waitingUI=new o.RootWaitingUI)}else this.errorUI=new o.RootErrorUI(this,e,t)}restart(){this.errorUI=void 0,i.requestNodeUpdate(this)}reportError(e,t){this.handleError(e,t),i.requestNodeUpdate(this)}onPromiseFulfilled(e){this.thrownPromises.delete(e),0===this.thrownPromises.size&&(this.waitingUI=null,i.requestNodeUpdate(this))}}n.mimblAnchorPropName="__mimblAnchorPropName__",t.RootVN=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(){this.publishingVNs=new Set,this.subscribedVNs=new Set}}let r=new Map;t.notifyServicePublished=function(e,t){let s=r.get(e);void 0===s&&(s=new i,r.set(e,s)),s.publishingVNs.add(t);for(let t of s.subscribedVNs)t.notifyServiceChanged(e)},t.notifyServiceUnpublished=function(e,t){let s=r.get(e);if(void 0!==s)if(s.publishingVNs.delete(t),0===s.publishingVNs.size&&0===s.subscribedVNs.size)r.delete(e);else for(let t of s.subscribedVNs)t.notifyServiceChanged(e)},t.notifyServiceSubscribed=function(e,t){let s=r.get(e);void 0===s&&(s=new i,r.set(e,s)),s.subscribedVNs.add(t)},t.notifyServiceUnsubscribed=function(e,t){let s=r.get(e);void 0!==s&&(s.subscribedVNs.delete(t),0===s.publishingVNs.size&&0===s.subscribedVNs.size&&r.delete(e))}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),r=s(7);t.IndependentCompVN=class extends r.ClassCompVN{constructor(e){super(),this.type=1,this.comp=e}get name(){return this.comp.getDisplayName?this.comp.getDisplayName():this.comp.constructor.name}get key(){return this.comp}willMount(){this.willMountInstance(this.comp)}willUnmount(){this.willUnmountInstance(this.comp)}prepareUpdate(e){let t=e.comp,s=this.comp!==t;return s&&(this.willMountInstance(t),this.willUnmountInstance(this.comp),this.comp=t),i.VNUpdateDisp.getStockValue(!1,s)}willMountInstance(e){e.vn=this,e.willMount&&e.willMount()}willUnmountInstance(e){e.willUnmount&&e.willUnmount(),e.vn=void 0}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(0),r=s(1),o=s(7);t.ManagedCompVN=class extends o.ClassCompVN{constructor(e,t,s){if(super(),this.type=2,this.compClass=e,this.props={},t){for(let e in t){let s=t[e];null!=s&&("key"===e?this.key=s:"ref"===e?this.ref=s:this.props[e]=s)}void 0===this.key&&(this.key=t.id)}this.props.children=s}get name(){if(this.comp&&this.comp.getDisplayName)return this.comp.getDisplayName();{let e=this.compClass.name;return null!=this.key&&(e+="@"+this.key),e}}willMount(){this.comp=new this.compClass(this.props),this.comp.vn=this,this.comp.willMount&&this.comp.willMount(),void 0!==this.ref&&i.setRef(this.ref,this.comp)}willUnmount(){void 0!==this.ref&&i.setRef(this.ref,void 0,this.comp),this.comp.willUnmount&&this.comp.willUnmount(),this.comp.vn=void 0,this.comp=void 0}isUpdatePossible(e){return this.compClass===e.compClass}prepareUpdate(e){let t=e,s=!0;return void 0!==this.comp.shouldUpdate&&(s=this.comp.shouldUpdate(t.props)),t.ref!==this.ref?(this.ref=t.ref,void 0!==this.ref&&i.setRef(this.ref,this.comp)):void 0===t.ref&&i.setRef(this.ref,void 0,this.comp),this.key=t.key,Object.keys(this.props).forEach(e=>delete this.props[e]),Object.assign(this.props,t.props),r.VNUpdateDisp.getStockValue(!1,s)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(0),r=s(1),o=s(2);t.FuncVN=class extends o.VNBase{static isVNaFragment(e){return e.func===i.Fragment}constructor(e,t,s){if(super(),this.type=3,this.func=e,this.props={},t){for(let e in t){let s=t[e];null!=s&&("key"===e?this.key=s:this.props[e]=s)}void 0===this.key&&(this.key=t.id)}this.props.children=s}get name(){let e=this.func.name;return null!=this.key&&(e+="@"+this.key),e}render(){return this.func(this.props)}isUpdatePossible(e){return this.func===e.func}prepareUpdate(e){let t=e;return this.key=t.key,this.func=t.func,this.props=t.props,r.VNUpdateDisp.NoCommitDoRender}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(0),r=s(2),o=s(4),n=s(16),l=s(8);function u(e){return"function"==typeof e||Array.isArray(e)&&e.length>0&&"function"==typeof e[0]}function d(e,t){if("function"==typeof t)return{info:e,orgFunc:t};if(Array.isArray(t)){if(2===t.length)return"boolean"==typeof t[1]?{info:e,orgFunc:t[0],useCapture:t[1]}:{info:e,orgFunc:t[0],that:t[1]};if(3===t.length)return{info:e,orgFunc:t[0],that:t[1],useCapture:t[2]}}}t.ElmVN=class extends r.VNBase{constructor(e,t,s){super(),this.type=4,this.elmName=e,this.props=t,this.children=s,t&&(this.key=t.key,void 0===this.key&&(this.key=t.id))}get name(){let e=this.elmName;return null!=this.key&&(e+="@"+this.key),e}get ownDN(){return this.elm}render(){return this.children}mount(){let e=n.SvgElms.getSvgElmInfo(this.elmName);return this.isSvg=void 0!==e&&(!0!==e||this.anchorDN.namespaceURI.endsWith("svg")),this.elm=this.isSvg?this.elm=document.createElementNS(n.SvgElms.namespace,n.SvgElms.getElmName(e,this.elmName)):this.elm=document.createElement(this.elmName),this.parseProps(),this.attrs&&this.addAttrs(),this.events&&this.addEvents(),this.customAttrs&&this.addCustomAttrs(),void 0!==this.ref&&i.setRef(this.ref,this.elm),this.elm}unmount(){void 0!==this.ref&&i.setRef(this.ref,void 0,this.elm),this.customAttrs&&this.removeCustomAttrs(!0),this.elm=null}isUpdatePossible(e){return this.elmName===e.elmName}prepareUpdate(e){let t=!l.deepCompare(this.props,e.props),s=this.children&&this.children.length>0||e.children&&e.children.length>0;return this.props=e.props,this.children=e.children,{shouldCommit:t,shouldRender:s}}commitUpdate(e){const t=e;t.parseProps(),t.ref!==this.ref&&(this.ref=t.ref,void 0!==this.ref&&i.setRef(this.ref,this.elm)),this.key=t.key,this.updateStrategy=t.updateStrategy,this.updateAttrs(t.attrs),this.updateEvents(t.events),this.updateCustomAttrs(t.customAttrs)}parseProps(){if(!this.props)return;let e,t,s;for(let i in this.props)if("key"!==i&&null!=(e=this.props[i]))if("ref"===i)this.ref=e;else if("updateStrategy"===i)this.updateStrategy=e;else if(1===(s=(t=o.ElmAttr.getPropertyInfo(i))?t.type:u(e)?2:1))this.attrs||(this.attrs={}),this.attrs[i]={info:t,val:e};else if(2===s){let s=d(t,e);s&&(this.events||(this.events={}),this.events[i]=s)}else this.customAttrs||(this.customAttrs={}),this.customAttrs[i]={info:t,val:e,handler:void 0}}addAttrs(){for(let e in this.attrs){let t=this.attrs[e];o.ElmAttr.setAttr(this.elm,e,t.info,t.val)}}updateAttrs(e){let t=this.elm,s=this.attrs;if(s)for(let i in s){let r=s[i],n=e?e[i]:void 0;n&&n.val?o.ElmAttr.updateAttr(t,i,r.info,r.val,n.val):o.ElmAttr.removeAttr(t,i,r.info)}if(e)for(let i in e){if(s&&i in s)continue;let r=e[i];o.ElmAttr.setAttr(t,i,r.info,r.val)}this.attrs=e}addEvents(){for(let e in this.events)this.addEvent(e,this.events[e])}addEvent(e,t){t.wrapper=this.wrapCallback(t.orgFunc,t.that),this.elm.addEventListener(e,t.wrapper,t.useCapture)}removeEvent(e,t){this.elm.removeEventListener(e,t.wrapper,t.useCapture)}updateEvents(e){let t=this.events;if(t)for(let s in t){let i=t[s],r=e?e[s]:void 0;r?this.updateEvent(s,i,r):this.removeEvent(s,i)}if(e)for(let s in e)t&&s in t||this.addEvent(s,e[s]);this.events=e}updateEvent(e,t,s){return t.orgFunc===s.orgFunc&&t.that===s.that&&t.useCapture==s.useCapture?(s.wrapper=t.wrapper,!1):(this.elm.removeEventListener(e,t.wrapper,t.useCapture),s.wrapper=this.wrapCallback(s.orgFunc,s.that),this.elm.addEventListener(e,s.wrapper,s.useCapture),!0)}addCustomAttrs(){for(let e in this.customAttrs){let t=this.customAttrs[e];try{t.handler=new t.info.handlerClass(this,t.val,e)}catch(t){console.error(`Error creating handler for custom attribute '${e}': ${t.message}`),delete this.customAttrs[e];continue}}}removeCustomAttrs(e){for(let t in this.customAttrs){let s=this.customAttrs[t];try{s.handler.terminate(e)}catch(e){console.error(`Error terminating handler for custom attribute '${t}': ${e.message}`)}}}updateCustomAttrs(e){let t=this.customAttrs;if(t)for(let s in t){const i=t[s],r=e?e[s]:void 0;if(r){try{i.handler.update(r.val)}catch(e){console.error(`Error updating handler for custom attribute '${s}': ${e.message}`)}r.handler=i.handler}else try{i.handler.terminate(!1)}catch(e){console.error(`Error terminating handler for custom attribute '${s}': ${e.message}`)}}if(e)for(let s in e){if(t&&s in t)continue;let i=e[s];try{i.handler=new i.info.handlerClass(this,i.val,s)}catch(t){console.error(`Error creating handler for custom attribute '${s}': ${t.message}`),delete e[s];continue}}this.customAttrs=e}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{static register(e,t){i.infos[e]=t}static isSvgElm(e){return e in i.infos}static getSvgElmInfo(e){return i.infos[e]}static isDualPurpose(e){return Array.isArray(e)?e.length>1&&e[1]:"string"!=typeof e&&e}static isTagDualPurpose(e){let t=i.infos[e];return!!t&&i.isDualPurpose(t)}static getElmName(e,t){return Array.isArray(e)?e.length>0?e[0]:t:"string"==typeof e?e:t}static getElmNameForTag(e){let t=i.infos[e];return t?i.getElmName(t,e):e}}i.namespace="http://www.w3.org/2000/svg",i.infos={svg:!1,a:!0,animate:!1,animateMotion:!1,animateTransform:!1,circle:!1,clipPath:!1,colorProfile:"color-profile",defs:!1,desc:!1,discard:!1,ellipse:!1,feBlend:!1,feColorMatrix:!1,feComponentTransfer:!1,feComposite:!1,feConvolveMatrix:!1,feDiffuseLighting:!1,feDisplacementMap:!1,feDistantLight:!1,feDropShadow:!1,feFlood:!1,feFuncA:!1,feFuncB:!1,feFuncG:!1,feFuncR:!1,feGaussianBlur:!1,feImage:!1,feMerge:!1,feMergeNode:!1,feMorphology:!1,feOffset:!1,fePointLight:!1,feSpecularLighting:!1,feSpotLight:!1,feTile:!1,feTurbulence:!1,filter:!1,foreignObject:!1,g:!1,hatch:!1,hatchpath:!1,image:!1,line:!1,linearGradient:!1,marker:!1,mask:!1,metadata:!1,mpath:!1,path:!1,pattern:!1,polygon:!1,polyline:!1,radialGradient:!1,rect:!1,script:!0,set:!1,solidcolor:!1,stop:!1,style:!0,switch:!1,symbol:!1,text:!1,textPath:!1,title:!0,textSpan:!1,use:!1,view:!1},t.SvgElms=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),r=s(2);t.TextVN=class extends r.VNBase{constructor(e){super(),this.type=5,this.text=e}get Text(){return this.text}get TextNode(){return this.txtNode}get name(){return"#text"}get ownDN(){return this.txtNode}mount(){return this.txtNode=document.createTextNode(this.text)}unmount(){this.txtNode=void 0}prepareUpdate(e){return i.VNUpdateDisp.getStockValue(this.text!==e.text,!1)}commitUpdate(e){this.txtNode.nodeValue=this.text=e.text}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),r=s(3);class o{get count(){return this.last-this.first+1}constructor(e,t,s,i){this.parentDisp=e,this.action=t,this.first=s,this.last=i}determineDNs(){let e,t;for(let s=this.first;s<=this.last&&(e=this.parentDisp.subNodeDisps[s],t=2===this.action?e.oldVN:e.newVN,this.firstDN=i.getFirstDN(t),!this.firstDN);s++);for(let s=this.last;s>=this.first&&(e=this.parentDisp.subNodeDisps[s],t=2===this.action?e.oldVN:e.newVN,this.lastDN=i.getLastDN(t),!this.lastDN);s--);}}t.VNDispGroup=o;const n=8;class l{constructor(e,t=0,s){this.action=t,this.newVN=e,this.oldVN=s}buildSubNodeDispositions(){let e=r.createVNChainFromContent(this.oldVN.render()),t=e?e.length:0,s=this.oldVN.subNodes,i=s?s.length:0;if(0===t&&0===i)return;if(0===t)return void(this.subNodesToRemove=s);if(0===i)return this.subNodeDisps=e.map(e=>new l(e,1)),void(t>n&&(this.subNodeGroups=[new o(this,1,0,t-1)]));let d=!0,a=this.oldVN?this.oldVN.updateStrategy:void 0;if(a&&void 0!==a.allowKeyedNodeRecycling&&(d=a.allowKeyedNodeRecycling),1===t&&1===i){let t=e[0],i=s[0],r=new l(t);return this.subNodeDisps=[r],void(i===t||(d||t.key===i.key)&&u(i,t)?(r.action=2,r.oldVN=i):(r.action=1,this.subNodesToRemove=[i]))}let c=this.oldVN.keyedSubNodes,h=c?c.size:0;this.subNodeDisps=new Array(t),this.subNodesToRemove=[],h!==i||d?0===h&&d?this.matchOldNonKeyedOnly(s,i,e,t,t>n):this.matchOldMixed(s,i,c,e,t,d,t>n):this.matchOldKeyedOnly(c,e,t,t>n),0===this.subNodesToRemove.length&&(this.subNodesToRemove=void 0)}matchOldKeyedOnly(e,t,s,i){let r,n,d,a,c,h;i&&(this.subNodeGroups=[]);for(let p=0;p<s;p++)d=t[p],r=this.subNodeDisps[p]=new l(d),void 0===(a=d.key)?c=1:void 0===(n=e.get(a))?c=1:(n===d||u(n,d)?(c=2,r.oldVN=n):(c=1,this.subNodesToRemove.push(n)),e.delete(a)),r.action=c,i&&(h||(h=new o(this,c,p),this.subNodeGroups.push(h)),c!==h.action?(h.last=p-1,h=new o(this,c,p),this.subNodeGroups.push(h)):2===c&&p>0&&this.subNodeDisps[p-1].oldVN!==n.prev&&(h.last=p-1,h=new o(this,c,p),this.subNodeGroups.push(h)));h&&(h.last=s-1),e.forEach(e=>this.subNodesToRemove.push(e))}matchOldNonKeyedOnly(e,t,s,i,r){let o,n,d,a=0;for(;a<i&&a<t;a++)d=s[a],o=this.subNodeDisps[a]=new l(d),(n=e[a])===d||u(n,d)?(o.action=2,o.oldVN=n):(o.action=1,this.subNodesToRemove.push(n));for(let e=a;e<i;e++)this.subNodeDisps[e]=new l(s[e],1);for(let s=a;s<t;s++)this.subNodesToRemove.push(e[s]);r&&this.buildSubNodeGroups()}matchOldMixed(e,t,s,i,r,o,n){let d,a,c,h,p=[];for(let e=0;e<r;e++)c=i[e],d=this.subNodeDisps[e]=new l(c),void 0===(h=c.key)?p.push(d):void 0===(a=s.get(h))?o?p.push(d):d.action=1:(a===c||u(a,c)?(d.action=2,d.oldVN=a):(d.action=1,this.subNodesToRemove.push(a)),s.delete(h));let f=0,m=0,v=p.length;for(;f<t&&m<v;)(void 0===(a=e[f++]).key||s.has(a.key))&&(c=(d=p[m++]).newVN,(o||void 0===a.key&&void 0===c.key)&&u(a,c)?(d.action=2,d.oldVN=a):(d.action=1,this.subNodesToRemove.push(a)));for(let e=m;e<v;e++)p[e].action=1;for(let i=f;i<t;i++)(void 0===(a=e[i]).key||s.has(a.key))&&this.subNodesToRemove.push(a);n&&this.buildSubNodeGroups()}buildSubNodeGroups(){let e=this.subNodeDisps.length;this.subNodeGroups=[];let t,s,i=new o(this,this.subNodeDisps[0].action,0);this.subNodeGroups.push(i);for(let r=1;r<e;r++)(t=(s=this.subNodeDisps[r]).action)!==i.action?(i.last=r-1,i=new o(this,t,r),this.subNodeGroups.push(i)):2===t&&this.subNodeDisps[r-1].oldVN!==s.oldVN.prev&&(i.last=r-1,i=new o(this,t,r),this.subNodeGroups.push(i));void 0!==i&&(i.last=e-1)}}function u(e,t){return e.type===t.type&&(void 0===e.isUpdatePossible||e.isUpdatePossible(t))}t.VNDisp=l},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(0);t.RootErrorUI=class extends i.Component{constructor(e,t,s){super(),this.onRestart=()=>{this.rootVN.restart()},this.rootVN=e,this.err=t,this.pathString=s?s.join(" → "):""}render(){return i.jsx("div",{id:"rootError",style:{display:"flex",flexDirection:"column",alignItems:"start"}},i.jsx("div",null,this.err.message),i.jsx("div",null,this.pathString),i.jsx("hr",{style:{width:"100%"}}),i.jsx("button",{click:this.onRestart},"Restart"))}};t.RootWaitingUI=class extends i.Component{render(){return"Loading ..."}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(0);t.ComponentWithLocalStyles=class extends i.Component{constructor(e=null){super(e),this.m_uniqueID=Math.floor(1e9*Math.random()).toString(),this.rules=new Map,this.ruleNames=[],this.styleElm=document.createElement("style"),this.styleElm.id=this.m_uniqueID,document.head.appendChild(this.styleElm)}get uniqueID(){return this.m_uniqueID}decorateName(e){return e+this.m_uniqueID}createStyleRule(e,t,s){let i=this.createDummyRule(e,"dummy {}"),r=i.cssomRule,n=new o(this.uniqueID,r);return t&&n.setSelector(t),s&&n.setProperties(s),i.mcssRule=n,n}getRule(e){let t=this.rules.get(e);return void 0===t?void 0:t.mcssRule}removeRule(e){}willMount(){this.vn.publishService("LocalStyles",this)}willUnmount(){this.vn.unpublishService("LocalStyles"),this.styleElm.remove()}createDummyRule(e,t){let s=this.rules.get(e);void 0!==s&&this.removeRule(e);let i=this.ruleNames.length,r=this.styleElm.sheet;r.insertRule(t,i);let o=r.rules[i];return this.ruleNames.push(e),s={mcssRule:null,cssomRule:o,index:i},this.rules.set(e,s),s}};class r{constructor(e,t){this.uniqueID=e,this.cssomRule=t}decorate(e){return e+this.uniqueID}replace(e){return e.replace("(*)",this.uniqueID)}}class o extends r{constructor(e,t){super(e,t)}setSelector(e){this.cssomRule.selectorText=this.replace(e)}setProperty(e,t,s){this.cssomRule.style.setProperty(this.replace(e),this.replace(t),s?"important":void 0)}setProperties(e){if(e)for(let t in e)this.cssomRule.style[this.replace(t)]=this.replace(e[t])}removeProperty(e){this.cssomRule.style.removeProperty(this.replace(e))}}}])});
//# sourceMappingURL=mimbl.js.map