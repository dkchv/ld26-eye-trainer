(this["webpackJsonpeye-trainer"]=this["webpackJsonpeye-trainer"]||[]).push([[0],{2:function(e,t,a){e.exports={root:"TrainerWord_root__3WR0y",area:"TrainerWord_area__1Ex5n",wordLetter:"TrainerWord_wordLetter__2yh6k",isActive:"TrainerWord_isActive__1f9gM",letterBG:"TrainerWord_letterBG__zPNw2",pointer:"TrainerWord_pointer__cjyvQ",placeholder:"TrainerWord_placeholder__1ZlpT",Center:"TrainerWord_Center__14gs4",Left:"TrainerWord_Left__1RctK",Right:"TrainerWord_Right__2zumw",Top:"TrainerWord_Top__3VwX1",Bottom:"TrainerWord_Bottom__1F_Nm",word:"TrainerWord_word__1AcTP",editButton:"TrainerWord_editButton__rDSeK",letters:"TrainerWord_letters__bvxxh"}},21:function(e,t,a){e.exports={root:"Layout_root__KuT-s",menu:"Layout_menu__7RCvq",content:"Layout_content__3nMgS"}},24:function(e,t,a){e.exports={root:"Menu_root__3rsq6",back:"Menu_back__3UrCW"}},33:function(e,t,a){e.exports={letter:"Alphabet_letter__272Cm"}},36:function(e,t,a){e.exports=a(47)},41:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r);a(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,i=a(21),s=a.n(i),m=a(3),u=a(10),f=a(14),d=a(12),p=a(24),v=a.n(p);function b(e){var t=e.title,a=Object(u.g)(),r=Object(n.useState)(!1),c=Object(m.a)(r,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){i("/"!==a.pathname)}),[a]),o.a.createElement("div",{className:"".concat(v.a.root," d-flex ai-center fg-1")},o.a.createElement("div",{className:"".concat(v.a.back," col fg-0")},l&&o.a.createElement(f.a,{to:"/",className:"button-icon"},o.a.createElement(d.b,null))),o.a.createElement("div",{className:"col d-flex fg-1 jc-center"},t),o.a.createElement("div",{className:"col fg-0"},o.a.createElement(f.a,{to:"/alphabet",className:"button-icon"},o.a.createElement(d.e,null))),o.a.createElement("div",{className:"col fg-0"},o.a.createElement(f.a,{to:"/settings",className:"button-icon"},o.a.createElement(d.d,null))))}function h(e){var t=e.children;return o.a.createElement("div",{className:s.a.root},o.a.createElement("div",{className:s.a.menu},o.a.createElement(b,{title:"Eye Trainer"})),o.a.createElement("div",{className:s.a.content},t))}!function(e){e.ConfigUpdate="ConfigUpdate"}(l||(l={}));var g,E,j=function(e){return function(t){return t({type:l.ConfigUpdate,payload:e})}},O=a(7);!function(e){e.RandomLetter="RandomLetter",e.LetterToMovement="LetterToMovement",e.MovementToLetter="MovementToLetter"}(E||(E={}));var _=(g={},Object(O.a)(g,E.LetterToMovement,{header:"\u0422\u0435\u043a\u0441\u0442 \u2192 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f"}),Object(O.a)(g,E.MovementToLetter,{header:"\u0414\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u2192 \u0431\u0443\u043a\u0432\u044b"}),Object(O.a)(g,E.RandomLetter,{header:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0431\u0443\u043a\u0432\u044b"}),g),y=a(20),L=a.n(y),T=a(5),C=function(e){return e.config};function N(){var e=Object(T.b)(),t=Object(T.c)(C),a=Object(n.useCallback)((function(t){e(j({type:t.target.value}))}),[e]),r=Object(n.useCallback)((function(t){e(j({speed:1e3*Number(t.target.value)}))}),[e]);return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"row fs-small"},"\u0422\u0438\u043f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438:"),o.a.createElement("div",{className:"row"},Object.keys(E).map((function(e){var n=_[e];return o.a.createElement("div",{key:e,className:"row"},o.a.createElement("label",{className:L()("d-flex ai-center pointer",{isActive:e===t.type})},o.a.createElement("input",{className:"col-05 fg-0",checked:t.type===e,type:"radio",value:e,onChange:a,disabled:!0===n.disabled}),o.a.createElement("div",{className:"col-05 fg-1"},n.header)))})))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"row fs-small"},"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f (\u0441\u0435\u043a)"),o.a.createElement("div",{className:"row"},o.a.createElement("input",{type:"number",min:"0",max:"5",step:"0.1",value:t.speed/1e3,onChange:r}))))}var k,w=a(2),R=a.n(w);!function(e){e.Left="Left",e.Right="Right",e.Top="Top",e.Bottom="Bottom",e.Center="Center"}(k||(k={}));var B="\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042b\u042d\u042e\u042f ";var x=[[k.Top,k.Top,k.Top],[k.Bottom,k.Bottom,k.Bottom],[k.Left,k.Bottom,k.Left],[k.Left,k.Bottom,k.Right],[k.Left,k.Left,k.Top],[k.Left,k.Left,k.Bottom],[k.Left,k.Top,k.Left,k.Left],[k.Right,k.Top,k.Right],[k.Right,k.Bottom,k.Left],[k.Right,k.Bottom,k.Right],[k.Right,k.Bottom,k.Right,k.Right],[k.Right,k.Right,k.Right],[k.Top,k.Left,k.Left],[k.Top,k.Left,k.Top],[k.Left,k.Left,k.Left],[k.Top,k.Right,k.Right],[k.Top,k.Right,k.Top],[k.Top,k.Right,k.Bottom],[k.Bottom,k.Left,k.Left],[k.Bottom,k.Left,k.Top],[k.Bottom,k.Left,k.Bottom],[k.Right,k.Top,k.Left],[k.Bottom,k.Right,k.Top],[k.Top,k.Left,k.Bottom],[k.Right,k.Right,k.Bottom],[k.Left,k.Top,k.Left],[k.Left,k.Top,k.Right],[k.Left,k.Left,k.Bottom,k.Bottom],[k.Bottom,k.Right,k.Bottom],[k.Bottom,k.Right,k.Right],[k.Right,k.Right,k.Top],[k.Center,k.Center]];function W(e){if(!e)return console.warn("can't get queue for no value",e),null;var t=B.indexOf(e.toUpperCase());return-1===t?(console.warn("queue for letter not found",e),null):x[t]}var S,M={letter:"?",position:k.Center},A={letter:"",position:k.Center};function U(e){if(!e)return[M];var t=[A];return Array.from(e).forEach((function(e,a){var n=W(e);if(!n)return t.push({position:k.Center,letter:"?",index:a}),void t.push({position:k.Center,letter:"?",index:a});n.forEach((function(n){t.push({letter:e,position:n,index:a}),t.push({letter:e,position:k.Center,index:a})}))})),t.push(A),t}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=Array(e).fill(1).map((function(){var e=Math.floor(Math.random()*B.length);return B[e]})).join("");return U(t)}var q=(S={},Object(O.a)(S,k.Left,R.a.Left),Object(O.a)(S,k.Right,R.a.Right),Object(O.a)(S,k.Top,R.a.Top),Object(O.a)(S,k.Bottom,R.a.Bottom),Object(O.a)(S,k.Center,R.a.Center),S);function G(){var e=Object(T.c)(C),t=Object(n.useState)("\u041f\u0420\u0418\u0412\u0415\u0422"),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!1),i=Object(m.a)(l,2),s=i[0],u=i[1],f=Object(n.useState)((function(){return U(r)})),p=Object(m.a)(f,2),v=p[0],b=p[1],h=Object(n.useState)(0),g=Object(m.a)(h,2),E=g[0],j=g[1],_=v[E],y=Object(n.useCallback)((function(){j((function(e){return(e+1)%v.length}))}),[v]);Object(n.useEffect)((function(){var t=setInterval(y,e.speed);return function(){t&&clearInterval(t)}}),[y,e]);var N=Object(n.useCallback)((function(){u(!0)}),[]),k=Object(n.useCallback)((function(){var e,t=(e=r)?Array.from(e).map((function(e){return-1===B.indexOf(e.toUpperCase())?"_":e.toUpperCase()})).join(""):"";u(!1),b(U(t)),c(t),j(0)}),[r]),w=Object(n.useCallback)((function(e){c(e.target.value)}),[]);return o.a.createElement("div",{className:R.a.root},s?o.a.createElement("div",{className:"row fg-0 text-center"},o.a.createElement("form",{onSubmit:k},o.a.createElement("input",{className:"col fs-small",type:"text",value:r,onChange:w}),o.a.createElement("div",{className:"col button-icon small",onClick:k},o.a.createElement(d.a,null)))):[o.a.createElement("div",{key:"word",className:"".concat(R.a.word," row fg-0 pointer"),onClick:N},o.a.createElement("div",{className:"col text-center"},Array.from(r).map((function(e,t){return o.a.createElement("div",{className:L()(R.a.wordLetter,Object(O.a)({},R.a.isActive,t===_.index)),key:t},e)}))),o.a.createElement("div",{className:"".concat(R.a.editButton," col button-icon small")},o.a.createElement(d.c,null))),o.a.createElement("div",{key:"area",className:"".concat(R.a.area," row fg-1")},o.a.createElement("div",{className:R.a.letterBG},_.letter),o.a.createElement("div",{className:"".concat(R.a.pointer," ").concat(q[_.position]),style:{transition:"all ".concat(e.speed,"ms")}}))])}function D(){var e=Object(T.c)(C),t=Object(n.useState)((function(){return I()})),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(0),i=Object(m.a)(l,2),s=i[0],u=i[1],f=r[s],d=Object(n.useCallback)((function(){var e=s+1;if(e>=r.length)return c(I()),void u(0);u(e)}),[s,r.length]);return Object(n.useEffect)((function(){var t=setInterval(d,e.speed);return function(){t&&clearInterval(t)}}),[d,e]),o.a.createElement("div",{className:R.a.root},o.a.createElement("div",{className:"".concat(R.a.area," row fg-1")},o.a.createElement("div",{className:R.a.letterBG},f.letter),o.a.createElement("div",{className:"".concat(R.a.pointer," ").concat(q[f.position]),style:{transition:"all ".concat(e.speed,"ms")}})))}var K=a(22),z=[{id:"Left",keyCode:37,symbol:"\u2190",position:k.Left},{id:"Up",keyCode:38,symbol:"\u2191",position:k.Top},{id:"Right",keyCode:39,symbol:"\u2192",position:k.Right},{id:"Bottom",keyCode:40,symbol:"\u2193",position:k.Bottom},{id:"Space",keyCode:32,symbol:"\u2022",position:k.Center}];function J(){var e=Object(T.c)(C),t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(k.Center),i=Object(m.a)(l,2),s=i[0],u=i[1],f=Object(n.useState)([]),d=Object(m.a)(f,2),p=d[0],v=d[1],b=Object(n.useState)(null),h=Object(m.a)(b,2),g=h[0],E=h[1],j=Object(n.useCallback)((function(t){g&&clearTimeout(g),u(t);var a=setTimeout((function(){return u(k.Center)}),e.speed/2);E(a)}),[g,e.speed]),O=Object(n.useCallback)((function(e){var t=[].concat(Object(K.a)(p),[e]);j(e.position);var a=function(e){if(e.length<3||e.length>4)return null;var t=x.findIndex((function(t){return t.every((function(t,a){return t===e[a]}))}));return-1===t?null:B[t]}(t.map((function(e){return e.position})));if(a){var n=r.length>10?["..."].concat(Object(K.a)(r.splice(-3)),[a]):[].concat(Object(K.a)(r),[a]);c(n),v([])}else t.length>3?v([]):v(t)}),[r,p,j]),_=Object(n.useCallback)((function(e){if(console.log("--e",e.keyCode),27!==e.keyCode){var t=z.find((function(t){return t.keyCode===e.keyCode}));t&&O(t)}else p.length>0?v([]):c([])}),[p,O]),y=Object(n.useCallback)((function(e){O(z.find((function(t){return t.position===e})))}),[O]);return Object(n.useEffect)((function(){return window.addEventListener("keydown",_),function(){return window.removeEventListener("keydown",_)}}),[_]),o.a.createElement("div",{className:R.a.root},o.a.createElement("div",{className:"".concat(R.a.letters," row fg-0 d-flex ai-center")},0===r.length&&0===p.length&&o.a.createElement("div",{className:"color-gray fs-small"},"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f"),r.map((function(e,t){return o.a.createElement("div",{key:"".concat(e,"-").concat(t)},e)})),p.map((function(e,t){return o.a.createElement("div",{className:"color-blue fs-big",key:"".concat(e.id,"-").concat(t)},e.symbol)}))),o.a.createElement("div",{className:"".concat(R.a.area," row fg-1")},o.a.createElement("div",{className:"".concat(R.a.placeholder," \n          ").concat(q[k.Top]),onClick:function(){return y(k.Top)}}),o.a.createElement("div",{className:"".concat(R.a.placeholder," \n          ").concat(q[k.Left]),onClick:function(){return y(k.Left)}}),o.a.createElement("div",{className:"".concat(R.a.placeholder," \n          ").concat(q[k.Right]),onClick:function(){return y(k.Right)}}),o.a.createElement("div",{className:"".concat(R.a.placeholder," \n          ").concat(q[k.Bottom]),onClick:function(){return y(k.Bottom)}}),o.a.createElement("div",{className:"".concat(R.a.pointer," \n          ").concat(q[s]),style:{transition:"all ".concat(e.speed/2,"ms")}})))}function P(){switch(Object(T.c)(C).type){case E.LetterToMovement:return o.a.createElement(G,null);case E.MovementToLetter:return o.a.createElement(J,null);case E.RandomLetter:return o.a.createElement(D,null);default:return o.a.createElement(G,null)}}var F=a(33),Q=a.n(F);function V(){var e=Object(n.useState)(Array.from(B)),t=Object(m.a)(e,1)[0];return o.a.createElement("div",{className:"fg-1"},t.map((function(e){return o.a.createElement("div",{className:"row row-divided d-flex ai-center"},o.a.createElement("div",{className:"".concat(Q.a.letter," col")},e),o.a.createElement("div",{className:"col d-flex"},W(e).map((function(e,t){var a=z.find((function(t){return t.position===e}));return o.a.createElement("div",{key:"".concat(a.id,"-").concat(t),className:"fs-big color-blue"},a.symbol)}))))})))}function X(){return o.a.createElement(u.d,null,o.a.createElement(u.b,{path:"/settings",component:N}),o.a.createElement(u.b,{path:"/alphabet",component:V}),o.a.createElement(u.b,{path:"*",component:P}))}var Z=a(11),$=a(34),H=a(35),Y=a(28),ee={type:E.MovementToLetter,speed:600};var te={config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.ConfigUpdate:return Object(Y.a)(Object(Y.a)({},e),t.payload);default:return e}}},ae=Object(Z.createStore)(Object(Z.combineReducers)(te),Object($.composeWithDevTools)(Object(Z.applyMiddleware)(H.a)));function ne(){return o.a.createElement(T.a,{store:ae},o.a.createElement(u.a,null,o.a.createElement(h,null,o.a.createElement(X,null))))}console.log("LD26 Eye trainer version:","0.1.4"),c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.06e2b08d.chunk.js.map