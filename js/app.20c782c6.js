(function(e){function t(t){for(var n,i,a=t[0],c=t[1],d=t[2],l=0,u=[];l<a.length;l++)i=a[l],r[i]&&u.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);h&&h(t);while(u.length)u.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,i=1;i<o.length;i++){var a=o[i];0!==r[a]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},i={app:0},r={app:0},s=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-7b714282":"d7c292b3"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={"chunk-7b714282":1};i[e]?t.push(i[e]):0!==i[e]&&o[e]&&t.push(i[e]=new Promise(function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-7b714282":"7195b90c"}[e]+".css",r=c.p+n,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var d=s[a],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===r))return t()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){d=u[a],l=d.getAttribute("data-href");if(l===n||l===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.request=n,delete i[e],h.parentNode.removeChild(h),o(s)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){i[e]=0}));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=s);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e),d=function(t){l.onerror=l.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,o[1](s)}r[e]=void 0}};var u=setTimeout(function(){d({type:"timeout",target:l})},12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Monty_Problem/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var h=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("64a9"),i=o.n(n);i.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",[o("router-view")],1)])},r=[],s=(o("034f"),o("2877")),a={},c=Object(s["a"])(a,i,r,!1,null,null,null);c.options.__file="App.vue";var d=c.exports,l=o("8c4f"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("div",{staticClass:"stylepicker"},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],staticClass:"form-radio radio-white",attrs:{type:"radio",value:"white",id:"radio-one",checked:""},domProps:{checked:e._q(e.picked,"white")},on:{change:function(t){e.picked="white"}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],staticClass:"form-radio radio-black",attrs:{type:"radio",value:"black",id:"radio-two"},domProps:{checked:e._q(e.picked,"black")},on:{change:function(t){e.picked="black"}}})])]),e._m(0),o("div",{staticClass:"flex-container"},[o("div",[o("the_doors")],1)])])},h=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("MONTY HALL PROBLEM")])])}],f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.doorsCondition.includes(!0)?o("h2",[e._v("Open current or choose other")]):o("h2",[e._v("Choose the door")]),o("div",{staticClass:"flex-container"},[o("div",{staticClass:"shadow",class:{selected:0===e.selectedDoor,lose:e.styleLoseDoor(0),win:e.styleWinDoor(0),unselectable:e.styleUnselectable(0)},on:{click:function(t){e.updateCondition(0)}}},[o("thedoor",{attrs:{doorsCondition:e.doorsCondition[0]}},[o("template",{slot:"default"},[0===e.winDoor?o("span",[e._v("WIN")]):e._e()])],2)],1),o("div",{staticClass:"shadow",class:{selected:1===e.selectedDoor,lose:e.styleLoseDoor(1),win:e.styleWinDoor(1),unselectable:e.styleUnselectable(1)},on:{click:function(t){e.updateCondition(1)}}},[o("thedoor",{attrs:{doorsCondition:e.doorsCondition[1]}},[o("template",{slot:"default"},[1===e.winDoor?o("span",[e._v("WIN")]):e._e()])],2)],1),o("div",{staticClass:"shadow",class:{selected:2===e.selectedDoor,lose:e.styleLoseDoor(2),win:e.styleWinDoor(2),unselectable:e.styleUnselectable(2)},on:{click:function(t){e.updateCondition(2)}}},[o("thedoor",{attrs:{doorsCondition:e.doorsCondition[2]}},[o("template",{slot:"default"},[2===e.winDoor?o("span",[e._v("WIN")]):e._e()])],2)],1)]),o("div",[o("p",[e._v("Total games: "+e._s(e.totalGames))])]),o("div",[o("p",[e._v("Wins: "+e._s(e.wins))])]),o("div",[o("p",[e._v("Loses: "+e._s(e.loses))])]),o("button",{attrs:{type:"button"},on:{click:e.resetGame}},[e._v("RESET")])])},p=[],m=(o("6762"),o("2fdb"),{name:"the_doors",components:{thedoor:function(){return o.e("chunk-7b714282").then(o.bind(null,"e0b9"))}},data:function(){return{winDoor:0,selectedDoor:4,doorsCondition:[!1,!1,!1],losedDoor:4,totalGames:0,wins:0,loses:0}},methods:{styleUnselectable:function(e){if(!0===this.doorsCondition[e])return!0},styleLoseDoor:function(e){if(this.losedDoor===e)return!0},styleWinDoor:function(e){if(this.selectedDoor===e&&!0===this.doorsCondition[e]&&this.selectedDoor===this.winDoor)return!0},generateWinDoor:function(){this.winDoor=this.randomInteger(0,2)},randomInteger:function(e,t){var o=e+Math.random()*(t+1-e);return o=Math.floor(o),o},computerStep:function(){if(4!==this.selectedDoor&&!this.doorsCondition.includes(!0)){var e=this.randomInteger(0,2);while(this.selectedDoor===e||this.winDoor===e)e=this.randomInteger(0,2);this.doorsCondition[e]=!0}},updateDoors:function(e){var t=this;this.selectedDoor=e,this.doorsCondition.includes(!0)&&(this.doorsCondition.splice(e,1,!0),e!==this.winDoor&&(setTimeout(function(){t.doorsCondition=[!0,!0,!0]},300),this.losedDoor=this.doorsCondition.indexOf(!1)))},updateStatistic:function(e){0!==this.losedDoor&&1!==this.losedDoor&&2!==this.losedDoor||(this.loses++,this.totalGames++),this.selectedDoor===e&&!0===this.doorsCondition[e]&&this.selectedDoor===this.winDoor&&(this.wins++,this.totalGames++)},updateCondition:function(e){this.updateDoors(e),this.updateStatistic(e),this.doorsCondition.includes(!0)&&this.restartGame()},restartGame:function(){var e=this;setTimeout(function(){e.doorsCondition=[!1,!1,!1],e.selectedDoor=4,e.losedDoor=4,setTimeout(function(){e.generateWinDoor()},300)},1500)},resetGame:function(){this.wins=0,this.loses=0,this.totalGames=0,this.doorsCondition=[!1,!1,!1],this.selectedDoor=4,this.losedDoor=4,this.generateWinDoor()}},watch:{selectedDoor:function(){this.computerStep()}},created:function(){this.generateWinDoor()}}),v=m,b=(o("62f8"),Object(s["a"])(v,f,p,!1,null,"262b9047",null));b.options.__file="the_doors.vue";var y=b.exports,w={name:"home",components:{the_doors:y},data:function(){return{picked:"white"}},methods:{toggleBodyStyle:function(){"white"===this.picked?(document.body.classList.remove("body-black"),document.body.classList.add("body-white")):(document.body.classList.remove("body-white"),document.body.classList.add("body-black"))}},watch:{picked:function(){this.toggleBodyStyle()}},beforeCreate:function(){document.body.classList.add("body-white")}},g=w,_=(o("cccb"),Object(s["a"])(g,u,h,!1,null,null,null));_.options.__file="Home.vue";var D=_.exports;n["a"].use(l["a"]);var C=new l["a"]({routes:[{path:"/",name:"home",component:D}]});n["a"].config.productionTip=!1,new n["a"]({router:C,render:function(e){return e(d)}}).$mount("#app")},"62f8":function(e,t,o){"use strict";var n=o("941c"),i=o.n(n);i.a},"64a9":function(e,t,o){},"941c":function(e,t,o){},cccb:function(e,t,o){"use strict";var n=o("d563"),i=o.n(n);i.a},d563:function(e,t,o){}});
//# sourceMappingURL=app.20c782c6.js.map