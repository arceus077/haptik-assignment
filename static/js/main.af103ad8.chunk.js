(this.webpackJsonphaptik_assignment=this.webpackJsonphaptik_assignment||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(8),c=n.n(i),s=(n(13),n(1)),o=n(3),u=n(4),l=n.p+"static/media/favfalse.c94695f1.svg",d=(n(14),n(0));var j=function(e){var t=e.addFavourite;return Object(d.jsx)("span",{className:"addfav",onClick:t,children:Object(d.jsx)("img",{src:l,className:"",alt:"Add Favourite"})})},f=n.p+"static/media/favtrue.9671af64.svg";var v=function(e){var t=e.removeFavourite;return Object(d.jsx)("span",{className:"remfav",onClick:t,children:Object(d.jsx)("img",{src:f,className:"",alt:"Add Favourite"})})},m=n.p+"static/media/delete.5a6e1283.svg";var b=function(e){var t=e.deleteFriend;return Object(d.jsx)("span",{className:"remove",onClick:t,children:Object(d.jsx)("img",{src:m,className:"",alt:"Delete Friend"})})},O=n.p+"static/media/rightarrow.395b7772.svg",p=n.p+"static/media/leftarrow.57a75a06.svg";var x=function(e){for(var t=e.display,n=e.totalPage,a=e.page,r=e.previousPage,i=e.nextPage,c=e.setPage,s=[],o=function(e){s.push(Object(d.jsx)("div",{className:"pages",value:e+1,style:{backgroundColor:a===e?"rgb(0 212 243)":"",padding:"5px 5px",borderLeft:0===e?"2px solid black":"",borderRight:0===e?"2px solid black":""},onClick:function(){return c(e)},children:e+1},e))},u=0;u<n;u++)o(u);return n>0&&t?Object(d.jsxs)("div",{className:"pagination",children:[a>0?Object(d.jsx)("div",{onClick:r,children:Object(d.jsx)("img",{src:p,className:"prev",alt:"Previous Page"})}):null,s,a<n-1?Object(d.jsx)("div",{onClick:i,className:"next",children:Object(d.jsx)("img",{src:O,className:"",alt:"Next Page"})}):null]}):null},h=(n(16),0);var g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),c=Object(u.a)(i,2),l=c[0],f=c[1],m=Object(a.useState)("name"),O=Object(u.a)(m,2),p=O[0],g=O[1],C=Object(a.useState)(""),y=Object(u.a)(C,2),N=y[0],F=y[1],k=Object(a.useState)(!0),S=Object(u.a)(k,2),P=S[0],L=S[1],U=Object(a.useState)(0),w=Object(u.a)(U,2),z=w[0],A=w[1],E=Object(a.useState)(0),T=Object(u.a)(E,2),B=T[0],D=T[1],I=function(e){var t=Math.ceil(e/4);t<B&&(h=z>0?4*(z-1):0,A(z>0?z-1:0));console.log(t,h,z),D(t)},J=function(e){var t=n.map((function(e){return e.name})).indexOf(e),a=l.map((function(e){return e.name})).indexOf(e),i=Object(o.a)(n).sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}));g("name");var c=Object(o.a)(l);i[t]=Object(s.a)(Object(s.a)({},n[t]),{},{favourite:!0}),c[a]=Object(s.a)(Object(s.a)({},c[a]),{},{favourite:!0}),r(i),f(c)},M=function(e){var t=n.map((function(e){return e.name})).indexOf(e),a=l.map((function(e){return e.name})).indexOf(e),i=Object(o.a)(n).sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}));g("name");var c=Object(o.a)(l);i[t]=Object(s.a)(Object(s.a)({},n[t]),{},{favourite:!1}),c[a]=Object(s.a)(Object(s.a)({},c[a]),{},{favourite:!1}),r(i),f(c)},W=function(e){var t=Object(o.a)(l),a=l.map((function(e){return e.name})).indexOf(e),i=n.filter((function(t){return t.name!==e})).sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}));g("name"),t[a]=Object(s.a)(Object(s.a)({},t[a]),{},{friend:!1,favourite:!1}),r(i),f(t),I(i.length)};return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("header",{className:"App-header",children:Object(d.jsxs)("div",{className:"cont",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("p",{children:"Friends List"})}),Object(d.jsxs)("div",{style:{border:"2px solid bule"},children:[Object(d.jsxs)("div",{className:"drop",children:[Object(d.jsx)("label",{for:"sort-select",children:"Sort By: "}),Object(d.jsxs)("select",{name:"sort",id:"sort-select",value:p,onChange:function(e){g(e.target.value);var t=[];t="name"===e.target.value?n.sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0})):n.sort((function(e,t){var n=e.favourite;return n===t.favourite?0:n?-1:1})),r(t)},children:[Object(d.jsx)("option",{value:"favourite",children:"Favourites"}),Object(d.jsx)("option",{value:"name",children:"Name"})]})]}),Object(d.jsx)("input",{className:"search",value:N,onChange:function(e){var t=e.target.value;t||L(!0),F(t)},type:"search",placeholder:"Enter your friend's name",onKeyPress:function(e){if("Enter"===e.key){if(!N.trim())return L(!0);if(L(!1),N.trim().split(" ").length>3)return f([]);if(!/^[a-z a-z]+$/i.test(N.trim()))return f([]);var t=n.filter((function(e){return e.name.toLowerCase().includes(N.trim().toLowerCase())}));(null===t||void 0===t?void 0:t.length)>0&&N.trim()?t.find((function(e){return e.name.toLowerCase()===N.trim().toLowerCase()}))?f(Object(o.a)(t)):f([{name:N.trim(),friend:!1,favourite:!1}].concat(Object(o.a)(t))):f([{name:N.trim(),friend:!1,favourite:!1}])}}}),P?n.slice(h,h+4).map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"searched",children:[Object(d.jsxs)("div",{style:{paddingLeft:"4px"},children:[Object(d.jsx)("span",{style:{fontSize:"25px",fontWeight:"700px",fontFamily:"monospace"},children:e.name}),Object(d.jsx)("div",{style:{fontSize:"10px"},children:"is your friend"})]}),Object(d.jsxs)("div",{style:{marginTop:"8px"},children:[e.favourite?Object(d.jsx)(v,{removeFavourite:function(){return M(e.name)}}):Object(d.jsx)(j,{addFavourite:function(){return J(e.name)}}),Object(d.jsx)(b,{deleteFriend:function(){return W(e.name)}})]})]},t),Object(d.jsx)("hr",{})]})})):0===(null===l||void 0===l?void 0:l.length)?Object(d.jsx)("div",{children:"Enter A Valid Name"}):l.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"searched",children:[Object(d.jsxs)("div",{style:{paddingLeft:"4px"},children:[Object(d.jsx)("span",{style:{fontSize:"25px",fontWeight:"700px",fontFamily:"monospace"},children:e.name}),e.friend?Object(d.jsx)("div",{style:{fontSize:"10px"},children:"is your friend"}):Object(d.jsx)("div",{style:{fontSize:"10px"},children:"is not your friend"})]}),e.friend?Object(d.jsxs)("div",{style:{marginTop:"8px"},children:[e.favourite?Object(d.jsx)(v,{removeFavourite:function(){return M(e.name)}}):Object(d.jsx)(j,{addFavourite:function(){return J(e.name)}}),Object(d.jsx)(b,{deleteFriend:function(){return W(e.name)}})]}):Object(d.jsx)("button",{onClick:function(){return function(e){var t=e.name,a=Object(o.a)(l),i=[].concat(Object(o.a)(n),[{name:t,friend:!0,favourite:!1}]).sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}));g("name");var c=l.map((function(e){return e.name})).indexOf(t);a[c]=Object(s.a)(Object(s.a)({},a[c]),{},{friend:!0}),r(i),f(a),I(i.length),L(!1)}(e)},children:"Add Friend"})]},t),Object(d.jsx)("hr",{})]})}))]}),Object(d.jsx)(x,{totalPage:B,page:z,display:P,setPage:function(e){h=4*e||0,A(e||0)},nextPage:function(){var e=z<B-1?z+1:B-1;h=4*e||0,A(e)},previousPage:function(){var e=z>0?z-1:0;h=4*e||0,A(e)}})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.af103ad8.chunk.js.map