(this["webpackJsonptodos-app2.0"]=this["webpackJsonptodos-app2.0"]||[]).push([[0],{98:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),r=c(27),a=c.n(r),i=c(19),s=c(34),l=c(50),j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),o(e),r(e),a(e)}))},d=c(58),b=c(7),h=c(55),O=function(e){return"".concat(100*e/2616,"rem")},u=c(22),x=c(12),g=c(4),f=c(36),m=c(52),p=c(11),v=c(3),C=Object(p.b)({key:"folderState",default:""});function w(e){var t=e.name,c=Object(p.d)(C),n=Object(g.a)(c,2),o=n[0],r=n[1];return Object(v.jsx)(l.h,{bg:o===t?"orange.200":"",borderRadius:O(5),cursor:"pointer",_hover:{bg:o!==t?"orange.200":""},onClick:function(){r(t)},children:Object(v.jsx)(l.j,{pl:O(15),children:t})})}function k(){var e=o.a.useState([]),t=Object(g.a)(e,2),c=t[0],n=t[1],r=o.a.useState(""),a=Object(g.a)(r,2),i=a[0],s=a[1],j=Object(p.d)(C),d=Object(g.a)(j,2)[1],b=function(e){e.preventDefault(),i.trim()&&(n((function(e){return[].concat(Object(x.a)(e),[i])})),s(""),d(i))};return Object(v.jsxs)(l.d,{direction:"column",mt:O(10),children:[Object(v.jsx)(f.a,{onSubmit:b,as:"form",children:Object(v.jsxs)(l.i,{direction:"row",align:"end",justify:"space-evenly",ml:O(20),children:[Object(v.jsx)(m.a,{variant:"flushed",value:i,placeholder:"Enter todo folder name...",size:"xs",w:O(200),onChange:function(e){s(e.target.value)}}),Object(v.jsx)(l.c,{size:O(30),bg:"orange",color:"white",cursor:"pointer",_hover:{bg:"orange.300"},_active:{bg:"orange.200"},onClick:b,children:Object(v.jsx)(u.a,{w:O(20),h:O(20),_active:{w:"2",h:"2"}})})]})}),c.length?Object(v.jsxs)(l.d,{direction:"column",children:[Object(v.jsx)(l.a,{pl:O(20),children:Object(v.jsx)(l.j,{textDecoration:"underline",mt:O(10),children:"TodoFolder"})}),Object(v.jsx)(l.a,{children:Object(v.jsx)(l.g,{p:"0 ".concat(O(5)),children:c.map((function(e,t){return Object(v.jsx)(w,{name:e},t)}))})})]}):null]})}var S=c(6),y=c(54),M=c(53),_=c(38),N=c(28),T=Object(p.b)({key:"editTodoState",default:void 0});function D(e){var t=e.id,c=e.todo,n=e.createdAt,o=e.isCompleted,r=e.isChecked,a=e.setCheck,i=Object(p.d)(z),s=Object(g.a)(i,2),j=s[0],d=s[1],b=Object(p.d)(T),h=Object(g.a)(b,2)[1];return Object(v.jsxs)(M.f,{_hover:{bg:"green.300",borderRadius:O(10),cursor:"pointer"},children:[Object(v.jsx)(M.c,{p:O(5),children:Object(v.jsx)(_.a,{isChecked:r,onChange:function(e){return a(t-1,e.target.checked)}})}),Object(v.jsx)(M.c,{p:O(5),isNumeric:!0,children:t}),Object(v.jsx)(M.c,{p:O(5),children:c}),Object(v.jsx)(M.c,{p:O(5),children:n}),Object(v.jsx)(M.c,{p:O(5),children:o?"Completed":"Incomplete"}),Object(v.jsx)(M.c,{p:O(5),insetInline:"auto",children:Object(v.jsxs)(l.e,{children:[Object(v.jsx)(l.c,{size:O(30),_hover:{bg:"green.400"},onClick:function(){return h(t-1)},children:Object(v.jsx)(u.d,{w:O(20),h:O(20),color:"blackAlpha.500",mr:O(2.5),_active:{w:"2",h:"2"}})}),Object(v.jsx)(l.c,{size:O(30),_hover:{bg:"green.400"},onClick:function(){d([].concat(Object(x.a)(j.data.slice(0,t-1)),Object(x.a)(j.data.slice(t))))},children:Object(v.jsx)(u.c,{color:"red.700",ml:O(2.5),w:O(20),h:O(20),_active:{w:"2",h:"2"}})})]})})]})}var F=Object(p.b)({key:"todoListState",default:{}}),z=Object(p.c)({key:"folderTodoListState",get:function(e){var t=e.get,c=t(C);return t(F)[c]||{data:[]}},set:function(e,t){var c=e.set,n=e.get,o=n(C),r=n(F);c(F,Object(S.a)(Object(S.a)({},r),{},Object(N.a)({},o,{data:t})))}});function A(){var e=Object(p.e)(C),t=Object(p.d)(z),c=Object(g.a)(t,2),n=c[0],r=c[1],a=Object(p.d)(T),i=Object(g.a)(a,2),s=i[0],j=i[1],d=o.a.useState(""),b=Object(g.a)(d,2),h=b[0],w=b[1],k=o.a.useRef(null);console.log(s),o.a.useEffect((function(){isNaN(s)||(w(n.data[s].todo),k.current.focus())}),[s]),o.a.useEffect((function(){e&&k.current.focus()}),[e]);var S=function(e){if(e.preventDefault(),h.trim()){var t={todo:h.trim(),createdAt:(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString(),isCompleted:!1};isNaN(s)?r([].concat(Object(x.a)(n.data),[t])):(r([].concat(Object(x.a)(n.data.slice(0,s)),[t],Object(x.a)(n.data.slice(s+1)))),j(void 0)),w("")}};return Object(v.jsx)(f.a,{as:"form",onSubmit:S,isDisabled:!e,children:Object(v.jsxs)(m.b,{variant:"filled",size:"sm",children:[Object(v.jsx)(m.a,{placeholder:"Enter todo job...",value:h,onChange:function(e){return w(e.target.value)},_focus:{borderRadius:O(5)},ref:k}),Object(v.jsx)(m.c,{children:Object(v.jsx)(l.c,{size:O(30),bg:"orange",color:"white",cursor:"pointer",_hover:{bg:"orange.300"},_active:{bg:"orange.200"},onClick:S,children:Object(v.jsx)(u.a,{w:O(20),h:O(20),_active:{w:"2",h:"2"}})})})]})})}function B(){var e=Object(p.e)(C),t=Object(p.d)(z),c=Object(g.a)(t,2),r=c[0],a=c[1],i=o.a.useState([]),s=Object(g.a)(i,2),j=s[0],d=s[1];o.a.useEffect((function(){d(Array.from(r.data,(function(){return!1})))}),[r.data.length]);var b=j.every(Boolean),h=j.some(Boolean)&&!b,u=function(e,t){d((function(c){return[].concat(Object(x.a)(c.slice(0,e)),[t],Object(x.a)(c.slice(e+1)))}))},f=e?"Todo folder selected. Now add todo in the folder":"No todo folder selected. Please select first or create one.";return r.data.length?Object(v.jsxs)(l.d,{direction:"column",m:"".concat(O(10)," ").concat(O(20)),align:"center",children:[Object(v.jsx)(l.d,{direction:"row",wrap:"nowrap",alignSelf:"flex-start",justify:"space-between",mb:O(20),children:Object(v.jsx)(l.a,{children:Object(v.jsx)(y.a,{h:O(40),onClick:function(){a(r.data.map((function(e,t){return Object(S.a)(Object(S.a)({},e),{},{isCompleted:!e.isCompleted&&j[t]})})))},isDisabled:!j.some(Boolean),children:"Change Status"})})}),Object(v.jsxs)(M.a,{variant:"unstyled",size:"sm",children:[Object(v.jsx)(M.e,{borderBottom:"".concat(O(2)," solid silver"),children:Object(v.jsxs)(M.f,{children:[Object(v.jsx)(M.d,{p:O(5),children:Object(v.jsx)(_.a,{isChecked:b,isIndeterminate:h,onChange:function(e){return d(Array.from(r.data,(function(){return e.target.checked})))}})}),Object(v.jsx)(M.d,{isNumeric:!0,p:O(5),children:"Id"}),Object(v.jsx)(M.d,{p:O(5),children:"Todo"}),Object(v.jsx)(M.d,{p:O(5),children:"Created At"}),Object(v.jsx)(M.d,{p:O(5),children:"Status"})]})}),Object(v.jsx)(M.b,{children:r.data.map((function(e,t){var c=Object.assign({},e);return Object(n.createElement)(D,Object(S.a)(Object(S.a)({},c),{},{key:t,id:t+1,isChecked:j[t],setCheck:u}))}))})]})]}):Object(v.jsx)(l.b,{p:O(20),children:Object(v.jsx)(l.j,{children:f})})}function E(){var e=Object(s.c)(),t=e.colorMode,c=e.toggleColorMode,n="dark"===t;return Object(v.jsxs)(l.d,{direction:"row",height:"100vh",overflow:"hidden",children:[Object(v.jsxs)(l.a,{w:O(280),className:"globalSideBg",children:[Object(v.jsx)(l.i,{direction:"column",align:"start",ml:O(20),children:Object(v.jsxs)(l.i,{direction:"row",align:"center",children:[Object(v.jsx)(u.b,{w:O(30),h:O(30),pos:"relative",top:O(5),color:"#7928CA"}),Object(v.jsx)(l.f,{as:"h6",ml:"".concat(O(5)," !important"),bgGradient:"linear(to-l, #7928CA, #FF0080)",bgClip:"text",children:"Todo"})]})}),Object(v.jsx)(k,{})]}),Object(v.jsxs)(l.a,{flex:1,children:[Object(v.jsxs)(l.d,{direction:"column",wrap:"nowrap",align:"center",justify:"flex-start",h:O(205),shadow:"base",children:[Object(v.jsx)(l.a,{alignSelf:"flex-end",mt:O(20),mb:O(20),mr:O(20),children:Object(v.jsx)(h.a,{isChecked:n,onChange:c})}),Object(v.jsx)(l.a,{w:O(380),children:Object(v.jsx)(A,{})})]}),Object(v.jsx)(B,{})]})]})}var L={fonts:{heading:'"Nunito Sans", sans-serif',body:'"Nunito Sans", sans-serif',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'}},I={base:"0px",sm:"320px",md:"768px",lg:"960px",xl:"1200px","2xl":"1536px"},R={global:function(e){return console.log(e),{html:{fontSize:(e.colorMode,"calc(1vw + 1vh + .5vmin)")},body:{color:"light"===e.colorMode?"green.700":"blue.600",bgGradient:"light"===e.colorMode?"linear(to-t, green.200, green.500)":"linear(to-tr, gray.800, gray.900)"},".globalSideBg":{bgGradient:"light"===e.colorMode?"linear(to-tr, orange.100, orange.200)":"linear(to-t, teal.900, teal.800)"}}}},G=Object(i.b)(Object(S.a)(Object(S.a)({breakpoints:I},L),{},{config:{initialColorMode:"light",useSystemColorMode:!1},styles:R}));a.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(p.a,{children:Object(v.jsx)(i.a,{theme:G,children:Object(v.jsx)(d.a,{children:Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{path:"todos-app2.0",element:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(s.b,{initialColorMode:G.config.initialColorMode}),Object(v.jsx)(E,{})]})}),Object(v.jsx)(b.a,{path:"*",element:Object(v.jsx)(l.a,{as:"main",p:O(5),children:Object(v.jsx)(l.j,{children:"There's nothing here"})})})]})})})})}),document.getElementById("root")),j()}},[[98,1,2]]]);
//# sourceMappingURL=main.dcc061ce.chunk.js.map