/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t=function(c){var d=0;return function(){return d<c.length?{done:!1,value:c[d++]}:{done:!0}}},u=function(c){var d="undefined"!=typeof Symbol&&Symbol.iterator&&c[Symbol.iterator];return d?d.call(c):{next:t(c)}},v=function(c){c=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,c];for(var d=0;d<c.length;++d){var g=c[d];if(g&&g.Math==Math)return g}return globalThis},w=v(this),x="function"==typeof Object.defineProperties?Object.defineProperty:function(c,d,
g){c!=Array.prototype&&c!=Object.prototype&&(c[d]=g.value)},z=function(c,d){if(d){var g=w;c=c.split(".");for(var k=0;k<c.length-1;k++){var e=c[k];e in g||(g[e]={});g=g[e]}c=c[c.length-1];k=g[c];d=d(k);d!=k&&null!=d&&x(g,c,{configurable:!0,writable:!0,value:d})}};
z("Promise",function(c){function d(){this.a=null}function g(a){return a instanceof e?a:new e(function(b){b(a)})}if(c)return c;d.prototype.b=function(a){if(null==this.a){this.a=[];var b=this;this.c(function(){b.g()})}this.a.push(a)};var k=w.setTimeout;d.prototype.c=function(a){k(a,0)};d.prototype.g=function(){for(;this.a&&this.a.length;){var a=this.a;this.a=[];for(var b=0;b<a.length;++b){var f=a[b];a[b]=null;try{f()}catch(h){this.f(h)}}}this.a=null};d.prototype.f=function(a){this.c(function(){throw a;
})};var e=function(a){this.b=0;this.g=void 0;this.a=[];var b=this.c();try{a(b.resolve,b.reject)}catch(f){b.reject(f)}};e.prototype.c=function(){function a(h){return function(l){f||(f=!0,h.call(b,l))}}var b=this,f=!1;return{resolve:a(this.o),reject:a(this.f)}};e.prototype.o=function(a){if(a===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof e)this.s(a);else{a:switch(typeof a){case "object":var b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.m(a):
this.i(a)}};e.prototype.m=function(a){var b=void 0;try{b=a.then}catch(f){this.f(f);return}"function"==typeof b?this.u(b,a):this.i(a)};e.prototype.f=function(a){this.j(2,a)};e.prototype.i=function(a){this.j(1,a)};e.prototype.j=function(a,b){if(0!=this.b)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.b);this.b=a;this.g=b;this.l()};e.prototype.l=function(){if(null!=this.a){for(var a=0;a<this.a.length;++a)y.b(this.a[a]);this.a=null}};var y=new d;e.prototype.s=function(a){var b=
this.c();a.h(b.resolve,b.reject)};e.prototype.u=function(a,b){var f=this.c();try{a.call(b,f.resolve,f.reject)}catch(h){f.reject(h)}};e.prototype.then=function(a,b){function f(m,n){return"function"==typeof m?function(p){try{h(m(p))}catch(q){l(q)}}:n}var h,l,r=new e(function(m,n){h=m;l=n});this.h(f(a,h),f(b,l));return r};e.prototype.catch=function(a){return this.then(void 0,a)};e.prototype.h=function(a,b){function f(){switch(h.b){case 1:a(h.g);break;case 2:b(h.g);break;default:throw Error("Unexpected state: "+
h.b);}}var h=this;null==this.a?y.b(f):this.a.push(f)};e.resolve=g;e.reject=function(a){return new e(function(b,f){f(a)})};e.race=function(a){return new e(function(b,f){for(var h=u(a),l=h.next();!l.done;l=h.next())g(l.value).h(b,f)})};e.all=function(a){var b=u(a),f=b.next();return f.done?g([]):new e(function(h,l){function r(p){return function(q){m[p]=q;n--;0==n&&h(m)}}var m=[],n=0;do m.push(void 0),n++,g(f.value).h(r(m.length-1),l),f=b.next();while(!f.done)})};return e});
var A=this||self,B=/^[\w+/_-]+[=]{0,2}$/,C=null,D=function(){var c=A.document;return(c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&B.test(c)?c:""};function E(){window.performance.mark("gapi_load_end");window.performance.measure("gapi_load","gapi_load_start","gapi_load_end");F()}var F,G=null;
function H(){if(G)return G;window.performance.mark("gapi_load_start");var c=window.colabExperiments&&window.colabExperiments.first_party_auth;return G=new Promise(function(d,g){F=d;window.gapi_onload=function(){c?F():gapi.load("auth:client",E)};var k=document.createElement("script");k.src="https://apis.google.com/js/client.js";k.async=!0;null===C&&(C=D());(d=C)&&k.setAttribute("nonce",d);k.onerror=function(){g(Error("Error loading "+k.src))};d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(k,
d)})}window.colab_gapi_loader={};window.colab_gapi_loader.load=H;H().then(function(){},function(){});
