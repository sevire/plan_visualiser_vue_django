(function(t){function e(e){for(var a,l,o=e[0],c=e[1],d=e[2],s=0,p=[];s<o.length;s++)l=o[s],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},r=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"22f4":function(t,e,n){"use strict";n("3f95")},"3f95":function(t,e,n){},b848:function(t){t.exports=JSON.parse('[{"id":"1","name":"Environment Available to WD\\r\\n(Ian Maxwell)\\r\\n[2022-01-18]","duration":"0","start_date":"2022-01-18","end_date":"2022-01-18","trackNum":-1},{"id":"2","name":"WD Deployment Testing\\r\\n(Welcom)\\r\\n[10 days, 2022-02-02]","duration":"10","start_date":"2022-01-19","end_date":"2022-02-02","trackNum":-1},{"id":"3","name":"WD Code Drop\\r\\n(Welcom)\\r\\n[3 days, 2022-02-08]","duration":"3","start_date":"2022-02-03","end_date":"2022-02-08","trackNum":-1},{"id":"4","name":"Smoke Testing\\r\\n(Carole Harley)\\r\\n[15 days, 2022-03-02]","duration":"15","start_date":"2022-02-09","end_date":"2022-03-02","trackNum":-1},{"id":"5","name":"System Testing\\r\\n(Carole Harley)\\r\\n[20 days, 2022-03-31]","duration":"20","start_date":"2022-03-03","end_date":"2022-03-31","trackNum":-1},{"id":"6","name":"User Acceptance Testing (including re-test)\\r\\n(Amanda Mills)\\r\\n[70 days, 2022-07-08]","duration":"70","start_date":"2022-04-01","end_date":"2022-07-08","trackNum":-1},{"id":"7","name":"Pre-Production Activities\\r\\n(Craig Baille)\\r\\n[20 days, 2022-08-08]","duration":"20","start_date":"2022-07-11","end_date":"2022-08-08","trackNum":-1},{"id":"8","name":"Go Live (Weekend)\\r\\n(ALL)\\r\\n[2022-08-09]","duration":"0","start_date":"2022-08-09","end_date":"2022-08-09","trackNum":-1}]')},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("f2bf"),i={class:"plan flex-item"},r={class:"visual flex-item"};function l(t,e,n,l,o,c){var d=Object(a["u"])("Plan"),u=Object(a["u"])("PlanVisual"),s=Object(a["u"])("router-view");return Object(a["p"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",i,[Object(a["g"])(d,{onUpdateItemRoot:t.updateItemRoot,plan_data:t.plan_data},null,8,["onUpdateItemRoot","plan_data"])]),Object(a["f"])("div",r,[Object(a["g"])(u,{ref:"visual",plan_data:t.plan_data},null,8,["plan_data"])]),Object(a["g"])(s)],64)}var o=n("53ca"),c=(n("b0c0"),n("d3b7"),n("159b"),n("b848")),d=Object(a["f"])("h1",null,"Plan Visual",-1),u=Object(a["f"])("canvas",{id:"plan-visual",width:"800",height:"600"},null,-1);function s(t,e,n,i,r,l){return Object(a["p"])(),Object(a["e"])(a["a"],null,[d,u],64)}n("cb29");var p={margin:20,trackHeight:20,milestoneWidth:10,trackGap:5,dayWidth:300,dateMin:new Date("2022-01-01"),plotWidth:-1},f="rgb(238,234,211)",m="rgb(241,202,151)",h="rgb(137,163,213)",b="rgb(34,69,191)";function O(t){console.log("Draw Visual"),console.log(t),console.log("dateMin",p.dateMin);var e=document.getElementById("plan-visual"),n=e.getContext("2d");console.log("Canvas width, height",e.width,e.height),n.clearRect(0,0,e.width,e.height),n.fillStyle=f,n.fillRect(0,0,e.width,e.height),n.font="15px Arial",p.plotWidth=e.width-2*p.margin,t.forEach((function(t){console.log("activity",t);var e=new Date(t.start_date),a=new Date(t.end_date);0==t.duration?v(e,t.trackNum,t.name,p,n):y(e,a,t.trackNum,t.name,p,n)}))}function j(t,e){console.log("dayDiff",t,e);var n=e.getTime()-t.getTime();return n/864e5}function y(t,e,n,a,i,r){console.log("plotActivity (dateMin)",i.dateMin);var l=j(i.dateMin,t),o=j(t,e),c=o/i.dayWidth*i.plotWidth,d=i.margin+l/i.dayWidth*i.plotWidth,u=g(n,i);r.fillStyle=m,r.fillRect(d,u,c,i.trackHeight),r.fillStyle=b,r.fillText(a,d+5,u+i.trackHeight-5)}function g(t,e){return e.margin+(e.trackHeight+e.trackGap)*t}function v(t,e,n,a,i){console.log("plotMilestone (dateMin)",a.dateMin);var r=j(a.dateMin,t),l=a.margin+r/a.dayWidth*a.plotWidth-a.milestoneWidth/2,o=g(e,a);_(i,h,l,o,a.milestoneWidth,a.trackHeight),i.fillStyle=h,i.fill(),i.fillStyle=b,i.fillText(n,l+a.milestoneWidth/2+5,o+a.trackHeight-5)}function _(t,e,n,a,i,r){var l=n,o=a+r/2,c=n+i/2,d=a,u=n+i,s=a+r/2,p=n+i/2,f=a+r;t.beginPath(),t.moveTo(l,o),t.lineTo(c,d),t.lineTo(u,s),t.lineTo(p,f),t.lineTo(l,o),t.closePath()}var k=Object(a["h"])({name:"PlanVisual",props:["plan_data"],methods:{callDrawVisual:function(){O(this.plan_data)}},mounted:function(){this.callDrawVisual()}}),w=n("6b0d"),N=n.n(w);const P=N()(k,[["render",s]]);var W=P,A=Object(a["f"])("thead",null,[Object(a["f"])("tr",null,[Object(a["f"])("td",null,"Key"),Object(a["f"])("th",null,"Activity Name"),Object(a["f"])("th",null,"Start Date"),Object(a["f"])("th",null,"End Date"),Object(a["f"])("th",null,"Track #")])],-1);function M(t,e,n,i,r,l){var o=Object(a["u"])("Activity");return Object(a["p"])(),Object(a["e"])("table",null,[A,Object(a["f"])("tbody",null,[(Object(a["p"])(!0),Object(a["e"])(a["a"],null,Object(a["t"])(this.plan_data,(function(e,n){return Object(a["p"])(),Object(a["d"])(o,{onUpdateItem:t.updateItem,activity:e,key:n},null,8,["onUpdateItem","activity"])})),128))])])}function U(t,e,n,i,r,l){var o=this;return Object(a["p"])(),Object(a["e"])("tr",null,[Object(a["f"])("td",null,Object(a["w"])(this.$.vnode.key),1),Object(a["f"])("td",null,[Object(a["A"])(Object(a["f"])("input",{type:"text",onChange:e[0]||(e[0]=function(e){return t.itemUpdated("name",o.name)}),"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.name=t})},null,544),[[a["y"],this.name]])]),Object(a["f"])("td",null,[Object(a["A"])(Object(a["f"])("input",{type:"date",onChange:e[2]||(e[2]=function(e){return t.itemUpdated("start",o.start_date)}),"onUpdate:modelValue":e[3]||(e[3]=function(t){return o.start_date=t})},null,544),[[a["y"],this.start_date]])]),Object(a["f"])("td",null,[Object(a["A"])(Object(a["f"])("input",{type:"date",onChange:e[4]||(e[4]=function(e){return t.itemUpdated("end",o.end_date)}),"onUpdate:modelValue":e[5]||(e[5]=function(t){return o.end_date=t})},null,544),[[a["y"],this.end_date]])]),Object(a["f"])("td",null,[Object(a["A"])(Object(a["f"])("input",{type:"number",onChange:e[6]||(e[6]=function(e){return t.itemUpdated("track",o.trackNum)}),"onUpdate:modelValue":e[7]||(e[7]=function(t){return o.trackNum=t})},null,544),[[a["y"],this.trackNum]])]),Object(a["f"])("td",null,[Object(a["f"])("button",{onClick:e[8]||(e[8]=function(e){o.trackNum--,t.itemUpdated("track",o.trackNum)})}," up ")]),Object(a["f"])("td",null,[Object(a["f"])("button",{onClick:e[9]||(e[9]=function(e){o.trackNum++,t.itemUpdated("track",o.trackNum)})}," down ")])])}var T=Object(a["h"])({name:"Activity",props:["activity"],data:function(){return{name:this.activity.name,start_date:this.activity.start_date,end_date:this.activity.end_date,trackNum:this.activity.trackNum}},methods:{itemUpdated:function(t,e){this.$emit("update-item",t,this.$.vnode.key,e)}}});const x=N()(T,[["render",U]]);var D=x,S=Object(a["h"])({name:"Plan",components:{Activity:D},props:["plan_data"],methods:{updateItem:function(t,e,n){this.$emit("update-item-root",t,e,n)}}});const C=N()(S,[["render",M]]);var I=C,V=Object(a["h"])({name:"App",data:function(){return{plan_data:c}},components:{Plan:I,PlanVisual:W},methods:{updateItemRoot:function(t,e,n){console.log("updateItemRoot",t,e,n),"name"===t?this.plan_data[e].name=n:"start"===t?this.plan_data[e].start_date=n:"end"===t?this.plan_data[e].end_date=n:"track"===t?this.plan_data[e].trackNum=n:console.log("Unrecognised item name "+t),this.$refs.visual.callDrawVisual()}},beforeMount:function(){console.log("App:mounted (before)",this.plan_data),this.plan_data.forEach((function(t,e){console.log("Initialising track num for "+t.name+" trackNum type "+Object(o["a"])(t.name)),t.trackNum=e+3})),console.log("App:mounted (after)",this.plan_data)}});n("22f4");const H=N()(V,[["render",l]]);var R=H,E=n("6c02"),$=[{path:"/",name:"Plan",component:I}],G=Object(E["a"])({history:Object(E["b"])("/dist/"),routes:$}),J=G;Object(a["c"])(R).use(J).mount("#app")}});
//# sourceMappingURL=app.js.map