(this["webpackJsonpword-braid"]=this["webpackJsonpword-braid"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=(n(13),n(2)),u=n(4),s=n(5);n(14);function l(e){return e.filter(Boolean).join(" ")}var f=Object(a.forwardRef)((function(e,t){var n=e.data,a=e.length,o=e.onChange,i=e.onBackspace,c=e.finished;return"number"===n.node?r.a.createElement("div",{className:l(["text-gold",c&&"fadeNode"]),style:{gridColumn:n.column+1,justifySelf:"end",alignSelf:"end"}},r.a.createElement("span",{className:"rowNumber"},n.number,".")):r.a.createElement("div",{style:{width:"calc(100vw / ".concat(a," - 4px)"),height:"calc(100vw / ".concat(a," - 4px)")}},r.a.createElement("input",{className:l(["node",c&&!n.main&&"fadeNode"]),ref:t,type:"text",style:{width:"100%",height:"100%",backgroundColor:n.main?"#fd0":"ivory"},value:n.value,onChange:o,onKeyDown:i}))})),m=[{index:1,text:"BAPTIST",offset:0,question:"Frikyrklig som gillar att bada"},{index:2,text:"SPEX",offset:2,question:"Ett sorts kul spektakel"},{index:3,text:"OMSTART",offset:5,question:"Verbal order om upprepning"},{index:4,text:"NAPOLEON",offset:0,question:"En komplex korsikan"},{index:5,text:"AMPEL",offset:0,question:"En liten kruka som man h\xe4nger blommor i fr\xe5n taket"},{index:6,text:"DESIRE",offset:0,question:"Du skriver en l\xe5ttext p\xe5 engelska och vill rimma p\xe5 eld"},{index:7,text:"BLOCKAD",offset:2,question:"Potentiellt konjunktursaboterande hinder mellan USA och Kina"},{index:8,text:"SCOUTER",offset:4,question:"Samlar tyglappar men saknar ovvar"},{index:9,text:"KONTRABAND",offset:3,question:"Coolare ord f\xf6r smuggelgods"},{index:10,text:"ELIZABETH",offset:0,question:"Namnet p\xe5 en \xe5rsrik matriark"}],d=m.reduce((function(e,t){return t.offset>e?t.offset:e}),0),p=m.reduce((function(e,t){return t.text.length-t.offset>e?t.text.length-t.offset:e}),0),v=d+p+1,g=m.map((function(e){return[{node:"number",number:e.index,offset:e.offset}].concat(Object(c.a)(e.text.split("").map((function(t,n){return{node:"input",letter:t,main:n===e.offset,value:""}}))))})),h=[[{node:"number",number:0,offset:-1}]].concat(Object(c.a)(g)).flat().map((function(e,t){return Object(u.a)({},e,{key:t,column:d-e.offset})}));var x=function(){var e=Object(a.useState)(h),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),d=l[0],p=l[1],g=Object(a.useRef)({});Object(a.useEffect)((function(){n.filter((function(e){return"input"===e.node})).every((function(e){return e.value===e.letter}))&&p(!0)}),[n]),Object(a.useEffect)((function(){var e=E();if(e){var t=n.map((function(t,n){return"input"===t.node?Object(u.a)({},t,{value:e[n]}):t}));o(t)}else b(n.map((function(e){return e.value})))}),[]);var x=function(e){return function(t){if(!(t.target.value.length>1)){var a=t.target.value.toUpperCase(),r=Object(c.a)(n);r[e].value=a,o(r),k(a,e),1===a.length&&function(e){var t=g.current[e+1];(t||(t=g.current[e+2]))&&t.focus()}(e)}}};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},"Manusfl\xe4tan 20/21"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"grid",style:{gridTemplateColumns:"repeat(".concat(v,", 1fr")}},n.map((function(e){return r.a.createElement(f,{ref:function(t){return g.current[e.key]=t},key:e.key,data:e,length:v,onChange:x(e.key),onBackspace:(t=e.key,function(e){""===n[t].value&&8===e.keyCode&&"input"===n[t-1].node&&g.current[t-1].focus()}),finished:d});var t}))),r.a.createElement("div",{className:"cluesList text-gold"},r.a.createElement("ol",{start:"0"},r.a.createElement("li",null,r.a.createElement("span",{className:"text-white"},"Temat p\xe5 n\xe4sta \xe5rs spex")),m.map((function(e){return r.a.createElement("li",{key:e.index},r.a.createElement("span",{className:"text-white"},e.question))}))))))},k=function(e,t){var n=E();n[t]=e,b(n)},b=function(e){localStorage.setItem("braidData",JSON.stringify(e))},E=function(){try{return JSON.parse(localStorage.getItem("braidData"))}catch(e){}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4de2029f.chunk.js.map