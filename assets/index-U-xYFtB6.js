(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var sh={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function Xy(){if(T0)return Uo;T0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=e,Uo.jsx=n,Uo.jsxs=n,Uo}var A0;function Wy(){return A0||(A0=1,sh.exports=Xy()),sh.exports}var E=Wy(),oh={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function qy(){if(R0)return ot;R0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function M(U,ee,xe){this.props=U,this.context=ee,this.refs=R,this.updater=xe||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,ee){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ee,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=M.prototype;function z(U,ee,xe){this.props=U,this.context=ee,this.refs=R,this.updater=xe||y}var L=z.prototype=new x;L.constructor=z,b(L,M.prototype),L.isPureReactComponent=!0;var D=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function k(U,ee,xe,Se,Ce,ie){return xe=ie.ref,{$$typeof:s,type:U,key:ee,ref:xe!==void 0?xe:null,props:ie}}function Y(U,ee){return k(U.type,ee,void 0,void 0,void 0,U.props)}function N(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function C(U){var ee={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return ee[xe]})}var F=/\/+/g;function ue(U,ee){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):ee.toString(36)}function le(){}function ce(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(le,le):(U.status="pending",U.then(function(ee){U.status==="pending"&&(U.status="fulfilled",U.value=ee)},function(ee){U.status==="pending"&&(U.status="rejected",U.reason=ee)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function me(U,ee,xe,Se,Ce){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var de=!1;if(U===null)de=!0;else switch(ie){case"bigint":case"string":case"number":de=!0;break;case"object":switch(U.$$typeof){case s:case e:de=!0;break;case g:return de=U._init,me(de(U._payload),ee,xe,Se,Ce)}}if(de)return Ce=Ce(U),de=Se===""?"."+ue(U,0):Se,D(Ce)?(xe="",de!=null&&(xe=de.replace(F,"$&/")+"/"),me(Ce,ee,xe,"",function(qe){return qe})):Ce!=null&&(N(Ce)&&(Ce=Y(Ce,xe+(Ce.key==null||U&&U.key===Ce.key?"":(""+Ce.key).replace(F,"$&/")+"/")+de)),ee.push(Ce)),1;de=0;var Me=Se===""?".":Se+":";if(D(U))for(var Pe=0;Pe<U.length;Pe++)Se=U[Pe],ie=Me+ue(Se,Pe),de+=me(Se,ee,xe,ie,Ce);else if(Pe=v(U),typeof Pe=="function")for(U=Pe.call(U),Pe=0;!(Se=U.next()).done;)Se=Se.value,ie=Me+ue(Se,Pe++),de+=me(Se,ee,xe,ie,Ce);else if(ie==="object"){if(typeof U.then=="function")return me(ce(U),ee,xe,Se,Ce);throw ee=String(U),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return de}function P(U,ee,xe){if(U==null)return U;var Se=[],Ce=0;return me(U,Se,"","",function(ie){return ee.call(xe,ie,Ce++)}),Se}function $(U){if(U._status===-1){var ee=U._result;ee=ee(),ee.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=ee)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function ye(){}return ot.Children={map:P,forEach:function(U,ee,xe){P(U,function(){ee.apply(this,arguments)},xe)},count:function(U){var ee=0;return P(U,function(){ee++}),ee},toArray:function(U){return P(U,function(ee){return ee})||[]},only:function(U){if(!N(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ot.Component=M,ot.Fragment=n,ot.Profiler=l,ot.PureComponent=z,ot.StrictMode=a,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ot.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},ot.cache=function(U){return function(){return U.apply(null,arguments)}},ot.cloneElement=function(U,ee,xe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Se=b({},U.props),Ce=U.key,ie=void 0;if(ee!=null)for(de in ee.ref!==void 0&&(ie=void 0),ee.key!==void 0&&(Ce=""+ee.key),ee)!H.call(ee,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&ee.ref===void 0||(Se[de]=ee[de]);var de=arguments.length-2;if(de===1)Se.children=xe;else if(1<de){for(var Me=Array(de),Pe=0;Pe<de;Pe++)Me[Pe]=arguments[Pe+2];Se.children=Me}return k(U.type,Ce,void 0,void 0,ie,Se)},ot.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ot.createElement=function(U,ee,xe){var Se,Ce={},ie=null;if(ee!=null)for(Se in ee.key!==void 0&&(ie=""+ee.key),ee)H.call(ee,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Ce[Se]=ee[Se]);var de=arguments.length-2;if(de===1)Ce.children=xe;else if(1<de){for(var Me=Array(de),Pe=0;Pe<de;Pe++)Me[Pe]=arguments[Pe+2];Ce.children=Me}if(U&&U.defaultProps)for(Se in de=U.defaultProps,de)Ce[Se]===void 0&&(Ce[Se]=de[Se]);return k(U,ie,void 0,void 0,null,Ce)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(U){return{$$typeof:h,render:U}},ot.isValidElement=N,ot.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:$}},ot.memo=function(U,ee){return{$$typeof:p,type:U,compare:ee===void 0?null:ee}},ot.startTransition=function(U){var ee=B.T,xe={};B.T=xe;try{var Se=U(),Ce=B.S;Ce!==null&&Ce(xe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(ye,q)}catch(ie){q(ie)}finally{B.T=ee}},ot.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ot.use=function(U){return B.H.use(U)},ot.useActionState=function(U,ee,xe){return B.H.useActionState(U,ee,xe)},ot.useCallback=function(U,ee){return B.H.useCallback(U,ee)},ot.useContext=function(U){return B.H.useContext(U)},ot.useDebugValue=function(){},ot.useDeferredValue=function(U,ee){return B.H.useDeferredValue(U,ee)},ot.useEffect=function(U,ee,xe){var Se=B.H;if(typeof xe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(U,ee)},ot.useId=function(){return B.H.useId()},ot.useImperativeHandle=function(U,ee,xe){return B.H.useImperativeHandle(U,ee,xe)},ot.useInsertionEffect=function(U,ee){return B.H.useInsertionEffect(U,ee)},ot.useLayoutEffect=function(U,ee){return B.H.useLayoutEffect(U,ee)},ot.useMemo=function(U,ee){return B.H.useMemo(U,ee)},ot.useOptimistic=function(U,ee){return B.H.useOptimistic(U,ee)},ot.useReducer=function(U,ee,xe){return B.H.useReducer(U,ee,xe)},ot.useRef=function(U){return B.H.useRef(U)},ot.useState=function(U){return B.H.useState(U)},ot.useSyncExternalStore=function(U,ee,xe){return B.H.useSyncExternalStore(U,ee,xe)},ot.useTransition=function(){return B.H.useTransition()},ot.version="19.1.1",ot}var w0;function Bd(){return w0||(w0=1,oh.exports=qy()),oh.exports}var Zt=Bd(),lh={exports:{}},Lo={},ch={exports:{}},uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function Yy(){return C0||(C0=1,(function(s){function e(P,$){var q=P.length;P.push($);e:for(;0<q;){var ye=q-1>>>1,U=P[ye];if(0<l(U,$))P[ye]=$,P[q]=U,q=ye;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var $=P[0],q=P.pop();if(q!==$){P[0]=q;e:for(var ye=0,U=P.length,ee=U>>>1;ye<ee;){var xe=2*(ye+1)-1,Se=P[xe],Ce=xe+1,ie=P[Ce];if(0>l(Se,q))Ce<U&&0>l(ie,Se)?(P[ye]=ie,P[Ce]=q,ye=Ce):(P[ye]=Se,P[xe]=q,ye=xe);else if(Ce<U&&0>l(ie,q))P[ye]=ie,P[Ce]=q,ye=Ce;else break e}}return $}function l(P,$){var q=P.sortIndex-$.sortIndex;return q!==0?q:P.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,v=3,y=!1,b=!1,R=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var $=n(p);$!==null;){if($.callback===null)a(p);else if($.startTime<=P)a(p),$.sortIndex=$.expirationTime,e(m,$);else break;$=n(p)}}function B(P){if(R=!1,D(P),!b)if(n(m)!==null)b=!0,H||(H=!0,ue());else{var $=n(p);$!==null&&me(B,$.startTime-P)}}var H=!1,k=-1,Y=5,N=-1;function C(){return M?!0:!(s.unstable_now()-N<Y)}function F(){if(M=!1,H){var P=s.unstable_now();N=P;var $=!0;try{e:{b=!1,R&&(R=!1,z(k),k=-1),y=!0;var q=v;try{t:{for(D(P),_=n(m);_!==null&&!(_.expirationTime>P&&C());){var ye=_.callback;if(typeof ye=="function"){_.callback=null,v=_.priorityLevel;var U=ye(_.expirationTime<=P);if(P=s.unstable_now(),typeof U=="function"){_.callback=U,D(P),$=!0;break t}_===n(m)&&a(m),D(P)}else a(m);_=n(m)}if(_!==null)$=!0;else{var ee=n(p);ee!==null&&me(B,ee.startTime-P),$=!1}}break e}finally{_=null,v=q,y=!1}$=void 0}}finally{$?ue():H=!1}}}var ue;if(typeof L=="function")ue=function(){L(F)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ce=le.port2;le.port1.onmessage=F,ue=function(){ce.postMessage(null)}}else ue=function(){x(F,0)};function me(P,$){k=x(function(){P(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(P){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var q=v;v=$;try{return P()}finally{v=q}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=v;v=P;try{return $()}finally{v=q}},s.unstable_scheduleCallback=function(P,$,q){var ye=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ye+q:ye):q=ye,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,P={id:g++,callback:$,priorityLevel:P,startTime:q,expirationTime:U,sortIndex:-1},q>ye?(P.sortIndex=q,e(p,P),n(m)===null&&P===n(p)&&(R?(z(k),k=-1):R=!0,me(B,q-ye))):(P.sortIndex=U,e(m,P),b||y||(b=!0,H||(H=!0,ue()))),P},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(P){var $=v;return function(){var q=v;v=$;try{return P.apply(this,arguments)}finally{v=q}}}})(uh)),uh}var D0;function Zy(){return D0||(D0=1,ch.exports=Yy()),ch.exports}var fh={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function Ky(){if(N0)return Cn;N0=1;var s=Bd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Cn.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Cn.requestFormReset=function(m){a.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.1",Cn}var U0;function Qy(){if(U0)return fh.exports;U0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),fh.exports=Ky(),fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function Jy(){if(L0)return Lo;L0=1;var s=Zy(),e=Bd(),n=Qy();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,o=i;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return h(u),t;if(d===o)return h(u),i;d=d.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=d;else{for(var S=!1,A=u.child;A;){if(A===r){S=!0,r=u,o=d;break}if(A===o){S=!0,o=u,r=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===r){S=!0,r=d,o=u;break}if(A===o){S=!0,o=d,r=u;break}A=A.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case L:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case Y:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}var me=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ye=[],U=-1;function ee(t){return{current:t}}function xe(t){0>U||(t.current=ye[U],ye[U]=null,U--)}function Se(t,i){U++,ye[U]=t.current,t.current=i}var Ce=ee(null),ie=ee(null),de=ee(null),Me=ee(null);function Pe(t,i){switch(Se(de,i),Se(ie,t),Se(Ce,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?$g(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=$g(i),t=e0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xe(Ce),Se(Ce,t)}function qe(){xe(Ce),xe(ie),xe(de)}function it(t){t.memoizedState!==null&&Se(Me,t);var i=Ce.current,r=e0(i,t.type);i!==r&&(Se(ie,t),Se(Ce,r))}function kt(t){ie.current===t&&(xe(Ce),xe(ie)),Me.current===t&&(xe(Me),Ro._currentValue=q)}var pt=Object.prototype.hasOwnProperty,V=s.unstable_scheduleCallback,Dt=s.unstable_cancelCallback,Qe=s.unstable_shouldYield,Mt=s.unstable_requestPaint,Fe=s.unstable_now,jt=s.unstable_getCurrentPriorityLevel,He=s.unstable_ImmediatePriority,st=s.unstable_UserBlockingPriority,Kt=s.unstable_NormalPriority,Qt=s.unstable_LowPriority,O=s.unstable_IdlePriority,T=s.log,te=s.unstable_setDisableYieldValue,fe=null,ve=null;function oe(t){if(typeof T=="function"&&te(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(fe,t)}catch{}}var Ie=Math.clz32?Math.clz32:We,Re=Math.log,je=Math.LN2;function We(t){return t>>>=0,t===0?32:31-(Re(t)/je|0)|0}var be=256,Ue=4194304;function Ze(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ke(t,i,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Ze(o):(S&=A,S!==0?u=Ze(S):r||(r=A&~t,r!==0&&(u=Ze(r))))):(A=o&~d,A!==0?u=Ze(A):S!==0?u=Ze(S):r||(r=o&~t,r!==0&&(u=Ze(r)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:u}function De(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function rt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var t=be;return be<<=1,(be&4194048)===0&&(be=256),t}function Ae(){var t=Ue;return Ue<<=1,(Ue&62914560)===0&&(Ue=4194304),t}function we(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Be(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ee(t,i,r,o,u,d){var S=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,J=t.hiddenUpdates;for(r=S&~r;0<r;){var he=31-Ie(r),ge=1<<he;A[he]=0,I[he]=-1;var ne=J[he];if(ne!==null)for(J[he]=null,he=0;he<ne.length;he++){var ae=ne[he];ae!==null&&(ae.lane&=-536870913)}r&=~ge}o!==0&&_e(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~i))}function _e(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Ie(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function Ge(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var o=31-Ie(r),u=1<<o;u&i|t[o]&i&&(t[o]|=i),r&=~u}}function at(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Nt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:x0(t.type))}function di(t,i){var r=$.p;try{return $.p=t,i()}finally{$.p=r}}var fn=Math.random().toString(36).slice(2),hn="__reactFiber$"+fn,$t="__reactProps$"+fn,Ai="__reactContainer$"+fn,Ar="__reactEvents$"+fn,$o="__reactListeners$"+fn,Rr="__reactHandles$"+fn,zs="__reactResources$"+fn,Ri="__reactMarker$"+fn;function wr(t){delete t[hn],delete t[$t],delete t[Ar],delete t[$o],delete t[Rr]}function Fi(t){var i=t[hn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[Ai]||r[hn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=a0(t);t!==null;){if(r=t[hn])return r;t=a0(t)}return i}t=r,r=t.parentNode}return null}function da(t){if(t=t[hn]||t[Ai]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function Ya(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function pa(t){var i=t[zs];return i||(i=t[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function on(t){t[Ri]=!0}var el=new Set,tl={};function w(t,i){X(t,i),X(t+"Capture",i)}function X(t,i){for(tl[t]=i,t=0;t<i.length;t++)el.add(i[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Z={};function Te(t){return pt.call(Z,t)?!0:pt.call(se,t)?!1:re.test(t)?Z[t]=!0:(se[t]=!0,!1)}function Ne(t,i,r){if(Te(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function ze(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function Le(t,i,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+o)}}var Je,et;function Xe(t){if(Je===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Je=i&&i[1]||"",et=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+t+et}var ct=!1;function Tt(t,i){if(!t||ct)return"";ct=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(ae){var ne=ae}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(ae){ne=ae}t.call(ge.prototype)}}else{try{throw Error()}catch(ae){ne=ae}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(ae){if(ae&&ne&&typeof ae.stack=="string")return[ae.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var I=S.split(`
`),J=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===J.length)for(o=I.length-1,u=J.length-1;1<=o&&0<=u&&I[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==J[u]){var he=`
`+I[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=u);break}}}finally{ct=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Xe(r):""}function qt(t){switch(t.tag){case 26:case 27:case 5:return Xe(t.type);case 16:return Xe("Lazy");case 13:return Xe("Suspense");case 19:return Xe("SuspenseList");case 0:case 15:return Tt(t.type,!1);case 11:return Tt(t.type.render,!1);case 1:return Tt(t.type,!0);case 31:return Xe("Activity");default:return""}}function Pt(t){try{var i="";do i+=qt(t),t=t.return;while(t);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function ut(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Wt(t){var i=Ke(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),o=""+t[i];if(!t.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,d.call(this,S)}}),Object.defineProperty(t,i,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function mt(t){t._valueTracker||(t._valueTracker=Wt(t))}function An(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),o="";return t&&(o=Ke(t)?t.checked?"true":"false":t.value),t=o,t!==r?(i.setValue(t),!0):!1}function pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ln=/[\n"\\]/g;function _n(t){return t.replace(Ln,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Vt(t,i,r,o,u,d,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ut(i)):t.value!==""+ut(i)&&(t.value=""+ut(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?Rn(t,S,ut(i)):r!=null?Rn(t,S,ut(r)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ut(A):t.removeAttribute("name")}function On(t,i,r,o,u,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;r=r!=null?""+ut(r):"",i=i!=null?""+ut(i):r,A||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Rn(t,i,r){i==="number"&&pi(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function en(t,i,r,o){if(t=t.options,i){i={};for(var u=0;u<r.length;u++)i["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=i.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+ut(r),i=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function Mn(t,i,r){if(i!=null&&(i=""+ut(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+ut(r):""}function Cr(t,i,r,o){if(i==null){if(o!=null){if(r!=null)throw Error(a(92));if(me(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),i=r}r=ut(i),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function Fn(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var Gv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $d(t,i,r){var o=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,r):typeof r!="number"||r===0||Gv.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function ep(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&r[u]!==o&&$d(t,u,o)}else for(var d in i)i.hasOwnProperty(d)&&$d(t,d,i[d])}function au(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(t){return jv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ru=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dr=null,Nr=null;function tp(t){var i=da(t);if(i&&(t=i.stateNode)){var r=t[$t]||null;e:switch(t=i.stateNode,i.type){case"input":if(Vt(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+_n(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var o=r[i];if(o!==t&&o.form===t.form){var u=o[$t]||null;if(!u)throw Error(a(90));Vt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<r.length;i++)o=r[i],o.form===t.form&&An(o)}break e;case"textarea":Mn(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&en(t,!!r.multiple,i,!1)}}}var ou=!1;function np(t,i,r){if(ou)return t(i,r);ou=!0;try{var o=t(i);return o}finally{if(ou=!1,(Dr!==null||Nr!==null)&&(Vl(),Dr&&(i=Dr,t=Nr,Nr=Dr=null,tp(i),t)))for(i=0;i<t.length;i++)tp(t[i])}}function Fs(t,i){var r=t.stateNode;if(r===null)return null;var o=r[$t]||null;if(o===null)return null;r=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(Hi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{lu=!1}var ma=null,cu=null,il=null;function ip(){if(il)return il;var t,i=cu,r=i.length,o,u="value"in ma?ma.value:ma.textContent,d=u.length;for(t=0;t<r&&i[t]===u[t];t++);var S=r-t;for(o=1;o<=S&&i[r-o]===u[d-o];o++);return il=u.slice(t,1<o?1-o:void 0)}function al(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function ap(){return!1}function Hn(t){function i(r,o,u,d,S){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(r=t[A],this[A]=r?r(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?rl:ap,this.isPropagationStopped=ap,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),i}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Hn(Za),Vs=g({},Za,{view:0,detail:0}),Xv=Hn(Vs),uu,fu,Gs,ol=g({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(uu=t.screenX-Gs.screenX,fu=t.screenY-Gs.screenY):fu=uu=0,Gs=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),rp=Hn(ol),Wv=g({},ol,{dataTransfer:0}),qv=Hn(Wv),Yv=g({},Vs,{relatedTarget:0}),hu=Hn(Yv),Zv=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=Hn(Zv),Qv=g({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jv=Hn(Qv),$v=g({},Za,{data:0}),sp=Hn($v),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=nx[t])?!!i[t]:!1}function du(){return ix}var ax=g({},Vs,{key:function(t){if(t.key){var i=ex[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rx=Hn(ax),sx=g({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Hn(sx),ox=g({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),lx=Hn(ox),cx=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=Hn(cx),fx=g({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Hn(fx),dx=g({},Za,{newState:0,oldState:0}),px=Hn(dx),mx=[9,13,27,32],pu=Hi&&"CompositionEvent"in window,ks=null;Hi&&"documentMode"in document&&(ks=document.documentMode);var gx=Hi&&"TextEvent"in window&&!ks,lp=Hi&&(!pu||ks&&8<ks&&11>=ks),cp=" ",up=!1;function fp(t,i){switch(t){case"keyup":return mx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function _x(t,i){switch(t){case"compositionend":return hp(i);case"keypress":return i.which!==32?null:(up=!0,cp);case"textInput":return t=i.data,t===cp&&up?null:t;default:return null}}function vx(t,i){if(Ur)return t==="compositionend"||!pu&&fp(t,i)?(t=ip(),il=cu=ma=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lp&&i.locale!=="ko"?null:i.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!xx[t.type]:i==="textarea"}function pp(t,i,r,o){Dr?Nr?Nr.push(o):Nr=[o]:Dr=o,i=ql(i,"onChange"),0<i.length&&(r=new sl("onChange","change",null,r,o),t.push({event:r,listeners:i}))}var js=null,Xs=null;function yx(t){Yg(t,0)}function ll(t){var i=Ya(t);if(An(i))return t}function mp(t,i){if(t==="change")return i}var gp=!1;if(Hi){var mu;if(Hi){var gu="oninput"in document;if(!gu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),gu=typeof _p.oninput=="function"}mu=gu}else mu=!1;gp=mu&&(!document.documentMode||9<document.documentMode)}function vp(){js&&(js.detachEvent("onpropertychange",xp),Xs=js=null)}function xp(t){if(t.propertyName==="value"&&ll(Xs)){var i=[];pp(i,Xs,t,su(t)),np(yx,i)}}function Sx(t,i,r){t==="focusin"?(vp(),js=i,Xs=r,js.attachEvent("onpropertychange",xp)):t==="focusout"&&vp()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(Xs)}function bx(t,i){if(t==="click")return ll(i)}function Ex(t,i){if(t==="input"||t==="change")return ll(i)}function Tx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Wn=typeof Object.is=="function"?Object.is:Tx;function Ws(t,i){if(Wn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),o=Object.keys(i);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!pt.call(i,u)||!Wn(t[u],i[u]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,i){var r=yp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=i&&o>=i)return{node:r,offset:i-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yp(r)}}function Mp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Mp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=pi(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=pi(t.document)}return i}function _u(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Ax=Hi&&"documentMode"in document&&11>=document.documentMode,Lr=null,vu=null,qs=null,xu=!1;function Ep(t,i,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;xu||Lr==null||Lr!==pi(o)||(o=Lr,"selectionStart"in o&&_u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qs&&Ws(qs,o)||(qs=o,o=ql(vu,"onSelect"),0<o.length&&(i=new sl("onSelect","select",null,i,r),t.push({event:i,listeners:o}),i.target=Lr)))}function Ka(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Or={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},yu={},Tp={};Hi&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Qa(t){if(yu[t])return yu[t];if(!Or[t])return t;var i=Or[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Tp)return yu[t]=i[r];return t}var Ap=Qa("animationend"),Rp=Qa("animationiteration"),wp=Qa("animationstart"),Rx=Qa("transitionrun"),wx=Qa("transitionstart"),Cx=Qa("transitioncancel"),Cp=Qa("transitionend"),Dp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function mi(t,i){Dp.set(t,i),w(i,[t])}var Np=new WeakMap;function ni(t,i){if(typeof t=="object"&&t!==null){var r=Np.get(t);return r!==void 0?r:(i={value:t,source:i,stack:Pt(i)},Np.set(t,i),i)}return{value:t,source:i,stack:Pt(i)}}var ii=[],Pr=0,Mu=0;function cl(){for(var t=Pr,i=Mu=Pr=0;i<t;){var r=ii[i];ii[i++]=null;var o=ii[i];ii[i++]=null;var u=ii[i];ii[i++]=null;var d=ii[i];if(ii[i++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&Up(r,u,d)}}function ul(t,i,r,o){ii[Pr++]=t,ii[Pr++]=i,ii[Pr++]=r,ii[Pr++]=o,Mu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function bu(t,i,r,o){return ul(t,i,r,o),fl(t)}function Ir(t,i){return ul(t,null,null,i),fl(t)}function Up(t,i,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=t.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Ie(r),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[i]:o.push(i),i.lane=r|536870912),d):null}function fl(t){if(50<xo)throw xo=0,Df=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Br={};function Dx(t,i,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,r,o){return new Dx(t,i,r,o)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,i){var r=t.alternate;return r===null?(r=qn(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Lp(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function hl(t,i,r,o,u,d){var S=0;if(o=t,typeof t=="function")Eu(t)&&(S=1);else if(typeof t=="string")S=Uy(t,r,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=qn(31,r,i,u),t.elementType=N,t.lanes=d,t;case b:return Ja(r.children,u,d,i);case R:S=8,u|=24;break;case M:return t=qn(12,r,i,u|2),t.elementType=M,t.lanes=d,t;case B:return t=qn(13,r,i,u),t.elementType=B,t.lanes=d,t;case H:return t=qn(19,r,i,u),t.elementType=H,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case L:S=10;break e;case z:S=9;break e;case D:S=11;break e;case k:S=14;break e;case Y:S=16,o=null;break e}S=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return i=qn(S,r,i,u),i.elementType=t,i.type=o,i.lanes=d,i}function Ja(t,i,r,o){return t=qn(7,t,o,i),t.lanes=r,t}function Tu(t,i,r){return t=qn(6,t,null,i),t.lanes=r,t}function Au(t,i,r){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var zr=[],Fr=0,dl=null,pl=0,ai=[],ri=0,$a=null,Gi=1,ki="";function er(t,i){zr[Fr++]=pl,zr[Fr++]=dl,dl=t,pl=i}function Op(t,i,r){ai[ri++]=Gi,ai[ri++]=ki,ai[ri++]=$a,$a=t;var o=Gi;t=ki;var u=32-Ie(o)-1;o&=~(1<<u),r+=1;var d=32-Ie(i)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Gi=1<<32-Ie(i)+u|r<<u|o,ki=d+t}else Gi=1<<d|r<<u|o,ki=t}function Ru(t){t.return!==null&&(er(t,1),Op(t,1,0))}function wu(t){for(;t===dl;)dl=zr[--Fr],zr[Fr]=null,pl=zr[--Fr],zr[Fr]=null;for(;t===$a;)$a=ai[--ri],ai[ri]=null,ki=ai[--ri],ai[ri]=null,Gi=ai[--ri],ai[ri]=null}var Pn=null,tn=null,wt=!1,tr=null,wi=!1,Cu=Error(a(519));function nr(t){var i=Error(a(418,""));throw Ks(ni(i,t)),Cu}function Pp(t){var i=t.stateNode,r=t.type,o=t.memoizedProps;switch(i[hn]=t,i[$t]=o,r){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<So.length;r++)_t(So[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":_t("invalid",i),On(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),mt(i);break;case"select":_t("invalid",i);break;case"textarea":_t("invalid",i),Cr(i,o.value,o.defaultValue,o.children),mt(i)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||o.suppressHydrationWarning===!0||Jg(i.textContent,r)?(o.popover!=null&&(_t("beforetoggle",i),_t("toggle",i)),o.onScroll!=null&&_t("scroll",i),o.onScrollEnd!=null&&_t("scrollend",i),o.onClick!=null&&(i.onclick=Yl),i=!0):i=!1,i||nr(t)}function Ip(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Pn=Pn.return}}function Ys(t){if(t!==Pn)return!1;if(!wt)return Ip(t),wt=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Wf(t.type,t.memoizedProps)),r=!r),r&&tn&&nr(t),Ip(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(i===0){tn=_i(t.nextSibling);break e}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;t=t.nextSibling}tn=null}}else i===27?(i=tn,Na(t.type)?(t=Kf,Kf=null,tn=t):tn=i):tn=Pn?_i(t.stateNode.nextSibling):null;return!0}function Zs(){tn=Pn=null,wt=!1}function Bp(){var t=tr;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),tr=null),t}function Ks(t){tr===null?tr=[t]:tr.push(t)}var Du=ee(null),ir=null,ji=null;function ga(t,i,r){Se(Du,i._currentValue),i._currentValue=r}function Xi(t){t._currentValue=Du.current,xe(Du)}function Nu(t,i,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===r)break;t=t.return}}function Uu(t,i,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var I=0;I<i.length;I++)if(A.context===i[I]){d.lanes|=r,A=d.alternate,A!==null&&(A.lanes|=r),Nu(d.return,r,t),o||(S=null);break e}d=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(a(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),Nu(S,r,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Qs(t,i,r,o){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=u.type;Wn(u.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(u===Me.current){if(S=u.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}u=u.return}t!==null&&Uu(i,t,r,o),i.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return zp(ir,t)}function gl(t,i){return ir===null&&ar(t),zp(t,i)}function zp(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ji===null){if(t===null)throw Error(a(308));ji=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ji=ji.next=i;return r}var Nx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},Ux=s.unstable_scheduleCallback,Lx=s.unstable_NormalPriority,dn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new Nx,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&Ux(Lx,function(){t.controller.abort()})}var $s=null,Ou=0,Hr=0,Vr=null;function Ox(t,i){if($s===null){var r=$s=[];Ou=0,Hr=Bf(),Vr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Ou++,i.then(Fp,Fp),i}function Fp(){if(--Ou===0&&$s!==null){Vr!==null&&(Vr.status="fulfilled");var t=$s;$s=null,Hr=0,Vr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Px(t,i){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<r.length;u++)(0,r[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var Hp=P.S;P.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ox(t,i),Hp!==null&&Hp(t,i)};var rr=ee(null);function Pu(){var t=rr.current;return t!==null?t:Xt.pooledCache}function _l(t,i){i===null?Se(rr,rr.current):Se(rr,i.pool)}function Vp(){var t=Pu();return t===null?null:{parent:dn._currentValue,pool:t}}var eo=Error(a(460)),Gp=Error(a(474)),vl=Error(a(542)),Iu={then:function(){}};function kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xl(){}function jp(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(xl,xl),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Wp(t),t;default:if(typeof i.status=="string")i.then(xl,xl);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Wp(t),t}throw to=i,eo}}var to=null;function Xp(){if(to===null)throw Error(a(459));var t=to;return to=null,t}function Wp(t){if(t===eo||t===vl)throw Error(a(483))}var _a=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,i,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=fl(t),Up(t,null,r),i}return ul(t,o,i,r),fl(t)}function no(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,Ge(t,r)}}function Fu(t,i){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?u=d=i:d=d.next=i}else u=d=i;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var Hu=!1;function io(){if(Hu){var t=Vr;if(t!==null)throw t}}function ao(t,i,r,o){Hu=!1;var u=t.updateQueue;_a=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,J=I.next;I.next=null,S===null?d=J:S.next=J,S=I;var he=t.alternate;he!==null&&(he=he.updateQueue,A=he.lastBaseUpdate,A!==S&&(A===null?he.firstBaseUpdate=J:A.next=J,he.lastBaseUpdate=I))}if(d!==null){var ge=u.baseState;S=0,he=J=I=null,A=d;do{var ne=A.lane&-536870913,ae=ne!==A.lane;if(ae?(St&ne)===ne:(o&ne)===ne){ne!==0&&ne===Hr&&(Hu=!0),he!==null&&(he=he.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var nt=t,$e=A;ne=i;var zt=r;switch($e.tag){case 1:if(nt=$e.payload,typeof nt=="function"){ge=nt.call(zt,ge,ne);break e}ge=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=$e.payload,ne=typeof nt=="function"?nt.call(zt,ge,ne):nt,ne==null)break e;ge=g({},ge,ne);break e;case 2:_a=!0}}ne=A.callback,ne!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=u.callbacks,ae===null?u.callbacks=[ne]:ae.push(ne))}else ae={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},he===null?(J=he=ae,I=ge):he=he.next=ae,S|=ne;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ae=A,A=ae.next,ae.next=null,u.lastBaseUpdate=ae,u.shared.pending=null}}while(!0);he===null&&(I=ge),u.baseState=I,u.firstBaseUpdate=J,u.lastBaseUpdate=he,d===null&&(u.shared.lanes=0),Ra|=S,t.lanes=S,t.memoizedState=ge}}function qp(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Yp(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)qp(r[t],i)}var Gr=ee(null),yl=ee(0);function Zp(t,i){t=Ji,Se(yl,t),Se(Gr,i),Ji=t|i.baseLanes}function Vu(){Se(yl,Ji),Se(Gr,Gr.current)}function Gu(){Ji=yl.current,xe(Gr),xe(yl)}var ya=0,ht=null,It=null,ln=null,Sl=!1,kr=!1,sr=!1,Ml=0,ro=0,jr=null,Ix=0;function an(){throw Error(a(321))}function ku(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!Wn(t[r],i[r]))return!1;return!0}function ju(t,i,r,o,u,d){return ya=d,ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?Um:Lm,sr=!1,d=r(o,u),sr=!1,kr&&(d=Qp(i,r,o,u)),Kp(t),d}function Kp(t){P.H=wl;var i=It!==null&&It.next!==null;if(ya=0,ln=It=ht=null,Sl=!1,ro=0,jr=null,i)throw Error(a(300));t===null||vn||(t=t.dependencies,t!==null&&ml(t)&&(vn=!0))}function Qp(t,i,r,o){ht=t;var u=0;do{if(kr&&(jr=null),ro=0,kr=!1,25<=u)throw Error(a(301));if(u+=1,ln=It=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=kx,d=i(r,o)}while(kr);return d}function Bx(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?so(i):i,t=t.useState()[0],(It!==null?It.memoizedState:null)!==t&&(ht.flags|=1024),i}function Xu(){var t=Ml!==0;return Ml=0,t}function Wu(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function qu(t){if(Sl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Sl=!1}ya=0,ln=It=ht=null,kr=!1,ro=Ml=0,jr=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ht.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(It===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var i=ln===null?ht.memoizedState:ln.next;if(i!==null)ln=i,It=t;else{if(t===null)throw ht.alternate===null?Error(a(467)):Error(a(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},ln===null?ht.memoizedState=ln=t:ln=ln.next=t}return ln}function Yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var i=ro;return ro+=1,jr===null&&(jr=[]),t=jp(jr,t,i),i=ht,(ln===null?i.memoizedState:ln.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?Um:Lm),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===L)return wn(t)}throw Error(a(438,String(t)))}function Zu(t){var i=null,r=ht.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Yu(),ht.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),o=0;o<t;o++)r[o]=C;return i.index++,r}function Wi(t,i){return typeof i=="function"?i(t):i}function El(t){var i=cn();return Ku(i,It,t)}function Ku(t,i,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}i.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var A=S=null,I=null,J=i,he=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(St&ge)===ge:(ya&ge)===ge){var ne=J.revertLane;if(ne===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===Hr&&(he=!0);else if((ya&ne)===ne){J=J.next,ne===Hr&&(he=!0);continue}else ge={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=ge,S=d):I=I.next=ge,ht.lanes|=ne,Ra|=ne;ge=J.action,sr&&r(d,ge),d=J.hasEagerState?J.eagerState:r(d,ge)}else ne={lane:ge,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=ne,S=d):I=I.next=ne,ht.lanes|=ge,Ra|=ge;J=J.next}while(J!==null&&J!==i);if(I===null?S=d:I.next=A,!Wn(d,t.memoizedState)&&(vn=!0,he&&(r=Vr,r!==null)))throw r;t.memoizedState=d,t.baseState=S,t.baseQueue=I,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Qu(t){var i=cn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,d=i.memoizedState;if(u!==null){r.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);Wn(d,i.memoizedState)||(vn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,o]}function Jp(t,i,r){var o=ht,u=cn(),d=wt;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var S=!Wn((It||u).memoizedState,r);S&&(u.memoizedState=r,vn=!0),u=u.queue;var A=tm.bind(null,o,u,t);if(oo(2048,8,A,[t]),u.getSnapshot!==i||S||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Xr(9,Tl(),em.bind(null,o,u,r,i),null),Xt===null)throw Error(a(349));d||(ya&124)!==0||$p(o,i,r)}return r}function $p(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=ht.updateQueue,i===null?(i=Yu(),ht.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function em(t,i,r,o){i.value=r,i.getSnapshot=o,nm(i)&&im(t)}function tm(t,i,r){return r(function(){nm(i)&&im(t)})}function nm(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!Wn(t,r)}catch{return!0}}function im(t){var i=Ir(t,2);i!==null&&Jn(i,t,2)}function Ju(t){var i=Vn();if(typeof t=="function"){var r=t;if(t=r(),sr){oe(!0);try{r()}finally{oe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},i}function am(t,i,r,o){return t.baseState=r,Ku(t,It,typeof o=="function"?o:Wi)}function zx(t,i,r,o,u){if(Rl(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};P.T!==null?r(!0):d.isTransition=!1,o(d),r=i.pending,r===null?(d.next=i.pending=d,rm(i,d)):(d.next=r.next,i.pending=r.next=d)}}function rm(t,i){var r=i.action,o=i.payload,u=t.state;if(i.isTransition){var d=P.T,S={};P.T=S;try{var A=r(u,o),I=P.S;I!==null&&I(S,A),sm(t,i,A)}catch(J){$u(t,i,J)}finally{P.T=d}}else try{d=r(u,o),sm(t,i,d)}catch(J){$u(t,i,J)}}function sm(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){om(t,i,o)},function(o){return $u(t,i,o)}):om(t,i,r)}function om(t,i,r){i.status="fulfilled",i.value=r,lm(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,rm(t,r)))}function $u(t,i,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=r,lm(i),i=i.next;while(i!==o)}t.action=null}function lm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function cm(t,i){return i}function um(t,i){if(wt){var r=Xt.formState;if(r!==null){e:{var o=ht;if(wt){if(tn){t:{for(var u=tn,d=wi;u.nodeType!==8;){if(!d){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){tn=_i(u.nextSibling),o=u.data==="F!";break e}}nr(o)}o=!1}o&&(i=r[0])}}return r=Vn(),r.memoizedState=r.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:i},r.queue=o,r=Cm.bind(null,ht,o),o.dispatch=r,o=Ju(!1),d=rf.bind(null,ht,!1,o.queue),o=Vn(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,r=zx.bind(null,ht,u,d,r),u.dispatch=r,o.memoizedState=t,[i,r,!1]}function fm(t){var i=cn();return hm(i,It,t)}function hm(t,i,r){if(i=Ku(t,i,cm)[0],t=El(Wi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=so(i)}catch(S){throw S===eo?vl:S}else o=i;i=cn();var u=i.queue,d=u.dispatch;return r!==i.memoizedState&&(ht.flags|=2048,Xr(9,Tl(),Fx.bind(null,u,r),null)),[o,d,t]}function Fx(t,i){t.action=i}function dm(t){var i=cn(),r=It;if(r!==null)return hm(i,r,t);cn(),i=i.memoizedState,r=cn();var o=r.queue.dispatch;return r.memoizedState=t,[i,o,!1]}function Xr(t,i,r,o){return t={tag:t,create:r,deps:o,inst:i,next:null},i=ht.updateQueue,i===null&&(i=Yu(),ht.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,i.lastEffect=t),t}function Tl(){return{destroy:void 0,resource:void 0}}function pm(){return cn().memoizedState}function Al(t,i,r,o){var u=Vn();o=o===void 0?null:o,ht.flags|=t,u.memoizedState=Xr(1|i,Tl(),r,o)}function oo(t,i,r,o){var u=cn();o=o===void 0?null:o;var d=u.memoizedState.inst;It!==null&&o!==null&&ku(o,It.memoizedState.deps)?u.memoizedState=Xr(i,d,r,o):(ht.flags|=t,u.memoizedState=Xr(1|i,d,r,o))}function mm(t,i){Al(8390656,8,t,i)}function gm(t,i){oo(2048,8,t,i)}function _m(t,i){return oo(4,2,t,i)}function vm(t,i){return oo(4,4,t,i)}function xm(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ym(t,i,r){r=r!=null?r.concat([t]):null,oo(4,4,xm.bind(null,i,t),r)}function ef(){}function Sm(t,i){var r=cn();i=i===void 0?null:i;var o=r.memoizedState;return i!==null&&ku(i,o[1])?o[0]:(r.memoizedState=[t,i],t)}function Mm(t,i){var r=cn();i=i===void 0?null:i;var o=r.memoizedState;if(i!==null&&ku(i,o[1]))return o[0];if(o=t(),sr){oe(!0);try{t()}finally{oe(!1)}}return r.memoizedState=[o,i],o}function tf(t,i,r){return r===void 0||(ya&1073741824)!==0?t.memoizedState=i:(t.memoizedState=r,t=Tg(),ht.lanes|=t,Ra|=t,r)}function bm(t,i,r,o){return Wn(r,i)?r:Gr.current!==null?(t=tf(t,r,o),Wn(t,i)||(vn=!0),t):(ya&42)===0?(vn=!0,t.memoizedState=r):(t=Tg(),ht.lanes|=t,Ra|=t,i)}function Em(t,i,r,o,u){var d=$.p;$.p=d!==0&&8>d?d:8;var S=P.T,A={};P.T=A,rf(t,!1,i,r);try{var I=u(),J=P.S;if(J!==null&&J(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var he=Px(I,o);lo(t,i,he,Qn(t))}else lo(t,i,o,Qn(t))}catch(ge){lo(t,i,{then:function(){},status:"rejected",reason:ge},Qn())}finally{$.p=d,P.T=S}}function Hx(){}function nf(t,i,r,o){if(t.tag!==5)throw Error(a(476));var u=Tm(t).queue;Em(t,u,i,q,r===null?Hx:function(){return Am(t),r(o)})}function Tm(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:q},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Am(t){var i=Tm(t).next.queue;lo(t,i,{},Qn())}function af(){return wn(Ro)}function Rm(){return cn().memoizedState}function wm(){return cn().memoizedState}function Vx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=Qn();t=va(r);var o=xa(i,t,r);o!==null&&(Jn(o,i,r),no(o,i,r)),i={cache:Lu()},t.payload=i;return}i=i.return}}function Gx(t,i,r){var o=Qn();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Rl(t)?Dm(i,r):(r=bu(t,i,r,o),r!==null&&(Jn(r,t,o),Nm(r,i,o)))}function Cm(t,i,r){var o=Qn();lo(t,i,r,o)}function lo(t,i,r,o){var u={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Rl(t))Dm(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,A=d(S,r);if(u.hasEagerState=!0,u.eagerState=A,Wn(A,S))return ul(t,i,u,0),Xt===null&&cl(),!1}catch{}finally{}if(r=bu(t,i,u,o),r!==null)return Jn(r,t,o),Nm(r,i,o),!0}return!1}function rf(t,i,r,o){if(o={lane:2,revertLane:Bf(),action:o,hasEagerState:!1,eagerState:null,next:null},Rl(t)){if(i)throw Error(a(479))}else i=bu(t,r,o,2),i!==null&&Jn(i,t,2)}function Rl(t){var i=t.alternate;return t===ht||i!==null&&i===ht}function Dm(t,i){kr=Sl=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function Nm(t,i,r){if((r&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,r|=o,i.lanes=r,Ge(t,r)}}var wl={readContext:wn,use:bl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Um={readContext:wn,use:bl,useCallback:function(t,i){return Vn().memoizedState=[t,i===void 0?null:i],t},useContext:wn,useEffect:mm,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,Al(4194308,4,xm.bind(null,i,t),r)},useLayoutEffect:function(t,i){return Al(4194308,4,t,i)},useInsertionEffect:function(t,i){Al(4,2,t,i)},useMemo:function(t,i){var r=Vn();i=i===void 0?null:i;var o=t();if(sr){oe(!0);try{t()}finally{oe(!1)}}return r.memoizedState=[o,i],o},useReducer:function(t,i,r){var o=Vn();if(r!==void 0){var u=r(i);if(sr){oe(!0);try{r(i)}finally{oe(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Gx.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var i=Vn();return t={current:t},i.memoizedState=t},useState:function(t){t=Ju(t);var i=t.queue,r=Cm.bind(null,ht,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:ef,useDeferredValue:function(t,i){var r=Vn();return tf(r,t,i)},useTransition:function(){var t=Ju(!1);return t=Em.bind(null,ht,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var o=ht,u=Vn();if(wt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Xt===null)throw Error(a(349));(St&124)!==0||$p(o,i,r)}u.memoizedState=r;var d={value:r,getSnapshot:i};return u.queue=d,mm(tm.bind(null,o,d,t),[t]),o.flags|=2048,Xr(9,Tl(),em.bind(null,o,d,r,i),null),r},useId:function(){var t=Vn(),i=Xt.identifierPrefix;if(wt){var r=ki,o=Gi;r=(o&~(1<<32-Ie(o)-1)).toString(32)+r,i="«"+i+"R"+r,r=Ml++,0<r&&(i+="H"+r.toString(32)),i+="»"}else r=Ix++,i="«"+i+"r"+r.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:af,useFormState:um,useActionState:um,useOptimistic:function(t){var i=Vn();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=rf.bind(null,ht,!0,r),r.dispatch=i,[t,i]},useMemoCache:Zu,useCacheRefresh:function(){return Vn().memoizedState=Vx.bind(null,ht)}},Lm={readContext:wn,use:bl,useCallback:Sm,useContext:wn,useEffect:gm,useImperativeHandle:ym,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:Mm,useReducer:El,useRef:pm,useState:function(){return El(Wi)},useDebugValue:ef,useDeferredValue:function(t,i){var r=cn();return bm(r,It.memoizedState,t,i)},useTransition:function(){var t=El(Wi)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:so(t),i]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:af,useFormState:fm,useActionState:fm,useOptimistic:function(t,i){var r=cn();return am(r,It,t,i)},useMemoCache:Zu,useCacheRefresh:wm},kx={readContext:wn,use:bl,useCallback:Sm,useContext:wn,useEffect:gm,useImperativeHandle:ym,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:Mm,useReducer:Qu,useRef:pm,useState:function(){return Qu(Wi)},useDebugValue:ef,useDeferredValue:function(t,i){var r=cn();return It===null?tf(r,t,i):bm(r,It.memoizedState,t,i)},useTransition:function(){var t=Qu(Wi)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:so(t),i]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:af,useFormState:dm,useActionState:dm,useOptimistic:function(t,i){var r=cn();return It!==null?am(r,It,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:wm},Wr=null,co=0;function Cl(t){var i=co;return co+=1,Wr===null&&(Wr=[]),jp(Wr,t,i)}function uo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Dl(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Om(t){var i=t._init;return i(t._payload)}function Pm(t){function i(W,G){if(t){var Q=W.deletions;Q===null?(W.deletions=[G],W.flags|=16):Q.push(G)}}function r(W,G){if(!t)return null;for(;G!==null;)i(W,G),G=G.sibling;return null}function o(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function u(W,G){return W=Vi(W,G),W.index=0,W.sibling=null,W}function d(W,G,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<G?(W.flags|=67108866,G):Q):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function S(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function A(W,G,Q,pe){return G===null||G.tag!==6?(G=Tu(Q,W.mode,pe),G.return=W,G):(G=u(G,Q),G.return=W,G)}function I(W,G,Q,pe){var Ve=Q.type;return Ve===b?he(W,G,Q.props.children,pe,Q.key):G!==null&&(G.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===Y&&Om(Ve)===G.type)?(G=u(G,Q.props),uo(G,Q),G.return=W,G):(G=hl(Q.type,Q.key,Q.props,null,W.mode,pe),uo(G,Q),G.return=W,G)}function J(W,G,Q,pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=Au(Q,W.mode,pe),G.return=W,G):(G=u(G,Q.children||[]),G.return=W,G)}function he(W,G,Q,pe,Ve){return G===null||G.tag!==7?(G=Ja(Q,W.mode,pe,Ve),G.return=W,G):(G=u(G,Q),G.return=W,G)}function ge(W,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Tu(""+G,W.mode,Q),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return Q=hl(G.type,G.key,G.props,null,W.mode,Q),uo(Q,G),Q.return=W,Q;case y:return G=Au(G,W.mode,Q),G.return=W,G;case Y:var pe=G._init;return G=pe(G._payload),ge(W,G,Q)}if(me(G)||ue(G))return G=Ja(G,W.mode,Q,null),G.return=W,G;if(typeof G.then=="function")return ge(W,Cl(G),Q);if(G.$$typeof===L)return ge(W,gl(W,G),Q);Dl(W,G)}return null}function ne(W,G,Q,pe){var Ve=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ve!==null?null:A(W,G,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===Ve?I(W,G,Q,pe):null;case y:return Q.key===Ve?J(W,G,Q,pe):null;case Y:return Ve=Q._init,Q=Ve(Q._payload),ne(W,G,Q,pe)}if(me(Q)||ue(Q))return Ve!==null?null:he(W,G,Q,pe,null);if(typeof Q.then=="function")return ne(W,G,Cl(Q),pe);if(Q.$$typeof===L)return ne(W,G,gl(W,Q),pe);Dl(W,Q)}return null}function ae(W,G,Q,pe,Ve){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return W=W.get(Q)||null,A(G,W,""+pe,Ve);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case v:return W=W.get(pe.key===null?Q:pe.key)||null,I(G,W,pe,Ve);case y:return W=W.get(pe.key===null?Q:pe.key)||null,J(G,W,pe,Ve);case Y:var dt=pe._init;return pe=dt(pe._payload),ae(W,G,Q,pe,Ve)}if(me(pe)||ue(pe))return W=W.get(Q)||null,he(G,W,pe,Ve,null);if(typeof pe.then=="function")return ae(W,G,Q,Cl(pe),Ve);if(pe.$$typeof===L)return ae(W,G,Q,gl(G,pe),Ve);Dl(G,pe)}return null}function nt(W,G,Q,pe){for(var Ve=null,dt=null,Ye=G,tt=G=0,yn=null;Ye!==null&&tt<Q.length;tt++){Ye.index>tt?(yn=Ye,Ye=null):yn=Ye.sibling;var At=ne(W,Ye,Q[tt],pe);if(At===null){Ye===null&&(Ye=yn);break}t&&Ye&&At.alternate===null&&i(W,Ye),G=d(At,G,tt),dt===null?Ve=At:dt.sibling=At,dt=At,Ye=yn}if(tt===Q.length)return r(W,Ye),wt&&er(W,tt),Ve;if(Ye===null){for(;tt<Q.length;tt++)Ye=ge(W,Q[tt],pe),Ye!==null&&(G=d(Ye,G,tt),dt===null?Ve=Ye:dt.sibling=Ye,dt=Ye);return wt&&er(W,tt),Ve}for(Ye=o(Ye);tt<Q.length;tt++)yn=ae(Ye,W,tt,Q[tt],pe),yn!==null&&(t&&yn.alternate!==null&&Ye.delete(yn.key===null?tt:yn.key),G=d(yn,G,tt),dt===null?Ve=yn:dt.sibling=yn,dt=yn);return t&&Ye.forEach(function(Ia){return i(W,Ia)}),wt&&er(W,tt),Ve}function $e(W,G,Q,pe){if(Q==null)throw Error(a(151));for(var Ve=null,dt=null,Ye=G,tt=G=0,yn=null,At=Q.next();Ye!==null&&!At.done;tt++,At=Q.next()){Ye.index>tt?(yn=Ye,Ye=null):yn=Ye.sibling;var Ia=ne(W,Ye,At.value,pe);if(Ia===null){Ye===null&&(Ye=yn);break}t&&Ye&&Ia.alternate===null&&i(W,Ye),G=d(Ia,G,tt),dt===null?Ve=Ia:dt.sibling=Ia,dt=Ia,Ye=yn}if(At.done)return r(W,Ye),wt&&er(W,tt),Ve;if(Ye===null){for(;!At.done;tt++,At=Q.next())At=ge(W,At.value,pe),At!==null&&(G=d(At,G,tt),dt===null?Ve=At:dt.sibling=At,dt=At);return wt&&er(W,tt),Ve}for(Ye=o(Ye);!At.done;tt++,At=Q.next())At=ae(Ye,W,tt,At.value,pe),At!==null&&(t&&At.alternate!==null&&Ye.delete(At.key===null?tt:At.key),G=d(At,G,tt),dt===null?Ve=At:dt.sibling=At,dt=At);return t&&Ye.forEach(function(jy){return i(W,jy)}),wt&&er(W,tt),Ve}function zt(W,G,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var Ve=Q.key;G!==null;){if(G.key===Ve){if(Ve=Q.type,Ve===b){if(G.tag===7){r(W,G.sibling),pe=u(G,Q.props.children),pe.return=W,W=pe;break e}}else if(G.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===Y&&Om(Ve)===G.type){r(W,G.sibling),pe=u(G,Q.props),uo(pe,Q),pe.return=W,W=pe;break e}r(W,G);break}else i(W,G);G=G.sibling}Q.type===b?(pe=Ja(Q.props.children,W.mode,pe,Q.key),pe.return=W,W=pe):(pe=hl(Q.type,Q.key,Q.props,null,W.mode,pe),uo(pe,Q),pe.return=W,W=pe)}return S(W);case y:e:{for(Ve=Q.key;G!==null;){if(G.key===Ve)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){r(W,G.sibling),pe=u(G,Q.children||[]),pe.return=W,W=pe;break e}else{r(W,G);break}else i(W,G);G=G.sibling}pe=Au(Q,W.mode,pe),pe.return=W,W=pe}return S(W);case Y:return Ve=Q._init,Q=Ve(Q._payload),zt(W,G,Q,pe)}if(me(Q))return nt(W,G,Q,pe);if(ue(Q)){if(Ve=ue(Q),typeof Ve!="function")throw Error(a(150));return Q=Ve.call(Q),$e(W,G,Q,pe)}if(typeof Q.then=="function")return zt(W,G,Cl(Q),pe);if(Q.$$typeof===L)return zt(W,G,gl(W,Q),pe);Dl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(r(W,G.sibling),pe=u(G,Q),pe.return=W,W=pe):(r(W,G),pe=Tu(Q,W.mode,pe),pe.return=W,W=pe),S(W)):r(W,G)}return function(W,G,Q,pe){try{co=0;var Ve=zt(W,G,Q,pe);return Wr=null,Ve}catch(Ye){if(Ye===eo||Ye===vl)throw Ye;var dt=qn(29,Ye,null,W.mode);return dt.lanes=pe,dt.return=W,dt}finally{}}}var qr=Pm(!0),Im=Pm(!1),si=ee(null),Ci=null;function Sa(t){var i=t.alternate;Se(pn,pn.current&1),Se(si,t),Ci===null&&(i===null||Gr.current!==null||i.memoizedState!==null)&&(Ci=t)}function Bm(t){if(t.tag===22){if(Se(pn,pn.current),Se(si,t),Ci===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ci=t)}}else Ma()}function Ma(){Se(pn,pn.current),Se(si,si.current)}function qi(t){xe(si),Ci===t&&(Ci=null),xe(pn)}var pn=ee(0);function Nl(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Zf(r)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function sf(t,i,r,o){i=t.memoizedState,r=r(o,i),r=r==null?i:g({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var of={enqueueSetState:function(t,i,r){t=t._reactInternals;var o=Qn(),u=va(o);u.payload=i,r!=null&&(u.callback=r),i=xa(t,u,o),i!==null&&(Jn(i,t,o),no(i,t,o))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var o=Qn(),u=va(o);u.tag=1,u.payload=i,r!=null&&(u.callback=r),i=xa(t,u,o),i!==null&&(Jn(i,t,o),no(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=Qn(),o=va(r);o.tag=2,i!=null&&(o.callback=i),i=xa(t,o,r),i!==null&&(Jn(i,t,r),no(i,t,r))}};function zm(t,i,r,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):i.prototype&&i.prototype.isPureReactComponent?!Ws(r,o)||!Ws(u,d):!0}function Fm(t,i,r,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,o),i.state!==t&&of.enqueueReplaceState(i,i.state,null)}function or(t,i){var r=i;if("ref"in i){r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}if(t=t.defaultProps){r===i&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}var Ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Hm(t){Ul(t)}function Vm(t){console.error(t)}function Gm(t){Ul(t)}function Ll(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function km(t,i,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(t,i,r){return r=va(r),r.tag=3,r.payload={element:null},r.callback=function(){Ll(t,i)},r}function jm(t){return t=va(t),t.tag=3,t}function Xm(t,i,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){km(i,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){km(i,r,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function jx(t,i,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=r.alternate,i!==null&&Qs(i,r,u,!0),r=si.current,r!==null){switch(r.tag){case 13:return Ci===null?Uf():r.alternate===null&&nn===0&&(nn=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Iu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([o]):i.add(o),Of(t,o,u)),!1;case 22:return r.flags|=65536,o===Iu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([o]):r.add(o)),Of(t,o,u)),!1}throw Error(a(435,r.tag))}return Of(t,o,u),Uf(),!1}if(wt)return i=si.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Cu&&(t=Error(a(422),{cause:o}),Ks(ni(t,r)))):(o!==Cu&&(i=Error(a(423),{cause:o}),Ks(ni(i,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ni(o,r),u=lf(t.stateNode,o,u),Fu(t,u),nn!==4&&(nn=2)),!1;var d=Error(a(520),{cause:o});if(d=ni(d,r),vo===null?vo=[d]:vo.push(d),nn!==4&&(nn=2),i===null)return!0;o=ni(o,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=lf(r.stateNode,o,t),Fu(r,t),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(wa===null||!wa.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=jm(u),Xm(u,t,r,o),Fu(r,u),!1}r=r.return}while(r!==null);return!1}var Wm=Error(a(461)),vn=!1;function bn(t,i,r,o){i.child=t===null?Im(i,null,r,o):qr(i,t.child,r,o)}function qm(t,i,r,o,u){r=r.render;var d=i.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return ar(i),o=ju(t,i,r,S,d,u),A=Xu(),t!==null&&!vn?(Wu(t,i,u),Yi(t,i,u)):(wt&&A&&Ru(i),i.flags|=1,bn(t,i,o,u),i.child)}function Ym(t,i,r,o,u){if(t===null){var d=r.type;return typeof d=="function"&&!Eu(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Zm(t,i,d,o,u)):(t=hl(r.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!gf(t,u)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:Ws,r(S,o)&&t.ref===i.ref)return Yi(t,i,u)}return i.flags|=1,t=Vi(d,o),t.ref=i.ref,t.return=i,i.child=t}function Zm(t,i,r,o,u){if(t!==null){var d=t.memoizedProps;if(Ws(d,o)&&t.ref===i.ref)if(vn=!1,i.pendingProps=o=d,gf(t,u))(t.flags&131072)!==0&&(vn=!0);else return i.lanes=t.lanes,Yi(t,i,u)}return cf(t,i,r,o,u)}function Km(t,i,r){var o=i.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|r:r,t!==null){for(u=i.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return Qm(t,i,o,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&_l(i,d!==null?d.cachePool:null),d!==null?Zp(i,d):Vu(),Bm(i);else return i.lanes=i.childLanes=536870912,Qm(t,i,d!==null?d.baseLanes|r:r,r)}else d!==null?(_l(i,d.cachePool),Zp(i,d),Ma(),i.memoizedState=null):(t!==null&&_l(i,null),Vu(),Ma());return bn(t,i,u,r),i.child}function Qm(t,i,r,o){var u=Pu();return u=u===null?null:{parent:dn._currentValue,pool:u},i.memoizedState={baseLanes:r,cachePool:u},t!==null&&_l(i,null),Vu(),Bm(i),t!==null&&Qs(t,i,o,!0),null}function Ol(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function cf(t,i,r,o,u){return ar(i),r=ju(t,i,r,o,void 0,u),o=Xu(),t!==null&&!vn?(Wu(t,i,u),Yi(t,i,u)):(wt&&o&&Ru(i),i.flags|=1,bn(t,i,r,u),i.child)}function Jm(t,i,r,o,u,d){return ar(i),i.updateQueue=null,r=Qp(i,o,r,u),Kp(t),o=Xu(),t!==null&&!vn?(Wu(t,i,d),Yi(t,i,d)):(wt&&o&&Ru(i),i.flags|=1,bn(t,i,r,d),i.child)}function $m(t,i,r,o,u){if(ar(i),i.stateNode===null){var d=Br,S=r.contextType;typeof S=="object"&&S!==null&&(d=wn(S)),d=new r(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=of,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Bu(i),S=r.contextType,d.context=typeof S=="object"&&S!==null?wn(S):Br,d.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(sf(i,r,S,o),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&of.enqueueReplaceState(d,d.state,null),ao(i,o,d,u),io(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){d=i.stateNode;var A=i.memoizedProps,I=or(r,A);d.props=I;var J=d.context,he=r.contextType;S=Br,typeof he=="object"&&he!==null&&(S=wn(he));var ge=r.getDerivedStateFromProps;he=typeof ge=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,he||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||J!==S)&&Fm(i,d,o,S),_a=!1;var ne=i.memoizedState;d.state=ne,ao(i,o,d,u),io(),J=i.memoizedState,A||ne!==J||_a?(typeof ge=="function"&&(sf(i,r,ge,o),J=i.memoizedState),(I=_a||zm(i,r,I,o,ne,J,S))?(he||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=J),d.props=o,d.state=J,d.context=S,o=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,zu(t,i),S=i.memoizedProps,he=or(r,S),d.props=he,ge=i.pendingProps,ne=d.context,J=r.contextType,I=Br,typeof J=="object"&&J!==null&&(I=wn(J)),A=r.getDerivedStateFromProps,(J=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==ge||ne!==I)&&Fm(i,d,o,I),_a=!1,ne=i.memoizedState,d.state=ne,ao(i,o,d,u),io();var ae=i.memoizedState;S!==ge||ne!==ae||_a||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof A=="function"&&(sf(i,r,A,o),ae=i.memoizedState),(he=_a||zm(i,r,he,o,ne,ae,I)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(J||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ae,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ae,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ae),d.props=o,d.state=ae,d.context=I,o=he):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),o=!1)}return d=o,Ol(t,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&o?(i.child=qr(i,t.child,null,u),i.child=qr(i,null,r,u)):bn(t,i,r,u),i.memoizedState=d.state,t=i.child):t=Yi(t,i,u),t}function eg(t,i,r,o){return Zs(),i.flags|=256,bn(t,i,r,o),i.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(t){return{baseLanes:t,cachePool:Vp()}}function hf(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=oi),t}function tg(t,i,r){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(wt){if(u?Sa(i):Ma(),wt){var A=tn,I;if(I=A){e:{for(I=A,A=wi;I.nodeType!==8;){if(!A){A=null;break e}if(I=_i(I.nextSibling),I===null){A=null;break e}}A=I}A!==null?(i.memoizedState={dehydrated:A,treeContext:$a!==null?{id:Gi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},I=qn(18,null,null,0),I.stateNode=A,I.return=i,i.child=I,Pn=i,tn=null,I=!0):I=!1}I||nr(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Zf(A)?i.lanes=32:i.lanes=536870912,null;qi(i)}return A=o.children,o=o.fallback,u?(Ma(),u=i.mode,A=Pl({mode:"hidden",children:A},u),o=Ja(o,u,r,null),A.return=i,o.return=i,A.sibling=o,i.child=A,u=i.child,u.memoizedState=ff(r),u.childLanes=hf(t,S,r),i.memoizedState=uf,o):(Sa(i),df(i,A))}if(I=t.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(d)i.flags&256?(Sa(i),i.flags&=-257,i=pf(t,i,r)):i.memoizedState!==null?(Ma(),i.child=t.child,i.flags|=128,i=null):(Ma(),u=o.fallback,A=i.mode,o=Pl({mode:"visible",children:o.children},A),u=Ja(u,A,r,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,qr(i,t.child,null,r),o=i.child,o.memoizedState=ff(r),o.childLanes=hf(t,S,r),i.memoizedState=uf,i=u);else if(Sa(i),Zf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var J=S.dgst;S=J,o=Error(a(419)),o.stack="",o.digest=S,Ks({value:o,source:null,stack:null}),i=pf(t,i,r)}else if(vn||Qs(t,i,r,!1),S=(r&t.childLanes)!==0,vn||S){if(S=Xt,S!==null&&(o=r&-r,o=(o&42)!==0?1:at(o),o=(o&(S.suspendedLanes|r))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Ir(t,o),Jn(S,t,o),Wm;A.data==="$?"||Uf(),i=pf(t,i,r)}else A.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,tn=_i(A.nextSibling),Pn=i,wt=!0,tr=null,wi=!1,t!==null&&(ai[ri++]=Gi,ai[ri++]=ki,ai[ri++]=$a,Gi=t.id,ki=t.overflow,$a=i),i=df(i,o.children),i.flags|=4096);return i}return u?(Ma(),u=o.fallback,A=i.mode,I=t.child,J=I.sibling,o=Vi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,J!==null?u=Vi(J,u):(u=Ja(u,A,r,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,A=t.child.memoizedState,A===null?A=ff(r):(I=A.cachePool,I!==null?(J=dn._currentValue,I=I.parent!==J?{parent:J,pool:J}:I):I=Vp(),A={baseLanes:A.baseLanes|r,cachePool:I}),u.memoizedState=A,u.childLanes=hf(t,S,r),i.memoizedState=uf,o):(Sa(i),r=t.child,t=r.sibling,r=Vi(r,{mode:"visible",children:o.children}),r.return=i,r.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=r,i.memoizedState=null,r)}function df(t,i){return i=Pl({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Pl(t,i){return t=qn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function pf(t,i,r){return qr(i,t.child,null,r),t=df(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ng(t,i,r){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),Nu(t.return,i,r)}function mf(t,i,r,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=r,d.tailMode=u)}function ig(t,i,r){var o=i.pendingProps,u=o.revealOrder,d=o.tail;if(bn(t,i,o.children,r),o=pn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,r,i);else if(t.tag===19)ng(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Se(pn,o),u){case"forwards":for(r=i.child,u=null;r!==null;)t=r.alternate,t!==null&&Nl(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=i.child,i.child=null):(u=r.sibling,r.sibling=null),mf(i,!1,u,r,d);break;case"backwards":for(r=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Nl(t)===null){i.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}mf(i,!0,r,null,d);break;case"together":mf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yi(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Ra|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(Qs(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=Vi(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Vi(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function gf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Xx(t,i,r){switch(i.tag){case 3:Pe(i,i.stateNode.containerInfo),ga(i,dn,t.memoizedState.cache),Zs();break;case 27:case 5:it(i);break;case 4:Pe(i,i.stateNode.containerInfo);break;case 10:ga(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(i),i.flags|=128,null):(r&i.child.childLanes)!==0?tg(t,i,r):(Sa(i),t=Yi(t,i,r),t!==null?t.sibling:null);Sa(i);break;case 19:var u=(t.flags&128)!==0;if(o=(r&i.childLanes)!==0,o||(Qs(t,i,r,!1),o=(r&i.childLanes)!==0),u){if(o)return ig(t,i,r);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(pn,pn.current),o)break;return null;case 22:case 23:return i.lanes=0,Km(t,i,r);case 24:ga(i,dn,t.memoizedState.cache)}return Yi(t,i,r)}function ag(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)vn=!0;else{if(!gf(t,r)&&(i.flags&128)===0)return vn=!1,Xx(t,i,r);vn=(t.flags&131072)!==0}else vn=!1,wt&&(i.flags&1048576)!==0&&Op(i,pl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")Eu(o)?(t=or(o,t),i.tag=1,i=$m(null,i,o,t,r)):(i.tag=0,i=cf(null,i,o,t,r));else{if(o!=null){if(u=o.$$typeof,u===D){i.tag=11,i=qm(null,i,o,t,r);break e}else if(u===k){i.tag=14,i=Ym(null,i,o,t,r);break e}}throw i=ce(o)||o,Error(a(306,i,""))}}return i;case 0:return cf(t,i,i.type,i.pendingProps,r);case 1:return o=i.type,u=or(o,i.pendingProps),$m(t,i,o,u,r);case 3:e:{if(Pe(i,i.stateNode.containerInfo),t===null)throw Error(a(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,zu(t,i),ao(i,o,null,r);var S=i.memoizedState;if(o=S.cache,ga(i,dn,o),o!==d.cache&&Uu(i,[dn],r,!0),io(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=eg(t,i,o,r);break e}else if(o!==u){u=ni(Error(a(424)),i),Ks(u),i=eg(t,i,o,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=_i(t.firstChild),Pn=i,wt=!0,tr=null,wi=!0,r=Im(i,null,o,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Zs(),o===u){i=Yi(t,i,r);break e}bn(t,i,o,r)}i=i.child}return i;case 26:return Ol(t,i),t===null?(r=l0(i.type,null,i.pendingProps,null))?i.memoizedState=r:wt||(r=i.type,t=i.pendingProps,o=Zl(de.current).createElement(r),o[hn]=i,o[$t]=t,Tn(o,r,t),on(o),i.stateNode=o):i.memoizedState=l0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return it(i),t===null&&wt&&(o=i.stateNode=r0(i.type,i.pendingProps,de.current),Pn=i,wi=!0,u=tn,Na(i.type)?(Kf=u,tn=_i(o.firstChild)):tn=u),bn(t,i,i.pendingProps.children,r),Ol(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&wt&&((u=o=tn)&&(o=xy(o,i.type,i.pendingProps,wi),o!==null?(i.stateNode=o,Pn=i,tn=_i(o.firstChild),wi=!1,u=!0):u=!1),u||nr(i)),it(i),u=i.type,d=i.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,Wf(u,d)?o=null:S!==null&&Wf(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=ju(t,i,Bx,null,null,r),Ro._currentValue=u),Ol(t,i),bn(t,i,o,r),i.child;case 6:return t===null&&wt&&((t=r=tn)&&(r=yy(r,i.pendingProps,wi),r!==null?(i.stateNode=r,Pn=i,tn=null,t=!0):t=!1),t||nr(i)),null;case 13:return tg(t,i,r);case 4:return Pe(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=qr(i,null,o,r):bn(t,i,o,r),i.child;case 11:return qm(t,i,i.type,i.pendingProps,r);case 7:return bn(t,i,i.pendingProps,r),i.child;case 8:return bn(t,i,i.pendingProps.children,r),i.child;case 12:return bn(t,i,i.pendingProps.children,r),i.child;case 10:return o=i.pendingProps,ga(i,i.type,o.value),bn(t,i,o.children,r),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,ar(i),u=wn(u),o=o(u),i.flags|=1,bn(t,i,o,r),i.child;case 14:return Ym(t,i,i.type,i.pendingProps,r);case 15:return Zm(t,i,i.type,i.pendingProps,r);case 19:return ig(t,i,r);case 31:return o=i.pendingProps,r=i.mode,o={mode:o.mode,children:o.children},t===null?(r=Pl(o,r),r.ref=i.ref,i.child=r,r.return=i,i=r):(r=Vi(t.child,o),r.ref=i.ref,i.child=r,r.return=i,i=r),i;case 22:return Km(t,i,r);case 24:return ar(i),o=wn(dn),t===null?(u=Pu(),u===null&&(u=Xt,d=Lu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),i.memoizedState={parent:o,cache:u},Bu(i),ga(i,dn,u)):((t.lanes&r)!==0&&(zu(t,i),ao(i,null,null,r),io()),u=t.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),ga(i,dn,o)):(o=d.cache,ga(i,dn,o),o!==u.cache&&Uu(i,[dn],r,!0))),bn(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Zi(t){t.flags|=4}function rg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!d0(i)){if(i=si.current,i!==null&&((St&4194048)===St?Ci!==null:(St&62914560)!==St&&(St&536870912)===0||i!==Ci))throw to=Iu,Gp;t.flags|=8192}}function Il(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ae():536870912,t.lanes|=i,Qr|=i)}function fo(t,i){if(!wt)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(i)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,i}function Wx(t,i,r){var o=i.pendingProps;switch(wu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(i),null;case 1:return Jt(i),null;case 3:return r=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Xi(dn),qe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ys(i)?Zi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bp())),Jt(i),null;case 26:return r=i.memoizedState,t===null?(Zi(i),r!==null?(Jt(i),rg(i,r)):(Jt(i),i.flags&=-16777217)):r?r!==t.memoizedState?(Zi(i),Jt(i),rg(i,r)):(Jt(i),i.flags&=-16777217):(t.memoizedProps!==o&&Zi(i),Jt(i),i.flags&=-16777217),null;case 27:kt(i),r=de.current;var u=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Zi(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}t=Ce.current,Ys(i)?Pp(i):(t=r0(u,o,r),i.stateNode=t,Zi(i))}return Jt(i),null;case 5:if(kt(i),r=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&Zi(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}if(t=Ce.current,Ys(i))Pp(i);else{switch(u=Zl(de.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(r,{is:o.is}):u.createElement(r)}}t[hn]=i,t[$t]=o;e:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break e;for(;u.sibling===null;){if(u.return===null||u.return===i)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=t;e:switch(Tn(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Zi(i)}}return Jt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&Zi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(t=de.current,Ys(i)){if(t=i.stateNode,r=i.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=i,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Jg(t.nodeValue,r)),t||nr(i)}else t=Zl(t).createTextNode(o),t[hn]=i,i.stateNode=t}return Jt(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ys(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[hn]=i}else Zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),u=!1}else u=Bp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(qi(i),i):(qi(i),null)}if(qi(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return r!==t&&r&&(i.child.flags|=8192),Il(i,i.updateQueue),Jt(i),null;case 4:return qe(),t===null&&Vf(i.stateNode.containerInfo),Jt(i),null;case 10:return Xi(i.type),Jt(i),null;case 19:if(xe(pn),u=i.memoizedState,u===null)return Jt(i),null;if(o=(i.flags&128)!==0,d=u.rendering,d===null)if(o)fo(u,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Nl(t),d!==null){for(i.flags|=128,fo(u,!1),t=d.updateQueue,i.updateQueue=t,Il(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Lp(r,t),r=r.sibling;return Se(pn,pn.current&1|2),i.child}t=t.sibling}u.tail!==null&&Fe()>Fl&&(i.flags|=128,o=!0,fo(u,!1),i.lanes=4194304)}else{if(!o)if(t=Nl(d),t!==null){if(i.flags|=128,o=!0,t=t.updateQueue,i.updateQueue=t,Il(i,t),fo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!wt)return Jt(i),null}else 2*Fe()-u.renderingStartTime>Fl&&r!==536870912&&(i.flags|=128,o=!0,fo(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(t=u.last,t!==null?t.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Fe(),i.sibling=null,t=pn.current,Se(pn,o?t&1|2:t&1),i):(Jt(i),null);case 22:case 23:return qi(i),Gu(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(r&536870912)!==0&&(i.flags&128)===0&&(Jt(i),i.subtreeFlags&6&&(i.flags|=8192)):Jt(i),r=i.updateQueue,r!==null&&Il(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048),t!==null&&xe(rr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Xi(dn),Jt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function qx(t,i){switch(wu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Xi(dn),qe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return kt(i),null;case 13:if(qi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Zs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return xe(pn),null;case 4:return qe(),null;case 10:return Xi(i.type),null;case 22:case 23:return qi(i),Gu(),t!==null&&xe(rr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Xi(dn),null;case 25:return null;default:return null}}function sg(t,i){switch(wu(i),i.tag){case 3:Xi(dn),qe();break;case 26:case 27:case 5:kt(i);break;case 4:qe();break;case 13:qi(i);break;case 19:xe(pn);break;case 10:Xi(i.type);break;case 22:case 23:qi(i),Gu(),t!==null&&xe(rr);break;case 24:Xi(dn)}}function ho(t,i){try{var r=i.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var d=r.create,S=r.inst;o=d(),S.destroy=o}r=r.next}while(r!==u)}}catch(A){Gt(i,i.return,A)}}function ba(t,i,r){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=i;var I=r,J=A;try{J()}catch(he){Gt(u,I,he)}}}o=o.next}while(o!==d)}}catch(he){Gt(i,i.return,he)}}function og(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{Yp(i,r)}catch(o){Gt(t,t.return,o)}}}function lg(t,i,r){r.props=or(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Gt(t,i,o)}}function po(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){Gt(t,i,u)}}function Di(t,i){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Gt(t,i,u)}else r.current=null}function cg(t){var i=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Gt(t,t.return,u)}}function _f(t,i,r){try{var o=t.stateNode;py(o,t.type,r,i),o[$t]=i}catch(u){Gt(t,t.return,u)}}function ug(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xf(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Yl));else if(o!==4&&(o===27&&Na(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(xf(t,i,r),t=t.sibling;t!==null;)xf(t,i,r),t=t.sibling}function Bl(t,i,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(o!==4&&(o===27&&Na(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Bl(t,i,r),t=t.sibling;t!==null;)Bl(t,i,r),t=t.sibling}function fg(t){var i=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Tn(i,o,r),i[hn]=t,i[$t]=r}catch(d){Gt(t,t.return,d)}}var Ki=!1,rn=!1,yf=!1,hg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Yx(t,i){if(t=t.containerInfo,jf=tc,t=bp(t),_u(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var S=0,A=-1,I=-1,J=0,he=0,ge=t,ne=null;t:for(;;){for(var ae;ge!==r||u!==0&&ge.nodeType!==3||(A=S+u),ge!==d||o!==0&&ge.nodeType!==3||(I=S+o),ge.nodeType===3&&(S+=ge.nodeValue.length),(ae=ge.firstChild)!==null;)ne=ge,ge=ae;for(;;){if(ge===t)break t;if(ne===r&&++J===u&&(A=S),ne===d&&++he===o&&(I=S),(ae=ge.nextSibling)!==null)break;ge=ne,ne=ge.parentNode}ge=ae}r=A===-1||I===-1?null:{start:A,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xf={focusedElem:t,selectionRange:r},tc=!1,xn=i;xn!==null;)if(i=xn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,xn=t;else for(;xn!==null;){switch(i=xn,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=i,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var nt=or(r.type,u,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(nt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){Gt(r,r.return,$e)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)Yf(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Yf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,xn=t;break}xn=i.return}}function dg(t,i,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Ea(t,r),o&4&&ho(5,r);break;case 1:if(Ea(t,r),o&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(S){Gt(r,r.return,S)}else{var u=or(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Gt(r,r.return,S)}}o&64&&og(r),o&512&&po(r,r.return);break;case 3:if(Ea(t,r),o&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Yp(t,i)}catch(S){Gt(r,r.return,S)}}break;case 27:i===null&&o&4&&fg(r);case 26:case 5:Ea(t,r),i===null&&o&4&&cg(r),o&512&&po(r,r.return);break;case 12:Ea(t,r);break;case 13:Ea(t,r),o&4&&gg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=iy.bind(null,r),Sy(t,r))));break;case 22:if(o=r.memoizedState!==null||Ki,!o){i=i!==null&&i.memoizedState!==null||rn,u=Ki;var d=rn;Ki=o,(rn=i)&&!d?Ta(t,r,(r.subtreeFlags&8772)!==0):Ea(t,r),Ki=u,rn=d}break;case 30:break;default:Ea(t,r)}}function pg(t){var i=t.alternate;i!==null&&(t.alternate=null,pg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&wr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,Gn=!1;function Qi(t,i,r){for(r=r.child;r!==null;)mg(t,i,r),r=r.sibling}function mg(t,i,r){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(fe,r)}catch{}switch(r.tag){case 26:rn||Di(r,i),Qi(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:rn||Di(r,i);var o=Yt,u=Gn;Na(r.type)&&(Yt=r.stateNode,Gn=!1),Qi(t,i,r),bo(r.stateNode),Yt=o,Gn=u;break;case 5:rn||Di(r,i);case 6:if(o=Yt,u=Gn,Yt=null,Qi(t,i,r),Yt=o,Gn=u,Yt!==null)if(Gn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(r.stateNode)}catch(d){Gt(r,i,d)}else try{Yt.removeChild(r.stateNode)}catch(d){Gt(r,i,d)}break;case 18:Yt!==null&&(Gn?(t=Yt,i0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),No(t)):i0(Yt,r.stateNode));break;case 4:o=Yt,u=Gn,Yt=r.stateNode.containerInfo,Gn=!0,Qi(t,i,r),Yt=o,Gn=u;break;case 0:case 11:case 14:case 15:rn||ba(2,r,i),rn||ba(4,r,i),Qi(t,i,r);break;case 1:rn||(Di(r,i),o=r.stateNode,typeof o.componentWillUnmount=="function"&&lg(r,i,o)),Qi(t,i,r);break;case 21:Qi(t,i,r);break;case 22:rn=(o=rn)||r.memoizedState!==null,Qi(t,i,r),rn=o;break;default:Qi(t,i,r)}}function gg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{No(t)}catch(r){Gt(i,i.return,r)}}function Zx(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new hg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new hg),i;default:throw Error(a(435,t.tag))}}function Sf(t,i){var r=Zx(t);i.forEach(function(o){var u=ay.bind(null,t,o);r.has(o)||(r.add(o),o.then(u,u))})}function Yn(t,i){var r=i.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=t,S=i,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Na(A.type)){Yt=A.stateNode,Gn=!1;break e}break;case 5:Yt=A.stateNode,Gn=!1;break e;case 3:case 4:Yt=A.stateNode.containerInfo,Gn=!0;break e}A=A.return}if(Yt===null)throw Error(a(160));mg(d,S,u),Yt=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)_g(i,t),i=i.sibling}var gi=null;function _g(t,i){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(i,t),Zn(t),o&4&&(ba(3,t,t.return),ho(3,t),ba(5,t,t.return));break;case 1:Yn(i,t),Zn(t),o&512&&(rn||r===null||Di(r,r.return)),o&64&&Ki&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=gi;if(Yn(i,t),Zn(t),o&512&&(rn||r===null||Di(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ri]||d[hn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,r),d[hn]=t,on(d),o=d;break e;case"link":var S=f0("link","href",u).get(o+(r.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(A,1);break t}}d=u.createElement(o),Tn(d,o,r),u.head.appendChild(d);break;case"meta":if(S=f0("meta","content",u).get(o+(r.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(A,1);break t}}d=u.createElement(o),Tn(d,o,r),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[hn]=t,on(d),o=d}t.stateNode=o}else h0(u,t.type,t.stateNode);else t.stateNode=u0(u,o,t.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?h0(u,t.type,t.stateNode):u0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&_f(t,t.memoizedProps,r.memoizedProps)}break;case 27:Yn(i,t),Zn(t),o&512&&(rn||r===null||Di(r,r.return)),r!==null&&o&4&&_f(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Yn(i,t),Zn(t),o&512&&(rn||r===null||Di(r,r.return)),t.flags&32){u=t.stateNode;try{Fn(u,"")}catch(ae){Gt(t,t.return,ae)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,_f(t,u,r!==null?r.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(Yn(i,t),Zn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ae){Gt(t,t.return,ae)}}break;case 3:if(Jl=null,u=gi,gi=Kl(i.containerInfo),Yn(i,t),gi=u,Zn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{No(i.containerInfo)}catch(ae){Gt(t,t.return,ae)}yf&&(yf=!1,vg(t));break;case 4:o=gi,gi=Kl(t.stateNode.containerInfo),Yn(i,t),Zn(t),gi=o;break;case 12:Yn(i,t),Zn(t);break;case 13:Yn(i,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Rf=Fe()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Sf(t,o)));break;case 22:u=t.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,J=Ki,he=rn;if(Ki=J||u,rn=he||I,Yn(i,t),rn=he,Ki=J,Zn(t),o&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(r===null||I||Ki||rn||lr(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){I=r=i;try{if(d=I.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=I.stateNode;var ge=I.memoizedProps.style,ne=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ae){Gt(I,I.return,ae)}}}else if(i.tag===6){if(r===null){I=i;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(ae){Gt(I,I.return,ae)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Sf(t,r))));break;case 19:Yn(i,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Sf(t,o)));break;case 30:break;case 21:break;default:Yn(i,t),Zn(t)}}function Zn(t){var i=t.flags;if(i&2){try{for(var r,o=t.return;o!==null;){if(ug(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,d=vf(t);Bl(t,d,u);break;case 5:var S=r.stateNode;r.flags&32&&(Fn(S,""),r.flags&=-33);var A=vf(t);Bl(t,A,S);break;case 3:case 4:var I=r.stateNode.containerInfo,J=vf(t);xf(t,J,I);break;default:throw Error(a(161))}}catch(he){Gt(t,t.return,he)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function vg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;vg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ea(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)dg(t,i.alternate,i),i=i.sibling}function lr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ba(4,i,i.return),lr(i);break;case 1:Di(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&lg(i,i.return,r),lr(i);break;case 27:bo(i.stateNode);case 26:case 5:Di(i,i.return),lr(i);break;case 22:i.memoizedState===null&&lr(i);break;case 30:lr(i);break;default:lr(i)}t=t.sibling}}function Ta(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:Ta(u,d,r),ho(4,d);break;case 1:if(Ta(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Gt(o,o.return,J)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)qp(I[u],A)}catch(J){Gt(o,o.return,J)}}r&&S&64&&og(d),po(d,d.return);break;case 27:fg(d);case 26:case 5:Ta(u,d,r),r&&o===null&&S&4&&cg(d),po(d,d.return);break;case 12:Ta(u,d,r);break;case 13:Ta(u,d,r),r&&S&4&&gg(u,d);break;case 22:d.memoizedState===null&&Ta(u,d,r),po(d,d.return);break;case 30:break;default:Ta(u,d,r)}i=i.sibling}}function Mf(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Js(r))}function bf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Js(t))}function Ni(t,i,r,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)xg(t,i,r,o),i=i.sibling}function xg(t,i,r,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ni(t,i,r,o),u&2048&&ho(9,i);break;case 1:Ni(t,i,r,o);break;case 3:Ni(t,i,r,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Js(t)));break;case 12:if(u&2048){Ni(t,i,r,o),t=i.stateNode;try{var d=i.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Gt(i,i.return,I)}}else Ni(t,i,r,o);break;case 13:Ni(t,i,r,o);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ni(t,i,r,o):mo(t,i):d._visibility&2?Ni(t,i,r,o):(d._visibility|=2,Yr(t,i,r,o,(i.subtreeFlags&10256)!==0)),u&2048&&Mf(S,i);break;case 24:Ni(t,i,r,o),u&2048&&bf(i.alternate,i);break;default:Ni(t,i,r,o)}}function Yr(t,i,r,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,S=i,A=r,I=o,J=S.flags;switch(S.tag){case 0:case 11:case 15:Yr(d,S,A,I,u),ho(8,S);break;case 23:break;case 22:var he=S.stateNode;S.memoizedState!==null?he._visibility&2?Yr(d,S,A,I,u):mo(d,S):(he._visibility|=2,Yr(d,S,A,I,u)),u&&J&2048&&Mf(S.alternate,S);break;case 24:Yr(d,S,A,I,u),u&&J&2048&&bf(S.alternate,S);break;default:Yr(d,S,A,I,u)}i=i.sibling}}function mo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,o=i,u=o.flags;switch(o.tag){case 22:mo(r,o),u&2048&&Mf(o.alternate,o);break;case 24:mo(r,o),u&2048&&bf(o.alternate,o);break;default:mo(r,o)}i=i.sibling}}var go=8192;function Zr(t){if(t.subtreeFlags&go)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 26:Zr(t),t.flags&go&&t.memoizedState!==null&&Oy(gi,t.memoizedState,t.memoizedProps);break;case 5:Zr(t);break;case 3:case 4:var i=gi;gi=Kl(t.stateNode.containerInfo),Zr(t),gi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=go,go=16777216,Zr(t),go=i):Zr(t));break;default:Zr(t)}}function Sg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function _o(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];xn=o,bg(o,t)}Sg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mg(t),t=t.sibling}function Mg(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&ba(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,zl(t)):_o(t);break;default:_o(t)}}function zl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var o=i[r];xn=o,bg(o,t)}Sg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ba(8,i,i.return),zl(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,zl(i));break;default:zl(i)}t=t.sibling}}function bg(t,i){for(;xn!==null;){var r=xn;switch(r.tag){case 0:case 11:case 15:ba(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,xn=o;else e:for(r=t;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(pg(o),o===r){xn=null;break e}if(u!==null){u.return=d,xn=u;break e}xn=d}}}var Kx={getCacheForType:function(t){var i=wn(dn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r}},Qx=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Xt=null,gt=null,St=0,Lt=0,Kn=null,Aa=!1,Kr=!1,Ef=!1,Ji=0,nn=0,Ra=0,cr=0,Tf=0,oi=0,Qr=0,vo=null,kn=null,Af=!1,Rf=0,Fl=1/0,Hl=null,wa=null,En=0,Ca=null,Jr=null,$r=0,wf=0,Cf=null,Eg=null,xo=0,Df=null;function Qn(){if((Ut&2)!==0&&St!==0)return St&-St;if(P.T!==null){var t=Hr;return t!==0?t:Bf()}return bt()}function Tg(){oi===0&&(oi=(St&536870912)===0||wt?j():536870912);var t=si.current;return t!==null&&(t.flags|=32),oi}function Jn(t,i,r){(t===Xt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(es(t,0),Da(t,St,oi,!1)),Be(t,r),((Ut&2)===0||t!==Xt)&&(t===Xt&&((Ut&2)===0&&(cr|=r),nn===4&&Da(t,St,oi,!1)),Ui(t))}function Ag(t,i,r){if((Ut&6)!==0)throw Error(a(327));var o=!r&&(i&124)===0&&(i&t.expiredLanes)===0||De(t,i),u=o?ey(t,i):Lf(t,i,!0),d=o;do{if(u===0){Kr&&!o&&Da(t,i,0,!1);break}else{if(r=t.current.alternate,d&&!Jx(r)){u=Lf(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var A=t;u=vo;var I=A.current.memoizedState.isDehydrated;if(I&&(es(A,S).flags|=256),S=Lf(A,S,!1),S!==2){if(Ef&&!I){A.errorRecoveryDisabledLanes|=d,cr|=d,u=4;break e}d=kn,kn=u,d!==null&&(kn===null?kn=d:kn.push.apply(kn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){es(t,0),Da(t,i,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Da(o,i,oi,!Aa);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=Rf+300-Fe(),10<u)){if(Da(o,i,oi,!Aa),ke(o,0,!0)!==0)break e;o.timeoutHandle=t0(Rg.bind(null,o,r,kn,Hl,Af,i,oi,cr,Qr,Aa,d,2,-0,0),u);break e}Rg(o,r,kn,Hl,Af,i,oi,cr,Qr,Aa,d,0,-0,0)}}break}while(!0);Ui(t)}function Rg(t,i,r,o,u,d,S,A,I,J,he,ge,ne,ae){if(t.timeoutHandle=-1,ge=i.subtreeFlags,(ge&8192||(ge&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:Ly},yg(i),ge=Py(),ge!==null)){t.cancelPendingCommit=ge(Og.bind(null,t,i,d,r,o,u,S,A,I,he,1,ne,ae)),Da(t,d,S,!J);return}Og(t,i,d,r,o,u,S,A,I)}function Jx(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!Wn(d(),u))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Da(t,i,r,o){i&=~Tf,i&=~cr,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var d=31-Ie(u),S=1<<d;o[d]=-1,u&=~S}r!==0&&_e(t,r,i)}function Vl(){return(Ut&6)===0?(yo(0),!1):!0}function Nf(){if(gt!==null){if(Lt===0)var t=gt.return;else t=gt,ji=ir=null,qu(t),Wr=null,co=0,t=gt;for(;t!==null;)sg(t.alternate,t),t=t.return;gt=null}}function es(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,gy(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Nf(),Xt=t,gt=r=Vi(t.current,null),St=i,Lt=0,Kn=null,Aa=!1,Kr=De(t,i),Ef=!1,Qr=oi=Tf=cr=Ra=nn=0,kn=vo=null,Af=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-Ie(o),d=1<<u;i|=t[u],o&=~d}return Ji=i,cl(),r}function wg(t,i){ht=null,P.H=wl,i===eo||i===vl?(i=Xp(),Lt=3):i===Gp?(i=Xp(),Lt=4):Lt=i===Wm?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Kn=i,gt===null&&(nn=1,Ll(t,ni(i,t.current)))}function Cg(){var t=P.H;return P.H=wl,t===null?wl:t}function Dg(){var t=P.A;return P.A=Kx,t}function Uf(){nn=4,Aa||(St&4194048)!==St&&si.current!==null||(Kr=!0),(Ra&134217727)===0&&(cr&134217727)===0||Xt===null||Da(Xt,St,oi,!1)}function Lf(t,i,r){var o=Ut;Ut|=2;var u=Cg(),d=Dg();(Xt!==t||St!==i)&&(Hl=null,es(t,i)),i=!1;var S=nn;e:do try{if(Lt!==0&&gt!==null){var A=gt,I=Kn;switch(Lt){case 8:Nf(),S=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(i=!0);var J=Lt;if(Lt=0,Kn=null,ts(t,A,I,J),r&&Kr){S=0;break e}break;default:J=Lt,Lt=0,Kn=null,ts(t,A,I,J)}}$x(),S=nn;break}catch(he){wg(t,he)}while(!0);return i&&t.shellSuspendCounter++,ji=ir=null,Ut=o,P.H=u,P.A=d,gt===null&&(Xt=null,St=0,cl()),S}function $x(){for(;gt!==null;)Ng(gt)}function ey(t,i){var r=Ut;Ut|=2;var o=Cg(),u=Dg();Xt!==t||St!==i?(Hl=null,Fl=Fe()+500,es(t,i)):Kr=De(t,i);e:do try{if(Lt!==0&&gt!==null){i=gt;var d=Kn;t:switch(Lt){case 1:Lt=0,Kn=null,ts(t,i,d,1);break;case 2:case 9:if(kp(d)){Lt=0,Kn=null,Ug(i);break}i=function(){Lt!==2&&Lt!==9||Xt!==t||(Lt=7),Ui(t)},d.then(i,i);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:kp(d)?(Lt=0,Kn=null,Ug(i)):(Lt=0,Kn=null,ts(t,i,d,7));break;case 5:var S=null;switch(gt.tag){case 26:S=gt.memoizedState;case 5:case 27:var A=gt;if(!S||d0(S)){Lt=0,Kn=null;var I=A.sibling;if(I!==null)gt=I;else{var J=A.return;J!==null?(gt=J,Gl(J)):gt=null}break t}}Lt=0,Kn=null,ts(t,i,d,5);break;case 6:Lt=0,Kn=null,ts(t,i,d,6);break;case 8:Nf(),nn=6;break e;default:throw Error(a(462))}}ty();break}catch(he){wg(t,he)}while(!0);return ji=ir=null,P.H=o,P.A=u,Ut=r,gt!==null?0:(Xt=null,St=0,cl(),nn)}function ty(){for(;gt!==null&&!Qe();)Ng(gt)}function Ng(t){var i=ag(t.alternate,t,Ji);t.memoizedProps=t.pendingProps,i===null?Gl(t):gt=i}function Ug(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=Jm(r,i,i.pendingProps,i.type,void 0,St);break;case 11:i=Jm(r,i,i.pendingProps,i.type.render,i.ref,St);break;case 5:qu(i);default:sg(r,i),i=gt=Lp(i,Ji),i=ag(r,i,Ji)}t.memoizedProps=t.pendingProps,i===null?Gl(t):gt=i}function ts(t,i,r,o){ji=ir=null,qu(i),Wr=null,co=0;var u=i.return;try{if(jx(t,u,i,r,St)){nn=1,Ll(t,ni(r,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;nn=1,Ll(t,ni(r,t.current)),gt=null;return}i.flags&32768?(wt||o===1?t=!0:Kr||(St&536870912)!==0?t=!1:(Aa=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Lg(i,t)):Gl(i)}function Gl(t){var i=t;do{if((i.flags&32768)!==0){Lg(i,Aa);return}t=i.return;var r=Wx(i.alternate,i,Ji);if(r!==null){gt=r;return}if(i=i.sibling,i!==null){gt=i;return}gt=i=t}while(i!==null);nn===0&&(nn=5)}function Lg(t,i){do{var r=qx(t.alternate,t);if(r!==null){r.flags&=32767,gt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){gt=t;return}gt=t=r}while(t!==null);nn=6,gt=null}function Og(t,i,r,o,u,d,S,A,I){t.cancelPendingCommit=null;do kl();while(En!==0);if((Ut&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Mu,Ee(t,r,d,S,A,I),t===Xt&&(gt=Xt=null,St=0),Jr=i,Ca=t,$r=r,wf=d,Cf=u,Eg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ry(Kt,function(){return Fg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=$.p,$.p=2,S=Ut,Ut|=4;try{Yx(t,i,r)}finally{Ut=S,$.p=u,P.T=o}}En=1,Pg(),Ig(),Bg()}}function Pg(){if(En===1){En=0;var t=Ca,i=Jr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var o=$.p;$.p=2;var u=Ut;Ut|=4;try{_g(i,t);var d=Xf,S=bp(t.containerInfo),A=d.focusedElem,I=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&Mp(A.ownerDocument.documentElement,A)){if(I!==null&&_u(A)){var J=I.start,he=I.end;if(he===void 0&&(he=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(he,A.value.length);else{var ge=A.ownerDocument||document,ne=ge&&ge.defaultView||window;if(ne.getSelection){var ae=ne.getSelection(),nt=A.textContent.length,$e=Math.min(I.start,nt),zt=I.end===void 0?$e:Math.min(I.end,nt);!ae.extend&&$e>zt&&(S=zt,zt=$e,$e=S);var W=Sp(A,$e),G=Sp(A,zt);if(W&&G&&(ae.rangeCount!==1||ae.anchorNode!==W.node||ae.anchorOffset!==W.offset||ae.focusNode!==G.node||ae.focusOffset!==G.offset)){var Q=ge.createRange();Q.setStart(W.node,W.offset),ae.removeAllRanges(),$e>zt?(ae.addRange(Q),ae.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),ae.addRange(Q))}}}}for(ge=[],ae=A;ae=ae.parentNode;)ae.nodeType===1&&ge.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ge.length;A++){var pe=ge[A];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}tc=!!jf,Xf=jf=null}finally{Ut=u,$.p=o,P.T=r}}t.current=i,En=2}}function Ig(){if(En===2){En=0;var t=Ca,i=Jr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var o=$.p;$.p=2;var u=Ut;Ut|=4;try{dg(t,i.alternate,i)}finally{Ut=u,$.p=o,P.T=r}}En=3}}function Bg(){if(En===4||En===3){En=0,Mt();var t=Ca,i=Jr,r=$r,o=Eg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,Jr=Ca=null,zg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(wa=null),Nt(r),i=i.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=P.T,u=$.p,$.p=2,P.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{P.T=i,$.p=u}}($r&3)!==0&&kl(),Ui(t),u=t.pendingLanes,(r&4194090)!==0&&(u&42)!==0?t===Df?xo++:(xo=0,Df=t):xo=0,yo(0)}}function zg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Js(i)))}function kl(t){return Pg(),Ig(),Bg(),Fg()}function Fg(){if(En!==5)return!1;var t=Ca,i=wf;wf=0;var r=Nt($r),o=P.T,u=$.p;try{$.p=32>r?32:r,P.T=null,r=Cf,Cf=null;var d=Ca,S=$r;if(En=0,Jr=Ca=null,$r=0,(Ut&6)!==0)throw Error(a(331));var A=Ut;if(Ut|=4,Mg(d.current),xg(d,d.current,S,r),Ut=A,yo(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{$.p=u,P.T=o,zg(t,i)}}function Hg(t,i,r){i=ni(r,i),i=lf(t.stateNode,i,2),t=xa(t,i,2),t!==null&&(Be(t,2),Ui(t))}function Gt(t,i,r){if(t.tag===3)Hg(t,t,r);else for(;i!==null;){if(i.tag===3){Hg(i,t,r);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){t=ni(r,t),r=jm(2),o=xa(i,r,2),o!==null&&(Xm(r,o,i,t),Be(o,2),Ui(o));break}}i=i.return}}function Of(t,i,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Qx;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(r)||(Ef=!0,u.add(r),t=ny.bind(null,t,i,r),i.then(t,t))}function ny(t,i,r){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Xt===t&&(St&r)===r&&(nn===4||nn===3&&(St&62914560)===St&&300>Fe()-Rf?(Ut&2)===0&&es(t,0):Tf|=r,Qr===St&&(Qr=0)),Ui(t)}function Vg(t,i){i===0&&(i=Ae()),t=Ir(t,i),t!==null&&(Be(t,i),Ui(t))}function iy(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Vg(t,r)}function ay(t,i){var r=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Vg(t,r)}function ry(t,i){return V(t,i)}var jl=null,ns=null,Pf=!1,Xl=!1,If=!1,ur=0;function Ui(t){t!==ns&&t.next===null&&(ns===null?jl=ns=t:ns=ns.next=t),Xl=!0,Pf||(Pf=!0,oy())}function yo(t,i){if(!If&&Xl){If=!0;do for(var r=!1,o=jl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Ie(42|t)+1)-1,d&=u&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Xg(o,d))}else d=St,d=ke(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||De(o,d)||(r=!0,Xg(o,d));o=o.next}while(r);If=!1}}function sy(){Gg()}function Gg(){Xl=Pf=!1;var t=0;ur!==0&&(my()&&(t=ur),ur=0);for(var i=Fe(),r=null,o=jl;o!==null;){var u=o.next,d=kg(o,i);d===0?(o.next=null,r===null?jl=u:r.next=u,u===null&&(ns=r)):(r=o,(t!==0||(d&3)!==0)&&(Xl=!0)),o=u}yo(t)}function kg(t,i){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Ie(d),A=1<<S,I=u[S];I===-1?((A&r)===0||(A&o)!==0)&&(u[S]=rt(A,i)):I<=i&&(t.expiredLanes|=A),d&=~A}if(i=Xt,r=St,r=ke(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===i&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Dt(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||De(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(o!==null&&Dt(o),Nt(r)){case 2:case 8:r=st;break;case 32:r=Kt;break;case 268435456:r=O;break;default:r=Kt}return o=jg.bind(null,t),r=V(r,o),t.callbackPriority=i,t.callbackNode=r,i}return o!==null&&o!==null&&Dt(o),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(kl()&&t.callbackNode!==r)return null;var o=St;return o=ke(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ag(t,o,i),kg(t,Fe()),t.callbackNode!=null&&t.callbackNode===r?jg.bind(null,t):null)}function Xg(t,i){if(kl())return null;Ag(t,i,!0)}function oy(){_y(function(){(Ut&6)!==0?V(He,sy):Gg()})}function Bf(){return ur===0&&(ur=j()),ur}function Wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:nl(""+t)}function qg(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function ly(t,i,r,o,u){if(i==="submit"&&r&&r.stateNode===u){var d=Wg((u[$t]||null).action),S=o.submitter;S&&(i=(i=S[$t]||null)?Wg(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var A=new sl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ur!==0){var I=S?qg(u,S):new FormData(u);nf(r,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(A.preventDefault(),I=S?qg(u,S):new FormData(u),nf(r,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var zf=0;zf<Su.length;zf++){var Ff=Su[zf],cy=Ff.toLowerCase(),uy=Ff[0].toUpperCase()+Ff.slice(1);mi(cy,"on"+uy)}mi(Ap,"onAnimationEnd"),mi(Rp,"onAnimationIteration"),mi(wp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Rx,"onTransitionRun"),mi(wx,"onTransitionStart"),mi(Cx,"onTransitionCancel"),mi(Cp,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Yg(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var S=o.length-1;0<=S;S--){var A=o[S],I=A.instance,J=A.currentTarget;if(A=A.listener,I!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=J;try{d(u)}catch(he){Ul(he)}u.currentTarget=null,d=I}else for(S=0;S<o.length;S++){if(A=o[S],I=A.instance,J=A.currentTarget,A=A.listener,I!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=J;try{d(u)}catch(he){Ul(he)}u.currentTarget=null,d=I}}}}function _t(t,i){var r=i[Ar];r===void 0&&(r=i[Ar]=new Set);var o=t+"__bubble";r.has(o)||(Zg(i,t,2,!1),r.add(o))}function Hf(t,i,r){var o=0;i&&(o|=4),Zg(r,t,o,i)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Vf(t){if(!t[Wl]){t[Wl]=!0,el.forEach(function(r){r!=="selectionchange"&&(fy.has(r)||Hf(r,!1,t),Hf(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Wl]||(i[Wl]=!0,Hf("selectionchange",!1,i))}}function Zg(t,i,r,o){switch(x0(i)){case 2:var u=zy;break;case 8:u=Fy;break;default:u=th}r=u.bind(null,i,r,t),u=void 0,!lu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,r,{capture:!0,passive:u}):t.addEventListener(i,r,!0):u!==void 0?t.addEventListener(i,r,{passive:u}):t.addEventListener(i,r,!1)}function Gf(t,i,r,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Fi(A),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=d=S;continue e}A=A.parentNode}}o=o.return}np(function(){var J=d,he=su(r),ge=[];e:{var ne=Dp.get(t);if(ne!==void 0){var ae=sl,nt=t;switch(t){case"keypress":if(al(r)===0)break e;case"keydown":case"keyup":ae=rx;break;case"focusin":nt="focus",ae=hu;break;case"focusout":nt="blur",ae=hu;break;case"beforeblur":case"afterblur":ae=hu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=lx;break;case Ap:case Rp:case wp:ae=Kv;break;case Cp:ae=ux;break;case"scroll":case"scrollend":ae=Xv;break;case"wheel":ae=hx;break;case"copy":case"cut":case"paste":ae=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=op;break;case"toggle":case"beforetoggle":ae=px}var $e=(i&4)!==0,zt=!$e&&(t==="scroll"||t==="scrollend"),W=$e?ne!==null?ne+"Capture":null:ne;$e=[];for(var G=J,Q;G!==null;){var pe=G;if(Q=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Q===null||W===null||(pe=Fs(G,W),pe!=null&&$e.push(Mo(G,pe,Q))),zt)break;G=G.return}0<$e.length&&(ne=new ae(ne,nt,null,r,he),ge.push({event:ne,listeners:$e}))}}if((i&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",ne&&r!==ru&&(nt=r.relatedTarget||r.fromElement)&&(Fi(nt)||nt[Ai]))break e;if((ae||ne)&&(ne=he.window===he?he:(ne=he.ownerDocument)?ne.defaultView||ne.parentWindow:window,ae?(nt=r.relatedTarget||r.toElement,ae=J,nt=nt?Fi(nt):null,nt!==null&&(zt=c(nt),$e=nt.tag,nt!==zt||$e!==5&&$e!==27&&$e!==6)&&(nt=null)):(ae=null,nt=J),ae!==nt)){if($e=rp,pe="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&($e=op,pe="onPointerLeave",W="onPointerEnter",G="pointer"),zt=ae==null?ne:Ya(ae),Q=nt==null?ne:Ya(nt),ne=new $e(pe,G+"leave",ae,r,he),ne.target=zt,ne.relatedTarget=Q,pe=null,Fi(he)===J&&($e=new $e(W,G+"enter",nt,r,he),$e.target=Q,$e.relatedTarget=zt,pe=$e),zt=pe,ae&&nt)t:{for($e=ae,W=nt,G=0,Q=$e;Q;Q=is(Q))G++;for(Q=0,pe=W;pe;pe=is(pe))Q++;for(;0<G-Q;)$e=is($e),G--;for(;0<Q-G;)W=is(W),Q--;for(;G--;){if($e===W||W!==null&&$e===W.alternate)break t;$e=is($e),W=is(W)}$e=null}else $e=null;ae!==null&&Kg(ge,ne,ae,$e,!1),nt!==null&&zt!==null&&Kg(ge,zt,nt,$e,!0)}}e:{if(ne=J?Ya(J):window,ae=ne.nodeName&&ne.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ne.type==="file")var Ve=mp;else if(dp(ne))if(gp)Ve=Ex;else{Ve=Mx;var dt=Sx}else ae=ne.nodeName,!ae||ae.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?J&&au(J.elementType)&&(Ve=mp):Ve=bx;if(Ve&&(Ve=Ve(t,J))){pp(ge,Ve,r,he);break e}dt&&dt(t,ne,J),t==="focusout"&&J&&ne.type==="number"&&J.memoizedProps.value!=null&&Rn(ne,"number",ne.value)}switch(dt=J?Ya(J):window,t){case"focusin":(dp(dt)||dt.contentEditable==="true")&&(Lr=dt,vu=J,qs=null);break;case"focusout":qs=vu=Lr=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Ep(ge,r,he);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":Ep(ge,r,he)}var Ye;if(pu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Ur?fp(t,r)&&(tt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(tt="onCompositionStart");tt&&(lp&&r.locale!=="ko"&&(Ur||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Ur&&(Ye=ip()):(ma=he,cu="value"in ma?ma.value:ma.textContent,Ur=!0)),dt=ql(J,tt),0<dt.length&&(tt=new sp(tt,t,null,r,he),ge.push({event:tt,listeners:dt}),Ye?tt.data=Ye:(Ye=hp(r),Ye!==null&&(tt.data=Ye)))),(Ye=gx?_x(t,r):vx(t,r))&&(tt=ql(J,"onBeforeInput"),0<tt.length&&(dt=new sp("onBeforeInput","beforeinput",null,r,he),ge.push({event:dt,listeners:tt}),dt.data=Ye)),ly(ge,t,J,r,he)}Yg(ge,i)})}function Mo(t,i,r){return{instance:t,listener:i,currentTarget:r}}function ql(t,i){for(var r=i+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Fs(t,r),u!=null&&o.unshift(Mo(t,u,d)),u=Fs(t,i),u!=null&&o.push(Mo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Kg(t,i,r,o,u){for(var d=i._reactName,S=[];r!==null&&r!==o;){var A=r,I=A.alternate,J=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||J===null||(I=J,u?(J=Fs(r,d),J!=null&&S.unshift(Mo(r,J,I))):u||(J=Fs(r,d),J!=null&&S.push(Mo(r,J,I)))),r=r.return}S.length!==0&&t.push({event:i,listeners:S})}var hy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Qg(t){return(typeof t=="string"?t:""+t).replace(hy,`
`).replace(dy,"")}function Jg(t,i){return i=Qg(i),Qg(t)===i}function Yl(){}function Bt(t,i,r,o,u,d){switch(r){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Fn(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Fn(t,""+o);break;case"className":ze(t,"class",o);break;case"tabIndex":ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(t,r,o);break;case"style":ep(t,o,d);break;case"data":if(i!=="object"){ze(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=nl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Bt(t,i,"name",u.name,u,null),Bt(t,i,"formEncType",u.formEncType,u,null),Bt(t,i,"formMethod",u.formMethod,u,null),Bt(t,i,"formTarget",u.formTarget,u,null)):(Bt(t,i,"encType",u.encType,u,null),Bt(t,i,"method",u.method,u,null),Bt(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=nl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Yl);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=nl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Ne(t,"popover",o);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ne(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=kv.get(r)||r,Ne(t,r,o))}}function kf(t,i,r,o,u,d){switch(r){case"style":ep(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Fn(t,o):(typeof o=="number"||typeof o=="bigint")&&Fn(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Yl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tl.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),i=r.slice(2,u?r.length-7:void 0),d=t[$t]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Ne(t,r,o)}}}function Tn(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Bt(t,i,d,S,r,null)}}u&&Bt(t,i,"srcSet",r.srcSet,r,null),o&&Bt(t,i,"src",r.src,r,null);return;case"input":_t("invalid",t);var A=d=S=u=null,I=null,J=null;for(o in r)if(r.hasOwnProperty(o)){var he=r[o];if(he!=null)switch(o){case"name":u=he;break;case"type":S=he;break;case"checked":I=he;break;case"defaultChecked":J=he;break;case"value":d=he;break;case"defaultValue":A=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(a(137,i));break;default:Bt(t,i,o,he,r,null)}}On(t,d,A,I,J,S,u,!1),mt(t);return;case"select":_t("invalid",t),o=S=d=null;for(u in r)if(r.hasOwnProperty(u)&&(A=r[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Bt(t,i,u,A,r,null)}i=d,r=S,t.multiple=!!o,i!=null?en(t,!!o,i,!1):r!=null&&en(t,!!o,r,!0);return;case"textarea":_t("invalid",t),d=u=o=null;for(S in r)if(r.hasOwnProperty(S)&&(A=r[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Bt(t,i,S,A,r,null)}Cr(t,o,u,d),mt(t);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(o=r[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Bt(t,i,I,o,r,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<So.length;o++)_t(So[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in r)if(r.hasOwnProperty(J)&&(o=r[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Bt(t,i,J,o,r,null)}return;default:if(au(i)){for(he in r)r.hasOwnProperty(he)&&(o=r[he],o!==void 0&&kf(t,i,he,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&Bt(t,i,A,o,r,null))}function py(t,i,r,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,A=null,I=null,J=null,he=null;for(ae in r){var ge=r[ae];if(r.hasOwnProperty(ae)&&ge!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":I=ge;default:o.hasOwnProperty(ae)||Bt(t,i,ae,null,o,ge)}}for(var ne in o){var ae=o[ne];if(ge=r[ne],o.hasOwnProperty(ne)&&(ae!=null||ge!=null))switch(ne){case"type":d=ae;break;case"name":u=ae;break;case"checked":J=ae;break;case"defaultChecked":he=ae;break;case"value":S=ae;break;case"defaultValue":A=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:ae!==ge&&Bt(t,i,ne,ae,o,ge)}}Vt(t,S,A,I,J,he,d,u);return;case"select":ae=S=A=ne=null;for(d in r)if(I=r[d],r.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":ae=I;default:o.hasOwnProperty(d)||Bt(t,i,d,null,o,I)}for(u in o)if(d=o[u],I=r[u],o.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":ne=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==I&&Bt(t,i,u,d,o,I)}i=A,r=S,o=ae,ne!=null?en(t,!!r,ne,!1):!!o!=!!r&&(i!=null?en(t,!!r,i,!0):en(t,!!r,r?[]:"",!1));return;case"textarea":ae=ne=null;for(A in r)if(u=r[A],r.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Bt(t,i,A,null,o,u)}for(S in o)if(u=o[S],d=r[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ne=u;break;case"defaultValue":ae=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Bt(t,i,S,u,o,d)}Mn(t,ne,ae);return;case"option":for(var nt in r)if(ne=r[nt],r.hasOwnProperty(nt)&&ne!=null&&!o.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:Bt(t,i,nt,null,o,ne)}for(I in o)if(ne=o[I],ae=r[I],o.hasOwnProperty(I)&&ne!==ae&&(ne!=null||ae!=null))switch(I){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Bt(t,i,I,ne,o,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in r)ne=r[$e],r.hasOwnProperty($e)&&ne!=null&&!o.hasOwnProperty($e)&&Bt(t,i,$e,null,o,ne);for(J in o)if(ne=o[J],ae=r[J],o.hasOwnProperty(J)&&ne!==ae&&(ne!=null||ae!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,i));break;default:Bt(t,i,J,ne,o,ae)}return;default:if(au(i)){for(var zt in r)ne=r[zt],r.hasOwnProperty(zt)&&ne!==void 0&&!o.hasOwnProperty(zt)&&kf(t,i,zt,void 0,o,ne);for(he in o)ne=o[he],ae=r[he],!o.hasOwnProperty(he)||ne===ae||ne===void 0&&ae===void 0||kf(t,i,he,ne,o,ae);return}}for(var W in r)ne=r[W],r.hasOwnProperty(W)&&ne!=null&&!o.hasOwnProperty(W)&&Bt(t,i,W,null,o,ne);for(ge in o)ne=o[ge],ae=r[ge],!o.hasOwnProperty(ge)||ne===ae||ne==null&&ae==null||Bt(t,i,ge,ne,o,ae)}var jf=null,Xf=null;function Zl(t){return t.nodeType===9?t:t.ownerDocument}function $g(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Wf(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qf=null;function my(){var t=window.event;return t&&t.type==="popstate"?t===qf?!1:(qf=t,!0):(qf=null,!1)}var t0=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(vy)}:t0;function vy(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function i0(t,i){var r=i,o=0,u=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(0<o&&8>o){r=o;var S=t.ownerDocument;if(r&1&&bo(S.documentElement),r&2&&bo(S.body),r&4)for(r=S.head,bo(r),S=r.firstChild;S;){var A=S.nextSibling,I=S.nodeName;S[Ri]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&S.rel.toLowerCase()==="stylesheet"||r.removeChild(S),S=A}}if(u===0){t.removeChild(d),No(i);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:o=r.charCodeAt(0)-48;else o=0;r=d}while(r);No(i)}function Yf(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Yf(r),wr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function xy(t,i,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ri])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function yy(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=_i(t.nextSibling),t===null))return null;return t}function Zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Sy(t,i){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")i();else{var o=function(){i(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Kf=null;function a0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return t;i--}else r==="/$"&&i++}t=t.previousSibling}return null}function r0(t,i,r){switch(i=Zl(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function bo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);wr(t)}var li=new Map,s0=new Set;function Kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=$.d;$.d={f:My,r:by,D:Ey,C:Ty,L:Ay,m:Ry,X:Cy,S:wy,M:Dy};function My(){var t=$i.f(),i=Vl();return t||i}function by(t){var i=da(t);i!==null&&i.tag===5&&i.type==="form"?Am(i):$i.r(t)}var as=typeof document>"u"?null:document;function o0(t,i,r){var o=as;if(o&&typeof i=="string"&&i){var u=_n(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),s0.has(u)||(s0.add(u),t={rel:t,crossOrigin:r,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Tn(i,"link",t),on(i),o.head.appendChild(i)))}}function Ey(t){$i.D(t),o0("dns-prefetch",t,null)}function Ty(t,i){$i.C(t,i),o0("preconnect",t,i)}function Ay(t,i,r){$i.L(t,i,r);var o=as;if(o&&t&&i){var u='link[rel="preload"][as="'+_n(i)+'"]';i==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+_n(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+_n(r.imageSizes)+'"]')):u+='[href="'+_n(t)+'"]';var d=u;switch(i){case"style":d=rs(t);break;case"script":d=ss(t)}li.has(d)||(t=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),li.set(d,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(Eo(d))||i==="script"&&o.querySelector(To(d))||(i=o.createElement("link"),Tn(i,"link",t),on(i),o.head.appendChild(i)))}}function Ry(t,i){$i.m(t,i);var r=as;if(r&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+_n(o)+'"][href="'+_n(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ss(t)}if(!li.has(d)&&(t=g({rel:"modulepreload",href:t},i),li.set(d,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(To(d)))return}o=r.createElement("link"),Tn(o,"link",t),on(o),r.head.appendChild(o)}}}function wy(t,i,r){$i.S(t,i,r);var o=as;if(o&&t){var u=pa(o).hoistableStyles,d=rs(t);i=i||"default";var S=u.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Eo(d)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},r),(r=li.get(d))&&Qf(t,r);var I=S=o.createElement("link");on(I),Tn(I,"link",t),I._p=new Promise(function(J,he){I.onload=J,I.onerror=he}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ql(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(d,S)}}}function Cy(t,i){$i.X(t,i);var r=as;if(r&&t){var o=pa(r).hoistableScripts,u=ss(t),d=o.get(u);d||(d=r.querySelector(To(u)),d||(t=g({src:t,async:!0},i),(i=li.get(u))&&Jf(t,i),d=r.createElement("script"),on(d),Tn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Dy(t,i){$i.M(t,i);var r=as;if(r&&t){var o=pa(r).hoistableScripts,u=ss(t),d=o.get(u);d||(d=r.querySelector(To(u)),d||(t=g({src:t,async:!0,type:"module"},i),(i=li.get(u))&&Jf(t,i),d=r.createElement("script"),on(d),Tn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function l0(t,i,r,o){var u=(u=de.current)?Kl(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=rs(r.href),r=pa(u).hoistableStyles,o=r.get(i),o||(o={type:"style",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=rs(r.href);var d=pa(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Eo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),li.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},li.set(t,r),d||Ny(u,t,r,S.state))),i&&o===null)throw Error(a(528,""));return S}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ss(r),r=pa(u).hoistableScripts,o=r.get(i),o||(o={type:"script",instance:null,count:0,state:null},r.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function rs(t){return'href="'+_n(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function c0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ny(t,i,r,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Tn(i,"link",r),on(i),t.head.appendChild(i))}function ss(t){return'[src="'+_n(t)+'"]'}function To(t){return"script[async]"+t}function u0(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+_n(r.href)+'"]');if(o)return i.instance=o,on(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),on(o),Tn(o,"style",u),Ql(o,r.precedence,t),i.instance=o;case"stylesheet":u=rs(r.href);var d=t.querySelector(Eo(u));if(d)return i.state.loading|=4,i.instance=d,on(d),d;o=c0(r),(u=li.get(u))&&Qf(o,u),d=(t.ownerDocument||t).createElement("link"),on(d);var S=d;return S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),Tn(d,"link",o),i.state.loading|=4,Ql(d,r.precedence,t),i.instance=d;case"script":return d=ss(r.src),(u=t.querySelector(To(d)))?(i.instance=u,on(u),u):(o=r,(u=li.get(d))&&(o=g({},r),Jf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),on(u),Tn(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Ql(o,r.precedence,t));return i.instance}function Ql(t,i,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===i)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Qf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Jf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Jl=null;function f0(t,i,r){if(Jl===null){var o=new Map,u=Jl=new Map;u.set(r,o)}else u=Jl,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var d=r[u];if(!(d[Ri]||d[hn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=t+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function h0(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function Uy(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function d0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ao=null;function Ly(){}function Oy(t,i,r){if(Ao===null)throw Error(a(475));var o=Ao;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=rs(r.href),d=t.querySelector(Eo(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=$l.bind(o),t.then(o,o)),i.state.loading|=4,i.instance=d,on(d);return}d=t.ownerDocument||t,r=c0(r),(u=li.get(u))&&Qf(r,u),d=d.createElement("link"),on(d);var S=d;S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),Tn(d,"link",r),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=$l.bind(o),t.addEventListener("load",i),t.addEventListener("error",i))}}function Py(){if(Ao===null)throw Error(a(475));var t=Ao;return t.stylesheets&&t.count===0&&$f(t,t.stylesheets),0<t.count?function(i){var r=setTimeout(function(){if(t.stylesheets&&$f(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r)}}:null}function $l(){if(this.count--,this.count===0){if(this.stylesheets)$f(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function $f(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,i.forEach(Iy,t),ec=null,$l.call(t))}function Iy(t,i){if(!(i.state.loading&4)){var r=ec.get(t);if(r)var o=r.get(null);else{r=new Map,ec.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}u=i.instance,S=u.getAttribute("data-precedence"),d=r.get(S)||o,d===o&&r.set(null,u),r.set(S,u),this.count++,o=$l.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var Ro={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function By(t,i,r,o,u,d,S,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function p0(t,i,r,o,u,d,S,A,I,J,he,ge){return t=new By(t,i,r,S,A,I,J,ge),i=1,d===!0&&(i|=24),d=qn(3,null,null,i),t.current=d,d.stateNode=t,i=Lu(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:i},Bu(d),t}function m0(t){return t?(t=Br,t):Br}function g0(t,i,r,o,u,d){u=m0(u),o.context===null?o.context=u:o.pendingContext=u,o=va(i),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=xa(t,o,i),r!==null&&(Jn(r,t,i),no(r,t,i))}function _0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function eh(t,i){_0(t,i),(t=t.alternate)&&_0(t,i)}function v0(t){if(t.tag===13){var i=Ir(t,67108864);i!==null&&Jn(i,t,67108864),eh(t,67108864)}}var tc=!0;function zy(t,i,r,o){var u=P.T;P.T=null;var d=$.p;try{$.p=2,th(t,i,r,o)}finally{$.p=d,P.T=u}}function Fy(t,i,r,o){var u=P.T;P.T=null;var d=$.p;try{$.p=8,th(t,i,r,o)}finally{$.p=d,P.T=u}}function th(t,i,r,o){if(tc){var u=nh(o);if(u===null)Gf(t,i,o,nc,r),y0(t,o);else if(Vy(u,t,i,r,o))o.stopPropagation();else if(y0(t,o),i&4&&-1<Hy.indexOf(t)){for(;u!==null;){var d=da(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ze(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var I=1<<31-Ie(S);A.entanglements[1]|=I,S&=~I}Ui(d),(Ut&6)===0&&(Fl=Fe()+500,yo(0))}}break;case 13:A=Ir(d,2),A!==null&&Jn(A,d,2),Vl(),eh(d,2)}if(d=nh(o),d===null&&Gf(t,i,o,nc,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else Gf(t,i,o,null,r)}}function nh(t){return t=su(t),ih(t)}var nc=null;function ih(t){if(nc=null,t=Fi(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=f(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return nc=t,null}function x0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jt()){case He:return 2;case st:return 8;case Kt:case Qt:return 32;case O:return 268435456;default:return 32}default:return 32}}var ah=!1,Ua=null,La=null,Oa=null,wo=new Map,Co=new Map,Pa=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y0(t,i){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(i.pointerId)}}function Do(t,i,r,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=da(i),i!==null&&v0(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function Vy(t,i,r,o,u){switch(i){case"focusin":return Ua=Do(Ua,t,i,r,o,u),!0;case"dragenter":return La=Do(La,t,i,r,o,u),!0;case"mouseover":return Oa=Do(Oa,t,i,r,o,u),!0;case"pointerover":var d=u.pointerId;return wo.set(d,Do(wo.get(d)||null,t,i,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Co.set(d,Do(Co.get(d)||null,t,i,r,o,u)),!0}return!1}function S0(t){var i=Fi(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=f(r),i!==null){t.blockedOn=i,di(t.priority,function(){if(r.tag===13){var o=Qn();o=at(o);var u=Ir(r,o);u!==null&&Jn(u,r,o),eh(r,o)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=nh(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);ru=o,r.target.dispatchEvent(o),ru=null}else return i=da(r),i!==null&&v0(i),t.blockedOn=r,!1;i.shift()}return!0}function M0(t,i,r){ic(t)&&r.delete(i)}function Gy(){ah=!1,Ua!==null&&ic(Ua)&&(Ua=null),La!==null&&ic(La)&&(La=null),Oa!==null&&ic(Oa)&&(Oa=null),wo.forEach(M0),Co.forEach(M0)}function ac(t,i){t.blockedOn===i&&(t.blockedOn=null,ah||(ah=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Gy)))}var rc=null;function b0(t){rc!==t&&(rc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){rc===t&&(rc=null);for(var i=0;i<t.length;i+=3){var r=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(ih(o||r)===null)continue;break}var d=da(r);d!==null&&(t.splice(i,3),i-=3,nf(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function No(t){function i(I){return ac(I,t)}Ua!==null&&ac(Ua,t),La!==null&&ac(La,t),Oa!==null&&ac(Oa,t),wo.forEach(i),Co.forEach(i);for(var r=0;r<Pa.length;r++){var o=Pa[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Pa.length&&(r=Pa[0],r.blockedOn===null);)S0(r),r.blockedOn===null&&Pa.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],S=u[$t]||null;if(typeof d=="function")S||b0(r);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[$t]||null)A=S.formAction;else if(ih(u)!==null)continue}else A=S.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),b0(r)}}}function rh(t){this._internalRoot=t}sc.prototype.render=rh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,o=Qn();g0(r,o,t,i,null,null)},sc.prototype.unmount=rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;g0(t.current,2,null,t,null,null),Vl(),i[Ai]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var i=bt();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Pa.length&&i!==0&&i<Pa[r].priority;r++);Pa.splice(r,0,t),r===0&&S0(t)}};var E0=e.version;if(E0!=="19.1.1")throw Error(a(527,E0,"19.1.1"));$.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var ky={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{fe=oc.inject(ky),ve=oc}catch{}}return Lo.createRoot=function(t,i){if(!l(t))throw Error(a(299));var r=!1,o="",u=Hm,d=Vm,S=Gm,A=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=p0(t,1,!1,null,null,r,o,u,d,S,A,null),t[Ai]=i.current,Vf(t),new rh(i)},Lo.hydrateRoot=function(t,i,r){if(!l(t))throw Error(a(299));var o=!1,u="",d=Hm,S=Vm,A=Gm,I=null,J=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(I=r.unstable_transitionCallbacks),r.formState!==void 0&&(J=r.formState)),i=p0(t,1,!0,i,r??null,o,u,d,S,A,I,J),i.context=m0(null),r=i.current,o=Qn(),o=at(o),u=va(o),u.callback=null,xa(r,u,o),r=o,i.current.lanes=r,Be(i,r),Ui(i),t[Ai]=i.current,Vf(t),new sc(i)},Lo.version="19.1.1",Lo}var O0;function $y(){if(O0)return lh.exports;O0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),lh.exports=Jy(),lh.exports}var eS=$y();const tS=()=>{const[s,e]=Zt.useState(!1),[n,a]=Zt.useState(!0),[l,c]=Zt.useState(0),[f,h]=Zt.useState(!1);Zt.useEffect(()=>{const p=()=>{const g=window.scrollY;if(f){a(!0);return}g>50?(e(!0),g>l&&g>100?a(!1):g<l&&a(!0)):(e(!1),a(!0)),c(g)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[l,f]);const m=p=>{const g=document.getElementById(p);g&&g.scrollIntoView({behavior:"smooth",block:"start"}),h(!1)};return E.jsxs(E.Fragment,{children:[E.jsx("header",{className:`
          fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
          ${s?"py-3":"bg-transparent py-4"}
          ${n?"transform translate-y-0":"transform -translate-y-full"}
        `,children:E.jsx("nav",{className:"max-w-7xl mx-auto px-8 flex justify-center items-center",children:E.jsxs("div",{className:"hidden md:flex items-center space-x-12 md:space-x-72",children:[E.jsxs("button",{onClick:()=>m("home"),className:"text-white text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2",children:[E.jsx("span",{className:"block",children:"Home"}),E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full",children:E.jsx("span",{className:"absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase",children:"Home"})})]}),E.jsxs("button",{onClick:()=>m("works"),className:"text-white text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2",children:[E.jsx("span",{className:"block",children:"Works"}),E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full",children:E.jsx("span",{className:"absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase",children:"Works"})})]}),E.jsxs("button",{onClick:()=>m("about"),className:"text-white text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2",children:[E.jsx("span",{className:"block",children:"About"}),E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full",children:E.jsx("span",{className:"absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase",children:"About"})})]}),E.jsxs("button",{onClick:()=>m("contact"),className:"text-white text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2",children:[E.jsx("span",{className:"block",children:"Contact"}),E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full",children:E.jsx("span",{className:"absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase",children:"Contact"})})]})]})})}),E.jsxs("div",{className:"md:hidden fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-out p-4 flex justify-between items-center",style:{transform:n?"translateY(0)":"translateY(-100%)"},children:[E.jsx("button",{onClick:()=>m("home"),className:"text-white text-lg font-bold uppercase z-50",children:"YOOEUNJI"}),E.jsx("button",{onClick:()=>h(!f),className:"text-white text-base font-light uppercase z-50",children:f?"CLOSE":"MENU"})]}),E.jsx("div",{className:`fixed inset-0 bg-black z-40 transition-opacity duration-500 ease-out ${f?"opacity-95":"opacity-0 pointer-events-none"}`,children:E.jsxs("div",{className:"flex flex-col items-center justify-center h-full space-y-8",children:[E.jsx("button",{onClick:()=>m("home"),className:"text-white text-3xl font-light uppercase",children:"HOME"}),E.jsx("button",{onClick:()=>m("works"),className:"text-white text-3xl font-light uppercase",children:"WORKS"}),E.jsx("button",{onClick:()=>m("about"),className:"text-white text-3xl font-light uppercase",children:"ABOUT"}),E.jsx("button",{onClick:()=>m("contact"),className:"text-white text-3xl font-light uppercase",children:"CONTACT"})]})})]})},P0=[{id:"home",width:180},{id:"brand-strategy",width:140},{id:"tone-of-voice",width:330},{id:"logo",width:270},{id:"typo",width:140},{id:"photo",width:305},{id:"color",width:140},{id:"another-color",width:140}],nS=()=>{const[s,e]=Zt.useState(0);return Zt.useEffect(()=>{const n=()=>{const a=document.documentElement.scrollHeight-window.innerHeight;e(a>0?window.scrollY/a:0)};return window.addEventListener("scroll",n,{passive:!0}),n(),()=>window.removeEventListener("scroll",n)},[]),s},iS=()=>{const s=nS(),e=P0.reduce((a,l)=>a+l.width,0);return E.jsx("div",{className:"progress-ruler-container hidden md:block",children:E.jsxs("div",{className:"progress-ruler-wrapper",children:[E.jsx("div",{className:"progress-indicator",style:{left:`${s*100}%`,transform:`translateX(-${s*60}px)`}}),E.jsx("div",{className:"ruler-main",children:P0.map(a=>E.jsx("div",{className:"ruler-section",style:{width:`${a.width/e*100}%`},children:E.jsx("div",{className:"ruler-line",children:E.jsx("div",{className:"ruler-line-body"})})},a.id))})]})})},aS="modulepreload",rS=function(s){return"/portfolio/"+s},I0={},nv=function(e,n,a){let l=Promise.resolve();if(n&&n.length>0){let m=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");l=m(n.map(p=>{if(p=rS(p),p in I0)return;I0[p]=!0;const g=p.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${_}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":aS,g||(v.as="script"),v.crossOrigin="",v.href=p,h&&v.setAttribute("nonce",h),document.head.appendChild(v),g)return new Promise((y,b)=>{v.addEventListener("load",y),v.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="179",sS=0,B0=1,oS=2,iv=1,lS=2,sa=3,Wa=0,Xn=1,oa=2,ja=0,Es=1,z0=2,F0=3,H0=4,cS=5,xr=100,uS=101,fS=102,hS=103,dS=104,pS=200,mS=201,gS=202,_S=203,Yh=204,Zh=205,vS=206,xS=207,yS=208,SS=209,MS=210,bS=211,ES=212,TS=213,AS=214,Kh=0,Qh=1,Jh=2,Rs=3,$h=4,ed=5,td=6,nd=7,av=0,RS=1,wS=2,Xa=0,CS=1,DS=2,NS=3,US=4,LS=5,OS=6,PS=7,V0="attached",IS="detached",rv=300,ws=301,Cs=302,id=303,ad=304,Qc=306,rd=1e3,Sr=1001,sd=1002,ti=1003,BS=1004,lc=1005,Oi=1006,hh=1007,Mr=1008,Ii=1009,sv=1010,ov=1011,Xo=1012,Fd=1013,br=1014,bi=1015,Ko=1016,Hd=1017,Vd=1018,Wo=1020,lv=35902,cv=1021,uv=1022,ui=1023,qo=1026,Yo=1027,Gd=1028,kd=1029,fv=1030,jd=1031,Xd=1033,Bc=33776,zc=33777,Fc=33778,Hc=33779,od=35840,ld=35841,cd=35842,ud=35843,fd=36196,hd=37492,dd=37496,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,xd=37813,yd=37814,Sd=37815,Md=37816,bd=37817,Ed=37818,Td=37819,Ad=37820,Rd=37821,Vc=36492,wd=36494,Cd=36495,hv=36283,Dd=36284,Nd=36285,Ud=36286,kc=2300,Ld=2301,dh=2302,G0=2400,k0=2401,j0=2402,zS=2500,fR=0,hR=1,dR=2,FS=3200,HS=3201,dv=0,VS=1,ka="",jn="srgb",Ds="srgb-linear",jc="linear",Ft="srgb",os=7680,X0=519,GS=512,kS=513,jS=514,pv=515,XS=516,WS=517,qS=518,YS=519,Od=35044,W0="300 es",Pi=2e3,Xc=2001;class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let q0=1234567;const ko=Math.PI/180,Ns=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[a&255]+Dn[a>>8&255]+Dn[a>>16&255]+Dn[a>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function Wd(s,e){return(s%e+e)%e}function ZS(s,e,n,a,l){return a+(s-e)*(l-a)/(n-e)}function KS(s,e,n){return s!==e?(n-s)/(e-s):0}function jo(s,e,n){return(1-n)*s+n*e}function QS(s,e,n,a){return jo(s,e,1-Math.exp(-n*a))}function JS(s,e=1){return e-Math.abs(Wd(s,e*2)-e)}function $S(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function eM(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function tM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nM(s,e){return s+Math.random()*(e-s)}function iM(s){return s*(.5-Math.random())}function aM(s){s!==void 0&&(q0=s);let e=q0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rM(s){return s*ko}function sM(s){return s*Ns}function oM(s){return(s&s-1)===0&&s!==0}function lM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function uM(s,e,n,a,l){const c=Math.cos,f=Math.sin,h=c(n/2),m=f(n/2),p=c((e+a)/2),g=f((e+a)/2),_=c((e-a)/2),v=f((e-a)/2),y=c((a-e)/2),b=f((a-e)/2);switch(l){case"XYX":s.set(h*g,m*_,m*v,h*p);break;case"YZY":s.set(m*v,h*g,m*_,h*p);break;case"ZXZ":s.set(m*_,m*v,h*g,h*p);break;case"XZX":s.set(h*g,m*b,m*y,h*p);break;case"YXY":s.set(m*y,h*g,m*b,h*p);break;case"ZYZ":s.set(m*b,m*y,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const pR={DEG2RAD:ko,RAD2DEG:Ns,generateUUID:Ei,clamp:vt,euclideanModulo:Wd,mapLinear:ZS,inverseLerp:KS,lerp:jo,damp:QS,pingpong:JS,smoothstep:$S,smootherstep:eM,randInt:tM,randFloat:nM,randFloatSpread:iM,seededRandom:aM,degToRad:rM,radToDeg:sM,isPowerOfTwo:oM,ceilPowerOfTwo:lM,floorPowerOfTwo:cM,setQuaternionFromProperEuler:uM,normalize:Ot,denormalize:Si};class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(e=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=l}static slerpFlat(e,n,a,l,c,f,h){let m=a[l+0],p=a[l+1],g=a[l+2],_=a[l+3];const v=c[f+0],y=c[f+1],b=c[f+2],R=c[f+3];if(h===0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h===1){e[n+0]=v,e[n+1]=y,e[n+2]=b,e[n+3]=R;return}if(_!==R||m!==v||p!==y||g!==b){let M=1-h;const x=m*v+p*y+g*b+_*R,z=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const B=Math.sqrt(L),H=Math.atan2(B,x*z);M=Math.sin(M*H)/B,h=Math.sin(h*H)/B}const D=h*z;if(m=m*M+v*D,p=p*M+y*D,g=g*M+b*D,_=_*M+R*D,M===1-h){const B=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=B,p*=B,g*=B,_*=B}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,l,c,f){const h=a[l],m=a[l+1],p=a[l+2],g=a[l+3],_=c[f],v=c[f+1],y=c[f+2],b=c[f+3];return e[n]=h*b+g*_+m*y-p*v,e[n+1]=m*b+g*v+p*_-h*y,e[n+2]=p*b+g*y+h*v-m*_,e[n+3]=g*b-h*_-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,l){return this._x=e,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(l/2),_=h(c/2),v=m(a/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=v*g*_+p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_-v*y*b;break;case"YXZ":this._x=v*g*_+p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_+v*y*b;break;case"ZXY":this._x=v*g*_-p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_-v*y*b;break;case"ZYX":this._x=v*g*_-p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_+v*y*b;break;case"YZX":this._x=v*g*_+p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_-v*y*b;break;case"XZY":this._x=v*g*_-p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_+v*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(a>h&&a>_){const y=2*Math.sqrt(1+a-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-a-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,l=e._y,c=e._z,f=e._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-a*p,this._z=c*g+f*p+a*m-l*h,this._w=f*g-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,l=this._y,c=this._z,f=this._w;let h=f*e._w+a*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*a+n*this._x,this._y=y*l+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=f*_+this._w*v,this._x=a*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,a=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Y0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Y0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const n=this.x,a=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*a),g=2*(h*n-c*l),_=2*(c*a-f*n);return this.x=n+m*p+f*_-h*g,this.y=a+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,l=e.y,c=e.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-a*m,this.z=a*h-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return n*n+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const l=Math.sin(n)*e;return this.x=l*Math.sin(a),this.y=Math.cos(n)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ph=new K,Y0=new Os;class lt{constructor(e,n,a,l,c,f,h,m,p){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,f,h,m,p)}set(e,n,a,l,c,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],y=a[5],b=a[8],R=l[0],M=l[3],x=l[6],z=l[1],L=l[4],D=l[7],B=l[2],H=l[5],k=l[8];return c[0]=f*R+h*z+m*B,c[3]=f*M+h*L+m*H,c[6]=f*x+h*D+m*k,c[1]=p*R+g*z+_*B,c[4]=p*M+g*L+_*H,c[7]=p*x+g*D+_*k,c[2]=v*R+y*z+b*B,c[5]=v*M+y*L+b*H,c[8]=v*x+y*D+b*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return n*f*g-n*h*p-a*c*g+a*h*m+l*c*p-l*f*m}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=g*f-h*p,v=h*m-g*c,y=p*c-f*m,b=n*_+a*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=_*R,e[1]=(l*p-g*a)*R,e[2]=(h*a-l*f)*R,e[3]=v*R,e[4]=(g*n-l*m)*R,e[5]=(l*c-h*n)*R,e[6]=y*R,e[7]=(a*m-p*n)*R,e[8]=(f*n-a*c)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(mh.makeScale(e,n)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,n){return this.premultiply(mh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new lt;function mv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fM(){const s=Zo("canvas");return s.style.display="block",s}const Z0={};function Ts(s){s in Z0||(Z0[s]=!0,console.warn(s))}function hM(s,e,n){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const K0=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dM(){const s={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?jc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Ds]:{primaries:e,whitePoint:a,transfer:jc,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:a,transfer:Ft,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),s}const Rt=dM();function ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class pM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ls===void 0&&(ls=Zo("canvas")),ls.width=e.width,ls.height=e.height;const l=ls.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=ls}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zo("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ca(c[f]/255)*255;return a.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ca(n[a]/255)*255):n[a]=ca(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mM=0;class qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(gh(l[f].image)):c.push(gh(l[f]))}else c=gh(l);a.url=c}return n||(e.images[this.uuid]=a),a}}function gh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gM=0;const _h=new K;class Un extends Ls{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,a=Sr,l=Sr,c=Oi,f=Mr,h=ui,m=Ii,p=Un.DEFAULT_ANISOTROPY,g=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Ei(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=rv;Un.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,a=0,l=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,l){return this.x=e,this.y=n,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,l,c;const m=e.elements,p=m[0],g=m[4],_=m[8],v=m[1],y=m[5],b=m[9],R=m[2],M=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,D=(y+1)/2,B=(x+1)/2,H=(g+v)/4,k=(_+R)/4,Y=(b+M)/4;return L>D&&L>B?L<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(L),l=H/a,c=k/a):D>B?D<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),a=H/l,c=Y/l):B<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),a=k/c,l=Y/c),this.set(a,l,c,n),this}let z=Math.sqrt((M-b)*(M-b)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(z)<.001&&(z=1),this.x=(M-b)/z,this.y=(_-R)/z,this.z=(v-g)/z,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends Ls{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const l={width:e,height:n,depth:a.depth},c=new Un(l);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new qd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends _M{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class gv extends Un{constructor(e=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vM extends Un{constructor(e=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,vi):vi.fromBufferAttribute(c,f),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),cc.copy(a.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),uc.subVectors(this.max,Oo),cs.subVectors(e.a,Oo),us.subVectors(e.b,Oo),fs.subVectors(e.c,Oo),Ba.subVectors(us,cs),za.subVectors(fs,us),fr.subVectors(cs,fs);let n=[0,-Ba.z,Ba.y,0,-za.z,za.y,0,-fr.z,fr.y,Ba.z,0,-Ba.x,za.z,0,-za.x,fr.z,0,-fr.x,-Ba.y,Ba.x,0,-za.y,za.x,0,-fr.y,fr.x,0];return!vh(n,cs,us,fs,uc)||(n=[1,0,0,0,1,0,0,0,1],!vh(n,cs,us,fs,uc))?!1:(fc.crossVectors(Ba,za),n=[fc.x,fc.y,fc.z],vh(n,cs,us,fs,uc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ea=[new K,new K,new K,new K,new K,new K,new K,new K],vi=new K,cc=new zi,cs=new K,us=new K,fs=new K,Ba=new K,za=new K,fr=new K,Oo=new K,uc=new K,fc=new K,hr=new K;function vh(s,e,n,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){hr.fromArray(s,c);const h=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),m=e.dot(hr),p=n.dot(hr),g=a.dot(hr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const xM=new zi,Po=new K,xh=new K;class fa{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):xM.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(Po,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(xh)),this.expandByPoint(Po.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ta=new K,yh=new K,hc=new K,Fa=new K,Sh=new K,dc=new K,Mh=new K;class Jc{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ta.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,n),ta.distanceToSquared(e))}distanceSqToSegment(e,n,a,l){yh.copy(e).add(n).multiplyScalar(.5),hc.copy(n).sub(e).normalize(),Fa.copy(this.origin).sub(yh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(hc),h=Fa.dot(this.direction),m=-Fa.dot(hc),p=Fa.lengthSq(),g=Math.abs(1-f*f);let _,v,y,b;if(g>0)if(_=f*m-h,v=f*h-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const R=1/g;_*=R,v*=R,y=_*(_+f*v+2*h)+v*(f*_+v+2*m)+p}else v=c,_=Math.max(0,-(f*v+h)),y=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(f*v+h)),y=-_*_+v*(v+2*m)+p;else v<=-b?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),y=-_*_+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(yh).addScaledVector(hc,v),y}intersectSphere(e,n){ta.subVectors(e.center,this.origin);const a=ta.dot(this.direction),l=ta.dot(ta)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(a=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,f=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,f=(e.min.y-v.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,n,a,l,c){Sh.subVectors(n,e),dc.subVectors(a,e),Mh.crossVectors(Sh,dc);let f=this.direction.dot(Mh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Fa.subVectors(this.origin,e);const m=h*this.direction.dot(dc.crossVectors(Fa,dc));if(m<0)return null;const p=h*this.direction.dot(Sh.cross(Fa));if(p<0||m+p>f)return null;const g=-h*Fa.dot(Mh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,a,l,c,f,h,m,p,g,_,v,y,b,R,M){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,f,h,m,p,g,_,v,y,b,R,M)}set(e,n,a,l,c,f,h,m,p,g,_,v,y,b,R,M){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=b,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,l=1/hs.setFromMatrixColumn(e,0).length(),c=1/hs.setFromMatrixColumn(e,1).length(),f=1/hs.setFromMatrixColumn(e,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=f*g,y=f*_,b=h*g,R=h*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+b*p,n[5]=v-R*p,n[9]=-h*m,n[2]=R-v*p,n[6]=b+y*p,n[10]=f*m}else if(e.order==="YXZ"){const v=m*g,y=m*_,b=p*g,R=p*_;n[0]=v+R*h,n[4]=b*h-y,n[8]=f*p,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=y*h-b,n[6]=R+v*h,n[10]=f*m}else if(e.order==="ZXY"){const v=m*g,y=m*_,b=p*g,R=p*_;n[0]=v-R*h,n[4]=-f*_,n[8]=b+y*h,n[1]=y+b*h,n[5]=f*g,n[9]=R-v*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(e.order==="ZYX"){const v=f*g,y=f*_,b=h*g,R=h*_;n[0]=m*g,n[4]=b*p-y,n[8]=v*p+R,n[1]=m*_,n[5]=R*p+v,n[9]=y*p-b,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(e.order==="YZX"){const v=f*m,y=f*p,b=h*m,R=h*p;n[0]=m*g,n[4]=R-v*_,n[8]=b*_+y,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=y*_+b,n[10]=v-R*_}else if(e.order==="XZY"){const v=f*m,y=f*p,b=h*m,R=h*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+R,n[5]=f*g,n[9]=y*_-b,n[2]=b*_-y,n[6]=h*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yM,e,SM)}lookAt(e,n,a){const l=this.elements;return $n.subVectors(e,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ha.crossVectors(a,$n),Ha.lengthSq()===0&&(Math.abs(a.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ha.crossVectors(a,$n)),Ha.normalize(),pc.crossVectors($n,Ha),l[0]=Ha.x,l[4]=pc.x,l[8]=$n.x,l[1]=Ha.y,l[5]=pc.y,l[9]=$n.y,l[2]=Ha.z,l[6]=pc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],y=a[13],b=a[2],R=a[6],M=a[10],x=a[14],z=a[3],L=a[7],D=a[11],B=a[15],H=l[0],k=l[4],Y=l[8],N=l[12],C=l[1],F=l[5],ue=l[9],le=l[13],ce=l[2],me=l[6],P=l[10],$=l[14],q=l[3],ye=l[7],U=l[11],ee=l[15];return c[0]=f*H+h*C+m*ce+p*q,c[4]=f*k+h*F+m*me+p*ye,c[8]=f*Y+h*ue+m*P+p*U,c[12]=f*N+h*le+m*$+p*ee,c[1]=g*H+_*C+v*ce+y*q,c[5]=g*k+_*F+v*me+y*ye,c[9]=g*Y+_*ue+v*P+y*U,c[13]=g*N+_*le+v*$+y*ee,c[2]=b*H+R*C+M*ce+x*q,c[6]=b*k+R*F+M*me+x*ye,c[10]=b*Y+R*ue+M*P+x*U,c[14]=b*N+R*le+M*$+x*ee,c[3]=z*H+L*C+D*ce+B*q,c[7]=z*k+L*F+D*me+B*ye,c[11]=z*Y+L*ue+D*P+B*U,c[15]=z*N+L*le+D*$+B*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],_=e[6],v=e[10],y=e[14],b=e[3],R=e[7],M=e[11],x=e[15];return b*(+c*m*_-l*p*_-c*h*v+a*p*v+l*h*y-a*m*y)+R*(+n*m*y-n*p*v+c*f*v-l*f*y+l*p*g-c*m*g)+M*(+n*p*_-n*h*y-c*f*_+a*f*y+c*h*g-a*p*g)+x*(-l*h*g-n*m*_+n*h*v+l*f*_-a*f*v+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=e[9],v=e[10],y=e[11],b=e[12],R=e[13],M=e[14],x=e[15],z=_*M*p-R*v*p+R*m*y-h*M*y-_*m*x+h*v*x,L=b*v*p-g*M*p-b*m*y+f*M*y+g*m*x-f*v*x,D=g*R*p-b*_*p+b*h*y-f*R*y-g*h*x+f*_*x,B=b*_*m-g*R*m-b*h*v+f*R*v+g*h*M-f*_*M,H=n*z+a*L+l*D+c*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/H;return e[0]=z*k,e[1]=(R*v*c-_*M*c-R*l*y+a*M*y+_*l*x-a*v*x)*k,e[2]=(h*M*c-R*m*c+R*l*p-a*M*p-h*l*x+a*m*x)*k,e[3]=(_*m*c-h*v*c-_*l*p+a*v*p+h*l*y-a*m*y)*k,e[4]=L*k,e[5]=(g*M*c-b*v*c+b*l*y-n*M*y-g*l*x+n*v*x)*k,e[6]=(b*m*c-f*M*c-b*l*p+n*M*p+f*l*x-n*m*x)*k,e[7]=(f*v*c-g*m*c+g*l*p-n*v*p-f*l*y+n*m*y)*k,e[8]=D*k,e[9]=(b*_*c-g*R*c-b*a*y+n*R*y+g*a*x-n*_*x)*k,e[10]=(f*R*c-b*h*c+b*a*p-n*R*p-f*a*x+n*h*x)*k,e[11]=(g*h*c-f*_*c-g*a*p+n*_*p+f*a*y-n*h*y)*k,e[12]=B*k,e[13]=(g*R*l-b*_*l+b*a*v-n*R*v-g*a*M+n*_*M)*k,e[14]=(b*h*l-f*R*l-b*a*m+n*R*m+f*a*M-n*h*M)*k,e[15]=(f*_*l-g*h*l+g*a*m-n*_*m-f*a*v+n*h*v)*k,this}scale(e){const n=this.elements,a=e.x,l=e.y,c=e.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,f=e.x,h=e.y,m=e.z,p=c*f,g=c*h;return this.set(p*f+a,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+a,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,a){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,g=f+f,_=h+h,v=c*p,y=c*g,b=c*_,R=f*g,M=f*_,x=h*_,z=m*p,L=m*g,D=m*_,B=a.x,H=a.y,k=a.z;return l[0]=(1-(R+x))*B,l[1]=(y+D)*B,l[2]=(b-L)*B,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(v+x))*H,l[6]=(M+z)*H,l[7]=0,l[8]=(b+L)*k,l[9]=(M-z)*k,l[10]=(1-(v+R))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,a){const l=this.elements;let c=hs.set(l[0],l[1],l[2]).length();const f=hs.set(l[4],l[5],l[6]).length(),h=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],xi.copy(this);const p=1/c,g=1/f,_=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,n.setFromRotationMatrix(xi),a.x=c,a.y=f,a.z=h,this}makePerspective(e,n,a,l,c,f,h=Pi,m=!1){const p=this.elements,g=2*c/(n-e),_=2*c/(a-l),v=(n+e)/(n-e),y=(a+l)/(a-l);let b,R;if(m)b=c/(f-c),R=f*c/(f-c);else if(h===Pi)b=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(h===Xc)b=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,l,c,f,h=Pi,m=!1){const p=this.elements,g=2/(n-e),_=2/(a-l),v=-(n+e)/(n-e),y=-(a+l)/(a-l);let b,R;if(m)b=1/(f-c),R=f/(f-c);else if(h===Pi)b=-2/(f-c),R=-(f+c)/(f-c);else if(h===Xc)b=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const hs=new K,xi=new yt,yM=new K(0,0,0),SM=new K(1,1,1),Ha=new K,pc=new K,$n=new K,J0=new yt,$0=new Os;class Bi{constructor(e=0,n=0,a=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,l=this._order){return this._x=e,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return J0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J0,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $0.setFromEuler(this),this.setFromQuaternion($0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MM=0;const e_=new K,ds=new Os,na=new yt,mc=new K,Io=new K,bM=new K,EM=new Os,t_=new K(1,0,0),n_=new K(0,1,0),i_=new K(0,0,1),a_={type:"added"},TM={type:"removed"},ps={type:"childadded",child:null},bh={type:"childremoved",child:null};class sn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new K,n=new Bi,a=new Os,l=new K(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new yt},normalMatrix:{value:new lt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(t_,e)}rotateY(e){return this.rotateOnAxis(n_,e)}rotateZ(e){return this.rotateOnAxis(i_,e)}translateOnAxis(e,n){return e_.copy(e).applyQuaternion(this.quaternion),this.position.add(e_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(t_,e)}translateY(e){return this.translateOnAxis(n_,e)}translateZ(e){return this.translateOnAxis(i_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?mc.copy(e):mc.set(e,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Io,mc,this.up):na.lookAt(mc,Io,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(na),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a_),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(TM),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a_),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,bM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,EM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(n){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),_=f(e.shapes),v=f(e.skeletons),y=f(e.animations),b=f(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),b.length>0&&(a.nodes=b)}return a.object=l,a;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}sn.DEFAULT_UP=new K(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new K,ia=new K,Eh=new K,aa=new K,ms=new K,gs=new K,r_=new K,Th=new K,Ah=new K,Rh=new K,wh=new Ct,Ch=new Ct,Dh=new Ct;class Mi{constructor(e=new K,n=new K,a=new K){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,l){l.subVectors(a,n),yi.subVectors(e,n),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,a,l,c){yi.subVectors(l,n),ia.subVectors(a,n),Eh.subVectors(e,n);const f=yi.dot(yi),h=yi.dot(ia),m=yi.dot(Eh),p=ia.dot(ia),g=ia.dot(Eh),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*m-h*g)*v,b=(f*g-h*m)*v;return c.set(1-y-b,b,y)}static containsPoint(e,n,a,l){return this.getBarycoord(e,n,a,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,n,a,l,c,f,h,m){return this.getBarycoord(e,n,a,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(f,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(e,n,a,l,c,f){return wh.setScalar(0),Ch.setScalar(0),Dh.setScalar(0),wh.fromBufferAttribute(e,n),Ch.fromBufferAttribute(e,a),Dh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(wh,c.x),f.addScaledVector(Ch,c.y),f.addScaledVector(Dh,c.z),f}static isFrontFacing(e,n,a,l){return yi.subVectors(a,n),ia.subVectors(e,n),yi.cross(ia).dot(l)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,l){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,a,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),yi.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,l,c){return Mi.getInterpolation(e,this.a,this.b,this.c,n,a,l,c)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,l=this.b,c=this.c;let f,h;ms.subVectors(l,a),gs.subVectors(c,a),Th.subVectors(e,a);const m=ms.dot(Th),p=gs.dot(Th);if(m<=0&&p<=0)return n.copy(a);Ah.subVectors(e,l);const g=ms.dot(Ah),_=gs.dot(Ah);if(g>=0&&_<=g)return n.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(ms,f);Rh.subVectors(e,c);const y=ms.dot(Rh),b=gs.dot(Rh);if(b>=0&&y<=b)return n.copy(c);const R=y*p-m*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(a).addScaledVector(gs,h);const M=g*b-y*_;if(M<=0&&_-g>=0&&y-b>=0)return r_.subVectors(c,l),h=(_-g)/(_-g+(y-b)),n.copy(l).addScaledVector(r_,h);const x=1/(M+R+v);return f=R*x,h=v*x,n.copy(a).addScaledVector(ms,f).addScaledVector(gs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Nh(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,l=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Rt.colorSpaceToWorking(this,l),this}setHSL(e,n,a,l=Rt.workingColorSpace){if(e=Wd(e,1),n=vt(n,0,1),a=vt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=Nh(f,c,e+1/3),this.g=Nh(f,c,e),this.b=Nh(f,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,n=jn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const a=vv[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Rt.workingToColorSpace(Nn.copy(this),e),Math.round(vt(Nn.r*255,0,255))*65536+Math.round(vt(Nn.g*255,0,255))*256+Math.round(vt(Nn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(Nn.copy(this),n);const a=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case a:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-a)/_+2;break;case c:m=(a-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(Nn.copy(this),n),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=jn){Rt.workingToColorSpace(Nn.copy(this),e);const n=Nn.r,a=Nn.g,l=Nn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,n,a){return this.getHSL(Va),this.setHSL(Va.h+e,Va.s+n,Va.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Va),e.getHSL(gc);const a=jo(Va.h,gc.h,n),l=jo(Va.s,gc.s,n),c=jo(Va.l,gc.l,n);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new xt;xt.NAMES=vv;let AM=0;class Tr extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Es,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=Zh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(a.blending=this.blending),this.side!==Wa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Yh&&(a.blendSrc=this.blendSrc),this.blendDst!==Zh&&(a.blendDst=this.blendDst),this.blendEquation!==xr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(a.stencilFail=this.stencilFail),this.stencilZFail!==os&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xv extends Tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new K,_c=new Et;let RM=0;class hi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Od,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)_c.fromBufferAttribute(this,n),_c.applyMatrix3(e),this.setXY(n,_c.x,_c.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(e),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.transformDirection(e),this.setXYZ(n,un.x,un.y,un.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Si(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ot(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Si(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Si(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Si(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Si(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,l){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array),l=Ot(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,n,a,l,c){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array),l=Ot(l,this.array),c=Ot(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}}class yv extends hi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Sv extends hi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class ua extends hi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let wM=0;const ci=new yt,Uh=new sn,_s=new K,ei=new zi,Bo=new zi,Sn=new K;class ha extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mv(e)?Sv:yv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new lt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,n,a){return ci.makeTranslation(e,n,a),this.applyMatrix4(ci),this}scale(e,n,a){return ci.makeScale(e,n,a),this.applyMatrix4(ci),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ua(a,3))}else{const a=Math.min(e.length,n.count);for(let l=0;l<a;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const a=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Bo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ei.min,Bo.min),ei.expandByPoint(Sn),Sn.addVectors(ei.max,Bo.max),ei.expandByPoint(Sn)):(ei.expandByPoint(Bo.min),ei.expandByPoint(Bo.max))}ei.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(Sn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Sn.fromBufferAttribute(h,p),m&&(_s.fromBufferAttribute(e,p),Sn.add(_s)),l=Math.max(l,a.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Y=0;Y<a.count;Y++)h[Y]=new K,m[Y]=new K;const p=new K,g=new K,_=new K,v=new Et,y=new Et,b=new Et,R=new K,M=new K;function x(Y,N,C){p.fromBufferAttribute(a,Y),g.fromBufferAttribute(a,N),_.fromBufferAttribute(a,C),v.fromBufferAttribute(c,Y),y.fromBufferAttribute(c,N),b.fromBufferAttribute(c,C),g.sub(p),_.sub(p),y.sub(v),b.sub(v);const F=1/(y.x*b.y-b.x*y.y);isFinite(F)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(F),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(F),h[Y].add(R),h[N].add(R),h[C].add(R),m[Y].add(M),m[N].add(M),m[C].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let Y=0,N=z.length;Y<N;++Y){const C=z[Y],F=C.start,ue=C.count;for(let le=F,ce=F+ue;le<ce;le+=3)x(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const L=new K,D=new K,B=new K,H=new K;function k(Y){B.fromBufferAttribute(l,Y),H.copy(B);const N=h[Y];L.copy(N),L.sub(B.multiplyScalar(B.dot(N))).normalize(),D.crossVectors(H,N);const F=D.dot(m[Y])<0?-1:1;f.setXYZW(Y,L.x,L.y,L.z,F)}for(let Y=0,N=z.length;Y<N;++Y){const C=z[Y],F=C.start,ue=C.count;for(let le=F,ce=F+ue;le<ce;le+=3)k(e.getX(le+0)),k(e.getX(le+1)),k(e.getX(le+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const l=new K,c=new K,f=new K,h=new K,m=new K,p=new K,g=new K,_=new K;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),R=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,R),f.fromBufferAttribute(n,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,R),p.fromBufferAttribute(a,M),h.add(g),m.add(g),p.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Sn.fromBufferAttribute(e,n),Sn.normalize(),e.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let y=0,b=0;for(let R=0,M=m.length;R<M;R++){h.isInterleavedBufferAttribute?y=m[R]*h.data.stride+h.offset:y=m[R]*g;for(let x=0;x<g;x++)v[b++]=p[y++]}return new hi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ha,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=e(v,a);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s_=new yt,dr=new Jc,vc=new fa,o_=new K,xc=new K,yc=new K,Sc=new K,Lh=new K,Mc=new K,l_=new K,bc=new K;class fi extends sn{constructor(e=new ha,n=new xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Mc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Lh.fromBufferAttribute(_,e),f?Mc.addScaledVector(Lh,g):Mc.addScaledVector(Lh.sub(n),g))}n.add(Mc)}return n}raycast(e,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),vc.copy(a.boundingSphere),vc.applyMatrix4(c),dr.copy(e.ray).recast(e.near),!(vc.containsPoint(dr.origin)===!1&&(dr.intersectSphere(vc,o_)===null||dr.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(s_.copy(c).invert(),dr.copy(e.ray).applyMatrix4(s_),!(a.boundingBox!==null&&dr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,a){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,R=v.length;b<R;b++){const M=v[b],x=f[M.materialIndex],z=Math.max(M.start,y.start),L=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let D=z,B=L;D<B;D+=3){const H=h.getX(D),k=h.getX(D+1),Y=h.getX(D+2);l=Ec(this,x,e,a,p,g,_,H,k,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let M=b,x=R;M<x;M+=3){const z=h.getX(M),L=h.getX(M+1),D=h.getX(M+2);l=Ec(this,f,e,a,p,g,_,z,L,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,R=v.length;b<R;b++){const M=v[b],x=f[M.materialIndex],z=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=z,B=L;D<B;D+=3){const H=D,k=D+1,Y=D+2;l=Ec(this,x,e,a,p,g,_,H,k,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=b,x=R;M<x;M+=3){const z=M,L=M+1,D=M+2;l=Ec(this,f,e,a,p,g,_,z,L,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function CM(s,e,n,a,l,c,f,h){let m;if(e.side===Xn?m=a.intersectTriangle(f,c,l,!0,h):m=a.intersectTriangle(l,c,f,e.side===Wa,h),m===null)return null;bc.copy(h),bc.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(bc);return p<n.near||p>n.far?null:{distance:p,point:bc.clone(),object:s}}function Ec(s,e,n,a,l,c,f,h,m,p){s.getVertexPosition(h,xc),s.getVertexPosition(m,yc),s.getVertexPosition(p,Sc);const g=CM(s,e,n,a,xc,yc,Sc,l_);if(g){const _=new K;Mi.getBarycoord(l_,xc,yc,Sc,_),l&&(g.uv=Mi.getInterpolatedAttribute(l,h,m,p,_,new Et)),c&&(g.uv1=Mi.getInterpolatedAttribute(c,h,m,p,_,new Et)),f&&(g.normal=Mi.getInterpolatedAttribute(f,h,m,p,_,new K),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new K,materialIndex:0};Mi.getNormal(xc,yc,Sc,v.normal),g.face=v,g.barycoord=_}return g}class Qo extends ha{constructor(e=1,n=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,y=0;b("z","y","x",-1,-1,a,n,e,f,c,0),b("z","y","x",1,-1,a,n,-e,f,c,1),b("x","z","y",1,1,e,a,n,l,f,2),b("x","z","y",1,-1,e,a,-n,l,f,3),b("x","y","z",1,-1,e,n,a,l,c,4),b("x","y","z",-1,-1,e,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new ua(p,3)),this.setAttribute("normal",new ua(g,3)),this.setAttribute("uv",new ua(_,2));function b(R,M,x,z,L,D,B,H,k,Y,N){const C=D/k,F=B/Y,ue=D/2,le=B/2,ce=H/2,me=k+1,P=Y+1;let $=0,q=0;const ye=new K;for(let U=0;U<P;U++){const ee=U*F-le;for(let xe=0;xe<me;xe++){const Se=xe*C-ue;ye[R]=Se*z,ye[M]=ee*L,ye[x]=ce,p.push(ye.x,ye.y,ye.z),ye[R]=0,ye[M]=0,ye[x]=H>0?1:-1,g.push(ye.x,ye.y,ye.z),_.push(xe/k),_.push(1-U/Y),$+=1}}for(let U=0;U<Y;U++)for(let ee=0;ee<k;ee++){const xe=v+ee+me*U,Se=v+ee+me*(U+1),Ce=v+(ee+1)+me*(U+1),ie=v+(ee+1)+me*U;m.push(xe,Se,ie),m.push(Se,Ce,ie),q+=6}h.addGroup(y,q,N),y+=q,v+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const l=s[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=l.clone():Array.isArray(l)?e[n][a]=l.slice():e[n][a]=l}}return e}function Bn(s){const e={};for(let n=0;n<s.length;n++){const a=Us(s[n]);for(const l in a)e[l]=a[l]}return e}function DM(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Mv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const NM={clone:Us,merge:Bn};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=DM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class bv extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new K,c_=new Et,u_=new Et;class zn extends bv{constructor(e=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,n){return this.getViewBounds(e,c_,u_),n.subVectors(u_,c_)}setViewOffset(e,n,a,l,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ko*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vs=-90,xs=1;class OM extends sn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new zn(vs,xs,e,n);l.layers=this.layers,this.add(l);const c=new zn(vs,xs,e,n);c.layers=this.layers,this.add(c);const f=new zn(vs,xs,e,n);f.layers=this.layers,this.add(f);const h=new zn(vs,xs,e,n);h.layers=this.layers,this.add(h);const m=new zn(vs,xs,e,n);m.layers=this.layers,this.add(m);const p=new zn(vs,xs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(e===Pi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Xc)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,l),e.render(n,c),e.setRenderTarget(a,1,l),e.render(n,f),e.setRenderTarget(a,2,l),e.render(n,h),e.setRenderTarget(a,3,l),e.render(n,m),e.setRenderTarget(a,4,l),e.render(n,p),a.texture.generateMipmaps=R,e.setRenderTarget(a,5,l),e.render(n,g),e.setRenderTarget(_,v,y),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class Ev extends Un{constructor(e=[],n=ws,a,l,c,f,h,m,p,g){super(e,n,a,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PM extends Er{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new Ev(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Qo(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Us(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Xn,blending:ja});c.uniforms.tEquirect.value=n;const f=new fi(l,c),h=n.minFilter;return n.minFilter===Mr&&(n.minFilter=Oi),new OM(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,a,l);e.setRenderTarget(c)}}class Tc extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const R of e.hand.values()){const M=n.getJointPose(R,a),x=this._getHandJoint(p,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Tc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class Tv extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class mR{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Od,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=n.array[a+l];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new K;class Av{constructor(e,n,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyMatrix4(e),this.setXYZ(n,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyNormalMatrix(e),this.setXYZ(n,In.x,In.y,In.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.transformDirection(e),this.setXYZ(n,In.x,In.y,In.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Si(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ot(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Si(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Si(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Si(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Si(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array),l=Ot(l,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=l,this}setXYZW(e,n,a,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array),l=Ot(l,this.array),c=Ot(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new hi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Av(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const f_=new K,h_=new Ct,d_=new Ct,BM=new K,p_=new yt,Ac=new K,Ph=new fa,m_=new yt,Ih=new Jc;class gR extends fi{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=V0,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zi),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Ac),this.boundingBox.expandByPoint(Ac)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fa),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Ac),this.boundingSphere.expandByPoint(Ac)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,l=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ph.copy(this.boundingSphere),Ph.applyMatrix4(l),e.ray.intersectsSphere(Ph)!==!1&&(m_.copy(l).invert(),Ih.copy(e.ray).applyMatrix4(m_),!(this.boundingBox!==null&&Ih.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Ih)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,n=this.geometry.attributes.skinWeight;for(let a=0,l=n.count;a<l;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===V0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===IS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,l=this.geometry;h_.fromBufferAttribute(l.attributes.skinIndex,e),d_.fromBufferAttribute(l.attributes.skinWeight,e),f_.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const f=d_.getComponent(c);if(f!==0){const h=h_.getComponent(c);p_.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(BM.copy(f_).applyMatrix4(p_),f)}}return n.applyMatrix4(this.bindMatrixInverse)}}class zM extends sn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rv extends Un{constructor(e=null,n=1,a=1,l,c,f,h,m,p=ti,g=ti,_,v){super(null,f,h,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const g_=new yt,FM=new yt;class wv{constructor(e=[],n=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,l=this.bones.length;a<l;a++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new yt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,l=this.boneTexture;for(let c=0,f=e.length;c<f;c++){const h=e[c]?e[c].matrixWorld:FM;g_.multiplyMatrices(h,n[c]),g_.toArray(a,c*16)}l!==null&&(l.needsUpdate=!0)}clone(){return new wv(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new Rv(n,e,e,ui,bi);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const l=this.bones[n];if(l.name===e)return l}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,l=e.bones.length;a<l;a++){const c=e.bones[a];let f=n[c];f===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),f=new zM),this.bones.push(f),this.boneInverses.push(new yt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let l=0,c=n.length;l<c;l++){const f=n[l];e.bones.push(f.uuid);const h=a[l];e.boneInverses.push(h.toArray())}return e}}class __ extends hi{constructor(e,n,a,l=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new yt,v_=new yt,Rc=[],x_=new zi,HM=new yt,zo=new fi,Fo=new fa;class _R extends fi{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new __(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<a;l++)this.setMatrixAt(l,HM)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,ys),x_.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(x_)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new fa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,ys),Fo.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(Fo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,l=this.morphTexture.source.data.data,c=a.length+1,f=e*c+1;for(let h=0;h<a.length;h++)a[h]=l[f+h]}raycast(e,n){const a=this.matrixWorld,l=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(a),e.ray.intersectsSphere(Fo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,ys),v_.multiplyMatrices(a,ys),zo.matrixWorld=v_,zo.raycast(e,Rc);for(let f=0,h=Rc.length;f<h;f++){const m=Rc[f];m.instanceId=c,m.object=this,n.push(m)}Rc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new __(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,l=a.length+1;this.morphTexture===null&&(this.morphTexture=new Rv(new Float32Array(l*this.count),l,this.count,Gd,bi));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<a.length;p++)f+=a[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*e;c[m]=h,c.set(a,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bh=new K,VM=new K,GM=new lt;class _r{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,l){return this.normal.set(e,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const l=Bh.subVectors(a,n).cross(VM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Bh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||GM.getNormalMatrix(e),l=this.coplanarPoint(Bh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new fa,kM=new Et(.5,.5),wc=new K;class Yd{constructor(e=new _r,n=new _r,a=new _r,l=new _r,c=new _r,f=new _r){this.planes=[e,n,a,l,c,f]}set(e,n,a,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Pi,a=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],y=c[7],b=c[8],R=c[9],M=c[10],x=c[11],z=c[12],L=c[13],D=c[14],B=c[15];if(l[0].setComponents(p-f,y-g,x-b,B-z).normalize(),l[1].setComponents(p+f,y+g,x+b,B+z).normalize(),l[2].setComponents(p+h,y+_,x+R,B+L).normalize(),l[3].setComponents(p-h,y-_,x-R,B-L).normalize(),a)l[4].setComponents(m,v,M,D).normalize(),l[5].setComponents(p-m,y-v,x-M,B-D).normalize();else if(l[4].setComponents(p-m,y-v,x-M,B-D).normalize(),n===Pi)l[5].setComponents(p+m,y+v,x+M,B+D).normalize();else if(n===Xc)l[5].setComponents(m,v,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const n=kM.distanceTo(e.center);return pr.radius=.7071067811865476+n,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(wc.x=l.normal.x>0?e.max.x:e.min.x,wc.y=l.normal.y>0?e.max.y:e.min.y,wc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jM extends Tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wc=new K,qc=new K,y_=new yt,Ho=new Jc,Cc=new fa,zh=new K,S_=new K;class Cv extends sn{constructor(e=new ha,n=new jM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let l=1,c=n.count;l<c;l++)Wc.fromBufferAttribute(n,l-1),qc.fromBufferAttribute(n,l),a[l]=a[l-1],a[l]+=Wc.distanceTo(qc);e.setAttribute("lineDistance",new ua(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Cc.copy(a.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;y_.copy(l).invert(),Ho.copy(e.ray).applyMatrix4(y_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const y=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let R=y,M=b-1;R<M;R+=p){const x=g.getX(R),z=g.getX(R+1),L=Dc(this,e,Ho,m,x,z,R);L&&n.push(L)}if(this.isLineLoop){const R=g.getX(b-1),M=g.getX(y),x=Dc(this,e,Ho,m,R,M,b-1);x&&n.push(x)}}else{const y=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let R=y,M=b-1;R<M;R+=p){const x=Dc(this,e,Ho,m,R,R+1,R);x&&n.push(x)}if(this.isLineLoop){const R=Dc(this,e,Ho,m,b-1,y,b-1);R&&n.push(R)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Dc(s,e,n,a,l,c,f){const h=s.geometry.attributes.position;if(Wc.fromBufferAttribute(h,l),qc.fromBufferAttribute(h,c),n.distanceSqToSegment(Wc,qc,zh,S_)>a)return;zh.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(zh);if(!(p<e.near||p>e.far))return{distance:p,point:S_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const M_=new K,b_=new K;class vR extends Cv{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let l=0,c=n.count;l<c;l+=2)M_.fromBufferAttribute(n,l),b_.fromBufferAttribute(n,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+M_.distanceTo(b_);e.setAttribute("lineDistance",new ua(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xR extends Cv{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class XM extends Tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const E_=new yt,Pd=new Jc,Nc=new fa,Uc=new K;class yR extends sn{constructor(e=new ha,n=new XM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Nc.copy(a.boundingSphere),Nc.applyMatrix4(l),Nc.radius+=c,e.ray.intersectsSphere(Nc)===!1)return;E_.copy(l).invert(),Pd.copy(e.ray).applyMatrix4(E_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let b=v,R=y;b<R;b++){const M=p.getX(b);Uc.fromBufferAttribute(_,M),T_(Uc,M,m,l,e,n,this)}}else{const v=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let b=v,R=y;b<R;b++)Uc.fromBufferAttribute(_,b),T_(Uc,b,m,l,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function T_(s,e,n,a,l,c,f){const h=Pd.distanceSqToPoint(s);if(h<n){const m=new K;Pd.closestPointToPoint(s,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Dv extends Un{constructor(e,n,a=br,l,c,f,h=ti,m=ti,p,g=qo,_=1){if(g!==qo&&g!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,l,c,f,h,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $c extends ha{constructor(e=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:l};const c=e/2,f=n/2,h=Math.floor(a),m=Math.floor(l),p=h+1,g=m+1,_=e/h,v=n/m,y=[],b=[],R=[],M=[];for(let x=0;x<g;x++){const z=x*v-f;for(let L=0;L<p;L++){const D=L*_-c;b.push(D,-z,0),R.push(0,0,1),M.push(L/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let z=0;z<h;z++){const L=z+p*x,D=z+p*(x+1),B=z+1+p*(x+1),H=z+1+p*x;y.push(L,D,H),y.push(D,B,H)}this.setIndex(y),this.setAttribute("position",new ua(b,3)),this.setAttribute("normal",new ua(R,3)),this.setAttribute("uv",new ua(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.width,e.height,e.widthSegments,e.heightSegments)}}class WM extends Tr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dv,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class SR extends WM{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qM extends Tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YM extends Tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Lc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ZM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function KM(s){function e(l,c){return s[l]-s[c]}const n=s.length,a=new Array(n);for(let l=0;l!==n;++l)a[l]=l;return a.sort(e),a}function A_(s,e,n){const a=s.length,l=new s.constructor(a);for(let c=0,f=0;f!==a;++c){const h=n[c]*e;for(let m=0;m!==e;++m)l[f++]=s[h+m]}return l}function Nv(s,e,n,a){let l=1,c=s[0];for(;c!==void 0&&c[a]===void 0;)c=s[l++];if(c===void 0)return;let f=c[a];if(f!==void 0)if(Array.isArray(f))do f=c[a],f!==void 0&&(e.push(c.time),n.push(...f)),c=s[l++];while(c!==void 0);else if(f.toArray!==void 0)do f=c[a],f!==void 0&&(e.push(c.time),f.toArray(n,n.length)),c=s[l++];while(c!==void 0);else do f=c[a],f!==void 0&&(e.push(c.time),n.push(f)),c=s[l++];while(c!==void 0)}class eu{constructor(e,n,a,l){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=l!==void 0?l:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,l=n[a],c=n[a-1];e:{t:{let f;n:{i:if(!(e<l)){for(let h=a+2;;){if(l===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=l,l=n[++a],e<l)break t}f=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let m=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===m)break;if(l=c,c=n[--a-1],e>=c)break t}f=a,a=0;break n}break e}for(;a<f;){const h=a+f>>>1;e<n[h]?f=h:a=h+1}if(l=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(l===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,l)}return this.interpolate_(a,c,e,l)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l;for(let f=0;f!==l;++f)n[f]=a[c+f];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class QM extends eu{constructor(e,n,a,l){super(e,n,a,l),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:G0,endingEnd:G0}}intervalChanged_(e,n,a){const l=this.parameterPositions;let c=e-2,f=e+1,h=l[c],m=l[f];if(h===void 0)switch(this.getSettings_().endingStart){case k0:c=e,h=2*n-a;break;case j0:c=l.length-2,h=n+l[c]-l[c+1];break;default:c=e,h=a}if(m===void 0)switch(this.getSettings_().endingEnd){case k0:f=e,m=2*a-n;break;case j0:f=1,m=a+l[1]-l[0];break;default:f=e-1,m=n}const p=(a-n)*.5,g=this.valueSize;this._weightPrev=p/(n-h),this._weightNext=p/(m-a),this._offsetPrev=c*g,this._offsetNext=f*g}interpolate_(e,n,a,l){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,m=e*h,p=m-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,y=this._weightNext,b=(a-n)/(l-n),R=b*b,M=R*b,x=-v*M+2*v*R-v*b,z=(1+v)*M+(-1.5-2*v)*R+(-.5+v)*b+1,L=(-1-y)*M+(1.5+y)*R+.5*b,D=y*M-y*R;for(let B=0;B!==h;++B)c[B]=x*f[g+B]+z*f[p+B]+L*f[m+B]+D*f[_+B];return c}}class JM extends eu{constructor(e,n,a,l){super(e,n,a,l)}interpolate_(e,n,a,l){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,m=e*h,p=m-h,g=(a-n)/(l-n),_=1-g;for(let v=0;v!==h;++v)c[v]=f[p+v]*_+f[m+v]*g;return c}}class $M extends eu{constructor(e,n,a,l){super(e,n,a,l)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ti{constructor(e,n,a,l){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lc(n,this.TimeBufferType),this.values=Lc(a,this.ValueBufferType),this.setInterpolation(l||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Lc(e.times,Array),values:Lc(e.values,Array)};const l=e.getInterpolation();l!==e.DefaultInterpolation&&(a.interpolation=l)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new $M(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new JM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new QM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case kc:n=this.InterpolantFactoryMethodDiscrete;break;case Ld:n=this.InterpolantFactoryMethodLinear;break;case dh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kc;case this.InterpolantFactoryMethodLinear:return Ld;case this.InterpolantFactoryMethodSmooth:return dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,l=n.length;a!==l;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,l=n.length;a!==l;++a)n[a]*=e}return this}trim(e,n){const a=this.times,l=a.length;let c=0,f=l-1;for(;c!==l&&a[c]<e;)++c;for(;f!==-1&&a[f]>n;)--f;if(++f,c!==0||f!==l){c>=f&&(f=Math.max(f,1),c=f-1);const h=this.getValueSize();this.times=a.slice(c,f),this.values=this.values.slice(c*h,f*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,l=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let f=null;for(let h=0;h!==c;h++){const m=a[h];if(typeof m=="number"&&isNaN(m)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,m),e=!1;break}if(f!==null&&f>m){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,m,f),e=!1;break}f=m}if(l!==void 0&&ZM(l))for(let h=0,m=l.length;h!==m;++h){const p=l[h];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,p),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),l=this.getInterpolation()===dh,c=e.length-1;let f=1;for(let h=1;h<c;++h){let m=!1;const p=e[h],g=e[h+1];if(p!==g&&(h!==1||p!==e[0]))if(l)m=!0;else{const _=h*a,v=_-a,y=_+a;for(let b=0;b!==a;++b){const R=n[_+b];if(R!==n[v+b]||R!==n[y+b]){m=!0;break}}}if(m){if(h!==f){e[f]=e[h];const _=h*a,v=f*a;for(let y=0;y!==a;++y)n[v+y]=n[_+y]}++f}}if(c>0){e[f]=e[c];for(let h=c*a,m=f*a,p=0;p!==a;++p)n[m+p]=n[h+p];++f}return f!==e.length?(this.times=e.slice(0,f),this.values=n.slice(0,f*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,l=new a(this.name,e,n);return l.createInterpolant=this.createInterpolant,l}}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Ld;class Ps extends Ti{constructor(e,n,a){super(e,n,a)}}Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=kc;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Uv extends Ti{constructor(e,n,a,l){super(e,n,a,l)}}Uv.prototype.ValueTypeName="color";class Yc extends Ti{constructor(e,n,a,l){super(e,n,a,l)}}Yc.prototype.ValueTypeName="number";class eb extends eu{constructor(e,n,a,l){super(e,n,a,l)}interpolate_(e,n,a,l){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,m=(a-n)/(l-n);let p=e*h;for(let g=p+h;p!==g;p+=4)Os.slerpFlat(c,0,f,p-h,f,p,m);return c}}class tu extends Ti{constructor(e,n,a,l){super(e,n,a,l)}InterpolantFactoryMethodLinear(e){return new eb(this.times,this.values,this.getValueSize(),e)}}tu.prototype.ValueTypeName="quaternion";tu.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Ti{constructor(e,n,a){super(e,n,a)}}Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=kc;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Zc extends Ti{constructor(e,n,a,l){super(e,n,a,l)}}Zc.prototype.ValueTypeName="vector";class MR{constructor(e="",n=-1,a=[],l=zS){this.name=e,this.tracks=a,this.duration=n,this.blendMode=l,this.uuid=Ei(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,l=1/(e.fps||1);for(let f=0,h=a.length;f!==h;++f)n.push(nb(a[f]).scale(l));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c}static toJSON(e){const n=[],a=e.tracks,l={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let c=0,f=a.length;c!==f;++c)n.push(Ti.toJSON(a[c]));return l}static CreateFromMorphTargetSequence(e,n,a,l){const c=n.length,f=[];for(let h=0;h<c;h++){let m=[],p=[];m.push((h+c-1)%c,h,(h+1)%c),p.push(0,1,0);const g=KM(m);m=A_(m,1,g),p=A_(p,1,g),!l&&m[0]===0&&(m.push(c),p.push(p[0])),f.push(new Yc(".morphTargetInfluences["+n[h].name+"]",m,p).scale(1/a))}return new this(e,-1,f)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const l=e;a=l.geometry&&l.geometry.animations||l.animations}for(let l=0;l<a.length;l++)if(a[l].name===n)return a[l];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const l={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,m=e.length;h<m;h++){const p=e[h],g=p.name.match(c);if(g&&g.length>1){const _=g[1];let v=l[_];v||(l[_]=v=[]),v.push(p)}}const f=[];for(const h in l)f.push(this.CreateFromMorphTargetSequence(h,l[h],n,a));return f}static parseAnimation(e,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,y,b,R){if(y.length!==0){const M=[],x=[];Nv(y,M,x,b),M.length!==0&&R.push(new _(v,M,x))}},l=[],c=e.name||"default",f=e.fps||30,h=e.blendMode;let m=e.length||-1;const p=e.hierarchy||[];for(let _=0;_<p.length;_++){const v=p[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let b;for(b=0;b<v.length;b++)if(v[b].morphTargets)for(let R=0;R<v[b].morphTargets.length;R++)y[v[b].morphTargets[R]]=-1;for(const R in y){const M=[],x=[];for(let z=0;z!==v[b].morphTargets.length;++z){const L=v[b];M.push(L.time),x.push(L.morphTarget===R?1:0)}l.push(new Yc(".morphTargetInfluence["+R+"]",M,x))}m=y.length*f}else{const y=".bones["+n[_].name+"]";a(Zc,y+".position",v,"pos",l),a(tu,y+".quaternion",v,"rot",l),a(Zc,y+".scale",v,"scl",l)}}return l.length===0?null:new this(c,m,l,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,l=e.length;a!==l;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yc;case"vector":case"vector2":case"vector3":case"vector4":return Zc;case"color":return Uv;case"quaternion":return tu;case"bool":case"boolean":return Ps;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function nb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tb(s.type);if(s.times===void 0){const n=[],a=[];Nv(s.keys,n,a,"value"),s.times=n,s.values=a}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const la={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ib{constructor(e,n,a){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const y=p[_],b=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ab=new ib;class Jo{constructor(e){this.manager=e!==void 0?e:ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(l,c){a.load(e,l,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ra={};class rb extends Error{constructor(e,n){super(e),this.response=n}}class bR extends Jo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,l){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=la.get(`file:${e}`);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(ra[e]!==void 0){ra[e].push({onLoad:n,onProgress:a,onError:l});return}ra[e]=[],ra[e].push({onLoad:n,onProgress:a,onError:l});const f=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,m=this.responseType;fetch(f).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=ra[e],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=v?parseInt(v):0,b=y!==0;let R=0;const M=new ReadableStream({start(x){z();function z(){_.read().then(({done:L,value:D})=>{if(L)x.close();else{R+=D.byteLength;const B=new ProgressEvent("progress",{lengthComputable:b,loaded:R,total:y});for(let H=0,k=g.length;H<k;H++){const Y=g[H];Y.onProgress&&Y.onProgress(B)}x.enqueue(D),z()}},L=>{x.error(L)})}}});return new Response(M)}else throw new rb(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return p.arrayBuffer().then(b=>y.decode(b))}}}).then(p=>{la.add(`file:${e}`,p);const g=ra[e];delete ra[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(p)}}).catch(p=>{const g=ra[e];if(g===void 0)throw this.manager.itemError(e),p;delete ra[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ss=new WeakMap;class sb extends Jo{constructor(e){super(e)}load(e,n,a,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=la.get(`image:${e}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(f),c.manager.itemEnd(e)},0);else{let _=Ss.get(f);_===void 0&&(_=[],Ss.set(f,_)),_.push({onLoad:n,onError:l})}return f}const h=Zo("img");function m(){g(),n&&n(this);const _=Ss.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onLoad&&y.onLoad(this)}Ss.delete(this),c.manager.itemEnd(e)}function p(_){g(),l&&l(_),la.remove(`image:${e}`);const v=Ss.get(this)||[];for(let y=0;y<v.length;y++){const b=v[y];b.onError&&b.onError(_)}Ss.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),la.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class ER extends Jo{constructor(e){super(e)}load(e,n,a,l){const c=new Un,f=new sb(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,l),c}}class nu extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Fh=new yt,R_=new K,w_=new K;class Zd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yd,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;R_.setFromMatrixPosition(e.matrixWorld),n.position.copy(R_),w_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(w_),n.updateMatrixWorld(),Fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ob extends Zd{constructor(){super(new zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=Ns*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||l!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=l,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class TR extends nu{constructor(e,n,a=0,l=Math.PI/3,c=0,f=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=a,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new ob}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const C_=new yt,Vo=new K,Hh=new K;class lb extends Zd{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,l=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),a.position.copy(Vo),Hh.copy(a.position),Hh.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(Hh),a.updateMatrixWorld(),l.makeTranslation(-Vo.x,-Vo.y,-Vo.z),C_.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(C_,a.coordinateSystem,a.reversedDepth)}}class AR extends nu{constructor(e,n,a=0,l=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new lb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lv extends bv{constructor(e=-1,n=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class cb extends Zd{constructor(){super(new Lv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kc extends nu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new cb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ov extends nu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class RR{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Vh=new WeakMap;class wR extends Jo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,l){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=la.get(`image-bitmap:${e}`);if(f!==void 0){if(c.manager.itemStart(e),f.then){f.then(p=>{if(Vh.has(f)===!0)l&&l(Vh.get(f)),c.manager.itemError(e),c.manager.itemEnd(e);else return n&&n(p),c.manager.itemEnd(e),p});return}return setTimeout(function(){n&&n(f),c.manager.itemEnd(e)},0),f}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const m=fetch(e,h).then(function(p){return p.blob()}).then(function(p){return createImageBitmap(p,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(p){return la.add(`image-bitmap:${e}`,p),n&&n(p),c.manager.itemEnd(e),p}).catch(function(p){l&&l(p),Vh.set(m,p),la.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});la.add(`image-bitmap:${e}`,m),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ub extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kd="\\[\\]\\.:\\/",fb=new RegExp("["+Kd+"]","g"),Qd="[^"+Kd+"]",hb="[^"+Kd.replace("\\.","")+"]",db=/((?:WC+[\/:])*)/.source.replace("WC",Qd),pb=/(WCOD+)?/.source.replace("WCOD",hb),mb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qd),gb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qd),_b=new RegExp("^"+db+pb+mb+gb+"$"),vb=["material","materials","bones","map"];class xb{constructor(e,n,a){const l=a||Ht.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,l)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,l=this._bindings[a];l!==void 0&&l.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let l=this._targetGroup.nCachedObjects_,c=a.length;l!==c;++l)a[l].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Ht{constructor(e,n,a){this.path=n,this.parsedPath=a||Ht.parseTrackName(n),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Ht.Composite(e,n,a):new Ht(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fb,"")}static parseTrackName(e){const n=_b.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},l=a.nodeName&&a.nodeName.lastIndexOf(".");if(l!==void 0&&l!==-1){const c=a.nodeName.substring(l+1);vb.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,l),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let f=0;f<c.length;f++){const h=c[f];if(h.name===n||h.uuid===n)return h;const m=a(h.children);if(m)return m}return null},l=a(e.children);if(l)return l}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let l=0,c=a.length;l!==c;++l)e[n++]=a[l]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let l=0,c=a.length;l!==c;++l)a[l]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let l=0,c=a.length;l!==c;++l)a[l]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let l=0,c=a.length;l!==c;++l)a[l]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,l=n.propertyName;let c=n.propertyIndex;if(e||(e=Ht.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let p=n.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===p){p=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(p!==void 0){if(e[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[p]}}const f=e[l];if(f===void 0){const p=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+l+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let m=this.BindingType.Direct;if(c!==void 0){if(l==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}m=this.BindingType.ArrayElement,this.resolvedProperty=f,this.propertyIndex=c}else f.fromArray!==void 0&&f.toArray!==void 0?(m=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(m=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=l;this.getValue=this.GetterByBindingType[m],this.setValue=this.SetterByBindingTypeAndVersioning[m][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=xb;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function D_(s,e,n,a){const l=yb(a);switch(n){case cv:return s*e;case Gd:return s*e/l.components*l.byteLength;case kd:return s*e/l.components*l.byteLength;case fv:return s*e*2/l.components*l.byteLength;case jd:return s*e*2/l.components*l.byteLength;case uv:return s*e*3/l.components*l.byteLength;case ui:return s*e*4/l.components*l.byteLength;case Xd:return s*e*4/l.components*l.byteLength;case Bc:case zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ld:case ud:return Math.max(s,16)*Math.max(e,8)/4;case od:case cd:return Math.max(s,8)*Math.max(e,8)/2;case fd:case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vc:case wd:case Cd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hv:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nd:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yb(s){switch(s){case Ii:case sv:return{byteLength:1,components:1};case Xo:case ov:case Ko:return{byteLength:2,components:1};case Hd:case Vd:return{byteLength:2,components:4};case br:case Fd:case bi:return{byteLength:4,components:1};case lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let s=null,e=!1,n=null,a=null;function l(c,f){n(c,f),a=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&(a=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Sb(s){const e=new WeakMap;function n(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,g);else{_.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<_.length;y++){const b=_[v],R=_[y];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++v,_[v]=R)}_.length=v+1;for(let y=0,b=_.length;y<b;y++){const R=_[y];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Db=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ob=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ib=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",$b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ST=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$T=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Mb,alphahash_pars_fragment:bb,alphamap_fragment:Eb,alphamap_pars_fragment:Tb,alphatest_fragment:Ab,alphatest_pars_fragment:Rb,aomap_fragment:wb,aomap_pars_fragment:Cb,batching_pars_vertex:Db,batching_vertex:Nb,begin_vertex:Ub,beginnormal_vertex:Lb,bsdfs:Ob,iridescence_fragment:Pb,bumpmap_pars_fragment:Ib,clipping_planes_fragment:Bb,clipping_planes_pars_fragment:zb,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Hb,color_fragment:Vb,color_pars_fragment:Gb,color_pars_vertex:kb,color_vertex:jb,common:Xb,cube_uv_reflection_fragment:Wb,defaultnormal_vertex:qb,displacementmap_pars_vertex:Yb,displacementmap_vertex:Zb,emissivemap_fragment:Kb,emissivemap_pars_fragment:Qb,colorspace_fragment:Jb,colorspace_pars_fragment:$b,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:nE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:pE,envmap_vertex:aE,fog_vertex:rE,fog_pars_vertex:sE,fog_fragment:oE,fog_pars_fragment:lE,gradientmap_pars_fragment:cE,lightmap_pars_fragment:uE,lights_lambert_fragment:fE,lights_lambert_pars_fragment:hE,lights_pars_begin:dE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:_E,lights_phong_pars_fragment:vE,lights_physical_fragment:xE,lights_physical_pars_fragment:yE,lights_fragment_begin:SE,lights_fragment_maps:ME,lights_fragment_end:bE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:RE,map_fragment:wE,map_pars_fragment:CE,map_particle_fragment:DE,map_particle_pars_fragment:NE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:LE,morphinstance_vertex:OE,morphcolor_vertex:PE,morphnormal_vertex:IE,morphtarget_pars_vertex:BE,morphtarget_vertex:zE,normal_fragment_begin:FE,normal_fragment_maps:HE,normal_pars_fragment:VE,normal_pars_vertex:GE,normal_vertex:kE,normalmap_pars_fragment:jE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:ZE,packing:KE,premultiplied_alpha_fragment:QE,project_vertex:JE,dithering_fragment:$E,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:aT,shadowmap_vertex:rT,shadowmask_pars_fragment:sT,skinbase_vertex:oT,skinning_pars_vertex:lT,skinning_vertex:cT,skinnormal_vertex:uT,specularmap_fragment:fT,specularmap_pars_fragment:hT,tonemapping_fragment:dT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:gT,uv_pars_fragment:_T,uv_pars_vertex:vT,uv_vertex:xT,worldpos_vertex:yT,background_vert:ST,background_frag:MT,backgroundCube_vert:bT,backgroundCube_frag:ET,cube_vert:TT,cube_frag:AT,depth_vert:RT,depth_frag:wT,distanceRGBA_vert:CT,distanceRGBA_frag:DT,equirect_vert:NT,equirect_frag:UT,linedashed_vert:LT,linedashed_frag:OT,meshbasic_vert:PT,meshbasic_frag:IT,meshlambert_vert:BT,meshlambert_frag:zT,meshmatcap_vert:FT,meshmatcap_frag:HT,meshnormal_vert:VT,meshnormal_frag:GT,meshphong_vert:kT,meshphong_frag:jT,meshphysical_vert:XT,meshphysical_frag:WT,meshtoon_vert:qT,meshtoon_frag:YT,points_vert:ZT,points_frag:KT,shadow_vert:QT,shadow_frag:JT,sprite_vert:$T,sprite_frag:e1},Oe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Li={basic:{uniforms:Bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Bn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Bn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Bn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Bn([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Bn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Bn([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Bn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Bn([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Bn([Oe.common,Oe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Bn([Oe.lights,Oe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Li.physical={uniforms:Bn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Oc={r:0,b:0,g:0},mr=new Bi,t1=new yt;function n1(s,e,n,a,l,c,f){const h=new xt(0);let m=c===!0?0:1,p,g,_=null,v=0,y=null;function b(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?n:e).get(D)),D}function R(L){let D=!1;const B=b(L);B===null?x(h,m):B&&B.isColor&&(x(B,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?a.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,D){const B=b(D);B&&(B.isCubeTexture||B.mapping===Qc)?(g===void 0&&(g=new fi(new Qo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Us(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,k,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),mr.copy(D.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(t1.makeRotationFromEuler(mr)),g.material.toneMapped=Rt.getTransfer(B.colorSpace)!==Ft,(_!==B||v!==B.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,_=B,v=B.version,y=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new fi(new $c(2,2),new qa({name:"BackgroundMaterial",uniforms:Us(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(B.colorSpace)!==Ft,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||v!==B.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,_=B,v=B.version,y=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,D){L.getRGB(Oc,Mv(s)),a.buffers.color.setClear(Oc.r,Oc.g,Oc.b,D,f)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(h,m)},render:R,addToRenderList:M,dispose:z}}function i1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=v(null);let c=l,f=!1;function h(C,F,ue,le,ce){let me=!1;const P=_(le,ue,F);c!==P&&(c=P,p(c.object)),me=y(C,le,ue,ce),me&&b(C,le,ue,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,D(C,F,ue,le),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function _(C,F,ue){const le=ue.wireframe===!0;let ce=a[C.id];ce===void 0&&(ce={},a[C.id]=ce);let me=ce[F.id];me===void 0&&(me={},ce[F.id]=me);let P=me[le];return P===void 0&&(P=v(m()),me[le]=P),P}function v(C){const F=[],ue=[],le=[];for(let ce=0;ce<n;ce++)F[ce]=0,ue[ce]=0,le[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ue,attributeDivisors:le,object:C,attributes:{},index:null}}function y(C,F,ue,le){const ce=c.attributes,me=F.attributes;let P=0;const $=ue.getAttributes();for(const q in $)if($[q].location>=0){const U=ce[q];let ee=me[q];if(ee===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),U===void 0||U.attribute!==ee||ee&&U.data!==ee.data)return!0;P++}return c.attributesNum!==P||c.index!==le}function b(C,F,ue,le){const ce={},me=F.attributes;let P=0;const $=ue.getAttributes();for(const q in $)if($[q].location>=0){let U=me[q];U===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const ee={};ee.attribute=U,U&&U.data&&(ee.data=U.data),ce[q]=ee,P++}c.attributes=ce,c.attributesNum=P,c.index=le}function R(){const C=c.newAttributes;for(let F=0,ue=C.length;F<ue;F++)C[F]=0}function M(C){x(C,0)}function x(C,F){const ue=c.newAttributes,le=c.enabledAttributes,ce=c.attributeDivisors;ue[C]=1,le[C]===0&&(s.enableVertexAttribArray(C),le[C]=1),ce[C]!==F&&(s.vertexAttribDivisor(C,F),ce[C]=F)}function z(){const C=c.newAttributes,F=c.enabledAttributes;for(let ue=0,le=F.length;ue<le;ue++)F[ue]!==C[ue]&&(s.disableVertexAttribArray(ue),F[ue]=0)}function L(C,F,ue,le,ce,me,P){P===!0?s.vertexAttribIPointer(C,F,ue,ce,me):s.vertexAttribPointer(C,F,ue,le,ce,me)}function D(C,F,ue,le){R();const ce=le.attributes,me=ue.getAttributes(),P=F.defaultAttributeValues;for(const $ in me){const q=me[$];if(q.location>=0){let ye=ce[$];if(ye===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),ye!==void 0){const U=ye.normalized,ee=ye.itemSize,xe=e.get(ye);if(xe===void 0)continue;const Se=xe.buffer,Ce=xe.type,ie=xe.bytesPerElement,de=Ce===s.INT||Ce===s.UNSIGNED_INT||ye.gpuType===Fd;if(ye.isInterleavedBufferAttribute){const Me=ye.data,Pe=Me.stride,qe=ye.offset;if(Me.isInstancedInterleavedBuffer){for(let it=0;it<q.locationSize;it++)x(q.location+it,Me.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let it=0;it<q.locationSize;it++)M(q.location+it);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let it=0;it<q.locationSize;it++)L(q.location+it,ee/q.locationSize,Ce,U,Pe*ie,(qe+ee/q.locationSize*it)*ie,de)}else{if(ye.isInstancedBufferAttribute){for(let Me=0;Me<q.locationSize;Me++)x(q.location+Me,ye.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Me=0;Me<q.locationSize;Me++)M(q.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let Me=0;Me<q.locationSize;Me++)L(q.location+Me,ee/q.locationSize,Ce,U,ee*ie,ee/q.locationSize*Me*ie,de)}}else if(P!==void 0){const U=P[$];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(q.location,U);break;case 3:s.vertexAttrib3fv(q.location,U);break;case 4:s.vertexAttrib4fv(q.location,U);break;default:s.vertexAttrib1fv(q.location,U)}}}}z()}function B(){Y();for(const C in a){const F=a[C];for(const ue in F){const le=F[ue];for(const ce in le)g(le[ce].object),delete le[ce];delete F[ue]}delete a[C]}}function H(C){if(a[C.id]===void 0)return;const F=a[C.id];for(const ue in F){const le=F[ue];for(const ce in le)g(le[ce].object),delete le[ce];delete F[ue]}delete a[C.id]}function k(C){for(const F in a){const ue=a[F];if(ue[C.id]===void 0)continue;const le=ue[C.id];for(const ce in le)g(le[ce].object),delete le[ce];delete ue[C.id]}}function Y(){N(),f=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:N,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:M,disableUnusedAttributes:z}}function a1(s,e,n){let a;function l(p){a=p}function c(p,g){s.drawArrays(a,p,g),n.update(g,a,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];n.update(y,a,1)}function m(p,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],g[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let b=0;for(let R=0;R<_;R++)b+=g[R]*v[R];n.update(b,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function r1(s,e,n,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==ui&&a.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(k){const Y=k===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Ii&&a.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==bi&&!Y)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:B,maxSamples:H}}function s1(s){const e=this;let n=null,a=0,l=!1,c=!1;const f=new _r,h=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||l;return l=v,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const b=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,x=s.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const z=c?0:a,L=z*4;let D=x.clippingState||null;m.value=D,D=g(b,v,L,y);for(let B=0;B!==L;++B)D[B]=n[B];x.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,y,b){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const x=y+R*4,z=v.matrixWorldInverse;h.getNormalMatrix(z),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,D=y;L!==R;++L,D+=4)f.copy(_[L]).applyMatrix4(z,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function o1(s){let e=new WeakMap;function n(f,h){return h===id?f.mapping=ws:h===ad&&(f.mapping=Cs),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===id||h===ad)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new PM(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const bs=4,N_=[.125,.215,.35,.446,.526,.582],yr=20,Gh=new Lv,U_=new xt;let kh=null,jh=0,Xh=0,Wh=!1;const vr=(1+Math.sqrt(5))/2,Ms=1/vr,L_=[new K(-vr,Ms,0),new K(vr,Ms,0),new K(-Ms,0,vr),new K(Ms,0,vr),new K(0,vr,-Ms),new K(0,vr,Ms),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],l1=new K;class O_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,l=100,c={}){const{size:f=256,position:h=l1}=c;kh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,jh,Xh),this._renderer.xr.enabled=Wh,e.scissorTest=!1,Pc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Ko,format:ui,colorSpace:Ds,depthBuffer:!1},l=P_(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(e,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c1(c)),this._blurMaterial=u1(c,e,n)}return l}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,Gh)}_sceneToCubeUV(e,n,a,l,c){const m=new zn(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(U_),_.toneMapping=Xa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const R=new xv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),M=new fi(new Qo,R);let x=!1;const z=e.background;z?z.isColor&&(R.color.copy(z),e.background=null,x=!0):(R.color.copy(U_),x=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const B=this._cubeSize;Pc(l,D*B,L>2?B:0,B,B),_.setRenderTarget(l),x&&_.render(M,m),_.render(e,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=z}_textureToCubeUV(e,n){const a=this._renderer,l=e.mapping===ws||e.mapping===Cs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new fi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Pc(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,Gh)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=L_[(l-c-1)%L_.length];this._blur(e,c-1,c,f,h)}n.autoClear=a}_blur(e,n,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,n,a,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new fi(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*yr-1),R=c/b,M=isFinite(c)?1+Math.floor(g*R):yr;M>yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${yr}`);const x=[];let z=0;for(let k=0;k<yr;++k){const Y=k/R,N=Math.exp(-Y*Y/2);x.push(N),k===0?z+=N:k<M&&(z+=2*N)}for(let k=0;k<x.length;k++)x[k]=x[k]/z;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=b,v.mipInt.value=L-a;const D=this._sizeLods[l],B=3*D*(l>L-bs?l-L+bs:0),H=4*(this._cubeSize-D);Pc(n,B,H,3*D,2*D),m.setRenderTarget(n),m.render(_,Gh)}}function c1(s){const e=[],n=[],a=[];let l=s;const c=s-bs+1+N_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let m=1/h;f>s-bs?m=N_[f-s+bs-1]:f===0&&(m=0),a.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,R=3,M=2,x=1,z=new Float32Array(R*b*y),L=new Float32Array(M*b*y),D=new Float32Array(x*b*y);for(let H=0;H<y;H++){const k=H%3*2/3-1,Y=H>2?0:-1,N=[k,Y,0,k+2/3,Y,0,k+2/3,Y+1,0,k,Y,0,k+2/3,Y+1,0,k,Y+1,0];z.set(N,R*b*H),L.set(v,M*b*H);const C=[H,H,H,H,H,H];D.set(C,x*b*H)}const B=new ha;B.setAttribute("position",new hi(z,R)),B.setAttribute("uv",new hi(L,M)),B.setAttribute("faceIndex",new hi(D,x)),e.push(B),l>bs&&l--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function P_(s,e,n){const a=new Er(s,e,n);return a.texture.mapping=Qc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Pc(s,e,n,a,l){s.viewport.set(e,n,a,l),s.scissor.set(e,n,a,l)}function u1(s,e,n){const a=new Float32Array(yr),l=new K(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function I_(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function B_(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f1(s){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===id||m===ad,g=m===ws||m===Cs;if(p||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new O_(s)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new O_(s)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function h1(s){const e={};function n(a){if(e[a]!==void 0)return e[a];let l;switch(a){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(a)}return e[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&Ts("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function d1(s,e,n,a){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,b=_.attributes.position;let R=0;if(y!==null){const z=y.array;R=y.version;for(let L=0,D=z.length;L<D;L+=3){const B=z[L+0],H=z[L+1],k=z[L+2];v.push(B,H,H,k,k,B)}}else if(b!==void 0){const z=b.array;R=b.version;for(let L=0,D=z.length/3-1;L<D;L+=3){const B=L+0,H=L+1,k=L+2;v.push(B,H,H,k,k,B)}}else return;const M=new(mv(v)?Sv:yv)(v,1);M.version=R;const x=c.get(_);x&&e.remove(x),c.set(_,M)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function p1(s,e,n){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,y){s.drawElements(a,y,c,v*f),n.update(y,a,1)}function p(v,y,b){b!==0&&(s.drawElementsInstanced(a,y,c,v*f,b),n.update(y,a,b))}function g(v,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];n.update(M,a,1)}function _(v,y,b,R){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/f,y[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,R,0,b);let x=0;for(let z=0;z<b;z++)x+=y[z]*R[z];n.update(x,a,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function m1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:a}}function g1(s,e,n){const a=new WeakMap,l=new Ct;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let N=function(){k.dispose(),a.delete(h),h.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();const y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let L=0;y===!0&&(L=1),b===!0&&(L=2),R===!0&&(L=3);let D=h.attributes.position.count*L,B=1;D>e.maxTextureSize&&(B=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const H=new Float32Array(D*B*4*_),k=new gv(H,D,B,_);k.type=bi,k.needsUpdate=!0;const Y=L*4;for(let C=0;C<_;C++){const F=M[C],ue=x[C],le=z[C],ce=D*B*4*C;for(let me=0;me<F.count;me++){const P=me*Y;y===!0&&(l.fromBufferAttribute(F,me),H[ce+P+0]=l.x,H[ce+P+1]=l.y,H[ce+P+2]=l.z,H[ce+P+3]=0),b===!0&&(l.fromBufferAttribute(ue,me),H[ce+P+4]=l.x,H[ce+P+5]=l.y,H[ce+P+6]=l.z,H[ce+P+7]=0),R===!0&&(l.fromBufferAttribute(le,me),H[ce+P+8]=l.x,H[ce+P+9]=l.y,H[ce+P+10]=l.z,H[ce+P+11]=le.itemSize===4?l.w:1)}}v={count:_,texture:k,size:new Et(D,B)},a.set(h,v),h.addEventListener("dispose",N)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let y=0;for(let R=0;R<p.length;R++)y+=p[R];const b=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function _1(s,e,n,a){let l=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const Iv=new Un,z_=new Dv(1,1),Bv=new gv,zv=new vM,Fv=new Ev,F_=[],H_=[],V_=new Float32Array(16),G_=new Float32Array(9),k_=new Float32Array(4);function Bs(s,e,n){const a=s[0];if(a<=0||a>0)return s;const l=e*n;let c=F_[l];if(c===void 0&&(c=new Float32Array(l),F_[l]=c),e!==0){a.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=n,s[f].toArray(c,h)}return c}function mn(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function gn(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function iu(s,e){let n=H_[e];n===void 0&&(n=new Int32Array(e),H_[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function v1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function x1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;s.uniform2fv(this.addr,e),gn(n,e)}}function y1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mn(n,e))return;s.uniform3fv(this.addr,e),gn(n,e)}}function S1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;s.uniform4fv(this.addr,e),gn(n,e)}}function M1(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(mn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,a))return;k_.set(a),s.uniformMatrix2fv(this.addr,!1,k_),gn(n,a)}}function b1(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(mn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,a))return;G_.set(a),s.uniformMatrix3fv(this.addr,!1,G_),gn(n,a)}}function E1(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(mn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,a))return;V_.set(a),s.uniformMatrix4fv(this.addr,!1,V_),gn(n,a)}}function T1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function A1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;s.uniform2iv(this.addr,e),gn(n,e)}}function R1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;s.uniform3iv(this.addr,e),gn(n,e)}}function w1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;s.uniform4iv(this.addr,e),gn(n,e)}}function C1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function D1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;s.uniform2uiv(this.addr,e),gn(n,e)}}function N1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;s.uniform3uiv(this.addr,e),gn(n,e)}}function U1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;s.uniform4uiv(this.addr,e),gn(n,e)}}function L1(s,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(z_.compareFunction=pv,c=z_):c=Iv,n.setTexture2D(e||c,l)}function O1(s,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(e||zv,l)}function P1(s,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(e||Fv,l)}function I1(s,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(e||Bv,l)}function B1(s){switch(s){case 5126:return v1;case 35664:return x1;case 35665:return y1;case 35666:return S1;case 35674:return M1;case 35675:return b1;case 35676:return E1;case 5124:case 35670:return T1;case 35667:case 35671:return A1;case 35668:case 35672:return R1;case 35669:case 35673:return w1;case 5125:return C1;case 36294:return D1;case 36295:return N1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return I1}}function z1(s,e){s.uniform1fv(this.addr,e)}function F1(s,e){const n=Bs(e,this.size,2);s.uniform2fv(this.addr,n)}function H1(s,e){const n=Bs(e,this.size,3);s.uniform3fv(this.addr,n)}function V1(s,e){const n=Bs(e,this.size,4);s.uniform4fv(this.addr,n)}function G1(s,e){const n=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function k1(s,e){const n=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function j1(s,e){const n=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function X1(s,e){s.uniform1iv(this.addr,e)}function W1(s,e){s.uniform2iv(this.addr,e)}function q1(s,e){s.uniform3iv(this.addr,e)}function Y1(s,e){s.uniform4iv(this.addr,e)}function Z1(s,e){s.uniform1uiv(this.addr,e)}function K1(s,e){s.uniform2uiv(this.addr,e)}function Q1(s,e){s.uniform3uiv(this.addr,e)}function J1(s,e){s.uniform4uiv(this.addr,e)}function $1(s,e,n){const a=this.cache,l=e.length,c=iu(n,l);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==l;++f)n.setTexture2D(e[f]||Iv,c[f])}function eA(s,e,n){const a=this.cache,l=e.length,c=iu(n,l);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||zv,c[f])}function tA(s,e,n){const a=this.cache,l=e.length,c=iu(n,l);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||Fv,c[f])}function nA(s,e,n){const a=this.cache,l=e.length,c=iu(n,l);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||Bv,c[f])}function iA(s){switch(s){case 5126:return z1;case 35664:return F1;case 35665:return H1;case 35666:return V1;case 35674:return G1;case 35675:return k1;case 35676:return j1;case 5124:case 35670:return X1;case 35667:case 35671:return W1;case 35668:case 35672:return q1;case 35669:case 35673:return Y1;case 5125:return Z1;case 36294:return K1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return nA}}class aA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=B1(n.type)}}class rA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iA(n.type)}}class sA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,n[h.id],a)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function j_(s,e){s.seq.push(e),s.map[e.id]=e}function oA(s,e,n){const a=s.name,l=a.length;for(qh.lastIndex=0;;){const c=qh.exec(a),f=qh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){j_(n,p===void 0?new aA(h,s,e):new rA(h,s,e));break}else{let _=n.map[h];_===void 0&&(_=new sA(h),j_(n,_)),n=_}}}class Gc{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=e.getActiveUniform(n,l),f=e.getUniformLocation(n,c.name);oA(c,f,this)}}setValue(e,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(e,a,l)}setOptional(e,n,a){const l=n[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,n,a,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,n){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in n&&a.push(f)}return a}}function X_(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const lA=37297;let cA=0;function uA(s,e){const n=s.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const W_=new lt;function fA(s){Rt._getMatrix(W_,Rt.workingColorSpace,s);const e=`mat3( ${W_.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(s)){case jc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function q_(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+uA(s.getShaderSource(e),h)}else return c}function hA(s,e){const n=fA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function dA(s,e){let n;switch(e){case CS:n="Linear";break;case DS:n="Reinhard";break;case NS:n="Cineon";break;case US:n="ACESFilmic";break;case OS:n="AgX";break;case PS:n="Neutral";break;case LS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ic=new K;function pA(){Rt.getLuminanceCoefficients(Ic);const s=Ic.x.toFixed(4),e=Ic.y.toFixed(4),n=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function gA(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function _A(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return n}function Go(s){return s!==""}function Y_(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Z_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(vA,yA)}const xA=new Map;function yA(s,e){let n=ft[e];if(n===void 0){const a=xA.get(e);if(a!==void 0)n=ft[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Id(n)}const SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(s){return s.replace(SA,MA)}function MA(s,e,n,a){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===iv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function EA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Cs:e="ENVMAP_TYPE_CUBE";break;case Qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function AA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case av:e="ENVMAP_BLENDING_MULTIPLY";break;case RS:e="ENVMAP_BLENDING_MIX";break;case wS:e="ENVMAP_BLENDING_ADD";break}return e}function RA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function wA(s,e,n,a){const l=s.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=bA(n),p=EA(n),g=TA(n),_=AA(n),v=RA(n),y=mA(n),b=gA(c),R=l.createProgram();let M,x,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Go).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Go).join(`
`),x.length>0&&(x+=`
`)):(M=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),x=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xa?"#define TONE_MAPPING":"",n.toneMapping!==Xa?ft.tonemapping_pars_fragment:"",n.toneMapping!==Xa?dA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,hA("linearToOutputTexel",n.outputColorSpace),pA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),f=Id(f),f=Y_(f,n),f=Z_(f,n),h=Id(h),h=Y_(h,n),h=Z_(h,n),f=K_(f),h=K_(h),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=z+M+f,D=z+x+h,B=X_(l,l.VERTEX_SHADER,L),H=X_(l,l.FRAGMENT_SHADER,D);l.attachShader(R,B),l.attachShader(R,H),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function k(F){if(s.debug.checkShaderErrors){const ue=l.getProgramInfoLog(R)||"",le=l.getShaderInfoLog(B)||"",ce=l.getShaderInfoLog(H)||"",me=ue.trim(),P=le.trim(),$=ce.trim();let q=!0,ye=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,B,H);else{const U=q_(l,B,"vertex"),ee=q_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+me+`
`+U+`
`+ee)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(P===""||$==="")&&(ye=!1);ye&&(F.diagnostics={runnable:q,programLog:me,vertexShader:{log:P,prefix:M},fragmentShader:{log:$,prefix:x}})}l.deleteShader(B),l.deleteShader(H),Y=new Gc(l,R),N=_A(l,R)}let Y;this.getUniforms=function(){return Y===void 0&&k(this),Y};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,lA)),C},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cA++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=H,this}let CA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new NA(e),n.set(e,a)),a}}class NA{constructor(e){this.id=CA++,this.code=e,this.usedTimes=0}}function UA(s,e,n,a,l,c,f){const h=new _v,m=new DA,p=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(N){return p.add(N),N===0?"uv":`uv${N}`}function M(N,C,F,ue,le){const ce=ue.fog,me=le.geometry,P=N.isMeshStandardMaterial?ue.environment:null,$=(N.isMeshStandardMaterial?n:e).get(N.envMap||P),q=$&&$.mapping===Qc?$.image.height:null,ye=b[N.type];N.precision!==null&&(y=l.getMaxPrecision(N.precision),y!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",y,"instead."));const U=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,ee=U!==void 0?U.length:0;let xe=0;me.morphAttributes.position!==void 0&&(xe=1),me.morphAttributes.normal!==void 0&&(xe=2),me.morphAttributes.color!==void 0&&(xe=3);let Se,Ce,ie,de;if(ye){const bt=Li[ye];Se=bt.vertexShader,Ce=bt.fragmentShader}else Se=N.vertexShader,Ce=N.fragmentShader,m.update(N),ie=m.getVertexShaderID(N),de=m.getFragmentShaderID(N);const Me=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),qe=le.isInstancedMesh===!0,it=le.isBatchedMesh===!0,kt=!!N.map,pt=!!N.matcap,V=!!$,Dt=!!N.aoMap,Qe=!!N.lightMap,Mt=!!N.bumpMap,Fe=!!N.normalMap,jt=!!N.displacementMap,He=!!N.emissiveMap,st=!!N.metalnessMap,Kt=!!N.roughnessMap,Qt=N.anisotropy>0,O=N.clearcoat>0,T=N.dispersion>0,te=N.iridescence>0,fe=N.sheen>0,ve=N.transmission>0,oe=Qt&&!!N.anisotropyMap,Ie=O&&!!N.clearcoatMap,Re=O&&!!N.clearcoatNormalMap,je=O&&!!N.clearcoatRoughnessMap,We=te&&!!N.iridescenceMap,be=te&&!!N.iridescenceThicknessMap,Ue=fe&&!!N.sheenColorMap,Ze=fe&&!!N.sheenRoughnessMap,ke=!!N.specularMap,De=!!N.specularColorMap,rt=!!N.specularIntensityMap,j=ve&&!!N.transmissionMap,Ae=ve&&!!N.thicknessMap,we=!!N.gradientMap,Be=!!N.alphaMap,Ee=N.alphaTest>0,_e=!!N.alphaHash,Ge=!!N.extensions;let at=Xa;N.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(at=s.toneMapping);const Nt={shaderID:ye,shaderType:N.type,shaderName:N.name,vertexShader:Se,fragmentShader:Ce,defines:N.defines,customVertexShaderID:ie,customFragmentShaderID:de,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:y,batching:it,batchingColor:it&&le._colorsTexture!==null,instancing:qe,instancingColor:qe&&le.instanceColor!==null,instancingMorph:qe&&le.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Ds,alphaToCoverage:!!N.alphaToCoverage,map:kt,matcap:pt,envMap:V,envMapMode:V&&$.mapping,envMapCubeUVHeight:q,aoMap:Dt,lightMap:Qe,bumpMap:Mt,normalMap:Fe,displacementMap:v&&jt,emissiveMap:He,normalMapObjectSpace:Fe&&N.normalMapType===VS,normalMapTangentSpace:Fe&&N.normalMapType===dv,metalnessMap:st,roughnessMap:Kt,anisotropy:Qt,anisotropyMap:oe,clearcoat:O,clearcoatMap:Ie,clearcoatNormalMap:Re,clearcoatRoughnessMap:je,dispersion:T,iridescence:te,iridescenceMap:We,iridescenceThicknessMap:be,sheen:fe,sheenColorMap:Ue,sheenRoughnessMap:Ze,specularMap:ke,specularColorMap:De,specularIntensityMap:rt,transmission:ve,transmissionMap:j,thicknessMap:Ae,gradientMap:we,opaque:N.transparent===!1&&N.blending===Es&&N.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ee,alphaHash:_e,combine:N.combine,mapUv:kt&&R(N.map.channel),aoMapUv:Dt&&R(N.aoMap.channel),lightMapUv:Qe&&R(N.lightMap.channel),bumpMapUv:Mt&&R(N.bumpMap.channel),normalMapUv:Fe&&R(N.normalMap.channel),displacementMapUv:jt&&R(N.displacementMap.channel),emissiveMapUv:He&&R(N.emissiveMap.channel),metalnessMapUv:st&&R(N.metalnessMap.channel),roughnessMapUv:Kt&&R(N.roughnessMap.channel),anisotropyMapUv:oe&&R(N.anisotropyMap.channel),clearcoatMapUv:Ie&&R(N.clearcoatMap.channel),clearcoatNormalMapUv:Re&&R(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&R(N.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&R(N.iridescenceMap.channel),iridescenceThicknessMapUv:be&&R(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&R(N.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&R(N.sheenRoughnessMap.channel),specularMapUv:ke&&R(N.specularMap.channel),specularColorMapUv:De&&R(N.specularColorMap.channel),specularIntensityMapUv:rt&&R(N.specularIntensityMap.channel),transmissionMapUv:j&&R(N.transmissionMap.channel),thicknessMapUv:Ae&&R(N.thicknessMap.channel),alphaMapUv:Be&&R(N.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(Fe||Qt),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!me.attributes.uv&&(kt||Be),fog:!!ce,useFog:N.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pe,skinning:le.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:kt&&N.map.isVideoTexture===!0&&Rt.getTransfer(N.map.colorSpace)===Ft,decodeVideoTextureEmissive:He&&N.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(N.emissiveMap.colorSpace)===Ft,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===oa,flipSided:N.side===Xn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Ge&&N.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&N.extensions.multiDraw===!0||it)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Nt.vertexUv1s=p.has(1),Nt.vertexUv2s=p.has(2),Nt.vertexUv3s=p.has(3),p.clear(),Nt}function x(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const F in N.defines)C.push(F),C.push(N.defines[F]);return N.isRawShaderMaterial===!1&&(z(C,N),L(C,N),C.push(s.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function z(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function L(N,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),N.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),N.push(h.mask)}function D(N){const C=b[N.type];let F;if(C){const ue=Li[C];F=NM.clone(ue.uniforms)}else F=N.uniforms;return F}function B(N,C){let F;for(let ue=0,le=g.length;ue<le;ue++){const ce=g[ue];if(ce.cacheKey===C){F=ce,++F.usedTimes;break}}return F===void 0&&(F=new wA(s,C,N,c),g.push(F)),F}function H(N){if(--N.usedTimes===0){const C=g.indexOf(N);g[C]=g[g.length-1],g.pop(),N.destroy()}}function k(N){m.remove(N)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:D,acquireProgram:B,releaseProgram:H,releaseShaderCache:k,programs:g,dispose:Y}}function LA(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function a(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:l,dispose:c}}function OA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function J_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $_(){const s=[];let e=0;const n=[],a=[],l=[];function c(){e=0,n.length=0,a.length=0,l.length=0}function f(_,v,y,b,R,M){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:b,renderOrder:_.renderOrder,z:R,group:M},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=R,x.group=M),e++,x}function h(_,v,y,b,R,M){const x=f(_,v,y,b,R,M);y.transmission>0?a.push(x):y.transparent===!0?l.push(x):n.push(x)}function m(_,v,y,b,R,M){const x=f(_,v,y,b,R,M);y.transmission>0?a.unshift(x):y.transparent===!0?l.unshift(x):n.unshift(x)}function p(_,v){n.length>1&&n.sort(_||OA),a.length>1&&a.sort(v||J_),l.length>1&&l.sort(v||J_)}function g(){for(let _=e,v=s.length;_<v;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function PA(){let s=new WeakMap;function e(a,l){const c=s.get(a);let f;return c===void 0?(f=new $_,s.set(a,[f])):l>=c.length?(f=new $_,c.push(f)):f=c[l],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function IA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new xt};break;case"SpotLight":n={position:new K,direction:new K,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=n,n}}}function BA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let zA=0;function FA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function HA(s){const e=new IA,n=BA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new K);const l=new K,c=new yt,f=new yt;function h(p){let g=0,_=0,v=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let y=0,b=0,R=0,M=0,x=0,z=0,L=0,D=0,B=0,H=0,k=0;p.sort(FA);for(let N=0,C=p.length;N<C;N++){const F=p[N],ue=F.color,le=F.intensity,ce=F.distance,me=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ue.r*le,_+=ue.g*le,v+=ue.b*le;else if(F.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(F.sh.coefficients[P],le);k++}else if(F.isDirectionalLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,q=n.get(F);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,a.directionalShadow[y]=q,a.directionalShadowMap[y]=me,a.directionalShadowMatrix[y]=F.shadow.matrix,z++}a.directional[y]=P,y++}else if(F.isSpotLight){const P=e.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(ue).multiplyScalar(le),P.distance=ce,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,a.spot[R]=P;const $=F.shadow;if(F.map&&(a.spotLightMap[B]=F.map,B++,$.updateMatrices(F),F.castShadow&&H++),a.spotLightMatrix[R]=$.matrix,F.castShadow){const q=n.get(F);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,a.spotShadow[R]=q,a.spotShadowMap[R]=me,D++}R++}else if(F.isRectAreaLight){const P=e.get(F);P.color.copy(ue).multiplyScalar(le),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),a.rectArea[M]=P,M++}else if(F.isPointLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const $=F.shadow,q=n.get(F);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,a.pointShadow[b]=q,a.pointShadowMap[b]=me,a.pointShadowMatrix[b]=F.shadow.matrix,L++}a.point[b]=P,b++}else if(F.isHemisphereLight){const P=e.get(F);P.skyColor.copy(F.color).multiplyScalar(le),P.groundColor.copy(F.groundColor).multiplyScalar(le),a.hemi[x]=P,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Oe.LTC_FLOAT_1,a.rectAreaLTC2=Oe.LTC_FLOAT_2):(a.rectAreaLTC1=Oe.LTC_HALF_1,a.rectAreaLTC2=Oe.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const Y=a.hash;(Y.directionalLength!==y||Y.pointLength!==b||Y.spotLength!==R||Y.rectAreaLength!==M||Y.hemiLength!==x||Y.numDirectionalShadows!==z||Y.numPointShadows!==L||Y.numSpotShadows!==D||Y.numSpotMaps!==B||Y.numLightProbes!==k)&&(a.directional.length=y,a.spot.length=R,a.rectArea.length=M,a.point.length=b,a.hemi.length=x,a.directionalShadow.length=z,a.directionalShadowMap.length=z,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=z,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=D+B-H,a.spotLightMap.length=B,a.numSpotLightShadowsWithMaps=H,a.numLightProbes=k,Y.directionalLength=y,Y.pointLength=b,Y.spotLength=R,Y.rectAreaLength=M,Y.hemiLength=x,Y.numDirectionalShadows=z,Y.numPointShadows=L,Y.numSpotShadows=D,Y.numSpotMaps=B,Y.numLightProbes=k,a.version=zA++)}function m(p,g){let _=0,v=0,y=0,b=0,R=0;const M=g.matrixWorldInverse;for(let x=0,z=p.length;x<z;x++){const L=p[x];if(L.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(L.isSpotLight){const D=a.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const D=a.rectArea[b];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),b++}else if(L.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),v++}else if(L.isHemisphereLight){const D=a.hemi[R];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:h,setupView:m,state:a}}function ev(s){const e=new HA(s),n=[],a=[];function l(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function VA(s){let e=new WeakMap;function n(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new ev(s),e.set(l,[h])):c>=f.length?(h=new ev(s),f.push(h)):h=f[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jA(s,e,n){let a=new Yd;const l=new Et,c=new Et,f=new Ct,h=new qM({depthPacking:HS}),m=new YM,p={},g=n.maxTextureSize,_={[Wa]:Xn,[Xn]:Wa,[oa]:oa},v=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:GA,fragmentShader:kA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new ha;b.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new fi(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iv;let x=this.type;this.render=function(H,k,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const N=s.getRenderTarget(),C=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(ja),ue.buffers.depth.getReversed()?ue.buffers.color.setClear(0,0,0,0):ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const le=x!==sa&&this.type===sa,ce=x===sa&&this.type!==sa;for(let me=0,P=H.length;me<P;me++){const $=H[me],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const ye=q.getFrameExtents();if(l.multiply(ye),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ye.x),l.x=c.x*ye.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ye.y),l.y=c.y*ye.y,q.mapSize.y=c.y)),q.map===null||le===!0||ce===!0){const ee=this.type!==sa?{minFilter:ti,magFilter:ti}:{};q.map!==null&&q.map.dispose(),q.map=new Er(l.x,l.y,ee),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const U=q.getViewportCount();for(let ee=0;ee<U;ee++){const xe=q.getViewport(ee);f.set(c.x*xe.x,c.y*xe.y,c.x*xe.z,c.y*xe.w),ue.viewport(f),q.updateMatrices($,ee),a=q.getFrustum(),D(k,Y,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===sa&&z(q,Y),q.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(N,C,F)};function z(H,k){const Y=e.update(R);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Er(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(k,null,Y,v,R,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(k,null,Y,y,R,null)}function L(H,k,Y,N){let C=null;const F=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)C=F;else if(C=Y.isPointLight===!0?m:h,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const ue=C.uuid,le=k.uuid;let ce=p[ue];ce===void 0&&(ce={},p[ue]=ce);let me=ce[le];me===void 0&&(me=C.clone(),ce[le]=me,k.addEventListener("dispose",B)),C=me}if(C.visible=k.visible,C.wireframe=k.wireframe,N===sa?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:_[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=s.properties.get(C);ue.light=Y}return C}function D(H,k,Y,N,C){if(H.visible===!1)return;if(H.layers.test(k.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===sa)&&(!H.frustumCulled||a.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const le=e.update(H),ce=H.material;if(Array.isArray(ce)){const me=le.groups;for(let P=0,$=me.length;P<$;P++){const q=me[P],ye=ce[q.materialIndex];if(ye&&ye.visible){const U=L(H,ye,N,C);H.onBeforeShadow(s,H,k,Y,le,U,q),s.renderBufferDirect(Y,null,le,U,H,q),H.onAfterShadow(s,H,k,Y,le,U,q)}}}else if(ce.visible){const me=L(H,ce,N,C);H.onBeforeShadow(s,H,k,Y,le,me,null),s.renderBufferDirect(Y,null,le,me,H,null),H.onAfterShadow(s,H,k,Y,le,me,null)}}const ue=H.children;for(let le=0,ce=ue.length;le<ce;le++)D(ue[le],k,Y,N,C)}function B(H){H.target.removeEventListener("dispose",B);for(const Y in p){const N=p[Y],C=H.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const XA={[Kh]:Qh,[Jh]:td,[$h]:nd,[Rs]:ed,[Qh]:Kh,[td]:Jh,[nd]:$h,[ed]:Rs};function WA(s,e){function n(){let j=!1;const Ae=new Ct;let we=null;const Be=new Ct(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!j&&(s.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){j=Ee},setClear:function(Ee,_e,Ge,at,Nt){Nt===!0&&(Ee*=at,_e*=at,Ge*=at),Ae.set(Ee,_e,Ge,at),Be.equals(Ae)===!1&&(s.clearColor(Ee,_e,Ge,at),Be.copy(Ae))},reset:function(){j=!1,we=null,Be.set(-1,0,0,0)}}}function a(){let j=!1,Ae=!1,we=null,Be=null,Ee=null;return{setReversed:function(_e){if(Ae!==_e){const Ge=e.get("EXT_clip_control");_e?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ae=_e;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return Ae},setTest:function(_e){_e?Me(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(_e){we!==_e&&!j&&(s.depthMask(_e),we=_e)},setFunc:function(_e){if(Ae&&(_e=XA[_e]),Be!==_e){switch(_e){case Kh:s.depthFunc(s.NEVER);break;case Qh:s.depthFunc(s.ALWAYS);break;case Jh:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case $h:s.depthFunc(s.EQUAL);break;case ed:s.depthFunc(s.GEQUAL);break;case td:s.depthFunc(s.GREATER);break;case nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=_e}},setLocked:function(_e){j=_e},setClear:function(_e){Ee!==_e&&(Ae&&(_e=1-_e),s.clearDepth(_e),Ee=_e)},reset:function(){j=!1,we=null,Be=null,Ee=null,Ae=!1}}}function l(){let j=!1,Ae=null,we=null,Be=null,Ee=null,_e=null,Ge=null,at=null,Nt=null;return{setTest:function(bt){j||(bt?Me(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(bt){Ae!==bt&&!j&&(s.stencilMask(bt),Ae=bt)},setFunc:function(bt,di,fn){(we!==bt||Be!==di||Ee!==fn)&&(s.stencilFunc(bt,di,fn),we=bt,Be=di,Ee=fn)},setOp:function(bt,di,fn){(_e!==bt||Ge!==di||at!==fn)&&(s.stencilOp(bt,di,fn),_e=bt,Ge=di,at=fn)},setLocked:function(bt){j=bt},setClear:function(bt){Nt!==bt&&(s.clearStencil(bt),Nt=bt)},reset:function(){j=!1,Ae=null,we=null,Be=null,Ee=null,_e=null,Ge=null,at=null,Nt=null}}}const c=new n,f=new a,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],b=null,R=!1,M=null,x=null,z=null,L=null,D=null,B=null,H=null,k=new xt(0,0,0),Y=0,N=!1,C=null,F=null,ue=null,le=null,ce=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,$=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=$>=2);let ye=null,U={};const ee=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),Se=new Ct().fromArray(ee),Ce=new Ct().fromArray(xe);function ie(j,Ae,we,Be){const Ee=new Uint8Array(4),_e=s.createTexture();s.bindTexture(j,_e),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<we;Ge++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Ae+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return _e}const de={};de[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Me(s.DEPTH_TEST),f.setFunc(Rs),Mt(!1),Fe(B0),Me(s.CULL_FACE),Dt(ja);function Me(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Pe(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function qe(j,Ae){return _[j]!==Ae?(s.bindFramebuffer(j,Ae),_[j]=Ae,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ae),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function it(j,Ae){let we=y,Be=!1;if(j){we=v.get(Ae),we===void 0&&(we=[],v.set(Ae,we));const Ee=j.textures;if(we.length!==Ee.length||we[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Ge=Ee.length;_e<Ge;_e++)we[_e]=s.COLOR_ATTACHMENT0+_e;we.length=Ee.length,Be=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,Be=!0);Be&&s.drawBuffers(we)}function kt(j){return b!==j?(s.useProgram(j),b=j,!0):!1}const pt={[xr]:s.FUNC_ADD,[uS]:s.FUNC_SUBTRACT,[fS]:s.FUNC_REVERSE_SUBTRACT};pt[hS]=s.MIN,pt[dS]=s.MAX;const V={[pS]:s.ZERO,[mS]:s.ONE,[gS]:s.SRC_COLOR,[Yh]:s.SRC_ALPHA,[MS]:s.SRC_ALPHA_SATURATE,[yS]:s.DST_COLOR,[vS]:s.DST_ALPHA,[_S]:s.ONE_MINUS_SRC_COLOR,[Zh]:s.ONE_MINUS_SRC_ALPHA,[SS]:s.ONE_MINUS_DST_COLOR,[xS]:s.ONE_MINUS_DST_ALPHA,[bS]:s.CONSTANT_COLOR,[ES]:s.ONE_MINUS_CONSTANT_COLOR,[TS]:s.CONSTANT_ALPHA,[AS]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(j,Ae,we,Be,Ee,_e,Ge,at,Nt,bt){if(j===ja){R===!0&&(Pe(s.BLEND),R=!1);return}if(R===!1&&(Me(s.BLEND),R=!0),j!==cS){if(j!==M||bt!==N){if((x!==xr||D!==xr)&&(s.blendEquation(s.FUNC_ADD),x=xr,D=xr),bt)switch(j){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case z0:s.blendFunc(s.ONE,s.ONE);break;case F0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case H0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case z0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case F0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case H0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}z=null,L=null,B=null,H=null,k.set(0,0,0),Y=0,M=j,N=bt}return}Ee=Ee||Ae,_e=_e||we,Ge=Ge||Be,(Ae!==x||Ee!==D)&&(s.blendEquationSeparate(pt[Ae],pt[Ee]),x=Ae,D=Ee),(we!==z||Be!==L||_e!==B||Ge!==H)&&(s.blendFuncSeparate(V[we],V[Be],V[_e],V[Ge]),z=we,L=Be,B=_e,H=Ge),(at.equals(k)===!1||Nt!==Y)&&(s.blendColor(at.r,at.g,at.b,Nt),k.copy(at),Y=Nt),M=j,N=!1}function Qe(j,Ae){j.side===oa?Pe(s.CULL_FACE):Me(s.CULL_FACE);let we=j.side===Xn;Ae&&(we=!we),Mt(we),j.blending===Es&&j.transparent===!1?Dt(ja):Dt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const Be=j.stencilWrite;h.setTest(Be),Be&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),He(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(j){C!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),C=j)}function Fe(j){j!==sS?(Me(s.CULL_FACE),j!==F&&(j===B0?s.cullFace(s.BACK):j===oS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),F=j}function jt(j){j!==ue&&(P&&s.lineWidth(j),ue=j)}function He(j,Ae,we){j?(Me(s.POLYGON_OFFSET_FILL),(le!==Ae||ce!==we)&&(s.polygonOffset(Ae,we),le=Ae,ce=we)):Pe(s.POLYGON_OFFSET_FILL)}function st(j){j?Me(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function Kt(j){j===void 0&&(j=s.TEXTURE0+me-1),ye!==j&&(s.activeTexture(j),ye=j)}function Qt(j,Ae,we){we===void 0&&(ye===null?we=s.TEXTURE0+me-1:we=ye);let Be=U[we];Be===void 0&&(Be={type:void 0,texture:void 0},U[we]=Be),(Be.type!==j||Be.texture!==Ae)&&(ye!==we&&(s.activeTexture(we),ye=we),s.bindTexture(j,Ae||de[j]),Be.type=j,Be.texture=Ae)}function O(){const j=U[ye];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{s.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{s.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{s.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function je(){try{s.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function We(){try{s.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function be(){try{s.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ue(j){Se.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Se.copy(j))}function Ze(j){Ce.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Ce.copy(j))}function ke(j,Ae){let we=p.get(Ae);we===void 0&&(we=new WeakMap,p.set(Ae,we));let Be=we.get(j);Be===void 0&&(Be=s.getUniformBlockIndex(Ae,j.name),we.set(j,Be))}function De(j,Ae){const Be=p.get(Ae).get(j);m.get(Ae)!==Be&&(s.uniformBlockBinding(Ae,Be,j.__bindingPointIndex),m.set(Ae,Be))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ye=null,U={},_={},v=new WeakMap,y=[],b=null,R=!1,M=null,x=null,z=null,L=null,D=null,B=null,H=null,k=new xt(0,0,0),Y=0,N=!1,C=null,F=null,ue=null,le=null,ce=null,Se.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Me,disable:Pe,bindFramebuffer:qe,drawBuffers:it,useProgram:kt,setBlending:Dt,setMaterial:Qe,setFlipSided:Mt,setCullFace:Fe,setLineWidth:jt,setPolygonOffset:He,setScissorTest:st,activeTexture:Kt,bindTexture:Qt,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:te,texImage2D:We,texImage3D:be,updateUBOMapping:ke,uniformBlockBinding:De,texStorage2D:Re,texStorage3D:je,texSubImage2D:fe,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ie,scissor:Ue,viewport:Ze,reset:rt}}function qA(s,e,n,a,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Et,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,T){return y?new OffscreenCanvas(O,T):Zo("canvas")}function R(O,T,te){let fe=1;const ve=Qt(O);if((ve.width>te||ve.height>te)&&(fe=te/Math.max(ve.width,ve.height)),fe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const oe=Math.floor(fe*ve.width),Ie=Math.floor(fe*ve.height);_===void 0&&(_=b(oe,Ie));const Re=T?b(oe,Ie):_;return Re.width=oe,Re.height=Ie,Re.getContext("2d").drawImage(O,0,0,oe,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+oe+"x"+Ie+")."),Re}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function M(O){return O.generateMipmaps}function x(O){s.generateMipmap(O)}function z(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(O,T,te,fe,ve=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let oe=T;if(T===s.RED&&(te===s.FLOAT&&(oe=s.R32F),te===s.HALF_FLOAT&&(oe=s.R16F),te===s.UNSIGNED_BYTE&&(oe=s.R8)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(oe=s.R8UI),te===s.UNSIGNED_SHORT&&(oe=s.R16UI),te===s.UNSIGNED_INT&&(oe=s.R32UI),te===s.BYTE&&(oe=s.R8I),te===s.SHORT&&(oe=s.R16I),te===s.INT&&(oe=s.R32I)),T===s.RG&&(te===s.FLOAT&&(oe=s.RG32F),te===s.HALF_FLOAT&&(oe=s.RG16F),te===s.UNSIGNED_BYTE&&(oe=s.RG8)),T===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(oe=s.RG8UI),te===s.UNSIGNED_SHORT&&(oe=s.RG16UI),te===s.UNSIGNED_INT&&(oe=s.RG32UI),te===s.BYTE&&(oe=s.RG8I),te===s.SHORT&&(oe=s.RG16I),te===s.INT&&(oe=s.RG32I)),T===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),te===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),te===s.UNSIGNED_INT&&(oe=s.RGB32UI),te===s.BYTE&&(oe=s.RGB8I),te===s.SHORT&&(oe=s.RGB16I),te===s.INT&&(oe=s.RGB32I)),T===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),te===s.UNSIGNED_INT&&(oe=s.RGBA32UI),te===s.BYTE&&(oe=s.RGBA8I),te===s.SHORT&&(oe=s.RGBA16I),te===s.INT&&(oe=s.RGBA32I)),T===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),T===s.RGBA){const Ie=ve?jc:Rt.getTransfer(fe);te===s.FLOAT&&(oe=s.RGBA32F),te===s.HALF_FLOAT&&(oe=s.RGBA16F),te===s.UNSIGNED_BYTE&&(oe=Ie===Ft?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function D(O,T){let te;return O?T===null||T===br||T===Wo?te=s.DEPTH24_STENCIL8:T===bi?te=s.DEPTH32F_STENCIL8:T===Xo&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===br||T===Wo?te=s.DEPTH_COMPONENT24:T===bi?te=s.DEPTH_COMPONENT32F:T===Xo&&(te=s.DEPTH_COMPONENT16),te}function B(O,T){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==ti&&O.minFilter!==Oi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function H(O){const T=O.target;T.removeEventListener("dispose",H),Y(T),T.isVideoTexture&&g.delete(T)}function k(O){const T=O.target;T.removeEventListener("dispose",k),C(T)}function Y(O){const T=a.get(O);if(T.__webglInit===void 0)return;const te=O.source,fe=v.get(te);if(fe){const ve=fe[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&N(O),Object.keys(fe).length===0&&v.delete(te)}a.remove(O)}function N(O){const T=a.get(O);s.deleteTexture(T.__webglTexture);const te=O.source,fe=v.get(te);delete fe[T.__cacheKey],f.memory.textures--}function C(O){const T=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let ve=0;ve<T.__webglFramebuffer[fe].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[fe][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[fe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=O.textures;for(let fe=0,ve=te.length;fe<ve;fe++){const oe=a.get(te[fe]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),f.memory.textures--),a.remove(te[fe])}a.remove(O)}let F=0;function ue(){F=0}function le(){const O=F;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),F+=1,O}function ce(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function me(O,T){const te=a.get(O);if(O.isVideoTexture&&st(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&te.__version!==O.version){const fe=O.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(te,O,T);return}}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function P(O,T){const te=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){de(te,O,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function $(O,T){const te=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){de(te,O,T);return}n.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function q(O,T){const te=a.get(O);if(O.version>0&&te.__version!==O.version){Me(te,O,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const ye={[rd]:s.REPEAT,[Sr]:s.CLAMP_TO_EDGE,[sd]:s.MIRRORED_REPEAT},U={[ti]:s.NEAREST,[BS]:s.NEAREST_MIPMAP_NEAREST,[lc]:s.NEAREST_MIPMAP_LINEAR,[Oi]:s.LINEAR,[hh]:s.LINEAR_MIPMAP_NEAREST,[Mr]:s.LINEAR_MIPMAP_LINEAR},ee={[GS]:s.NEVER,[YS]:s.ALWAYS,[kS]:s.LESS,[pv]:s.LEQUAL,[jS]:s.EQUAL,[qS]:s.GEQUAL,[XS]:s.GREATER,[WS]:s.NOTEQUAL};function xe(O,T){if(T.type===bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Oi||T.magFilter===hh||T.magFilter===lc||T.magFilter===Mr||T.minFilter===Oi||T.minFilter===hh||T.minFilter===lc||T.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,ye[T.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,ye[T.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,ye[T.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,U[T.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ti||T.minFilter!==lc&&T.minFilter!==Mr||T.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Se(O,T){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",H));const fe=T.source;let ve=v.get(fe);ve===void 0&&(ve={},v.set(fe,ve));const oe=ce(T);if(oe!==O.__cacheKey){ve[oe]===void 0&&(ve[oe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,te=!0),ve[oe].usedTimes++;const Ie=ve[O.__cacheKey];Ie!==void 0&&(ve[O.__cacheKey].usedTimes--,Ie.usedTimes===0&&N(T)),O.__cacheKey=oe,O.__webglTexture=ve[oe].texture}return te}function Ce(O,T,te){return Math.floor(Math.floor(O/te)/T)}function ie(O,T,te,fe){const oe=O.updateRanges;if(oe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,te,fe,T.data);else{oe.sort((be,Ue)=>be.start-Ue.start);let Ie=0;for(let be=1;be<oe.length;be++){const Ue=oe[Ie],Ze=oe[be],ke=Ue.start+Ue.count,De=Ce(Ze.start,T.width,4),rt=Ce(Ue.start,T.width,4);Ze.start<=ke+1&&De===rt&&Ce(Ze.start+Ze.count-1,T.width,4)===De?Ue.count=Math.max(Ue.count,Ze.start+Ze.count-Ue.start):(++Ie,oe[Ie]=Ze)}oe.length=Ie+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),je=s.getParameter(s.UNPACK_SKIP_PIXELS),We=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let be=0,Ue=oe.length;be<Ue;be++){const Ze=oe[be],ke=Math.floor(Ze.start/4),De=Math.ceil(Ze.count/4),rt=ke%T.width,j=Math.floor(ke/T.width),Ae=De,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,j),n.texSubImage2D(s.TEXTURE_2D,0,rt,j,Ae,we,te,fe,T.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,je),s.pixelStorei(s.UNPACK_SKIP_ROWS,We)}}function de(O,T,te){let fe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=s.TEXTURE_3D);const ve=Se(O,T),oe=T.source;n.bindTexture(fe,O.__webglTexture,s.TEXTURE0+te);const Ie=a.get(oe);if(oe.version!==Ie.__version||ve===!0){n.activeTexture(s.TEXTURE0+te);const Re=Rt.getPrimaries(Rt.workingColorSpace),je=T.colorSpace===ka?null:Rt.getPrimaries(T.colorSpace),We=T.colorSpace===ka||Re===je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let be=R(T.image,!1,l.maxTextureSize);be=Kt(T,be);const Ue=c.convert(T.format,T.colorSpace),Ze=c.convert(T.type);let ke=L(T.internalFormat,Ue,Ze,T.colorSpace,T.isVideoTexture);xe(fe,T);let De;const rt=T.mipmaps,j=T.isVideoTexture!==!0,Ae=Ie.__version===void 0||ve===!0,we=oe.dataReady,Be=B(T,be);if(T.isDepthTexture)ke=D(T.format===Yo,T.type),Ae&&(j?n.texStorage2D(s.TEXTURE_2D,1,ke,be.width,be.height):n.texImage2D(s.TEXTURE_2D,0,ke,be.width,be.height,0,Ue,Ze,null));else if(T.isDataTexture)if(rt.length>0){j&&Ae&&n.texStorage2D(s.TEXTURE_2D,Be,ke,rt[0].width,rt[0].height);for(let Ee=0,_e=rt.length;Ee<_e;Ee++)De=rt[Ee],j?we&&n.texSubImage2D(s.TEXTURE_2D,Ee,0,0,De.width,De.height,Ue,Ze,De.data):n.texImage2D(s.TEXTURE_2D,Ee,ke,De.width,De.height,0,Ue,Ze,De.data);T.generateMipmaps=!1}else j?(Ae&&n.texStorage2D(s.TEXTURE_2D,Be,ke,be.width,be.height),we&&ie(T,be,Ue,Ze)):n.texImage2D(s.TEXTURE_2D,0,ke,be.width,be.height,0,Ue,Ze,be.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){j&&Ae&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Be,ke,rt[0].width,rt[0].height,be.depth);for(let Ee=0,_e=rt.length;Ee<_e;Ee++)if(De=rt[Ee],T.format!==ui)if(Ue!==null)if(j){if(we)if(T.layerUpdates.size>0){const Ge=D_(De.width,De.height,T.format,T.type);for(const at of T.layerUpdates){const Nt=De.data.subarray(at*Ge/De.data.BYTES_PER_ELEMENT,(at+1)*Ge/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,at,De.width,De.height,1,Ue,Nt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,De.width,De.height,be.depth,Ue,De.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,ke,De.width,De.height,be.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?we&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,De.width,De.height,be.depth,Ue,Ze,De.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Ee,ke,De.width,De.height,be.depth,0,Ue,Ze,De.data)}else{j&&Ae&&n.texStorage2D(s.TEXTURE_2D,Be,ke,rt[0].width,rt[0].height);for(let Ee=0,_e=rt.length;Ee<_e;Ee++)De=rt[Ee],T.format!==ui?Ue!==null?j?we&&n.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,De.width,De.height,Ue,De.data):n.compressedTexImage2D(s.TEXTURE_2D,Ee,ke,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?we&&n.texSubImage2D(s.TEXTURE_2D,Ee,0,0,De.width,De.height,Ue,Ze,De.data):n.texImage2D(s.TEXTURE_2D,Ee,ke,De.width,De.height,0,Ue,Ze,De.data)}else if(T.isDataArrayTexture)if(j){if(Ae&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Be,ke,be.width,be.height,be.depth),we)if(T.layerUpdates.size>0){const Ee=D_(be.width,be.height,T.format,T.type);for(const _e of T.layerUpdates){const Ge=be.data.subarray(_e*Ee/be.data.BYTES_PER_ELEMENT,(_e+1)*Ee/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,be.width,be.height,1,Ue,Ze,Ge)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ue,Ze,be.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,be.width,be.height,be.depth,0,Ue,Ze,be.data);else if(T.isData3DTexture)j?(Ae&&n.texStorage3D(s.TEXTURE_3D,Be,ke,be.width,be.height,be.depth),we&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ue,Ze,be.data)):n.texImage3D(s.TEXTURE_3D,0,ke,be.width,be.height,be.depth,0,Ue,Ze,be.data);else if(T.isFramebufferTexture){if(Ae)if(j)n.texStorage2D(s.TEXTURE_2D,Be,ke,be.width,be.height);else{let Ee=be.width,_e=be.height;for(let Ge=0;Ge<Be;Ge++)n.texImage2D(s.TEXTURE_2D,Ge,ke,Ee,_e,0,Ue,Ze,null),Ee>>=1,_e>>=1}}else if(rt.length>0){if(j&&Ae){const Ee=Qt(rt[0]);n.texStorage2D(s.TEXTURE_2D,Be,ke,Ee.width,Ee.height)}for(let Ee=0,_e=rt.length;Ee<_e;Ee++)De=rt[Ee],j?we&&n.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Ue,Ze,De):n.texImage2D(s.TEXTURE_2D,Ee,ke,Ue,Ze,De);T.generateMipmaps=!1}else if(j){if(Ae){const Ee=Qt(be);n.texStorage2D(s.TEXTURE_2D,Be,ke,Ee.width,Ee.height)}we&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,Ze,be)}else n.texImage2D(s.TEXTURE_2D,0,ke,Ue,Ze,be);M(T)&&x(fe),Ie.__version=oe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Me(O,T,te){if(T.image.length!==6)return;const fe=Se(O,T),ve=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+te);const oe=a.get(ve);if(ve.version!==oe.__version||fe===!0){n.activeTexture(s.TEXTURE0+te);const Ie=Rt.getPrimaries(Rt.workingColorSpace),Re=T.colorSpace===ka?null:Rt.getPrimaries(T.colorSpace),je=T.colorSpace===ka||Ie===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const We=T.isCompressedTexture||T.image[0].isCompressedTexture,be=T.image[0]&&T.image[0].isDataTexture,Ue=[];for(let _e=0;_e<6;_e++)!We&&!be?Ue[_e]=R(T.image[_e],!0,l.maxCubemapSize):Ue[_e]=be?T.image[_e].image:T.image[_e],Ue[_e]=Kt(T,Ue[_e]);const Ze=Ue[0],ke=c.convert(T.format,T.colorSpace),De=c.convert(T.type),rt=L(T.internalFormat,ke,De,T.colorSpace),j=T.isVideoTexture!==!0,Ae=oe.__version===void 0||fe===!0,we=ve.dataReady;let Be=B(T,Ze);xe(s.TEXTURE_CUBE_MAP,T);let Ee;if(We){j&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Be,rt,Ze.width,Ze.height);for(let _e=0;_e<6;_e++){Ee=Ue[_e].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const at=Ee[Ge];T.format!==ui?ke!==null?j?we&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,0,0,at.width,at.height,ke,at.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,rt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,0,0,at.width,at.height,ke,De,at.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,rt,at.width,at.height,0,ke,De,at.data)}}}else{if(Ee=T.mipmaps,j&&Ae){Ee.length>0&&Be++;const _e=Qt(Ue[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Be,rt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(be){j?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ue[_e].width,Ue[_e].height,ke,De,Ue[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,Ue[_e].width,Ue[_e].height,0,ke,De,Ue[_e].data);for(let Ge=0;Ge<Ee.length;Ge++){const Nt=Ee[Ge].image[_e].image;j?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,0,0,Nt.width,Nt.height,ke,De,Nt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,rt,Nt.width,Nt.height,0,ke,De,Nt.data)}}else{j?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ke,De,Ue[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,ke,De,Ue[_e]);for(let Ge=0;Ge<Ee.length;Ge++){const at=Ee[Ge];j?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,0,0,ke,De,at.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,rt,ke,De,at.image[_e])}}}M(T)&&x(s.TEXTURE_CUBE_MAP),oe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Pe(O,T,te,fe,ve,oe){const Ie=c.convert(te.format,te.colorSpace),Re=c.convert(te.type),je=L(te.internalFormat,Ie,Re,te.colorSpace),We=a.get(T),be=a.get(te);if(be.__renderTarget=T,!We.__hasExternalTextures){const Ue=Math.max(1,T.width>>oe),Ze=Math.max(1,T.height>>oe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,oe,je,Ue,Ze,T.depth,0,Ie,Re,null):n.texImage2D(ve,oe,je,Ue,Ze,0,Ie,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,O),He(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ve,be.__webglTexture,0,jt(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ve,be.__webglTexture,oe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(O,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,O),T.depthBuffer){const fe=T.depthTexture,ve=fe&&fe.isDepthTexture?fe.type:null,oe=D(T.stencilBuffer,ve),Ie=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=jt(T);He(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,oe,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,oe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,O)}else{const fe=T.textures;for(let ve=0;ve<fe.length;ve++){const oe=fe[ve],Ie=c.convert(oe.format,oe.colorSpace),Re=c.convert(oe.type),je=L(oe.internalFormat,Ie,Re,oe.colorSpace),We=jt(T);te&&He(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,je,T.width,T.height):He(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,je,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,je,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function it(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=a.get(T.depthTexture);fe.__renderTarget=T,(!fe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const ve=fe.__webglTexture,oe=jt(T);if(T.depthTexture.format===qo)He(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Yo)He(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function kt(O){const T=a.get(O),te=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const fe=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",ve)};fe.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=fe}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const fe=O.texture.mipmaps;fe&&fe.length>0?it(T.__webglFramebuffer[0],O):it(T.__webglFramebuffer,O)}else if(te){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=s.createRenderbuffer(),qe(T.__webglDepthbuffer[fe],O,!1);else{const ve=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,oe)}}else{const fe=O.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),qe(T.__webglDepthbuffer,O,!1);else{const ve=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,oe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(O,T,te){const fe=a.get(O);T!==void 0&&Pe(fe.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&kt(O)}function V(O){const T=O.texture,te=a.get(O),fe=a.get(T);O.addEventListener("dispose",k);const ve=O.textures,oe=O.isWebGLCubeRenderTarget===!0,Ie=ve.length>1;if(Ie||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=T.version,f.memory.textures++),oe){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let je=0;je<T.mipmaps.length;je++)te.__webglFramebuffer[Re][je]=s.createFramebuffer()}else te.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)te.__webglFramebuffer[Re]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let Re=0,je=ve.length;Re<je;Re++){const We=a.get(ve[Re]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&He(O)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<ve.length;Re++){const je=ve[Re];te.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const We=c.convert(je.format,je.colorSpace),be=c.convert(je.type),Ue=L(je.internalFormat,We,be,je.colorSpace,O.isXRRenderTarget===!0),Ze=jt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Ue,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(te.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),xe(s.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)Pe(te.__webglFramebuffer[Re][je],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,je);else Pe(te.__webglFramebuffer[Re],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);M(T)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let Re=0,je=ve.length;Re<je;Re++){const We=ve[Re],be=a.get(We);let Ue=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ue=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ue,be.__webglTexture),xe(Ue,We),Pe(te.__webglFramebuffer,O,We,s.COLOR_ATTACHMENT0+Re,Ue,0),M(We)&&x(Ue)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,fe.__webglTexture),xe(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)Pe(te.__webglFramebuffer[je],O,T,s.COLOR_ATTACHMENT0,Re,je);else Pe(te.__webglFramebuffer,O,T,s.COLOR_ATTACHMENT0,Re,0);M(T)&&x(Re),n.unbindTexture()}O.depthBuffer&&kt(O)}function Dt(O){const T=O.textures;for(let te=0,fe=T.length;te<fe;te++){const ve=T[te];if(M(ve)){const oe=z(O),Ie=a.get(ve).__webglTexture;n.bindTexture(oe,Ie),x(oe),n.unbindTexture()}}}const Qe=[],Mt=[];function Fe(O){if(O.samples>0){if(He(O)===!1){const T=O.textures,te=O.width,fe=O.height;let ve=s.COLOR_BUFFER_BIT;const oe=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=a.get(O),Re=T.length>1;if(Re)for(let We=0;We<T.length;We++)n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const je=O.texture.mipmaps;je&&je.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let We=0;We<T.length;We++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[We]);const be=a.get(T[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,te,fe,0,0,te,fe,ve,s.NEAREST),m===!0&&(Qe.length=0,Mt.length=0,Qe.push(s.COLOR_ATTACHMENT0+We),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Qe.push(oe),Mt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let We=0;We<T.length;We++){n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[We]);const be=a.get(T[We]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,be,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function jt(O){return Math.min(l.maxSamples,O.samples)}function He(O){const T=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function st(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Kt(O,T){const te=O.colorSpace,fe=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==Ds&&te!==ka&&(Rt.getTransfer(te)===Ft?(fe!==ui||ve!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=ue,this.setTexture2D=me,this.setTexture2DArray=P,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=pt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=He}function YA(s,e){function n(a,l=ka){let c;const f=Rt.getTransfer(l);if(a===Ii)return s.UNSIGNED_BYTE;if(a===Hd)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Vd)return s.UNSIGNED_SHORT_5_5_5_1;if(a===lv)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===sv)return s.BYTE;if(a===ov)return s.SHORT;if(a===Xo)return s.UNSIGNED_SHORT;if(a===Fd)return s.INT;if(a===br)return s.UNSIGNED_INT;if(a===bi)return s.FLOAT;if(a===Ko)return s.HALF_FLOAT;if(a===cv)return s.ALPHA;if(a===uv)return s.RGB;if(a===ui)return s.RGBA;if(a===qo)return s.DEPTH_COMPONENT;if(a===Yo)return s.DEPTH_STENCIL;if(a===Gd)return s.RED;if(a===kd)return s.RED_INTEGER;if(a===fv)return s.RG;if(a===jd)return s.RG_INTEGER;if(a===Xd)return s.RGBA_INTEGER;if(a===Bc||a===zc||a===Fc||a===Hc)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Hc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===od||a===ld||a===cd||a===ud)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===od)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===fd||a===hd||a===dd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===fd||a===hd)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===dd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===pd||a===md||a===gd||a===_d||a===vd||a===xd||a===yd||a===Sd||a===Md||a===bd||a===Ed||a===Td||a===Ad||a===Rd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===pd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===md)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===gd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===_d)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===vd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===xd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===yd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Sd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Md)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===bd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ed)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Td)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ad)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Rd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Vc||a===wd||a===Cd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Vc)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Cd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===hv||a===Dd||a===Nd||a===Ud)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Vc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Dd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ud)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Wo?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}class Hv extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Hv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new qa({vertexShader:ZA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new $c(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JA extends Ls{constructor(e,n){super();const a=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,y=null,b=null;const R=new QA,M={},x=n.getContextAttributes();let z=null,L=null;const D=[],B=[],H=new Et;let k=null;const Y=new zn;Y.viewport=new Ct;const N=new zn;N.viewport=new Ct;const C=[Y,N],F=new ub;let ue=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=D[ie];return de===void 0&&(de=new Oh,D[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=D[ie];return de===void 0&&(de=new Oh,D[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=D[ie];return de===void 0&&(de=new Oh,D[ie]=de),de.getHandSpace()};function ce(ie){const de=B.indexOf(ie.inputSource);if(de===-1)return;const Me=D[de];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,p||f),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function me(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",me),l.removeEventListener("inputsourceschange",P);for(let ie=0;ie<D.length;ie++){const de=B[ie];de!==null&&(B[ie]=null,D[ie].disconnect(de))}ue=null,le=null,R.reset();for(const ie in M)delete M[ie];e.setRenderTarget(z),y=null,v=null,_=null,l=null,L=null,Ce.stop(),a.isPresenting=!1,e.setPixelRatio(k),e.setSize(H.width,H.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",me),l.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,n)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Pe=null,qe=null;x.depth&&(qe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=x.stencil?Yo:qo,Pe=x.stencil?Wo:br);const it={colorFormat:n.RGBA8,depthFormat:qe,scaleFactor:c};v=_.createProjectionLayer(it),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Er(v.textureWidth,v.textureHeight,{format:ui,type:Ii,depthTexture:new Dv(v.textureWidth,v.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Me),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Er(y.framebufferWidth,y.framebufferHeight,{format:ui,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ce.setContext(l),Ce.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function P(ie){for(let de=0;de<ie.removed.length;de++){const Me=ie.removed[de],Pe=B.indexOf(Me);Pe>=0&&(B[Pe]=null,D[Pe].disconnect(Me))}for(let de=0;de<ie.added.length;de++){const Me=ie.added[de];let Pe=B.indexOf(Me);if(Pe===-1){for(let it=0;it<D.length;it++)if(it>=B.length){B.push(Me),Pe=it;break}else if(B[it]===null){B[it]=Me,Pe=it;break}if(Pe===-1)break}const qe=D[Pe];qe&&qe.connect(Me)}}const $=new K,q=new K;function ye(ie,de,Me){$.setFromMatrixPosition(de.matrixWorld),q.setFromMatrixPosition(Me.matrixWorld);const Pe=$.distanceTo(q),qe=de.projectionMatrix.elements,it=Me.projectionMatrix.elements,kt=qe[14]/(qe[10]-1),pt=qe[14]/(qe[10]+1),V=(qe[9]+1)/qe[5],Dt=(qe[9]-1)/qe[5],Qe=(qe[8]-1)/qe[0],Mt=(it[8]+1)/it[0],Fe=kt*Qe,jt=kt*Mt,He=Pe/(-Qe+Mt),st=He*-Qe;if(de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(st),ie.translateZ(He),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),qe[10]===-1)ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Kt=kt+He,Qt=pt+He,O=Fe-st,T=jt+(Pe-st),te=V*pt/Qt*Kt,fe=Dt*pt/Qt*Kt;ie.projectionMatrix.makePerspective(O,T,te,fe,Kt,Qt),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function U(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let de=ie.near,Me=ie.far;R.texture!==null&&(R.depthNear>0&&(de=R.depthNear),R.depthFar>0&&(Me=R.depthFar)),F.near=N.near=Y.near=de,F.far=N.far=Y.far=Me,(ue!==F.near||le!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),ue=F.near,le=F.far),F.layers.mask=ie.layers.mask|6,Y.layers.mask=F.layers.mask&3,N.layers.mask=F.layers.mask&5;const Pe=ie.parent,qe=F.cameras;U(F,Pe);for(let it=0;it<qe.length;it++)U(qe[it],Pe);qe.length===2?ye(F,Y,N):F.projectionMatrix.copy(Y.projectionMatrix),ee(ie,F,Pe)};function ee(ie,de,Me){Me===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ns*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(ie){m=ie,v!==null&&(v.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(F)},this.getCameraTexture=function(ie){return M[ie]};let xe=null;function Se(ie,de){if(g=de.getViewerPose(p||f),b=de,g!==null){const Me=g.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Pe=!1;Me.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let pt=0;pt<Me.length;pt++){const V=Me[pt];let Dt=null;if(y!==null)Dt=y.getViewport(V);else{const Mt=_.getViewSubImage(v,V);Dt=Mt.viewport,pt===0&&(e.setRenderTargetTextures(L,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(L))}let Qe=C[pt];Qe===void 0&&(Qe=new zn,Qe.layers.enable(pt),Qe.viewport=new Ct,C[pt]=Qe),Qe.matrix.fromArray(V.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(V.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),pt===0&&(F.matrix.copy(Qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(Qe)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const pt=_.getDepthInformation(Me[0]);pt&&pt.isValid&&pt.texture&&R.init(pt,l.renderState)}if(qe&&qe.includes("camera-access")&&(e.state.unbindTexture(),_))for(let pt=0;pt<Me.length;pt++){const V=Me[pt].camera;if(V){let Dt=M[V];Dt||(Dt=new Hv,M[V]=Dt);const Qe=_.getCameraImage(V);Dt.sourceTexture=Qe}}}for(let Me=0;Me<D.length;Me++){const Pe=B[Me],qe=D[Me];Pe!==null&&qe!==void 0&&qe.update(Pe,de,p||f)}xe&&xe(ie,de),de.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:de}),b=null}const Ce=new Pv;Ce.setAnimationLoop(Se),this.setAnimationLoop=function(ie){xe=ie},this.dispose=function(){}}}const gr=new Bi,$A=new yt;function eR(s,e){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,Mv(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,z,L,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,D)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),R(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,z,L):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Xn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Xn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const z=e.get(x),L=z.envMap,D=z.envMapRotation;L&&(M.envMap.value=L,gr.copy(D),gr.x*=-1,gr.y*=-1,gr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),M.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(gr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,z,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*z,M.scale.value=L*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,z){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const z=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function tR(s,e,n,a){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,L){const D=L.program;a.uniformBlockBinding(z,D)}function p(z,L){let D=l[z.id];D===void 0&&(b(z),D=g(z),l[z.id]=D,z.addEventListener("dispose",M));const B=L.program;a.updateUBOMapping(z,B);const H=e.render.frame;c[z.id]!==H&&(v(z),c[z.id]=H)}function g(z){const L=_();z.__bindingPointIndex=L;const D=s.createBuffer(),B=z.__size,H=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,B,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function _(){for(let z=0;z<h;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(z){const L=l[z.id],D=z.uniforms,B=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let H=0,k=D.length;H<k;H++){const Y=Array.isArray(D[H])?D[H]:[D[H]];for(let N=0,C=Y.length;N<C;N++){const F=Y[N];if(y(F,H,N,B)===!0){const ue=F.__offset,le=Array.isArray(F.value)?F.value:[F.value];let ce=0;for(let me=0;me<le.length;me++){const P=le[me],$=R(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,ue+ce,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,ce),ce+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(z,L,D,B){const H=z.value,k=L+"_"+D;if(B[k]===void 0)return typeof H=="number"||typeof H=="boolean"?B[k]=H:B[k]=H.clone(),!0;{const Y=B[k];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return B[k]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function b(z){const L=z.uniforms;let D=0;const B=16;for(let k=0,Y=L.length;k<Y;k++){const N=Array.isArray(L[k])?L[k]:[L[k]];for(let C=0,F=N.length;C<F;C++){const ue=N[C],le=Array.isArray(ue.value)?ue.value:[ue.value];for(let ce=0,me=le.length;ce<me;ce++){const P=le[ce],$=R(P),q=D%B,ye=q%$.boundary,U=q+ye;D+=ye,U!==0&&B-U<$.storage&&(D+=B-U),ue.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=D,D+=$.storage}}}const H=D%B;return H>0&&(D+=B-H),z.__size=D,z.__cache={},this}function R(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),L}function M(z){const L=z.target;L.removeEventListener("dispose",M);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const z in l)s.deleteBuffer(l[z]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}class Vv{constructor(e={}){const{canvas:n=fM(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=f;const b=new Uint32Array(4),R=new Int32Array(4);let M=null,x=null;const z=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1;this._outputColorSpace=jn;let H=0,k=0,Y=null,N=-1,C=null;const F=new Ct,ue=new Ct;let le=null;const ce=new xt(0);let me=0,P=n.width,$=n.height,q=1,ye=null,U=null;const ee=new Ct(0,0,P,$),xe=new Ct(0,0,P,$);let Se=!1;const Ce=new Yd;let ie=!1,de=!1;const Me=new yt,Pe=new K,qe=new Ct,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function pt(){return Y===null?q:1}let V=a;function Dt(w,X){return n.getContext(w,X)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zd}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const X="webgl2";if(V=Dt(X,w),V===null)throw Dt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Qe,Mt,Fe,jt,He,st,Kt,Qt,O,T,te,fe,ve,oe,Ie,Re,je,We,be,Ue,Ze,ke,De,rt;function j(){Qe=new h1(V),Qe.init(),ke=new YA(V,Qe),Mt=new r1(V,Qe,e,ke),Fe=new WA(V,Qe),Mt.reversedDepthBuffer&&v&&Fe.buffers.depth.setReversed(!0),jt=new m1(V),He=new LA,st=new qA(V,Qe,Fe,He,Mt,ke,jt),Kt=new o1(D),Qt=new f1(D),O=new Sb(V),De=new i1(V,O),T=new d1(V,O,jt,De),te=new _1(V,T,O,jt),be=new g1(V,Mt,st),Re=new s1(He),fe=new UA(D,Kt,Qt,Qe,Mt,De,Re),ve=new eR(D,He),oe=new PA,Ie=new VA(Qe),We=new n1(D,Kt,Qt,Fe,te,y,m),je=new jA(D,te,Mt),rt=new tR(V,jt,Mt,Fe),Ue=new a1(V,Qe,jt),Ze=new p1(V,Qe,jt),jt.programs=fe.programs,D.capabilities=Mt,D.extensions=Qe,D.properties=He,D.renderLists=oe,D.shadowMap=je,D.state=Fe,D.info=jt}j();const Ae=new JA(D,V);this.xr=Ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=Qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(P,$,!1))},this.getSize=function(w){return w.set(P,$)},this.setSize=function(w,X,re=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,$=X,n.width=Math.floor(w*q),n.height=Math.floor(X*q),re===!0&&(n.style.width=w+"px",n.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(P*q,$*q).floor()},this.setDrawingBufferSize=function(w,X,re){P=w,$=X,q=re,n.width=Math.floor(w*re),n.height=Math.floor(X*re),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,X,re,se){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,X,re,se),Fe.viewport(F.copy(ee).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,X,re,se){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,X,re,se),Fe.scissor(ue.copy(xe).multiplyScalar(q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){Fe.setScissorTest(Se=w)},this.setOpaqueSort=function(w){ye=w},this.setTransparentSort=function(w){U=w},this.getClearColor=function(w){return w.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,re=!0){let se=0;if(w){let Z=!1;if(Y!==null){const Te=Y.texture.format;Z=Te===Xd||Te===jd||Te===kd}if(Z){const Te=Y.texture.type,Ne=Te===Ii||Te===br||Te===Xo||Te===Wo||Te===Hd||Te===Vd,ze=We.getClearColor(),Le=We.getClearAlpha(),Je=ze.r,et=ze.g,Xe=ze.b;Ne?(b[0]=Je,b[1]=et,b[2]=Xe,b[3]=Le,V.clearBufferuiv(V.COLOR,0,b)):(R[0]=Je,R[1]=et,R[2]=Xe,R[3]=Le,V.clearBufferiv(V.COLOR,0,R))}else se|=V.COLOR_BUFFER_BIT}X&&(se|=V.DEPTH_BUFFER_BIT),re&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),We.dispose(),oe.dispose(),Ie.dispose(),He.dispose(),Kt.dispose(),Qt.dispose(),te.dispose(),De.dispose(),rt.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",fn),Ae.removeEventListener("sessionend",hn),$t.stop()};function we(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const w=jt.autoReset,X=je.enabled,re=je.autoUpdate,se=je.needsUpdate,Z=je.type;j(),jt.autoReset=w,je.enabled=X,je.autoUpdate=re,je.needsUpdate=se,je.type=Z}function Ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _e(w){const X=w.target;X.removeEventListener("dispose",_e),Ge(X)}function Ge(w){at(w),He.remove(w)}function at(w){const X=He.get(w).programs;X!==void 0&&(X.forEach(function(re){fe.releaseProgram(re)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,re,se,Z,Te){X===null&&(X=it);const Ne=Z.isMesh&&Z.matrixWorld.determinant()<0,ze=da(w,X,re,se,Z);Fe.setMaterial(se,Ne);let Le=re.index,Je=1;if(se.wireframe===!0){if(Le=T.getWireframeAttribute(re),Le===void 0)return;Je=2}const et=re.drawRange,Xe=re.attributes.position;let ct=et.start*Je,Tt=(et.start+et.count)*Je;Te!==null&&(ct=Math.max(ct,Te.start*Je),Tt=Math.min(Tt,(Te.start+Te.count)*Je)),Le!==null?(ct=Math.max(ct,0),Tt=Math.min(Tt,Le.count)):Xe!=null&&(ct=Math.max(ct,0),Tt=Math.min(Tt,Xe.count));const qt=Tt-ct;if(qt<0||qt===1/0)return;De.setup(Z,se,ze,re,Le);let Pt,ut=Ue;if(Le!==null&&(Pt=O.get(Le),ut=Ze,ut.setIndex(Pt)),Z.isMesh)se.wireframe===!0?(Fe.setLineWidth(se.wireframeLinewidth*pt()),ut.setMode(V.LINES)):ut.setMode(V.TRIANGLES);else if(Z.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),Fe.setLineWidth(Ke*pt()),Z.isLineSegments?ut.setMode(V.LINES):Z.isLineLoop?ut.setMode(V.LINE_LOOP):ut.setMode(V.LINE_STRIP)}else Z.isPoints?ut.setMode(V.POINTS):Z.isSprite&&ut.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ut.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,Wt=Z._multiDrawCounts,mt=Z._multiDrawCount,An=Le?O.get(Le).bytesPerElement:1,pi=He.get(se).currentProgram.getUniforms();for(let Ln=0;Ln<mt;Ln++)pi.setValue(V,"_gl_DrawID",Ln),ut.render(Ke[Ln]/An,Wt[Ln])}else if(Z.isInstancedMesh)ut.renderInstances(ct,qt,Z.count);else if(re.isInstancedBufferGeometry){const Ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Wt=Math.min(re.instanceCount,Ke);ut.renderInstances(ct,qt,Wt)}else ut.render(ct,qt)};function Nt(w,X,re){w.transparent===!0&&w.side===oa&&w.forceSinglePass===!1?(w.side=Xn,w.needsUpdate=!0,Ri(w,X,re),w.side=Wa,w.needsUpdate=!0,Ri(w,X,re),w.side=oa):Ri(w,X,re)}this.compile=function(w,X,re=null){re===null&&(re=w),x=Ie.get(re),x.init(X),L.push(x),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),w!==re&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const se=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const ze=Te[Ne];Nt(ze,re,Z),se.add(ze)}else Nt(Te,re,Z),se.add(Te)}),x=L.pop(),se},this.compileAsync=function(w,X,re=null){const se=this.compile(w,X,re);return new Promise(Z=>{function Te(){if(se.forEach(function(Ne){He.get(Ne).currentProgram.isReady()&&se.delete(Ne)}),se.size===0){Z(w);return}setTimeout(Te,10)}Qe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let bt=null;function di(w){bt&&bt(w)}function fn(){$t.stop()}function hn(){$t.start()}const $t=new Pv;$t.setAnimationLoop(di),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(w){bt=w,Ae.setAnimationLoop(w),w===null?$t.stop():$t.start()},Ae.addEventListener("sessionstart",fn),Ae.addEventListener("sessionend",hn),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(X),X=Ae.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,X,Y),x=Ie.get(w,L.length),x.init(X),L.push(x),Me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ce.setFromProjectionMatrix(Me,Pi,X.reversedDepth),de=this.localClippingEnabled,ie=Re.init(this.clippingPlanes,de),M=oe.get(w,z.length),M.init(),z.push(M),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&Ai(Te,X,-1/0,D.sortObjects)}Ai(w,X,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(ye,U),kt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,kt&&We.addToRenderList(M,w),this.info.render.frame++,ie===!0&&Re.beginShadows();const re=x.state.shadowsArray;je.render(re,w,X),ie===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=M.opaque,Z=M.transmissive;if(x.setupLights(),X.isArrayCamera){const Te=X.cameras;if(Z.length>0)for(let Ne=0,ze=Te.length;Ne<ze;Ne++){const Le=Te[Ne];$o(se,Z,w,Le)}kt&&We.render(w);for(let Ne=0,ze=Te.length;Ne<ze;Ne++){const Le=Te[Ne];Ar(M,w,Le,Le.viewport)}}else Z.length>0&&$o(se,Z,w,X),kt&&We.render(w),Ar(M,w,X);Y!==null&&k===0&&(st.updateMultisampleRenderTarget(Y),st.updateRenderTargetMipmap(Y)),w.isScene===!0&&w.onAfterRender(D,w,X),De.resetDefaultState(),N=-1,C=null,L.pop(),L.length>0?(x=L[L.length-1],ie===!0&&Re.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Ai(w,X,re,se){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ce.intersectsSprite(w)){se&&qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);const Ne=te.update(w),ze=w.material;ze.visible&&M.push(w,Ne,ze,re,qe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ce.intersectsObject(w))){const Ne=te.update(w),ze=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qe.copy(w.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),qe.copy(Ne.boundingSphere.center)),qe.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(ze)){const Le=Ne.groups;for(let Je=0,et=Le.length;Je<et;Je++){const Xe=Le[Je],ct=ze[Xe.materialIndex];ct&&ct.visible&&M.push(w,Ne,ct,re,qe.z,Xe)}}else ze.visible&&M.push(w,Ne,ze,re,qe.z,null)}}const Te=w.children;for(let Ne=0,ze=Te.length;Ne<ze;Ne++)Ai(Te[Ne],X,re,se)}function Ar(w,X,re,se){const Z=w.opaque,Te=w.transmissive,Ne=w.transparent;x.setupLightsView(re),ie===!0&&Re.setGlobalState(D.clippingPlanes,re),se&&Fe.viewport(F.copy(se)),Z.length>0&&Rr(Z,X,re),Te.length>0&&Rr(Te,X,re),Ne.length>0&&Rr(Ne,X,re),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function $o(w,X,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new Er(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Ko:Ii,minFilter:Mr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Te=x.state.transmissionRenderTarget[se.id],Ne=se.viewport||F;Te.setSize(Ne.z*D.transmissionResolutionScale,Ne.w*D.transmissionResolutionScale);const ze=D.getRenderTarget(),Le=D.getActiveCubeFace(),Je=D.getActiveMipmapLevel();D.setRenderTarget(Te),D.getClearColor(ce),me=D.getClearAlpha(),me<1&&D.setClearColor(16777215,.5),D.clear(),kt&&We.render(re);const et=D.toneMapping;D.toneMapping=Xa;const Xe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),ie===!0&&Re.setGlobalState(D.clippingPlanes,se),Rr(w,re,se),st.updateMultisampleRenderTarget(Te),st.updateRenderTargetMipmap(Te),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Tt=0,qt=X.length;Tt<qt;Tt++){const Pt=X[Tt],ut=Pt.object,Ke=Pt.geometry,Wt=Pt.material,mt=Pt.group;if(Wt.side===oa&&ut.layers.test(se.layers)){const An=Wt.side;Wt.side=Xn,Wt.needsUpdate=!0,zs(ut,re,se,Ke,Wt,mt),Wt.side=An,Wt.needsUpdate=!0,ct=!0}}ct===!0&&(st.updateMultisampleRenderTarget(Te),st.updateRenderTargetMipmap(Te))}D.setRenderTarget(ze,Le,Je),D.setClearColor(ce,me),Xe!==void 0&&(se.viewport=Xe),D.toneMapping=et}function Rr(w,X,re){const se=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Te=w.length;Z<Te;Z++){const Ne=w[Z],ze=Ne.object,Le=Ne.geometry,Je=Ne.group;let et=Ne.material;et.allowOverride===!0&&se!==null&&(et=se),ze.layers.test(re.layers)&&zs(ze,X,re,Le,et,Je)}}function zs(w,X,re,se,Z,Te){w.onBeforeRender(D,X,re,se,Z,Te),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(D,X,re,se,w,Te),Z.transparent===!0&&Z.side===oa&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,D.renderBufferDirect(re,X,se,Z,w,Te),Z.side=Wa,Z.needsUpdate=!0,D.renderBufferDirect(re,X,se,Z,w,Te),Z.side=oa):D.renderBufferDirect(re,X,se,Z,w,Te),w.onAfterRender(D,X,re,se,Z,Te)}function Ri(w,X,re){X.isScene!==!0&&(X=it);const se=He.get(w),Z=x.state.lights,Te=x.state.shadowsArray,Ne=Z.state.version,ze=fe.getParameters(w,Z.state,Te,X,re),Le=fe.getProgramCacheKey(ze);let Je=se.programs;se.environment=w.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(w.isMeshStandardMaterial?Qt:Kt).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",_e),Je=new Map,se.programs=Je);let et=Je.get(Le);if(et!==void 0){if(se.currentProgram===et&&se.lightsStateVersion===Ne)return Fi(w,ze),et}else ze.uniforms=fe.getUniforms(w),w.onBeforeCompile(ze,D),et=fe.acquireProgram(ze,Le),Je.set(Le,et),se.uniforms=ze.uniforms;const Xe=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=Re.uniform),Fi(w,ze),se.needsLights=pa(w),se.lightsStateVersion=Ne,se.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.directionalShadowMap.value=Z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotShadowMap.value=Z.state.spotShadowMap,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMap.value=Z.state.pointShadowMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),se.currentProgram=et,se.uniformsList=null,et}function wr(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Gc.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Fi(w,X){const re=He.get(w);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function da(w,X,re,se,Z){X.isScene!==!0&&(X=it),st.resetTextureUnits();const Te=X.fog,Ne=se.isMeshStandardMaterial?X.environment:null,ze=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ds,Le=(se.isMeshStandardMaterial?Qt:Kt).get(se.envMap||Ne),Je=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Xe=!!re.morphAttributes.position,ct=!!re.morphAttributes.normal,Tt=!!re.morphAttributes.color;let qt=Xa;se.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(qt=D.toneMapping);const Pt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ut=Pt!==void 0?Pt.length:0,Ke=He.get(se),Wt=x.state.lights;if(ie===!0&&(de===!0||w!==C)){const en=w===C&&se.id===N;Re.setState(se,w,en)}let mt=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Wt.state.version||Ke.outputColorSpace!==ze||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Le||se.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Re.numPlanes||Ke.numIntersection!==Re.numIntersection)||Ke.vertexAlphas!==Je||Ke.vertexTangents!==et||Ke.morphTargets!==Xe||Ke.morphNormals!==ct||Ke.morphColors!==Tt||Ke.toneMapping!==qt||Ke.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Ke.__version=se.version);let An=Ke.currentProgram;mt===!0&&(An=Ri(se,X,Z));let pi=!1,Ln=!1,_n=!1;const Vt=An.getUniforms(),On=Ke.uniforms;if(Fe.useProgram(An.program)&&(pi=!0,Ln=!0,_n=!0),se.id!==N&&(N=se.id,Ln=!0),pi||C!==w){Fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Vt.setValue(V,"projectionMatrix",w.projectionMatrix),Vt.setValue(V,"viewMatrix",w.matrixWorldInverse);const Mn=Vt.map.cameraPosition;Mn!==void 0&&Mn.setValue(V,Pe.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&Vt.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Vt.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Ln=!0,_n=!0)}if(Z.isSkinnedMesh){Vt.setOptional(V,Z,"bindMatrix"),Vt.setOptional(V,Z,"bindMatrixInverse");const en=Z.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Vt.setValue(V,"boneTexture",en.boneTexture,st))}Z.isBatchedMesh&&(Vt.setOptional(V,Z,"batchingTexture"),Vt.setValue(V,"batchingTexture",Z._matricesTexture,st),Vt.setOptional(V,Z,"batchingIdTexture"),Vt.setValue(V,"batchingIdTexture",Z._indirectTexture,st),Vt.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Vt.setValue(V,"batchingColorTexture",Z._colorsTexture,st));const Rn=re.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&be.update(Z,re,An),(Ln||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Vt.setValue(V,"receiveShadow",Z.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(On.envMap.value=Le,On.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(On.envMapIntensity.value=X.environmentIntensity),Ln&&(Vt.setValue(V,"toneMappingExposure",D.toneMappingExposure),Ke.needsLights&&Ya(On,_n),Te&&se.fog===!0&&ve.refreshFogUniforms(On,Te),ve.refreshMaterialUniforms(On,se,q,$,x.state.transmissionRenderTarget[w.id]),Gc.upload(V,wr(Ke),On,st)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Gc.upload(V,wr(Ke),On,st),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Vt.setValue(V,"center",Z.center),Vt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Vt.setValue(V,"normalMatrix",Z.normalMatrix),Vt.setValue(V,"modelMatrix",Z.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const en=se.uniformsGroups;for(let Mn=0,Cr=en.length;Mn<Cr;Mn++){const Fn=en[Mn];rt.update(Fn,An),rt.bind(Fn,An)}}return An}function Ya(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function pa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,X,re){const se=He.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),He.get(w.texture).__webglTexture=X,He.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const re=He.get(w);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const on=V.createFramebuffer();this.setRenderTarget=function(w,X=0,re=0){Y=w,H=X,k=re;let se=!0,Z=null,Te=!1,Ne=!1;if(w){const Le=He.get(w);if(Le.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(V.FRAMEBUFFER,null),se=!1;else if(Le.__webglFramebuffer===void 0)st.setupRenderTarget(w);else if(Le.__hasExternalTextures)st.rebindTextures(w,He.get(w.texture).__webglTexture,He.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xe=w.depthTexture;if(Le.__boundDepthTexture!==Xe){if(Xe!==null&&He.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(w)}}const Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ne=!0);const et=He.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[X])?Z=et[X][re]:Z=et[X],Te=!0):w.samples>0&&st.useMultisampledRTT(w)===!1?Z=He.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?Z=et[re]:Z=et,F.copy(w.viewport),ue.copy(w.scissor),le=w.scissorTest}else F.copy(ee).multiplyScalar(q).floor(),ue.copy(xe).multiplyScalar(q).floor(),le=Se;if(re!==0&&(Z=on),Fe.bindFramebuffer(V.FRAMEBUFFER,Z)&&se&&Fe.drawBuffers(w,Z),Fe.viewport(F),Fe.scissor(ue),Fe.setScissorTest(le),Te){const Le=He.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,re)}else if(Ne){const Le=X;for(let Je=0;Je<w.textures.length;Je++){const et=He.get(w.textures[Je]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Je,et.__webglTexture,re,Le)}}else if(w!==null&&re!==0){const Le=He.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,re)}N=-1},this.readRenderTargetPixels=function(w,X,re,se,Z,Te,Ne,ze=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Le=Le[Ne]),Le){Fe.bindFramebuffer(V.FRAMEBUFFER,Le);try{const Je=w.textures[ze],et=Je.format,Xe=Je.type;if(!Mt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-se&&re>=0&&re<=w.height-Z&&(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ze),V.readPixels(X,re,se,Z,ke.convert(et),ke.convert(Xe),Te))}finally{const Je=Y!==null?He.get(Y).__webglFramebuffer:null;Fe.bindFramebuffer(V.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(w,X,re,se,Z,Te,Ne,ze=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Le=Le[Ne]),Le)if(X>=0&&X<=w.width-se&&re>=0&&re<=w.height-Z){Fe.bindFramebuffer(V.FRAMEBUFFER,Le);const Je=w.textures[ze],et=Je.format,Xe=Je.type;if(!Mt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ct),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ze),V.readPixels(X,re,se,Z,ke.convert(et),ke.convert(Xe),0);const Tt=Y!==null?He.get(Y).__webglFramebuffer:null;Fe.bindFramebuffer(V.FRAMEBUFFER,Tt);const qt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await hM(V,qt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ct),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.deleteBuffer(ct),V.deleteSync(qt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,re=0){const se=Math.pow(2,-re),Z=Math.floor(w.image.width*se),Te=Math.floor(w.image.height*se),Ne=X!==null?X.x:0,ze=X!==null?X.y:0;st.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ne,ze,Z,Te),Fe.unbindTexture()};const el=V.createFramebuffer(),tl=V.createFramebuffer();this.copyTextureToTexture=function(w,X,re=null,se=null,Z=0,Te=null){Te===null&&(Z!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let Ne,ze,Le,Je,et,Xe,ct,Tt,qt;const Pt=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(re!==null)Ne=re.max.x-re.min.x,ze=re.max.y-re.min.y,Le=re.isBox3?re.max.z-re.min.z:1,Je=re.min.x,et=re.min.y,Xe=re.isBox3?re.min.z:0;else{const Rn=Math.pow(2,-Z);Ne=Math.floor(Pt.width*Rn),ze=Math.floor(Pt.height*Rn),w.isDataArrayTexture?Le=Pt.depth:w.isData3DTexture?Le=Math.floor(Pt.depth*Rn):Le=1,Je=0,et=0,Xe=0}se!==null?(ct=se.x,Tt=se.y,qt=se.z):(ct=0,Tt=0,qt=0);const ut=ke.convert(X.format),Ke=ke.convert(X.type);let Wt;X.isData3DTexture?(st.setTexture3D(X,0),Wt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(st.setTexture2DArray(X,0),Wt=V.TEXTURE_2D_ARRAY):(st.setTexture2D(X,0),Wt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const mt=V.getParameter(V.UNPACK_ROW_LENGTH),An=V.getParameter(V.UNPACK_IMAGE_HEIGHT),pi=V.getParameter(V.UNPACK_SKIP_PIXELS),Ln=V.getParameter(V.UNPACK_SKIP_ROWS),_n=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Pt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Je),V.pixelStorei(V.UNPACK_SKIP_ROWS,et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Xe);const Vt=w.isDataArrayTexture||w.isData3DTexture,On=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const Rn=He.get(w),en=He.get(X),Mn=He.get(Rn.__renderTarget),Cr=He.get(en.__renderTarget);Fe.bindFramebuffer(V.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let Fn=0;Fn<Le;Fn++)Vt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,He.get(w).__webglTexture,Z,Xe+Fn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,He.get(X).__webglTexture,Te,qt+Fn)),V.blitFramebuffer(Je,et,Ne,ze,ct,Tt,Ne,ze,V.DEPTH_BUFFER_BIT,V.NEAREST);Fe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||He.has(w)){const Rn=He.get(w),en=He.get(X);Fe.bindFramebuffer(V.READ_FRAMEBUFFER,el),Fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,tl);for(let Mn=0;Mn<Le;Mn++)Vt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rn.__webglTexture,Z,Xe+Mn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rn.__webglTexture,Z),On?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,en.__webglTexture,Te,qt+Mn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,en.__webglTexture,Te),Z!==0?V.blitFramebuffer(Je,et,Ne,ze,ct,Tt,Ne,ze,V.COLOR_BUFFER_BIT,V.NEAREST):On?V.copyTexSubImage3D(Wt,Te,ct,Tt,qt+Mn,Je,et,Ne,ze):V.copyTexSubImage2D(Wt,Te,ct,Tt,Je,et,Ne,ze);Fe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else On?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Wt,Te,ct,Tt,qt,Ne,ze,Le,ut,Ke,Pt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Wt,Te,ct,Tt,qt,Ne,ze,Le,ut,Pt.data):V.texSubImage3D(Wt,Te,ct,Tt,qt,Ne,ze,Le,ut,Ke,Pt):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Te,ct,Tt,Ne,ze,ut,Ke,Pt.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Te,ct,Tt,Pt.width,Pt.height,ut,Pt.data):V.texSubImage2D(V.TEXTURE_2D,Te,ct,Tt,Ne,ze,ut,Ke,Pt);V.pixelStorei(V.UNPACK_ROW_LENGTH,mt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,An),V.pixelStorei(V.UNPACK_SKIP_PIXELS,pi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ln),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_n),Te===0&&X.generateMipmaps&&V.generateMipmap(Wt),Fe.unbindTexture()},this.copyTextureToTexture3D=function(w,X,re=null,se=null,Z=0){return Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,re,se,Z)},this.initRenderTarget=function(w){He.get(w).__webglFramebuffer===void 0&&st.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?st.setTextureCube(w,0):w.isData3DTexture?st.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?st.setTexture2DArray(w,0):st.setTexture2D(w,0),Fe.unbindTexture()},this.resetState=function(){H=0,k=0,Y=null,Fe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const nR=()=>{const s=Zt.useRef(null),e=Zt.useRef(null),n=Zt.useRef(null),a=Zt.useRef(null),l=Zt.useRef(null),c=Zt.useRef(null);return Zt.useEffect(()=>{if(!s.current)return;const f=new Tv,h=new zn(75,1,.1,1e3);a.current=h;const m=new Vv({canvas:s.current,alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setClearColor(0,0),m.outputColorSpace=jn,e.current=f,n.current=m;const p=async()=>{try{const{GLTFLoader:M}=await nv(async()=>{const{GLTFLoader:z}=await import("./GLTFLoader-AHMHiyxL.js");return{GLTFLoader:z}},[]);new M().load("models/geometry_effect/scene.gltf",z=>{const L=z.scene;l.current=L;const D=new zi().setFromObject(L),B=D.getSize(new K);c.current=Math.max(B.x,B.y,B.z);const H=D.getCenter(new K);L.position.sub(H),f.add(L),y()},void 0,z=>{console.error("GLTF 파일 로드 실패:",z)})}catch(M){console.error("GLTFLoader import 실패:",M)}},g=new Ov(16777215,6);f.add(g);const _=new Kc(16777215,8);_.position.set(10,10,10),f.add(_);const v=new Kc(16777215,4);v.position.set(-10,-10,-10),f.add(v),h.position.set(0,0,10),p();const y=()=>{if(!n.current||!a.current||!s.current.parentElement)return;const M=s.current.parentElement,x=M.clientWidth,z=M.clientHeight;if(n.current.setSize(x,z),a.current.aspect=x/z,a.current.updateProjectionMatrix(),l.current&&c.current>0){const L=l.current,D=c.current,H=(window.innerWidth<768?9:13)/D;L.scale.setScalar(H)}};let b;const R=()=>{b=requestAnimationFrame(R),l.current&&(l.current.rotation.y+=.005),n.current&&e.current&&a.current&&n.current.render(e.current,a.current)};return window.addEventListener("resize",y),y(),R(),()=>{window.removeEventListener("resize",y),b&&cancelAnimationFrame(b),n.current&&n.current.dispose()}},[]),E.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center relative bg-black",style:{backgroundColor:"#000000"},children:[E.jsx("div",{className:"hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 z-10 jetbrains",children:E.jsx("p",{className:"text-sm font-semibold text-gray-300 uppercase",children:"A Collection of Visual Works"})}),E.jsx("div",{className:"hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 z-10 jetbrains",children:E.jsx("p",{className:"text-sm font-semibold text-gray-300 uppercase text-right",children:"YOO EUNJI 2026"})}),E.jsxs("div",{className:"md:hidden absolute top-28 text-center z-10 jetbrains",children:[E.jsx("p",{className:"text-sm font-semibold text-gray-300 uppercase",children:"A Collection of Visual Works"}),E.jsx("p",{className:"text-sm font-semibold text-gray-300 uppercase mt-1",children:"YOO EUNJI 2026"})]}),E.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-0 w-full h-full",children:E.jsx("canvas",{ref:s,className:"w-full h-full"})}),E.jsxs("div",{className:"absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10 jetbrains",children:[E.jsx("p",{className:"text-sm font-semibold text-gray-300 mb-6 uppercase",children:"Scroll to Explore"}),E.jsx("div",{className:"flex justify-center",children:E.jsx("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2",children:E.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"text-gray-300 animate-bounce",children:E.jsx("path",{d:"M6 1L6 11M6 11L10 7M6 11L2 7",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})},iR=({personalData:s})=>{const[e,n]=Zt.useState(0),a=[{number:"01",category:"DEVELOPMENT",work:"DEVELOPMENT"},{number:"02",category:"MOTION",work:"MOTION"},{number:"03",category:"ILLUSTRATION",work:"ILLUSTRATION"},{number:"04",category:"PHOTOSHOP",work:"PHOTOSHOP"}];Zt.useEffect(()=>{const c=setInterval(()=>{n(f=>(f+1)%a.length)},3e3);return()=>clearInterval(c)},[a.length]);const l=a[e];return E.jsxs("section",{id:"about",className:"min-h-screen flex items-center justify-center relative glass-bg px-4 md:px-0",children:[E.jsx("div",{className:"perspective-1000 w-full max-w-sm md:max-w-[920px] h-[600px] md:h-[480px] group",children:E.jsxs("div",{className:"flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer group-hover:rotate-x-180",children:[E.jsxs("div",{className:"flip-card-front absolute inset-0 backface-hidden text-black shadow-2xl rounded-md relative overflow-hidden pointer-events-none",style:{backgroundColor:"#ffe430"},children:[E.jsx("div",{className:"absolute inset-0",style:{backgroundColor:"#ffe430"}}),E.jsx("div",{className:"absolute top-8 left-0 right-0 border-t border-dashed border-gray-600 opacity-30 z-10"}),E.jsx("div",{className:"absolute bottom-8 left-0 right-0 border-b border-dashed border-gray-600 opacity-30 z-10"}),E.jsx("div",{className:"absolute right-8 top-0 bottom-0 border-r border-dashed border-gray-600 opacity-30 z-10"}),E.jsx("div",{className:"hidden md:block absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"}),E.jsx("div",{className:"absolute left-8 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"}),E.jsxs("div",{className:"absolute left-3 top-3 bottom-3 flex flex-col justify-between z-30",children:[E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#1C212C"}}),E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#212633"}}),E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#272E3B"}}),E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#29313D"}}),E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#3A4254"}})]}),E.jsxs("div",{className:"hidden md:flex absolute left-8 top-0 bottom-0 w-[30%] flex-col items-center gap-0 p-0 relative overflow-hidden z-20",children:[E.jsxs("div",{className:"w-full py-3 px-4 flex justify-between items-center",children:[E.jsx("span",{className:"text-xs uppercase jetbrains",children:l.number}),E.jsx("span",{className:"text-xs uppercase jetbrains",children:l.category})]}),E.jsx("div",{className:"flex-1 w-full flex items-center justify-center p-4",children:E.jsx("div",{className:"w-full h-full flex items-center justify-center pt-3",children:E.jsx("img",{src:"img/eunji.png",alt:"Yoo Eunji",className:"w-full h-full object-cover rounded-md shadow-lg",style:{boxShadow:"0 4px 6px rgba(0,0,0,0.3)"}})})}),E.jsxs("div",{className:"w-full pt-8 px-4 flex justify-between items-center",children:[E.jsx("div",{className:"w-3 h-3 bg-black"}),E.jsxs("span",{className:"text-xs jetbrains",children:[l.number," / 04"]}),E.jsx("div",{className:"w-3 h-3 bg-black"})]})]}),E.jsxs("div",{className:"absolute left-12 md:left-1/3 right-0 top-0 bottom-0 flex flex-col z-20 pr-8",children:[E.jsxs("div",{className:"py-3 px-4 flex justify-between items-center w-full",children:[E.jsx("div",{className:"w-3 h-3 bg-black"}),E.jsx("span",{className:"text-xs uppercase jetbrains",children:"ABOUT"}),E.jsx("div",{className:"w-3 h-3 bg-black"})]}),E.jsx("div",{className:"py-8 md:py-1",children:E.jsxs("div",{className:"text-left relative",children:[E.jsx("h1",{className:"text-5xl sm:text-6xl font-light leading-none md:text-[80px] md:leading-[80px]",style:{fontFamily:'"Lock Serif Light", serif'},children:"Yoo Eunji"}),E.jsx("h2",{className:"text-5xl sm:text-6xl font-light leading-none md:text-[80px] md:leading-[80px]",style:{fontFamily:'"Lock Serif Light", serif'},children:"does"}),E.jsx("div",{className:"absolute -bottom-8 md:-bottom-4 -left-3 md:left-0 right-0 border-b border-dashed border-gray-600 opacity-30"})]})}),E.jsxs("div",{className:"py-12 md:py-0 md:flex-1 md:pt-6 md:pb-3 flex items-center justify-center relative",children:[E.jsxs("div",{className:"flex items-center space-x-4 md:space-x-8",children:[E.jsx("span",{className:"text-lg font-medium",children:"<"}),E.jsx("div",{className:"text-center",children:E.jsx("p",{className:"text-3xl md:text-[45px] md:leading-[40px] italic",style:{fontFamily:'"Biro Script reduced Regular", cursive'},children:l.work})}),E.jsx("span",{className:"text-lg font-medium",children:">"})]}),E.jsx("div",{className:"absolute bottom-0 -left-3 md:left-0 right-0 border-b border-dashed border-gray-600 opacity-30"})]}),E.jsxs("div",{className:"py-4 space-y-4",children:[E.jsx("div",{className:"text-xs sm:text-sm leading-relaxed jetbrains px-4",children:E.jsx("p",{className:"text-left",children:"I'm an enthusiastic and multifaceted visual artist, motion designer, graphic designer, illustrator, and photographer. Passionate about pushing creative boundaries, I constantly seek to expand my expertise and combine skills across various mediums. I thrive on problem-solving and embrace challenges WITH A PROACTIVE AND OPEN-MINDED APPROACH."})}),E.jsxs("div",{className:"text-xs pt-1 px-4 jetbrains flex flex-wrap justify-between w-full text-left mt-16 md:mt-0",children:[E.jsx("p",{className:"uppercase hidden sm:block",children:"CURRENTLY BASED IN"}),E.jsx("p",{className:"uppercase",children:"SAVANNAH, GA"}),E.jsx("p",{className:"uppercase",children:"32.0809° N, 81.0912° W"})]})]})]}),E.jsx("div",{className:"absolute -right-7 top-1/2 transform -translate-y-1/2 -rotate-90 z-20",children:E.jsx("span",{className:"text-xs uppercase jetbrains",children:"YOOEUNJIWORKS"})})]}),E.jsxs("div",{className:"flip-card-back absolute inset-0 backface-hidden rotate-x-180 bg-[#212121] text-white shadow-2xl rounded-md relative overflow-hidden pointer-events-auto",children:[E.jsx("div",{className:"absolute top-8 left-0 right-0 border-t border-dashed border-white opacity-20 z-10 pointer-events-none"}),E.jsx("div",{className:"absolute bottom-8 left-0 right-0 border-b border-dashed border-white opacity-20 z-10 pointer-events-none"}),E.jsx("div",{className:"absolute left-8 top-0 bottom-0 border-l border-dashed border-white opacity-20 z-10 pointer-events-none"}),E.jsx("div",{className:"absolute right-8 top-0 bottom-0 border-r border-dashed border-white opacity-20 z-10 pointer-events-none"}),E.jsxs("div",{className:"absolute left-3 top-3 bottom-3 flex flex-col justify-between z-30 pointer-events-none",children:[E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#1C212C"}}),E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#212633"}}),E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#272E3B"}}),E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#29313D"}}),E.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:"#2E3442"}})]}),E.jsx("div",{className:"absolute top-1 left-0 right-0 text-center z-20 pointer-events-none",children:E.jsx("span",{className:"text-xs uppercase jetbrains text-gray-400",children:"ABOUT"})}),E.jsx("div",{className:"flex items-center justify-center h-full z-50 relative pointer-events-none",children:E.jsx("div",{className:"text-center pointer-events-auto",children:E.jsx("a",{href:"/portfolio/resume-eunji.pdf",download:"유은지_이력서.pdf",target:"_blank",rel:"noopener noreferrer",onClick:c=>{console.log("클릭됨!"),console.log("URL:",c.currentTarget.href)},className:"text-6xl font-script italic text-gray-100 mb-4 cursor-pointer hover:opacity-80 transition-opacity block",children:"read more"})})}),E.jsx("div",{className:"absolute bottom-1 left-0 right-0 text-center z-20 pointer-events-none",children:E.jsx("span",{className:"text-xs uppercase jetbrains text-gray-400",children:"ABOUT"})}),E.jsx("div",{className:"absolute -right-7 top-1/2 transform -translate-y-1/2 -rotate-90 z-20 pointer-events-none",children:E.jsx("span",{className:"text-xs uppercase jetbrains text-gray-400",children:"YOOEUNJIWORKS"})})]})]})}),E.jsx("style",{jsx:!0,children:`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }
        .flip-card-back {
          transform: rotateX(180deg);
        }
        .font-script {
          font-family: 'Biro Script reduced Regular', 'Brush Script MT', cursive;
        }
        .group:hover .flip-card-inner {
          transform: rotateX(180deg);
        }
        .glass-bg {
          background: linear-gradient(
            135deg, 
            rgba(0, 0, 0, 0.95) 0%, 
            rgba(31, 41, 55, 0.9) 30%, 
            rgba(75, 85, 99, 0.8) 70%, 
            rgba(156, 163, 175, 0.7) 100%
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        @media (max-width: 640px) {
          .text-xs {
            font-size: 0.6rem;
          }
        }
      `})]})},aR=()=>E.jsxs("section",{id:"works",className:"w-full h-screen bg-gray-100 flex flex-col overflow-hidden sticky top-0",style:{backgroundColor:"#f5f5f5",zIndex:1},children:[E.jsx("header",{className:"flex justify-between items-center px-8 py-6 border-b border-gray-300",children:E.jsx("div",{className:"flex items-center gap-4",children:E.jsx("h2",{className:"text-sm font-medium tracking-wider jetbrains",style:{color:"#212121"},children:"FEATURED WORK 01"})})}),E.jsxs("div",{className:"flex-1 flex flex-col p-8",children:[E.jsxs("div",{className:"hidden lg:flex flex-col flex-1",children:[E.jsxs("div",{className:"flex justify-between items-start mb-6",children:[E.jsx("div",{className:"flex-1",children:E.jsxs("h1",{className:"text-4xl md:text-5xl font-light leading-tight",style:{color:"#212121"},children:["Sanrio: Character &",E.jsx("br",{}),"Company page"]})}),E.jsxs("div",{className:"text-right ml-8 flex flex-col items-end",children:[E.jsx("div",{className:"text-xl font-medium mb-2 jetbrains",style:{color:"#212121"},children:"2025"}),E.jsx("div",{className:"text-xs tracking-wider uppercase jetbrains mb-4",style:{color:"#212121"},children:"~ TECH WORKS"})]})]}),E.jsx("div",{className:"border-b border-dashed border-gray-400 mb-6"}),E.jsxs("div",{className:"flex gap-8 flex-1",children:[E.jsxs("div",{className:"w-80 flex flex-col justify-start",children:[E.jsx("p",{className:"text-xs leading-relaxed mb-6 jetbrains uppercase",style:{color:"#212121"},children:"Whimsical animations bring each character to life, revealing their profiles, personalities, and merchandise. The project is defined by its soft pastel design and fluid motion, presented as a heartfelt, fan-page-style portfolio that showcases a genuine passion for the characters."}),E.jsxs("a",{href:"https://yoon664.github.io/sanrio_po/",target:"_blank",rel:"noopener noreferrer",className:"relative group overflow-hidden px-4 py-2 text-xs font-medium tracking-wider uppercase jetbrains inline-block bg-black text-white hover:text-black transition-colors duration-400 ease-out",children:[E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white transition-all duration-400 ease-out group-hover:h-full z-0"}),E.jsxs("span",{className:"relative flex items-center gap-2 z-10",children:["VIEW PROJECT",E.jsx("span",{className:"transform group-hover:translate-x-1 transition-transform duration-300",children:"→"})]})]})]}),E.jsx("div",{className:"flex-1",children:E.jsx("div",{className:"rounded-sm overflow-hidden h-full",children:E.jsx("img",{src:"img/sanrio1.png",alt:"Sanrio main",className:"w-full h-full object-cover"})})}),E.jsxs("div",{className:"w-80 flex flex-col gap-4",children:[E.jsx("div",{className:"flex-1 rounded-sm overflow-hidden",children:E.jsx("video",{src:"img/sanrio2.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover"})}),E.jsx("div",{className:"flex-1 rounded-sm overflow-hidden",children:E.jsx("img",{src:"img/sanrio3.png",alt:"Sanrio detail",className:"w-full h-full object-cover"})})]})]})]}),E.jsxs("div",{className:"lg:hidden flex flex-col flex-1",children:[E.jsxs("h1",{className:"text-3xl font-light leading-tight mb-4",style:{color:"#212121"},children:["Sanrio: Character &",E.jsx("br",{}),"Company page"]}),E.jsxs("div",{className:"flex justify-between items-center mb-4",children:[E.jsxs("div",{children:[E.jsx("div",{className:"text-lg font-medium jetbrains",style:{color:"#212121"},children:"2025"}),E.jsx("div",{className:"text-xs tracking-wider uppercase jetbrains",style:{color:"#212121"},children:"~ TECH WORKS"})]}),E.jsxs("a",{href:"https://yoon664.github.io/sanrio_po/",target:"_blank",rel:"noopener noreferrer",className:"relative group overflow-hidden px-4 py-2 text-xs font-medium tracking-wider uppercase jetbrains inline-block bg-black text-white hover:text-black transition-colors duration-400 ease-out",children:[E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white transition-all duration-400 ease-out group-hover:h-full z-0"}),E.jsxs("span",{className:"relative flex items-center gap-2 z-10",children:["VIEW PROJECT",E.jsx("span",{className:"transform group-hover:translate-x-1 transition-transform duration-300",children:"→"})]})]})]}),E.jsx("div",{className:"border-b border-dashed border-gray-400 mb-4"}),E.jsx("div",{className:"mb-4",children:E.jsx("img",{src:"img/sanrio1.png",alt:"Sanrio main",className:"w-full h-auto object-cover rounded-sm"})}),E.jsx("p",{className:"text-xs leading-relaxed jetbrains uppercase",style:{color:"#212121"},children:"Whimsical animations bring each character to life, revealing their profiles, personalities, and merchandise. The project is defined by its soft pastel design and fluid motion, presented as a heartfelt, fan-page-style portfolio that showcases a genuine passion for the characters."})]})]}),E.jsx("style",{jsx:!0,children:`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `})]}),rR=()=>E.jsxs("section",{id:"works2",className:"w-full h-screen bg-gray-100 flex flex-col overflow-hidden sticky top-0",style:{backgroundColor:"#008761",zIndex:2},children:[E.jsx("header",{className:"flex justify-between items-center px-8 py-6 border-b border-gray-300",children:E.jsx("div",{className:"flex items-center gap-4",children:E.jsx("h2",{className:"text-sm font-medium tracking-wider jetbrains",style:{color:"#ffffff"},children:"FEATURED WORK 02"})})}),E.jsxs("div",{className:"flex-1 flex flex-col p-8",children:[E.jsxs("div",{className:"hidden lg:flex flex-col flex-1",children:[E.jsxs("div",{className:"flex justify-between items-start mb-6",children:[E.jsx("div",{className:"flex-1",children:E.jsxs("h1",{className:"text-4xl md:text-5xl font-light leading-tight",style:{color:"#ffffff"},children:["Amio",E.jsx("br",{}),"Pulmuone amio"]})}),E.jsxs("div",{className:"text-right ml-8 flex flex-col items-end",children:[E.jsx("div",{className:"text-xl font-medium mb-2 jetbrains",style:{color:"#ffffff"},children:"2025"}),E.jsx("div",{className:"text-xs tracking-wider uppercase jetbrains mb-4",style:{color:"#ffffff"},children:"~ TECH WORKS"})]})]}),E.jsx("div",{className:"border-b border-dashed border-gray-400 mb-6"}),E.jsxs("div",{className:"flex gap-8 flex-1",children:[E.jsxs("div",{className:"w-80 flex flex-col justify-start",children:[E.jsx("p",{className:"text-xs leading-relaxed mb-6 jetbrains uppercase",style:{color:"#ffffff"},children:"brand website for the premium pet food brand Amio. The site features an interactive design where content dynamically appears as users scroll, allowing them to explore the brand story, product lineup, and unique ingredients in an engaging and immersive way."}),E.jsxs("a",{href:"https://yoon664.github.io/amio/",target:"_blank",rel:"noopener noreferrer",className:"relative group overflow-hidden px-4 py-2 text-xs font-medium tracking-wider uppercase jetbrains inline-block bg-black text-white hover:text-black transition-colors duration-400 ease-out",children:[E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white transition-all duration-400 ease-out group-hover:h-full z-0"}),E.jsxs("span",{className:"relative flex items-center gap-2 z-10",children:["VIEW PROJECT",E.jsx("span",{className:"transform group-hover:translate-x-1 transition-transform duration-300",children:"→"})]})]})]}),E.jsx("div",{className:"flex-1",children:E.jsx("div",{className:"rounded-sm overflow-hidden h-full",children:E.jsx("video",{src:"img/amio1.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover"})})}),E.jsxs("div",{className:"w-80 flex flex-col gap-4",children:[E.jsx("div",{className:"flex-1 rounded-sm overflow-hidden",children:E.jsx("video",{src:"img/amio3.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover"})}),E.jsx("div",{className:"flex-1 rounded-sm overflow-hidden",children:E.jsx("video",{src:"img/amio2.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover"})})]})]})]}),E.jsxs("div",{className:"lg:hidden flex flex-col flex-1",children:[E.jsxs("h1",{className:"text-3xl font-light leading-tight mb-4",style:{color:"#ffffff"},children:["Amio",E.jsx("br",{}),"Pulmuone amio"]}),E.jsxs("div",{className:"flex justify-between items-center mb-4",children:[E.jsxs("div",{children:[E.jsx("div",{className:"text-lg font-medium jetbrains",style:{color:"#ffffff"},children:"2025"}),E.jsx("div",{className:"text-xs tracking-wider uppercase jetbrains",style:{color:"#ffffff"},children:"~ TECH WORKS"})]}),E.jsxs("a",{href:"https://yoon664.github.io/amio/",target:"_blank",rel:"noopener noreferrer",className:"relative group overflow-hidden px-4 py-2 text-xs font-medium tracking-wider uppercase jetbrains inline-block bg-black text-white hover:text-black transition-colors duration-400 ease-out",children:[E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white transition-all duration-400 ease-out group-hover:h-full z-0"}),E.jsxs("span",{className:"relative flex items-center gap-2 z-10",children:["VIEW PROJECT",E.jsx("span",{className:"transform group-hover:translate-x-1 transition-transform duration-300",children:"→"})]})]})]}),E.jsx("div",{className:"border-b border-dashed border-gray-400 mb-4"}),E.jsx("div",{className:"mb-4",children:E.jsx("video",{src:"img/amio1.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-auto object-cover rounded-sm"})}),E.jsx("p",{className:"text-xs leading-relaxed jetbrains uppercase",style:{color:"#ffffff"},children:"brand website for the premium pet food brand Amio. The site features an interactive design where content dynamically appears as users scroll, allowing them to explore the brand story, product lineup, and unique ingredients in an engaging and immersive way."})]})]}),E.jsx("style",{jsx:!0,children:`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `})]}),sR=()=>E.jsxs("section",{id:"works3",className:"w-full h-screen bg-gray-100 flex flex-col overflow-hidden sticky top-0",style:{backgroundColor:"#DE7439",zIndex:3},children:[E.jsx("header",{className:"flex justify-between items-center px-8 py-6 border-b border-gray-300",children:E.jsx("div",{className:"flex items-center gap-4",children:E.jsx("h2",{className:"text-sm font-medium tracking-wider jetbrains",style:{color:"#212121"},children:"FEATURED WORK 03"})})}),E.jsxs("div",{className:"flex-1 flex flex-col p-8",children:[E.jsxs("div",{className:"hidden lg:flex flex-col flex-1",children:[E.jsxs("div",{className:"flex justify-between items-start mb-6",children:[E.jsx("div",{className:"flex-1",children:E.jsxs("h1",{className:"text-4xl md:text-5xl font-light leading-tight",style:{color:"#212121"},children:["Hanhwa",E.jsx("br",{}),"Company & History"]})}),E.jsxs("div",{className:"text-right ml-8 flex flex-col items-end",children:[E.jsx("div",{className:"text-xl font-medium mb-2 jetbrains",style:{color:"#212121"},children:"2025"}),E.jsx("div",{className:"text-xs tracking-wider uppercase jetbrains mb-4",style:{color:"#212121"},children:"~ TECH WORKS"})]})]}),E.jsx("div",{className:"border-b border-dashed border-gray-400 mb-6"}),E.jsxs("div",{className:"flex gap-8 flex-1",children:[E.jsxs("div",{className:"w-80 flex flex-col justify-start",children:[E.jsx("p",{className:"text-xs leading-relaxed mb-6 jetbrains uppercase",style:{color:"#212121"},children:"A dynamic website created to showcase the rich history and brand identity of the Hanhwa Eagles. The site utilizes scroll-based animations and a clean, modern interface to guide users through the team's significant milestones and evolution in an engaging narrative format."}),E.jsxs("a",{href:"https://yoon664.github.io/han-eagle/",target:"_blank",rel:"noopener noreferrer",className:"relative group overflow-hidden px-4 py-2 text-xs font-medium tracking-wider uppercase jetbrains inline-block bg-black text-white hover:text-black transition-colors duration-400 ease-out",children:[E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white transition-all duration-400 ease-out group-hover:h-full z-0"}),E.jsxs("span",{className:"relative flex items-center gap-2 z-10",children:["VIEW PROJECT",E.jsx("span",{className:"transform group-hover:translate-x-1 transition-transform duration-300",children:"→"})]})]})]}),E.jsx("div",{className:"flex-1",children:E.jsx("div",{className:"rounded-sm overflow-hidden h-full",children:E.jsx("img",{src:"img/hanhwa.png",alt:"Hanhwa main",className:"w-full h-full object-cover"})})}),E.jsxs("div",{className:"w-80 flex flex-col gap-4",children:[E.jsx("div",{className:"flex-1 rounded-sm overflow-hidden",children:E.jsx("video",{src:"img/hanhwa3.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover"})}),E.jsx("div",{className:"flex-1 rounded-sm overflow-hidden",children:E.jsx("video",{src:"img/hanhwa2.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover"})})]})]})]}),E.jsxs("div",{className:"lg:hidden flex flex-col flex-1",children:[E.jsxs("h1",{className:"text-3xl font-light leading-tight mb-4",style:{color:"#212121"},children:["Hanhwa",E.jsx("br",{}),"Company & History"]}),E.jsxs("div",{className:"flex justify-between items-center mb-4",children:[E.jsxs("div",{children:[E.jsx("div",{className:"text-lg font-medium jetbrains",style:{color:"#212121"},children:"2025"}),E.jsx("div",{className:"text-xs tracking-wider uppercase jetbrains",style:{color:"#212121"},children:"~ TECH WORKS"})]}),E.jsxs("a",{href:"https://yoon664.github.io/han-eagle/",target:"_blank",rel:"noopener noreferrer",className:"relative group overflow-hidden px-4 py-2 text-xs font-medium tracking-wider uppercase jetbrains inline-block bg-black text-white hover:text-black transition-colors duration-400 ease-out",children:[E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-white transition-all duration-400 ease-out group-hover:h-full z-0"}),E.jsxs("span",{className:"relative flex items-center gap-2 z-10",children:["VIEW PROJECT",E.jsx("span",{className:"transform group-hover:translate-x-1 transition-transform duration-300",children:"→"})]})]})]}),E.jsx("div",{className:"border-b border-dashed border-gray-400 mb-4"}),E.jsx("div",{className:"mb-4",children:E.jsx("img",{src:"img/hanhwa.png",alt:"Hanhwa main",className:"w-full h-auto object-cover rounded-sm"})}),E.jsx("p",{className:"text-xs leading-relaxed jetbrains uppercase",style:{color:"#212121"},children:"A dynamic website created to showcase the rich history and brand identity of the Hanhwa Eagles. The site utilizes scroll-based animations and a clean, modern interface to guide users through the team's significant milestones and evolution in an engaging narrative format."})]})]}),E.jsx("style",{jsx:!0,children:`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `})]}),oR=({project:s,onClose:e})=>s?E.jsxs("div",{className:"fixed inset-0 bg-white z-50 flex items-center justify-center p-4 sm:p-8 md:p-16 animate-fade-in",children:[E.jsx("div",{className:"absolute top-4 right-4 md:top-8 md:right-8",children:E.jsxs("button",{onClick:e,className:"relative group overflow-hidden px-4 py-2 text-sm jetbrains uppercase tracking-wider text-gray-500",children:[E.jsx("span",{className:"block",children:"Close"}),E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0 bg-black text-white overflow-hidden transition-all duration-300 ease-out group-hover:h-full",children:E.jsx("span",{className:"absolute bottom-0 left-0 right-0 block px-4 py-2",children:"Close"})})]})}),E.jsxs("div",{className:"hidden md:flex w-full h-full items-center gap-16",children:[E.jsxs("div",{className:"w-1/2 h-full flex flex-col justify-between py-8",children:[E.jsx("div",{children:E.jsx("h1",{className:"text-9xl font-thin text-gray-800",children:s.id})}),E.jsxs("div",{className:"text-gray-800 jetbrains",children:[E.jsx("p",{className:"text-sm uppercase",children:s.title}),E.jsx("p",{className:"text-sm",children:s.year}),E.jsx("p",{className:"text-sm mt-4 max-w-md uppercase",children:s.description})]})]}),E.jsx("div",{className:"w-1/2 h-full flex items-center justify-center p-4",children:E.jsx("div",{className:"w-full aspect-square relative",children:E.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-contain"})})})]}),E.jsxs("div",{className:"md:hidden w-full h-full flex flex-col items-start justify-center text-left gap-6 overflow-y-auto py-16 px-4",children:[E.jsx("h1",{className:"text-7xl font-thin text-gray-800",children:s.id}),E.jsx("div",{className:"w-full max-w-xs aspect-square relative my-4",children:E.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-contain"})}),E.jsxs("div",{className:"text-gray-800 jetbrains",children:[E.jsx("p",{className:"text-sm uppercase",children:s.title}),E.jsx("p",{className:"text-sm",children:s.year}),E.jsx("p",{className:"text-xs mt-4 max-w-sm uppercase",children:s.description})]})]})]}):null,lR=()=>{const s=[{id:"01",image:"img/san8.png",title:"Pumpkin Pie",year:"2024",description:"Modeling and texturing with faux oil painting texture using a bump map in Autodesk Maya."},{id:"02",image:"img/san9.png",title:"Design System",year:"2024",description:"A comprehensive design system for a fictional brand, including typography, color palette, and component library."},{id:"03",image:"",title:"Editorial Spread",year:"2023",description:"A two-page magazine spread focusing on dynamic layout and typography."},{id:"04",image:"img/piku.png",title:"Mobile App UI",year:"2024",description:"User interface design for a productivity mobile application."},{id:"05",image:"img/miro.png",title:"Brand Identity",year:"2023",description:"Complete brand identity design for a local coffee shop."},{id:"06",image:"",title:"3D Vector Illustration",year:"2025",description:"3d vector img"},{id:"07",image:"img/ill2.png",title:"3D Vector Illustration",year:"2025",description:"3d vector img"},{id:"08",image:"img/ill3.png",title:"3D Vector Illustration",year:"2025",description:"3d vector img"},{id:"09",image:"img/ill4.png",title:"3D Vector Illustration",year:"2025",description:"3d vector img"},{id:"10",image:"img/amio5.png",title:"Packaging Design",year:"2024",description:"Product packaging design for a line of organic snacks."},{id:"11",image:"img/ill5.png",title:"Pixel art",year:"2025",description:"A landscape digital painting created in Procreate."},{id:"12",image:"",title:"Pixel art",year:"2025",description:"Graphic design for a limited edition t-shirt."},{id:"13",image:"img/ill7.png",title:"Infographic",year:"2024",description:"Data visualization and infographic design on environmental statistics."},{id:"14",image:"img/pig.png",title:"3D Model",year:"2023",description:"A low-poly 3D model of a stylized animal character."},{id:"15",image:"",title:"Product Photography",year:"2024",description:"Studio photography for a luxury watch brand."},{id:"16",image:"img/pho2.png",title:"Portrait Photography",year:"2023",description:"A series of black and white portraits."},{id:"17",image:"",title:"Architectural Photography",year:"2022",description:"Capturing the details of modern architecture."},{id:"18",image:"img/pho3.png",title:"Digital Artwork",year:"2024",description:"Digital Artwork used by photoshap"},{id:"19",image:"img/clean1.png",title:"Website Redesign",year:"2023",description:"A complete UX/UI redesign for an e-commerce website."},{id:"20",image:"img/clean2.png",title:"Landing Page",year:"2024",description:"Design and development of a high-conversion landing page."},{id:"21",image:"img/ill6.png",title:"Pixel art",year:"2025",description:"An animated logo reveal for a tech startup."},{id:"22",image:"img/ill1.png",title:"3D Vector Illustration",year:"2025",description:"3d vector img"},{id:"23",image:"img/pho1.png",title:"Book Cover Design",year:"2022",description:"Cover design for a fantasy novel."},{id:"24",image:"",title:"Abstract Photography",year:"2024",description:"Exploring textures and light through abstract photography."}],[e,n]=Zt.useState(null),a=f=>{f.image&&n(f)},l=()=>{n(null)};let c=0;return E.jsxs(E.Fragment,{children:[E.jsxs("section",{id:"projects",className:"w-full min-h-screen bg-white flex flex-col overflow-hidden",style:{backgroundColor:"#ffffff"},children:[E.jsxs("header",{className:"flex flex-col md:flex-row md:justify-between items-start p-8 pb-6",children:[E.jsxs("div",{className:"mb-1 md:mb-0",children:[E.jsx("h1",{className:"text-5xl md:text-6xl font-light mb-4 md:mb-0",style:{color:"#212121"},children:"Archive"}),E.jsxs("p",{className:"text-sm jetbrains uppercase tracking-wide leading-relaxed md:hidden",style:{color:"#212121"},children:["A CURATED STASH OF PLAYFUL, BITE-SIZED CREATIONS",E.jsx("br",{}),"TOO SMALL FOR A PROJECT, BUT TOO GOOD TO KEEP HIDDEN."]})]}),E.jsx("div",{className:"hidden md:block max-w-md text-left",children:E.jsxs("p",{className:"text-sm jetbrains uppercase tracking-wide leading-relaxed",style:{color:"#212121"},children:["A CURATED STASH OF PLAYFUL, BITE-SIZED CREATIONS",E.jsx("br",{}),"TOO SMALL FOR A PROJECT, BUT TOO GOOD TO KEEP HIDDEN."]})})]}),E.jsxs("div",{className:"flex-1",children:[E.jsx("div",{className:"lg:hidden border-t border-dashed border-gray-400",children:E.jsx("div",{className:"grid grid-cols-3",children:s.filter(f=>f.image).slice(0,12).map((f,h)=>E.jsxs("div",{className:`relative overflow-hidden p-4 border-r border-b border-dashed border-gray-400 ${f.image?"group cursor-pointer":""}`,onClick:()=>a(f),tabIndex:0,children:[E.jsx("div",{className:"absolute top-3 left-3 z-10 bg-white px-0.5 py-0.5",children:E.jsx("span",{className:"text-xs jetbrains",style:{color:"#212121"},children:String(h+1).padStart(2,"0")})}),E.jsx("div",{className:"w-full h-full aspect-square",children:f.image&&E.jsx("img",{src:f.image,alt:f.title,className:"w-full h-full object-cover group-hover:rotate-2 transition-transform duration-300"})}),E.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"})]},f.id))})}),E.jsx("div",{className:"hidden lg:block border-t border-dashed border-gray-400",children:E.jsx("div",{className:"grid grid-cols-8",children:s.map(f=>(f.image&&c++,E.jsxs("div",{className:`relative overflow-hidden p-4 border-r border-b border-dashed border-gray-400 ${f.image?"group cursor-pointer":""}`,onClick:()=>a(f),tabIndex:0,children:[E.jsx("div",{className:"absolute top-3 left-3 z-10 bg-white px-0.5 py-0.5",children:E.jsx("span",{className:"text-xs jetbrains",style:{color:"#212121"},children:f.image?String(c).padStart(2,"0"):""})}),E.jsx("div",{className:"w-full h-full aspect-square",children:f.image&&E.jsx("img",{src:f.image,alt:f.title,className:"w-full h-full object-cover group-hover:rotate-2 transition-transform duration-300"})}),E.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"})]},f.id)))})})]})]}),e&&E.jsx(oR,{project:e,onClose:l})]})},cR=()=>{const s=Zt.useRef(null),e=Zt.useRef(null),n=Zt.useRef(null),a=Zt.useRef(null),l=Zt.useRef(null);Zt.useEffect(()=>{if(!s.current)return;const p=new Tv,g=new zn(75,1,.1,1e3);n.current=g;const _=new Vv({canvas:s.current,alpha:!0,antialias:!0});e.current=_,_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setClearColor(0,0),_.outputColorSpace=jn;const v=async()=>{try{const{GLTFLoader:L}=await nv(async()=>{const{GLTFLoader:B}=await import("./GLTFLoader-AHMHiyxL.js");return{GLTFLoader:B}},[]);new L().load("models/geometry_effect/scene.gltf",B=>{const H=B.scene;a.current=H;const k=new zi().setFromObject(H),Y=k.getSize(new K);l.current=Math.max(Y.x,Y.y,Y.z);const N=k.getCenter(new K);H.position.sub(N),p.add(H),M()})}catch(L){console.error("GLTFLoader import 실패:",L)}},y=new Ov(16777215,6);p.add(y);const b=new Kc(16777215,8);b.position.set(10,10,10),p.add(b);const R=new Kc(16777215,4);R.position.set(-10,-10,-10),p.add(R),g.position.set(0,0,10),v();const M=()=>{const L=s.current;if(!e.current||!n.current||!L.parentElement)return;const D=L.parentElement,B=D.clientWidth,H=D.clientHeight;if(_.setSize(B,H),g.aspect=B/H,g.updateProjectionMatrix(),a.current&&l.current>0){const k=a.current,Y=l.current,C=(window.innerWidth<768?9:15)/Y;k.scale.setScalar(C)}};let x;const z=()=>{x=requestAnimationFrame(z),a.current&&(a.current.rotation.y+=.005),e.current&&p&&n.current&&e.current.render(p,n.current)};return window.addEventListener("resize",M),M(),z(),()=>{window.removeEventListener("resize",M),cancelAnimationFrame(x),e.current&&e.current.dispose()}},[]);const c=[{id:"01",name:"Motion Design"},{id:"02",name:"Brand Design"},{id:"03",name:"Editorial Design"}],f=[{id:"04",name:"Photography"},{id:"05",name:"Illustration"},{id:"06",name:"3D Tech"}],h=({id:p,name:g})=>E.jsxs("a",{className:"group block hover:opacity-80 transition-opacity",children:[" ",E.jsxs("div",{className:"flex items-center gap-3",children:[" ",E.jsx("p",{className:"text-white text-sm font-mono uppercase tracking-normal leading-6 opacity-60",children:p})," ",E.jsx("h2",{className:"text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-normal",children:g})," "]})," "]}),m=({label:p,href:g,children:_})=>E.jsxs("a",{href:g,className:"group relative inline-block cursor-pointer py-1",target:g.startsWith("http")?"_blank":"_self",rel:"noopener noreferrer",children:[" ",E.jsxs("div",{className:"flex gap-2 items-center",children:[" ",E.jsx("div",{className:"text-xs text-gray-500 uppercase tracking-widest",children:p})," ",E.jsx("div",{className:"text-gray-300 text-xs",children:_})," "]})," "]});return E.jsxs("section",{id:"contact",className:"min-h-screen text-white relative overflow-hidden",style:{backgroundColor:"#202020"},children:[E.jsx("div",{className:`absolute z-0 \r
                      w-80 h-80 -top-16 -right-20 opacity-50 \r
                      md:w-96 md:h-96 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:opacity-100`,children:E.jsx("canvas",{ref:s,className:"w-full h-full"})}),E.jsxs("div",{className:"hidden md:flex flex-col justify-between min-h-screen relative z-10",children:[E.jsxs("div",{className:"pt-8",children:[E.jsx("div",{className:"flex justify-center gap-12 md:gap-16 lg:gap-20 mb-8",children:c.map(p=>E.jsx(h,{...p},p.id))}),E.jsx("div",{className:"flex justify-center gap-12 md:gap-16 lg:gap-20",children:f.map(p=>E.jsx(h,{...p},p.id))})]}),E.jsx("div",{className:"flex-grow"}),E.jsxs("div",{children:[E.jsxs("div",{className:"flex justify-between mb-5 max-w-7xl mx-auto px-8",children:[E.jsx(m,{label:"EMAIL",href:"mailto:yooj0264@gmail.com",children:"yooj0264@gmail.com"}),E.jsx(m,{label:"INSTAGRAM",href:"https://instagram.com/yoon664"}),E.jsx(m,{label:"GITHUB",href:"https://github.com/yoon664",children:"https://github.com/yoon664"}),E.jsx(m,{label:"RESUME",href:"#"})]}),E.jsx("div",{className:"w-full mb-4",children:E.jsx("h1",{className:"w-full text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] font-semibold tracking-wider text-gray-400 leading-none opacity-50 text-center",style:{fontFamily:'"Lock Serif Light", serif'},children:"YOOEUNJI WORKS"})}),E.jsx("div",{className:"flex justify-center items-center px-8 pb-4 text-xs text-gray-500",children:E.jsx("div",{className:"opacity-50",children:"© 2025 YOO EUNJI"})})]})]}),E.jsxs("div",{className:"md:hidden flex flex-col min-h-screen p-8 relative z-10",children:[E.jsx("div",{className:"space-y-4",children:[...c,...f].map(p=>E.jsx(h,{...p},p.id))}),E.jsx("div",{className:"flex-grow"}),E.jsxs("div",{className:"w-full flex flex-col items-start space-y-8",children:[E.jsxs("div",{className:"flex flex-col items-start",children:[E.jsx(m,{label:"EMAIL",href:"mailto:yooj0264@gmail.com",children:"yooj0264@gmail.com"}),E.jsx(m,{label:"GITHUB",href:"https://github.com/yoon664",children:"https://github.com/yoon664"}),E.jsx(m,{label:"INSTAGRAM",href:"https://instagram.com/yoon664"}),E.jsx(m,{label:"RESUME",href:"#"})]}),E.jsxs("div",{children:[E.jsx("h1",{className:"text-6xl font-semibold tracking-wider text-gray-400 leading-none opacity-50",style:{fontFamily:'"Lock Serif Light", serif'},children:"YOOEUNJI WORKS"}),E.jsx("p",{className:"mt-4 text-xs text-gray-500 opacity-50",children:"© 2025 YOO EUNJI"})]})]})]})]})},tv={name:"YOO EUNJI",title:"Creative Developer",description:"안녕하세요! ~~~입니다.",email:"yooj0264@gmail.com",phone:"010-5317-1126",github:"https://github.com/yoon664",resume:{education:"Computer, 2021-2025",experience:["Frontend Developer Projects","UI/UX Design Projects"],skills:"React, JavaScript, Photoshop, Illustrator, "}},uR=()=>E.jsxs("div",{className:"text-white font-mono relative",children:[E.jsx(tS,{}),E.jsx(iS,{showPercentage:!1}),E.jsxs("main",{children:[E.jsx(nR,{}),E.jsx(iR,{personalData:tv}),E.jsxs("div",{className:"relative h-[300vh]",children:[E.jsx(aR,{}),E.jsx(rR,{}),E.jsx(sR,{})]}),E.jsx(lR,{}),E.jsx(cR,{personalData:tv})]})]});eS.createRoot(document.getElementById("root")).render(E.jsx(Zt.StrictMode,{children:E.jsx(uR,{})}));export{zM as $,gR as A,hi as B,xt as C,Kc as D,fi as E,bR as F,vR as G,Cv as H,_R as I,xR as J,yR as K,Jo as L,SR as M,lc as N,sn as O,AR as P,Os as Q,rd as R,jn as S,fR as T,Tc as U,Et as V,zn as W,pR as X,Lv as Y,wv as Z,MR as _,dR as a,kc as a0,Ld as a1,Av as a2,Un as a3,Zc as a4,Yc as a5,tu as a6,Rt as a7,Wa as a8,eu as a9,zi as aa,fa as ab,hR as b,RR as c,Ds as d,TR as e,yt as f,K as g,__ as h,ER as i,wR as j,mR as k,Mr as l,hh as m,BS as n,Oi as o,ti as p,sd as q,Sr as r,XM as s,Tr as t,jM as u,WM as v,oa as w,xv as x,Ht as y,ha as z};
