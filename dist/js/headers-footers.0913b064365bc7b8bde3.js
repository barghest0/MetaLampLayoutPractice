!function(){"use strict";var e,t={890:function(e,t,r){var n="header__burger-nav",i="active",o=r(563);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$container=t,this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.setBurgerNav(),this.attachListeners()}},{key:"setBurgerNav",value:function(){this.$burgerNav=this.$container.find(".".concat(n))}},{key:"attachListeners",value:function(){this.$container.on("click",this.handleBurgerClick),document.addEventListener("click",this.closeBurgerAfterDocumentClick.bind(this))}},{key:"handleBurgerClick",value:function(e){o(e.currentTarget).toggleClass(i),o(".".concat(n)).toggleClass(i)}},{key:"closeBurgerAfterDocumentClick",value:function(e){e.target.closest(".".concat("header__burger"))||this.$container.removeClass(i)}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();r(775),new a(r(563)(".header__burger"))},775:function(e,t,r){e.exports=r.p+"assets/images/logo.png"}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,i,o){if(!r){var c=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],o=e[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||c>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,o<c&&(c=o));if(a){e.splice(l--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.j=909,function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){var e={909:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,c=r[0],a=r[1],u=r[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var l=u(n)}for(t&&t(r);s<c.length;s++)o=c[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self.webpackChunkpractice=self.webpackChunkpractice||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var i=n.O(void 0,[216],(function(){return n(890)}));i=n.O(i)}();