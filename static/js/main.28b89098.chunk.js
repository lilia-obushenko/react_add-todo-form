(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{89:function(e,a,t){},90:function(e,a,t){},92:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(27),i=t.n(n),r=t(15),s=t(10),c=t(0),o=(t(89),t(144)),l=t(145),d=t(140),u=t(139),m=t(142),j=t(147),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],h=t(60);function f(e){return b.find((function(a){return a.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(h.a)(Object(h.a)({},e),{},{user:f(e.userId)})})),x=t(67),p=t.n(x),v=(t(90),t(2)),y=function(e){var a=e.user,t=a.name,n=a.email;return Object(v.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:t})},N=(t(92),function(e){var a=e.todo,t=a.id,n=a.title,i=a.completed,r=a.user;return Object(v.jsx)(o.a,{elevation:2,sx:{backgroundColor:"#e0f7fa"},children:Object(v.jsxs)("article",{"data-id":t,className:p()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(v.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(v.jsx)(y,{user:r})]})})}),S=function(e){var a=e.todos;return Object(v.jsx)("section",{className:"TodoList",children:a.map((function(e){return Object(v.jsx)(N,{todo:e},e.id)}))})},g=function(){var e=Object(c.useState)(""),a=Object(s.a)(e,2),t=a[0],n=a[1],i=Object(c.useState)(""),h=Object(s.a)(i,2),x=h[0],p=h[1],y=Object(c.useState)(!1),N=Object(s.a)(y,2),g=N[0],C=N[1],w=Object(c.useState)(!1),I=Object(s.a)(w,2),k=I[0],_=I[1],D=Object(c.useState)(O),M=Object(s.a)(D,2),T=M[0],E=M[1];return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(o.a,{elevation:3,sx:{width:"max-content",margin:"auto",padding:3,backgroundColor:"#e1f5fe"},children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)("h1",{className:"title",children:"Add todo form"}),Object(v.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),t.trim()||C(!0),x||_(!0),t&&x){var a={id:(i=O,Math.max.apply(Math,Object(r.a)(i.map((function(e){return e.id}))))+1),title:t,userId:Number(x),completed:!1,user:f(Number(x))};E([].concat(Object(r.a)(T),[a])),n(""),p("")}var i},children:[Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)(d.a,{sx:{width:300},label:"Enter a title",type:"text",autoComplete:"off",value:t,onChange:function(e){n(e.target.value),C(!1)}}),g&&Object(v.jsx)("div",{className:"error",children:"Please enter a title"})]}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsxs)(u.a,{sx:{width:300},displayEmpty:!0,value:x,onChange:function(e){p(e.target.value),_(!1)},children:[Object(v.jsx)(m.a,{value:"",disabled:!0,children:"Choose a user"}),b.map((function(e){var a=e.id,t=e.name;return Object(v.jsx)(m.a,{value:a,children:t},a)}))]}),k&&Object(v.jsx)("div",{className:"error",children:"Please choose a user"})]}),Object(v.jsx)(j.a,{sx:{width:300},variant:"contained",type:"submit",children:"Add"})]}),Object(v.jsx)(S,{todos:T})]})})})};i.a.render(Object(v.jsx)(g,{}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.28b89098.chunk.js.map