(this.webpackJsonpridezebus=this.webpackJsonpridezebus||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),u=a.n(c),l=(a(10),a(1)),s=function(e){var t=e.id,a=e.i,n=e.currentIndex;return r.a.createElement("div",{id:a,className:"card",style:{opacity:n>a?"0.1":1,boxShadow:n===a?"rgb(48 56 152 / 64%) 0px 0px 18px 5px":""}},r.a.createElement("img",{src:"./card_picture/".concat(t,".png"),alt:"card"}))},i=a(2),o=a.n(i),d={symbols:["C","D","H","S"],value:[2,3,4,5,6,7,8,9,10,11,12,13,14],name:["2","3","4","5","6","7","8","9","10","J","Q","K","A"]},m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)([]),i=Object(l.a)(u,2),m=i[0],f=i[1],v=Object(n.useState)([]),b=Object(l.a)(v,2),p=b[0],E=b[1],g=Object(n.useState)({}),h=Object(l.a)(g,2),C=h[0],O=h[1],j=Object(n.useState)(0),N=Object(l.a)(j,2),S=N[0],x=N[1],w=Object(n.useState)("Ride the bus !"),k=Object(l.a)(w,2),y=k[0],T=k[1],M=Object(n.useState)(!0),R=Object(l.a)(M,2),I=R[0],J=R[1],_=function(){return function(e,t){for(var a=[],n=t,r=function(){var e=Math.floor(Math.random()*n.length),t=n[e];a.push(t),n=n.filter((function(t,a){return a!==e}))},u=0;u<e;u++)r();E(a),f(a),c(n),x(0),J((function(e){return!e})),T("Ride the bus")}(5,function(e){for(var t=[],a=0;a<e;a++)for(var n=0;n<d.symbols.length;n++)for(var r=d.symbols[n],c=0;c<d.value.length;c++){var u=d.value[c],l={id:d.name[c]+r,value:u};t.push(l)}return t}(1))};Object(n.useEffect)((function(){_()}),[]);var A=function(e){if(0!==a.length){var t=function(){var e=Math.floor(Math.random()*a.length),t=a[e];return f(m.concat(t)),c(a.filter((function(t,a){return a!==e}))),O(t),t}();T("...");n=function(){E(p.map((function(e,a){return a===S?t:e})));var a=function(e,t){return e===(t.value>p[S].value?2:t.value<p[S].value?0:1)}(e,t);a?x((function(e){return e+1})):(x(0),J(!0)),a&&t.value===p[S].value?T("Tu distribues un poteau ! Cul sec !"):a?T("Carte suivante"):a||t.value!==p[S].value?a||1!==e?a||T("Tu bois ".concat(S+1," gorg\xe9es")):T("Faux, tu prends un poteau ! Cul sec !"):T("Tu prends un poteau ! Cul sec !")},setTimeout((function(){o()("#newCard").addClass("sided"),setTimeout((function(){o()("#newCard").addClass("moved-".concat(S+1)),setTimeout((function(){o()("#newCard").removeClass("moved-".concat(S+1)),o()("#newCard").addClass("reset"),o()("#newCard").removeClass("sided"),n()}),700)}),1500)}),600)}else alert("Plus de cartes ! Relance de la partie !"),J(!1),_();var n};return r.a.createElement("div",{className:"game"},S!==p.length?r.a.createElement("h1",null,y):r.a.createElement("h1",null,I?"Tu as gagn\xe9":"Tu ne peux pas tout faire une fois ! Cul sec !"),r.a.createElement("div",{className:"cards-table"},p.map((function(e,t){return r.a.createElement(s,{id:e.id,key:t,i:t,currentIndex:S})}))),r.a.createElement("div",{className:"flip-card",id:"newCard"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("img",{src:"./card_picture/red_back.png"})),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("img",{src:"./card_picture/".concat(C.id,".png"),width:"100px"})))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return A(0)},disabled:S===p.length||"..."===y,className:"green"},"MOINS"),S===p.length?r.a.createElement("button",{onClick:_,className:"grey"},"REJOUER"):r.a.createElement("button",{onClick:function(){return A(1)},disabled:"..."===y,className:"grey"},"POTEAU"),r.a.createElement("button",{onClick:function(){return A(2)},disabled:S===p.length||"..."===y,className:"orange"},"PLUS")))};a(11);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.2b7fe5bb.chunk.js.map