(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/Logo original RGB.c1b22935.jpg"},40:function(e,t,a){e.exports=a(59)},45:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=a(16),s=a(4),i=(a(45),function(){return r.a.createElement("div",{className:"about container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 offset-1 align-self-center"},r.a.createElement("h1",{className:"about_title"},"Lorem ipsum creation timelines"),r.a.createElement("div",null,r.a.createElement("p",null,"So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book."),r.a.createElement("p",null,"It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries."),r.a.createElement("p",null,"And anyways, as Cecil Adams reasoned, \u201c[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?\u201d Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset."),r.a.createElement("p",null,"McClintock wrote to Before & After to explain his discovery; \u201cWhat I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!\u201d (The editors published his letter in a correction headlined \u201cLorem Oopsum\u201d).")))))}),m=a(14),u=a(31),d=a.n(u),h=(a(46),function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1];return r.a.createElement("header",{className:"container header"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"mr-auto"},r.a.createElement("img",{src:d.a,alt:"",className:"logo"})),r.a.createElement("nav",{className:"align-items-end nav ".concat(a&&"nav-active")},r.a.createElement(s.a,null,r.a.createElement(o.b,{onClick:function(){return c(!1)},exact:!0,className:"link-item",activeClassName:"link-active",to:"/"},"Home"),r.a.createElement(o.b,{onClick:function(){return c(!1)},className:"link-item",activeClassName:"link-active",to:"/about"},"About us"))),r.a.createElement("div",{className:"click-area",onClick:function(){return c(!a)}},r.a.createElement("div",{className:"menu-button ".concat(a&&"menu-button-active")}))))}),p=[31,28,31,30,31,30,31,31,30,31,30,31],y=[0,1,2,3,4,5,6],f=1;function b(e,t){return!(!e||!t)&&(e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate())}function v(e,t){for(var a=[],n=new Date(e,t),r=function(e){var t=e.getMonth(),a=e.getFullYear(),n=p[t];return function(e){return!(e%4||!(e%100)&&e%400)}(a)&&t===f?n+1:n}(n),c=function(e){var t=e.getDay();return y[t]}(n),l=1,o=0;o<(r+c)/7;o++){a[o]=[];for(var s=0;s<7;s++)a[o][s]=0===o&&s<c||l>r?void 0:new Date(e,t,l++)}return a}a(51);var E=a(5),g=a.n(E),w=a(13),k={month:"",day:null,weekDay:""},N=a(39),D=a(62),O=(a(53),function(e){var t=e.setModalShow,a=Object(N.a)(e,["setModalShow"]),n=Object(w.c)((function(e){return e.month})),c=Object(w.c)((function(e){return e.day})),l=Object(w.c)((function(e){return e.weekDay}));return r.a.createElement(D.a,Object.assign({className:"modal"},a,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(D.a.Body,null,r.a.createElement("button",{className:"modal_btn",onClick:function(){return t(!1)}},""),r.a.createElement("div",{className:"modal_container"},r.a.createElement("div",{className:"modal_item"},r.a.createElement("label",{htmlFor:"month"},"Month"),r.a.createElement("input",{id:"month",type:"text",value:n,readOnly:!0})),r.a.createElement("div",{className:"modal_item"},r.a.createElement("label",{htmlFor:"day"},"Day"),r.a.createElement("input",{id:"day",type:"text",value:"".concat(c,"th ").concat(l),readOnly:!0})))))}),j={date:new Date,years:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],monthNames:["January","February","March","April","May","June","July","August","September","October","Novermber","December"],weekDayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},x=function(){var e=Object(n.useState)(j.date),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(new Date),o=Object(m.a)(l,1)[0],s=Object(n.useState)(null),i=Object(m.a)(s,2),u=i[0],d=i[1],h=Object(n.useState)(!1),p=Object(m.a)(h,2),y=p[0],f=p[1],E=Object(w.b)(),k=a.getFullYear(),N=a.getMonth(),D=j.monthNames,x=j.weekDayNames,C=v(k,N);return r.a.createElement("div",{className:"calendar"},r.a.createElement("div",{className:"calendar_header"},r.a.createElement("button",{className:"calendar_btn",onClick:function(){var e=new Date(k,N-1);c(e)}},""),r.a.createElement("div",null,D[N]," ",k),r.a.createElement("button",{className:"calendar_btn calendar_btn-next",onClick:function(){var e=new Date(k,N+1);c(e)}},"")),r.a.createElement("table",{className:"calendar_table"},r.a.createElement("tbody",null,C.map((function(e,t){return r.a.createElement("tr",{key:t,className:"week"},e.map((function(e,t){return e?r.a.createElement("td",{key:t,className:g()("day",{today:b(e,o),selected:b(e,u)}),onClick:function(){return function(e){d(e),E(function(e,t,a){return{type:"CALENDAR_DATA",payload:{month:e,day:t,weekDay:a}}}(D[e.getMonth()],e.getDate(),x[e.getDay()])),f(!0)}(e)}},e.getDate()):r.a.createElement("td",{key:t})})))})))),r.a.createElement("div",{className:"calendar_footer"},x.map((function(e,t){return r.a.createElement("div",{key:t},e[0])}))),r.a.createElement(O,{show:y,setModalShow:f}))},C=(a(55),function(){return r.a.createElement("main",{className:"container-fluid"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-xl-7 col-lg-6 col-12 content-wrapper "},r.a.createElement("div",{className:"col-12 col-md-8 offset-0 offset-md-4 text-wrapper"},r.a.createElement("h1",{className:"title"}," Choose the day for the meeting"),r.a.createElement("p",{className:"text"},"We encourage you to book your appointment online. This will save you time."))),r.a.createElement("div",{className:"calendar-wrapper col-xl-5 col-lg-6 col-12 "},r.a.createElement(x,null))))}),A=(a(56),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/about",render:function(){return r.a.createElement(i,null)}}),r.a.createElement(s.a,{path:"/",render:function(){return r.a.createElement(C,null)}})))}),M=(a(57),a(58),a(21)),S=Object(M.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CALENDAR_DATA":return{month:t.payload.month,day:t.payload.day,weekDay:t.payload.weekDay};default:return e}})),_=S;window.store=S;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(w.a,{store:_},r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.e445e15f.chunk.js.map