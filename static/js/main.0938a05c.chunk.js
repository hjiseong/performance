(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,c,t){},34:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(17),r=t.n(a),i=(t(24),t(7)),l=t(2),o=t(18),j=t.n(o),d=t(9),b=t(0);function u(e){var c=e.onClickMore,t=Object(l.f)().location.pathname;return console.log(t),Object(n.useEffect)((function(){var e,c=document.documentElement,t=window,n=t.scrollY||c.scrollTop,s=0,a=0,r=document.querySelector(".header-section");window.addEventListener("scroll",(function(){(e=t.scrollY||c.scrollTop)>n?s=2:e<n&&(s=1),s!==a&&function(e,c){r&&(2===e&&c>52?(r.classList.add("hide"),a=e):1===e&&(r.classList.remove("hide"),a=e))}(s,e),n=e}))}),[]),Object(b.jsx)("section",{className:"header-section",children:Object(b.jsx)("div",{className:"header-container",children:Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{className:"logo",children:Object(b.jsx)(i.b,{className:"logo-text",to:"/",children:"popo"})}),Object(b.jsxs)("ul",{className:"menu-list",children:[Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)(i.b,{className:"menu line-link ".concat("/"===t?"active":""),to:"/",children:"home"})}),Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)(i.b,{className:"menu line-link ".concat("/about"===t?"active":""),to:"/about",children:"about"})}),Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)(i.b,{className:"menu line-link ".concat("/careers"===t?"active":""),to:"/careers",children:"careers"})}),Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)(i.b,{className:"menu line-link ".concat("/contact"===t?"active":""),to:"/contact",children:"contact"})}),Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)(i.b,{className:"menu line-link ".concat("/blog"===t?"active":""),to:"/blog",children:"blog"})})]}),Object(b.jsxs)("button",{className:"more",onClick:function(){return c()},children:[Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"dot"}),Object(b.jsx)("span",{className:"text",children:"MENU"})]})]})})})}function m(){return Object(b.jsx)("div",{})}function h(){var e=Object(n.useState)(!1),c=Object(d.a)(e,2),t=c[0],s=c[1];return Object(b.jsx)("section",{className:t?"cookie-banner-section close":"cookie-banner-section",children:Object(b.jsxs)("div",{className:"cookie-banner-container",children:[Object(b.jsx)("div",{className:"description",children:Object(b.jsxs)("div",{children:["This website uses cookies to ensure you get the best experience.",Object(b.jsx)("a",{className:"policy-link",href:"#",children:"privacy policy"})]})}),Object(b.jsx)("button",{className:"accept-cookie",onClick:function(){return s(!0)},children:"accept cookies"}),Object(b.jsx)("button",{className:"cookie-banner-close",onClick:function(){return s(!0)},children:"X"})]})})}function x(e){var c=e.onClose,t=0,s=Object(n.useRef)(null),a=Object(n.useRef)(null),r=Object(n.useRef)(null),i=function(e){var c=e.ref,t=e.containerRef,n=e.cursorRef,s=e.setLeft,a={left:0,x:0},r=0,i=function(e){e.preventDefault(),e.stopPropagation();var i=e.clientX-a.x;c.current&&t.current&&n.current&&(r=a.left-i,s(.4*r),n.current.style.top="".concat(e.clientY-140-60,"px"),n.current.style.left="".concat(e.clientX-60,"px"))},l=function(e){var t,s;null===(t=c.current)||void 0===t||t.removeEventListener("mousemove",i),null===(s=n.current)||void 0===s||s.classList.remove("mousedown")};return{container:c.current,mouseDownHandler:function(e){var t;c.current&&n.current&&(a={left:c.current.scrollLeft,x:e.clientX},c.current.addEventListener("mousemove",i),c.current.addEventListener("mouseup",l),null===(t=n.current)||void 0===t||t.classList.add("mousedown"),n.current.style.top="".concat(e.clientY-140-60,"px"),n.current.style.left="".concat(e.clientX-60,"px"))}}}({ref:s,containerRef:a,cursorRef:r,setLeft:function(e){if(t+=e,s.current&&a.current){var c=3e3-a.current.clientWidth;t<0&&(t=0),t>=c&&(t=c),a.current.style.transform="translateX(-"+t+"px)"}}}).mouseDownHandler;return Object(n.useEffect)((function(){s.current&&a.current&&(s.current.addEventListener("mousedown",i),a.current.style.transition="all 1s"),window.addEventListener("wheel",(function(e){if(s.current&&a.current){t+=e.deltaY;var c=3e3-a.current.clientWidth;t<0&&(t=0),t>=c&&(t=c),a.current.style.transform="translateX(-"+t+"px)"}})),document.addEventListener("mousemove",(function(e){r.current&&(r.current.style.top="".concat(e.clientY-140-60,"px"),r.current.style.left="".concat(e.clientX-60,"px"))}))}),[s.current,a.current,r.current]),Object(b.jsxs)("div",{className:"navigation",children:[Object(b.jsx)("header",{className:"nav-header",children:Object(b.jsx)("button",{className:"nav-close",onClick:function(){return c()},children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 11.7 11.7",children:[Object(b.jsx)("path",{d:"M0,10.6L10.6,0l1.1,1.1L1.1,11.7L0,10.6z"}),Object(b.jsx)("path",{d:"M10.6,11.7L0,1.1L1.1,0l10.6,10.6L10.6,11.7z"})]})})}),Object(b.jsx)("div",{className:"carousel-filter"}),Object(b.jsxs)("section",{className:"carousel",ref:s,children:[Object(b.jsxs)("div",{className:"cursor",ref:r,children:[Object(b.jsx)("span",{className:"left"}),Object(b.jsx)("span",{className:"circle",children:"drag"}),Object(b.jsx)("span",{className:"right"})]}),Object(b.jsxs)("div",{className:"carousel-container",ref:a,children:[Object(b.jsxs)("div",{className:"carousel-card",children:[Object(b.jsx)("span",{className:"carousel-card-number",children:"01"}),Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:"https://i.pinimg.com/564x/2e/fe/3e/2efe3eca44f87ff7d8bdf6107b6b4c6b.jpg",alt:""})})]}),Object(b.jsxs)("div",{className:"carousel-card",children:[Object(b.jsx)("span",{className:"carousel-card-number",children:"02"}),Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:"https://i.pinimg.com/564x/3c/91/3f/3c913f60c02634de039b73462cb4d91e.jpg",alt:""})})]}),Object(b.jsxs)("div",{className:"carousel-card",children:[Object(b.jsx)("span",{className:"carousel-card-number",children:"03"}),Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:"https://i.pinimg.com/564x/2e/fe/3e/2efe3eca44f87ff7d8bdf6107b6b4c6b.jpg",alt:""})})]}),Object(b.jsxs)("div",{className:"carousel-card",children:[Object(b.jsx)("span",{className:"carousel-card-number",children:"04"}),Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:"https://i.pinimg.com/564x/3c/91/3f/3c913f60c02634de039b73462cb4d91e.jpg",alt:""})})]}),Object(b.jsxs)("div",{className:"carousel-card",children:[Object(b.jsx)("span",{className:"carousel-card-number",children:"05"}),Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:"https://i.pinimg.com/564x/2e/fe/3e/2efe3eca44f87ff7d8bdf6107b6b4c6b.jpg",alt:""})})]}),Object(b.jsxs)("div",{className:"carousel-card",children:[Object(b.jsx)("span",{className:"carousel-card-number",children:"06"}),Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:"https://i.pinimg.com/564x/3c/91/3f/3c913f60c02634de039b73462cb4d91e.jpg",alt:""})})]})]})]}),Object(b.jsxs)("section",{className:"compact-nav",children:[Object(b.jsx)("button",{className:"compact-link",children:"home"}),Object(b.jsx)("button",{className:"compact-link",children:"about"}),Object(b.jsx)("button",{className:"compact-link",children:"careers"}),Object(b.jsx)("button",{className:"compact-link",children:"contact"}),Object(b.jsx)("button",{className:"compact-link",children:"blog"})]}),Object(b.jsxs)("footer",{className:"nav-footer",children:[Object(b.jsx)("span",{children:"POPO\xae, inc"}),Object(b.jsx)("span",{children:"18 - 21\xa9"})]})]})}function O(){var e="#05368b",c="#edf5e1";return Object(b.jsx)("div",{className:"loading",children:Object(b.jsx)("div",{className:"box",children:Object(b.jsx)("div",{className:"text",children:Object(b.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"98px",height:"100px",viewBox:"0 0 98 100",enableBackground:"new 0 0 98 100",xmlSpace:"preserve",children:[Object(b.jsx)("path",{fill:c,d:"M85.715,26.547h-7.457c1.711-5.512,0.539-11.744-3.043-15.975c-3.587-4.236-9.158-6.766-14.896-6.766 c-4.109,0-7.852,1.29-10.733,3.6c-3.045-4.6-9.469-7.03-15.613-7.03c-7.055,0-14.166,3.225-16.001,10.323 c-1.147-0.196-2.492-0.347-3.91-0.347c-8.456,0-13.503,5.16-13.846,14.155c-0.185,4.844,1.047,8.677,3.662,11.394 c1.359,1.413,3.049,2.442,4.988,3.094v48.546c0,6.663,5.421,12.083,12.083,12.083h43.364c6.662,0,12.084-5.42,12.084-12.083v-9.373 c0,0,0,0.001,0.002,0.001c0.006,0,0.013-0.007,0.018-0.008l9.305,0.004c6.661,0,12.084-5.419,12.084-12.083V38.63 C97.799,31.968,92.378,26.547,85.715,26.547z"}),Object(b.jsx)("path",{fill:"none",d:"M85.715,32.589H75.023v-0.178c-2.688,3-6.535,4.606-11.271,4.606c-4.216,0-8.304-1.251-10.778-2.189 c-2.216,2.709-6.748,6.943-13.577,7.167c-0.236,0.008-0.467,0.012-0.696,0.012c-6.706,0-10.612-3.162-12.737-5.904 c-2.943,2.091-7.034,3.49-11.06,3.669V87.54c0,3.321,2.719,6.041,6.042,6.041h43.366c3.322,0,6.041-2.72,6.041-6.041v-9.376 c0-3.322,2.723-6.041,6.043-6.041h9.318c3.322,0,6.043-2.719,6.043-6.042v-27.45C91.758,35.307,89.037,32.589,85.715,32.589z"}),Object(b.jsx)("path",{fill:"none",d:"M75.042,32.605h10.69c1.653,0,3.156,0.674,4.25,1.759c-1.096-1.095-2.606-1.775-4.268-1.775H75.041 L75.042,32.605L75.042,32.605z"}),Object(b.jsx)("path",{fill:"none",d:"M39.416,42.01c6.829-0.225,11.361-4.458,13.576-7.167c2.476,0.938,6.562,2.188,10.777,2.188 c4.727,0,8.567-1.6,11.254-4.588v-0.032c-2.688,3-6.535,4.606-11.271,4.606c-4.216,0-8.303-1.251-10.778-2.189 c-2.216,2.709-6.748,6.943-13.577,7.167c-0.236,0.008-0.467,0.012-0.696,0.012c-4.608,0-7.895-1.493-10.189-3.317 c2.295,1.831,5.586,3.332,10.207,3.332C38.949,42.022,39.18,42.018,39.416,42.01z"}),Object(b.jsx)("path",{fill:"none",d:"M14.923,87.557V39.788c4.025-0.18,8.114-1.577,11.056-3.667c-0.004-0.006-0.01-0.012-0.014-0.018 c-2.943,2.091-7.034,3.49-11.06,3.669V87.54c0,1.669,0.688,3.186,1.792,4.281C15.603,90.727,14.923,89.217,14.923,87.557z"}),Object(b.jsx)("polygon",{fill:e,points:"80.162,59.326 80.162,45.717 75.939,45.717 75.939,59.33 80.162,59.33 "}),Object(b.jsx)("polygon",{fill:"none",points:"75.939,59.33 80.162,59.33 80.162,59.326 80.162,45.717 75.939,45.717 "}),Object(b.jsxs)("g",{children:[Object(b.jsx)("polygon",{fill:e,points:"75.939,59.33 80.162,59.33 80.162,59.326 80.162,45.717 75.939,45.717 \t"}),Object(b.jsx)("path",{fill:e,d:"M89.982,34.364c-1.094-1.085-2.597-1.759-4.25-1.759h-10.69h-0.001v-0.016h-0.018v-0.146 c-2.687,2.988-6.527,4.588-11.254,4.588c-4.215,0-8.302-1.25-10.777-2.188c-2.215,2.709-6.747,6.942-13.576,7.167 c-0.236,0.008-0.467,0.012-0.696,0.012c-4.621,0-7.912-1.501-10.207-3.332c-1.038-0.825-1.872-1.717-2.534-2.569 c-2.942,2.09-7.031,3.487-11.056,3.667v47.769c0,1.66,0.68,3.17,1.774,4.265c1.094,1.086,2.597,1.76,4.25,1.76h43.366 c3.322,0,6.041-2.72,6.041-6.041v-9.376c0-3.322,2.723-6.041,6.043-6.041h9.318c3.322,0,6.043-2.719,6.043-6.042v-27.45 C91.758,36.97,91.078,35.459,89.982,34.364z M85.6,59.297c0.01,0.526-0.062,2.496-1.494,3.98c-0.656,0.681-1.832,1.492-3.692,1.492 h-7.19c-1.502,0-2.721-1.219-2.721-2.72V42.999c0-1.502,1.219-2.719,2.721-2.719h7.03c1.979,0,3.205,0.814,3.884,1.498 c1.405,1.417,1.467,3.22,1.463,3.567V59.297z"})]}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new",d:"M28.018,81.221c0,1.975-1.6,3.573-3.574,3.573l0,0 c-1.974,0-3.574-1.601-3.574-3.573l0,0c0-1.975,1.601-3.574,3.574-3.574l0,0C26.418,77.646,28.018,79.246,28.018,81.221 L28.018,81.221z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"2.8s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M39.018,51.221c0,1.975-1.6,3.573-3.574,3.573l0,0 c-1.974,0-3.574-1.601-3.574-3.573l0,0c0-1.975,1.601-3.575,3.574-3.575l0,0C37.418,47.646,39.018,49.246,39.018,51.221 L39.018,51.221z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"4s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M65.018,81.221c0,1.975-1.6,3.573-3.574,3.573l0,0 c-1.973,0-3.573-1.601-3.573-3.573l0,0c0-1.975,1.601-3.574,3.573-3.574l0,0C63.418,77.646,65.018,79.246,65.018,81.221 L65.018,81.221z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"2 50;2 -50;",dur:"2.2s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M58.018,59.221c0,1.975-1.6,3.573-3.574,3.573l0,0 c-1.973,0-3.573-1.601-3.573-3.573l0,0c0-1.975,1.601-3.574,3.573-3.574l0,0C56.418,55.646,58.018,57.246,58.018,59.221 L58.018,59.221z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"2.5s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M23.165,61.221c0,0.949-0.771,1.719-1.721,1.719l0,0 c-0.949,0-1.72-0.77-1.72-1.719l0,0c0-0.951,0.771-1.721,1.72-1.721l0,0C22.394,59.5,23.165,60.27,23.165,61.221L23.165,61.221z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"3s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M45.165,71.221c0,2.055-1.667,3.719-3.721,3.719l0,0 c-2.053,0-3.719-1.664-3.719-3.719l0,0c0-2.056,1.667-3.72,3.719-3.72l0,0C43.498,67.501,45.165,69.165,45.165,71.221L45.165,71.221 z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"4s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M43.877,86.221c0,1.344-1.09,2.432-2.434,2.432l0,0 c-1.343,0-2.433-1.088-2.433-2.432l0,0c0-1.345,1.09-2.434,2.433-2.434l0,0C42.788,83.787,43.877,84.876,43.877,86.221 L43.877,86.221z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"3s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M63.999,42.22c0,1.411-1.146,2.554-2.556,2.554l0,0 c-1.408,0-2.553-1.143-2.553-2.554l0,0c0-1.411,1.145-2.554,2.553-2.554l0,0C62.854,39.666,63.999,40.809,63.999,42.22L63.999,42.22 z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"3s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M23.109,46.601c0,0.709-0.575,1.283-1.285,1.283l0,0 c-0.708,0-1.283-0.573-1.283-1.283l0,0c0-0.709,0.575-1.284,1.283-1.284l0,0C22.534,45.317,23.109,45.891,23.109,46.601 L23.109,46.601z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"2s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M53.075,49.444c0,0.709-0.574,1.283-1.284,1.283l0,0 c-0.708,0-1.283-0.573-1.283-1.283l0,0c0-0.709,0.575-1.283,1.283-1.283l0,0C52.5,48.161,53.075,48.734,53.075,49.444L53.075,49.444 z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"2.5s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M53.497,74.723c0,0.711-0.575,1.283-1.284,1.283l0,0 c-0.708,0-1.283-0.572-1.283-1.283l0,0c0-0.709,0.575-1.281,1.283-1.281l0,0C52.921,73.439,53.497,74.014,53.497,74.723 L53.497,74.723z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"2.2s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M26.061,70.771c0,0.709-0.575,1.283-1.284,1.283l0,0 c-0.708,0-1.283-0.574-1.283-1.283l0,0c0-0.709,0.575-1.283,1.283-1.283l0,0C25.486,69.486,26.061,70.062,26.061,70.771 L26.061,70.771z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 50;0 -50;",dur:"2s",repeatCount:"indefinite"})}),Object(b.jsx)("path",{opacity:"0.3",fill:c,enableBackground:"new    ",d:"M65.877,68.221c0,1.344-1.09,2.432-2.434,2.432l0,0 c-1.344,0-2.434-1.088-2.434-2.432l0,0c0-1.345,1.09-2.434,2.434-2.434l0,0C64.788,65.787,65.877,66.876,65.877,68.221 L65.877,68.221z",children:Object(b.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"-10 50;-10 -50;",dur:"5s",repeatCount:"indefinite"})})]})})})})}function p(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("div",{className:"word-1",children:Object(b.jsx)("span",{children:"THIS IS"})}),Object(b.jsx)("div",{className:"word-2",children:Object(b.jsx)("span",{children:"ABOUT PAGE."})})]}),Object(b.jsx)("div",{style:{height:"300vh"}})]})}function f(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("div",{className:"word-1",children:Object(b.jsx)("span",{children:"THIS IS"})}),Object(b.jsx)("div",{className:"word-2",children:Object(b.jsx)("span",{children:"CAREERS PAGE."})})]}),Object(b.jsx)("div",{style:{height:"300vh"}})]})}function v(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("div",{className:"word-1",children:Object(b.jsx)("span",{children:"THIS IS"})}),Object(b.jsx)("div",{className:"word-2",children:Object(b.jsx)("span",{children:"CONTACT PAGE."})})]}),Object(b.jsx)("div",{style:{height:"300vh"}})]})}function N(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("div",{className:"word-1",children:Object(b.jsx)("span",{children:"Pursue"})}),Object(b.jsx)("div",{className:"word-2",children:Object(b.jsx)("span",{children:"efficiency."})}),Object(b.jsx)("div",{className:"word-3",children:Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{className:"circle"}),"Find an"]})}),Object(b.jsx)("div",{className:"word-4",children:Object(b.jsx)("span",{children:"easier way."})})]}),Object(b.jsx)("div",{style:{height:"300vh"}})]})}function g(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("div",{className:"word-1",children:Object(b.jsx)("span",{children:"THIS IS"})}),Object(b.jsx)("div",{className:"word-2",children:Object(b.jsx)("span",{children:"BLOG PAGE."})})]}),Object(b.jsx)("div",{style:{height:"300vh"}})]})}function y(){var e=Object(n.useRef)(null),c=function(e){var c=e.wrapper,t=0,n=0,s=document.body;return{smoothScroll:function e(){var a=null===c||void 0===c?void 0:c.current;a&&(t=a.getBoundingClientRect().height-1),s.style.height=Math.floor(t)+"px";var r="translateY(-"+(n+=.04*(window.pageYOffset-n))+"px) translateZ(0)";a&&(a.style.transform=r),requestAnimationFrame(e)}}}({wrapper:e}).smoothScroll,t=Object(n.useState)(!0),s=Object(d.a)(t,2),a=s[0],r=s[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),j=o[0],y=o[1],w=Object(n.useState)(!1),L=Object(d.a)(w,2),C=L[0],k=L[1],M=Object(n.useState)(!1),T=Object(d.a)(M,2),z=T[0],X=T[1];return Object(n.useEffect)((function(){setTimeout((function(){r(!1)}),3e3),setTimeout((function(){y(!0)}),2250),setTimeout((function(){X(!0)}),4e3)}),[]),Object(n.useEffect)((function(){c()}),[e.current,c]),Object(b.jsxs)(b.Fragment,{children:[a&&Object(b.jsx)(O,{}),C&&Object(b.jsx)(x,{onClose:function(){k(!1),document.body.style.overflow="auto"}}),j&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{onClickMore:function(){k(!0),document.body.style.overflow="hidden"}}),Object(b.jsx)("main",{className:"contents-section smooth-wrapper",ref:e,children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(b.jsx)(l.a,{path:"/about",component:p}),Object(b.jsx)(l.a,{path:"/careers",component:f}),Object(b.jsx)(l.a,{path:"/contact",component:v}),Object(b.jsx)(l.a,{path:"/blog",component:g}),Object(b.jsx)(l.a,{children:Object(b.jsx)(N,{})})]})}),Object(b.jsx)(m,{})]}),z&&Object(b.jsx)(h,{})]})}function w(){return Object(b.jsx)(i.a,{basename:"performance",children:Object(b.jsx)(l.a,{path:"/",component:y})})}j.a.config(),r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0938a05c.chunk.js.map