(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>G});var r=t(81),s=t.n(r),a=t(645),o=t.n(a),i=t(667),c=t.n(i),d=new URL(t(505),t.b),l=new URL(t(298),t.b),u=new URL(t(828),t.b),p=new URL(t(165),t.b),g=new URL(t(928),t.b),f=new URL(t(230),t.b),m=new URL(t(3),t.b),v=new URL(t(370),t.b),b=new URL(t(117),t.b),h=new URL(t(893),t.b),x=new URL(t(693),t.b),L=new URL(t(155),t.b),k=new URL(t(752),t.b),y=new URL(t(250),t.b),w=new URL(t(472),t.b),O=new URL(t(521),t.b),T=new URL(t(755),t.b),E=new URL(t(395),t.b),R=o()(s()),U=c()(d),I=c()(l),P=c()(u),S=c()(p),M=c()(g),$=c()(f),j=c()(m),z=c()(v),A=c()(b),C=c()(h),F=c()(x),N=c()(L),Z=c()(k),_=c()(y),H=c()(w),q=c()(O),D=c()(T),B=c()(E);R.push([e.id,".scoreTable {\n  display: flex;\n  max-width: 500px;\n  height: 90px;\n  background-color: grey;\n  margin: 0 auto;\n  justify-content: space-evenly;\n}\n\n.face {\n  width: 90px;\n  height: 90px;\n  background-image: url("+U+");\n  cursor: pointer;\n  background-size: cover;\n}\n\n.deadFace {\n  background-image: url("+I+");\n}\n\n.counterFlag {\n  display: flex;\n  align-items: center;\n  width: 150px;\n  height: 90px;\n  background-image: url("+P+");\n  background-size: cover;\n}\n\n.counterTime {\n  width: 150px;\n  background-image: url("+P+");\n  background-size: cover;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 500px;\n  aspect-ratio : 1 / 1;\n  margin: 0 auto;\n  background-color: grey;\n  cursor: pointer;\n}\n\n.block {\n  border: 1px solid black;\n  width: 9.6%;\n  height: 9.6%;\n  text-align: center;\n  color:darkblue;\n  font-size: 40px;\n  background-image: url("+S+");\n  background-size: cover;\n}\n\n.boom {\n  background-image: url("+M+");\n}\n\n.mine {\n}\n\n.mines {\n  background-image: url("+$+");\n  background-position:center center;\n}\n\n.opened{\n  background-image: none;\n}\n\n.flag{\n  background-image: url("+j+");\n}\n\n.counterPicture0 {\n  margin-top: 3px;\n  width: 47px;\n  height: 86px;\n  background-size: cover;\n}\n\n.counterPicture1 {\n  margin-top: 3px;\n  width: 47px;\n  height: 86px;\n  margin-left: 3px;\n  margin-right: 3px;\n  background-size: cover;\n}\n\n.counterPicture2 {\n  margin-top: 3px;\n  width: 47px;\n  height: 86px;\n  background-size: cover;\n}\n\n.counterPicture {\n  background-image: url("+z+");\n  background-image: url("+A+");\n  background-image: url("+C+");\n  background-image: url("+F+");\n  background-image: url("+N+");\n  background-image: url("+Z+");\n  background-image: url("+_+");\n  background-image: url("+H+");\n  background-image: url("+q+");\n  background-image: url("+D+");\n  background-image: url("+B+");\n}",""]);const G=R},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(g);else{var f=s(g,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,s){var a=r(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var i=t(a[o]);n[i].references--}for(var c=r(e,s),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,s&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},165:(e,n,t)=>{e.exports=t.p+"assets/block.png"},928:(e,n,t)=>{e.exports=t.p+"assets/boom.png"},395:(e,n,t)=>{e.exports=t.p+"assets/d-.svg"},370:(e,n,t)=>{e.exports=t.p+"assets/d0.svg"},117:(e,n,t)=>{e.exports=t.p+"assets/d1.svg"},893:(e,n,t)=>{e.exports=t.p+"assets/d2.svg"},693:(e,n,t)=>{e.exports=t.p+"assets/d3.svg"},155:(e,n,t)=>{e.exports=t.p+"assets/d4.svg"},752:(e,n,t)=>{e.exports=t.p+"assets/d5.svg"},250:(e,n,t)=>{e.exports=t.p+"assets/d6.svg"},472:(e,n,t)=>{e.exports=t.p+"assets/d7.svg"},521:(e,n,t)=>{e.exports=t.p+"assets/d8.svg"},755:(e,n,t)=>{e.exports=t.p+"assets/d9.svg"},298:(e,n,t)=>{e.exports=t.p+"assets/deadFace.png"},505:(e,n,t)=>{e.exports=t.p+"assets/face.jpeg"},3:(e,n,t)=>{e.exports=t.p+"assets/flag.png"},230:(e,n,t)=>{e.exports=t.p+"assets/mine.png"},828:(e,n,t)=>{e.exports=t.p+"assets/nums_background.svg"}},n={};function t(r){var s=n[r];if(void 0!==s)return s.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&!e;)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),s=t.n(r),a=t(569),o=t.n(a),i=t(565),c=t.n(i),d=t(216),l=t.n(d),u=t(589),p=t.n(u),g=t(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=l(),n()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals,t.p,t.p,t.p,t.p,t.p;const m=()=>{const e=e=>{const n=new Audio;n.src=e,n.autoplay=!0,n.volume=.3},n=()=>{e("./assets/click.wav")},t=(e,n)=>{const t=document.createElement(n);return t.classList.add(e),t},r=t("scoreTable","div");document.body.append(r);const s=t("counterFlag","div");r.append(s);const a=t("counterPicture2","img");s.append(a);const o=t("counterPicture1","img");s.append(o);const i=t("counterPicture0","img");s.append(i);const c=t("face","img");r.append(c);const d=t("counterTime","div");r.append(d);const l=t("counterPicture2","img");d.append(l);const u=t("counterPicture1","img");d.append(u);const p=t("counterPicture0","img");d.append(p);const g=t("container","div");document.body.append(g);for(let e=0;e<100;e++){const e=t("block","div");g.append(e)}const f=[...document.querySelectorAll(".block")],v=[],b=[],h=[];for(let e=0;e<100;e++)h.push(0);const x=[-1,-9,-10,-11,1,9,10,11],L=[-1,-10,-11,9,10],k=[-9,-10,1,10,11],y=["","blue","green","red","darkblue","brown","darkviolet","darkyellow","white"],w=e=>{if(0===h[f.indexOf(e)])for(let n=0;n<x.length;n++)f.indexOf(e)-x[n]>=0&&f.indexOf(e)-x[n]<f.length&&(f.indexOf(e)-x[n]+1)%10!=0&&(f.indexOf(e)-x[n]+10)%10!=0&&!f[f.indexOf(e)-x[n]].classList.contains("opened")&&(f[f.indexOf(e)-x[n]].classList.add("opened"),f[f.indexOf(e)-x[n]].classList.remove("flag"),0===h[f.indexOf(e)-x[n]]&&w(f[f.indexOf(e)-x[n]])),f.indexOf(e)-L[n]>=0&&f.indexOf(e)-L[n]<f.length&&(f.indexOf(e)-L[n]+1)%10==0&&!f[f.indexOf(e)-L[n]].classList.contains("opened")&&(f[f.indexOf(e)-L[n]].classList.add("opened"),f[f.indexOf(e)-L[n]].classList.remove("flag"),0===h[f.indexOf(e)-L[n]]&&w(f[f.indexOf(e)-L[n]])),f.indexOf(e)-k[n]>=0&&f.indexOf(e)-k[n]<f.length&&(f.indexOf(e)-k[n]+10)%10==0&&!f[f.indexOf(e)-k[n]].classList.contains("opened")&&(f[f.indexOf(e)-k[n]].classList.add("opened"),f[f.indexOf(e)-k[n]].classList.remove("flag"),0===h[f.indexOf(e)-k[n]]&&w(f[f.indexOf(e)-k[n]]))},O=()=>{f.forEach((e=>{e.classList.contains("opened")&&h[f.indexOf(e)]>0&&(e.innerText=h[f.indexOf(e)],e.style.color=y[h[f.indexOf(e)]])}))},T=[p,u,l],E=[i,o,a],R=(e,n)=>{const t=e.toString().split("").reverse();3===t.length&&(n[0].style.backgroundImage=`url("./assets/d${t[0]}.svg")`,n[1].style.backgroundImage=`url("./assets/d${t[1]}.svg")`,n[2].style.backgroundImage=`url("./assets/d${t[2]}.svg")`),2===t.length&&(n[0].style.backgroundImage=`url("./assets/d${t[0]}.svg")`,n[1].style.backgroundImage=`url("./assets/d${t[1]}.svg")`,n[2].style.backgroundImage="none"),1===t.length&&(n[0].style.backgroundImage=`url("./assets/d${t[0]}.svg")`,n[1].style.backgroundImage="none",n[2].style.backgroundImage="none")};let U=0;const I=setInterval((()=>{return U+=1,void R((e=U)>999?"999":e,T);var e}),1e3);let P=0;const S=()=>{let e=20;f.forEach((n=>{n.classList.contains("flag")&&(e-=1)})),R(e,E)};S();const M=n=>{n.preventDefault(),n.target.classList.contains("opened")||(e("./assets/flag.mp3"),n.target.classList.toggle("flag")),S()},$=()=>{document.body.innerHTML="",m(),e("./assets/start.wav")},j=t=>{P+=1,t.target.classList.contains("flag")||(t.target.classList.contains("mine")&&(b.forEach((e=>{e.classList.add("mines")})),t.target.classList.remove("mines"),c.classList.add("deadFace"),e("./assets/lose.wav"),t.target.classList.add("boom"),g.removeEventListener("click",j),g.removeEventListener("contextmenu",M),setTimeout((()=>clearInterval(I))),setTimeout((()=>{c.addEventListener("click",$),alert("Game over. Try again")}),1e3)),t.target.classList.contains("opened")||t.target.classList.contains("mine")||(n(),t.target.classList.add("opened"),w(t.target),O(),(()=>{let n=0;f.forEach((e=>e.classList.contains("opened")?n+=1:n+=0)),f.length-v.length===n&&(e("./assets/win.wav"),setTimeout((()=>{clearInterval(I),alert(`Hooray! You found all mines in ${U} seconds and ${P} moves!`)}),200))})(),c.addEventListener("click",$)))},z=e=>{if(P+=1,!e.target.classList.contains("flag")){e.target.classList.add("opened");const t=f.indexOf(e.target);n(),(e=>{for(;v.length<20;){const n=Math.floor(100*Math.random());-1===v.indexOf(n)&&n!==e&&v.push(n)}})(t),(()=>{for(let e=0;e<v.length;e++){const n=f[v[e]];n.classList.add("mine"),b.push(n)}})(),(()=>{for(let e=0;e<f.length;e++){if(f[e].classList.contains("mine")&&(e+1)%10!=0&&(e+10)%10!=0)for(let n=0;n<x.length;n++)h[e-x[n]]+=1;if(f[e].classList.contains("mine")&&(e+1)%10==0)for(let n=0;n<k.length;n++)h[e-k[n]]+=1;if(f[e].classList.contains("mine")&&(e+10)%10==0)for(let n=0;n<L.length;n++)h[e-L[n]]+=1}})(),w(e.target),O(),g.removeEventListener("click",z),g.addEventListener("click",j)}};g.addEventListener("click",z),g.addEventListener("contextmenu",M)};m()})()})();