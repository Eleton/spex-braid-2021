(this["webpackJsonpword-braid"]=this["webpackJsonpword-braid"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=(n(13),n(1)),l=n(4),s=n(5),u=(n(14),Object(a.forwardRef)((function(e,t){var n=e.data,a=e.length,o=e.onChange,i=e.onBackspace,c=e.finished;return"empty"===n.node?r.a.createElement("div",{ref:t,style:{width:"calc(90vw / ".concat(a),height:"calc(90vw / ".concat(a)}}):"number"===n.node?r.a.createElement("div",{className:c&&"fadeNode",style:{verticalAlign:"bottom",color:"#fd0"}},r.a.createElement("span",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"flex-end",alignItems:"flex-end",transform:"translate(-3px)",fontSize:"4vw"}},n.number,".")):r.a.createElement("input",{className:"node ".concat(c&&!n.main&&"fadeNode"),ref:t,type:"text",style:{width:"calc(90vw / ".concat(a),height:"calc(90vw / ".concat(a),backgroundColor:n.main?"#fd0":"ivory"},value:n.value,onChange:o,onKeyDown:i})}))),f=[{index:1,text:"BAPTIST",offset:0,question:"Frikyrklig som gillar att bada"},{index:2,text:"SPEX",offset:2,question:"Ett sorts kul spektakel"},{index:3,text:"OMSTART",offset:5,question:"Verbal order om upprepning"},{index:4,text:"NAPOLEON",offset:0,question:"En komplex korsikan"},{index:5,text:"AMPEL",offset:0,question:"En liten kruka som man h\xe4nger blommor i fr\xe5n taket"},{index:6,text:"DESIRE",offset:0,question:"Du skriver en l\xe5ttext p\xe5 engelska och vill rimma p\xe5 eld"},{index:7,text:"BLOCKAD",offset:2,question:"Potentiellt konjunktursaboterande hinder mellan USA och Kina"},{index:8,text:"SCOUTER",offset:4,question:"Samlar tyglappar men saknar ovvar"},{index:9,text:"KONTRABAND",offset:0,question:"Smuggelgods"},{index:10,text:"ELIZABETH",offset:0,question:"Namnet p\xe5 en \xe5rsrik matriark"}],d=f.reduce((function(e,t){return t.offset>e?t.offset:e}),0),m=f.reduce((function(e,t){return t.text.length-t.offset>e?t.text.length-t.offset:e}),0),p=2+d+m,g=f.map((function(e){return[].concat(Object(c.a)(new Array(d-e.offset).fill({node:"empty"})),[{node:"number",number:e.index}],Object(c.a)(e.text.split("").map((function(t,n){return{node:"input",letter:t,main:n===e.offset,value:""}}))),Object(c.a)(new Array(m-(e.text.length-e.offset)+1).fill({node:"empty"})))})),v=[[].concat(Object(c.a)(new Array(d+1).fill({node:"empty"})),[{node:"number",number:0}],Object(c.a)(new Array(m).fill({node:"empty"})))].concat(Object(c.a)(g)).flat().map((function(e,t){return Object(l.a)({},e,{key:t})}));var y=function(){var e=Object(a.useState)(v),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),d=Object(s.a)(i,2),m=d[0],g=d[1],y=Object(a.useRef)({});Object(a.useEffect)((function(){n.filter((function(e){return"input"===e.node})).every((function(e){return e.value===e.letter}))&&g(!0)}),[n]),Object(a.useEffect)((function(){if(localStorage.getItem("braidData")){var e=JSON.parse(localStorage.getItem("braidData")),t=n.map((function(t,n){return"input"===t.node?Object(l.a)({},t,{value:e[n]}):t}));o(t)}else{var a=JSON.stringify(n.map((function(e){return e.value})));localStorage.setItem("braidData",a)}}),[]);var b=function(e){return function(t){if(!(t.target.value.length>1)){var a=t.target.value.toUpperCase(),r=Object(c.a)(n);r[e].value=a,o(r),function(e,t){var n=JSON.parse(localStorage.getItem("braidData"));n[t]=e,localStorage.setItem("braidData",JSON.stringify(n))}(a,e),1===a.length&&y.current[e+1].focus()}}};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},"Manusfl\xe4tan 20/21"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"grid",style:{gridTemplateColumns:"repeat(".concat(p,", 1fr")}},n.map((function(e){return r.a.createElement(u,{ref:function(t){return y.current[e.key]=t},key:e.key,data:e,length:p,onChange:b(e.key),onBackspace:(t=e.key,function(e){""===n[t].value&&8===e.keyCode&&"input"===n[t-1].node&&y.current[t-1].focus()}),finished:m});var t}))),r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("ol",{style:{color:"#fd0"},start:"0"},r.a.createElement("li",null,r.a.createElement("span",{style:{color:"ivory"}},"Temat p\xe5 n\xe4sta \xe5rs spex")),f.map((function(e){return r.a.createElement("li",{key:e.index},r.a.createElement("span",{style:{color:"ivory"}},e.question))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.58fa4cd1.chunk.js.map