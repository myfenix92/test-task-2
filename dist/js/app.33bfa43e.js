(function(e){function t(t){for(var o,a,i=t[0],l=t[1],s=t[2],m=0,d=[];m<i.length;m++)a=i[m],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={app:0},c=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"196f":function(e,t,r){e.exports=r.p+"dist/../dist/../../dist/../../../dist/./media/3.c1c96b44.mp3"},"3c6d":function(e,t,r){e.exports=r.p+"dist/../dist/../../dist/../../../dist/./media/1.99e50f7d.mp3"},"3cf8":function(e,t,r){e.exports=r.p+"dist/../dist/../../dist/../../../dist/./media/2.d2c4a2c4.mp3"},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"eventBus",(function(){return j}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"main-block"},[r("h1",[e._v("Simon Game")]),r("div",{staticClass:"game-block"},[r("CircleBlock"),r("div",{staticClass:"options-block"},[r("LevelBlock")],1),r("ButtonBlock")],1)])])},c=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{on:{click:function(t){e.resetGame(),e.play()}}},[e._v("Старт")])},i=[],l=(r("a9e3"),r("7db0"),r("a630"),r("3ca3"),r("159b"),{name:"ButtonBlock",methods:{getRandomArbitrary:function(e,t){return Math.floor(Math.random()*(t-e)+e)},randomNumber:function(){var e=this.getRandomArbitrary(1,5);this.$root.stepCheckCircle=0,this.$root.arraySoundNum.push(e)},play:function(){var e=this;this.randomNumber(),this.$root.level=this.$root.arraySoundNum.length;var t=Number(Array.from(document.querySelectorAll("input")).find((function(e){return e.checked})).value),o=document.querySelectorAll(".circle");document.querySelector(".circle-block").classList.add("reset-game-event"),document.querySelector(".circle-block").classList.remove("cursor-view"),setTimeout((function(){document.querySelector(".circle-block").classList.remove("reset-game-event"),document.querySelector(".circle-block").classList.add("cursor-view")}),(this.$root.arraySoundNum.length-1)*t+this.$root.timeHighlight);for(var n=function(n){var c=new Audio(r("ba5b")("./".concat(e.$root.arraySoundNum[n],".mp3"))),a=e.$root.arraySoundNum[n];setTimeout((function(){c.play(),o[a-1].classList.add("highlight")}),n*t),setTimeout((function(){o.forEach((function(e){e.classList.remove("highlight")}))}),n*t+e.$root.timeHighlight),setTimeout((function(){document.querySelector(".circle-block").classList.remove("reset-game-event")}),e.$root.arraySoundNum.length*t)},c=0;c<this.$root.arraySoundNum.length;c+=1)n(c)},resetGame:function(){j.$emit("msgGame",!1),this.$root.arraySoundNum=[],document.querySelector(".circle-block").classList.remove("reset-game-event")}},mounted:function(){var e=this;j.$on("play",(function(){e.play()}))}}),s=l,u=r("2877"),m=Object(u["a"])(s,a,i,!1,null,null,null),d=m.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-block reset-game-event"},[r("ul",[r("li",{staticClass:"red circle",attrs:{"data-title":"1"},on:{click:e.checkCircle}}),r("li",{staticClass:"green circle",attrs:{"data-title":"2"},on:{click:e.checkCircle}}),r("li",{staticClass:"yellow circle",attrs:{"data-title":"3"},on:{click:e.checkCircle}}),r("li",{staticClass:"blue circle",attrs:{"data-title":"4"},on:{click:e.checkCircle}})])])},f=[],p={name:"CircleBlock",methods:{checkCircle:function(e){var t=document.querySelectorAll(".circle"),o=new Audio(r("ba5b")("./".concat(e.target.dataset.title,".mp3")));o.play(),e.target.classList.add("highlight"),setTimeout((function(){t.forEach((function(e){e.classList.remove("highlight")}))}),this.$root.timeHighlight),Number(e.target.dataset.title)===this.$root.arraySoundNum[this.$root.stepCheckCircle]?(this.$root.stepCheckCircle+=1,this.$root.stepCheckCircle===this.$root.arraySoundNum.length&&setTimeout((function(){j.$emit("play")}),this.$root.timePauseSound)):(document.querySelector(".circle-block").classList.add("reset-game-event"),j.$emit("msgGame",!0),this.$root.arraySoundNum=[],this.$root.stepCheckCircle=0)}}},v=p,b=Object(u["a"])(v,h,f,!1,null,null,null),y=b.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"options-block"},[r("p",[e._v("Раунд:"),r("span",[e._v(e._s(e.$root.arraySoundNum.length))])]),r("span",[e._v("Уровень:")]),e._m(0),r("p",{directives:[{name:"show",rawName:"v-show",value:e.seen,expression:"seen"}]},[e._v(" "+e._s(e.msgGame))])])},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"level-blocks"},[r("label",{attrs:{for:"easy-level"}},[r("input",{attrs:{type:"radio",id:"easy-level",name:"levelChoose",value:"1500",checked:""}}),e._v(" Легкий ")]),r("label",{attrs:{for:"middle-level"}},[r("input",{attrs:{type:"radio",id:"middle-level",name:"levelChoose",value:"1000"}}),e._v(" Средний ")]),r("label",{attrs:{for:"hard-level"}},[r("input",{attrs:{type:"radio",id:"hard-level",name:"levelChoose",value:"400"}}),e._v(" Сложный ")])])}],C={name:"LevelBlock",data:function(){return{msgGame:"",seen:!1}},methods:{endGame:function(e){this.seen=e,this.msgGame="Вы проиграли после ".concat(this.$root.arraySoundNum.length," раундов!")}},mounted:function(){var e=this;j.$on("msgGame",(function(t){e.endGame(t)}))}},$=C,S=Object(u["a"])($,g,k,!1,null,null,null),_=S.exports,w={name:"App",components:{CircleBlock:y,ButtonBlock:d,LevelBlock:_}},N=w,O=Object(u["a"])(N,n,c,!1,null,null,null),x=O.exports,L={stepCheckCircle:0,arraySoundNum:[],timeHighlight:300,timePauseSound:800},j=(r("f0bb"),new o["a"]);o["a"].config.productionTip=!1,o["a"].config.devtools=!0,new o["a"]({data:L,render:function(e){return e(x)}}).$mount("#app")},"78fc":function(e,t,r){e.exports=r.p+"dist/../dist/../../dist/../../../dist/./media/4.36d5a722.mp3"},ba5b:function(e,t,r){var o={"./1.mp3":"3c6d","./2.mp3":"3cf8","./3.mp3":"196f","./4.mp3":"78fc"};function n(e){var t=c(e);return r(t)}function c(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=c,e.exports=n,n.id="ba5b"},f0bb:function(e,t,r){}});
//# sourceMappingURL=app.33bfa43e.js.map