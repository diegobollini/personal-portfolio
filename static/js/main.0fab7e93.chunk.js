(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{35:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},63:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),c=i(20),l=i.n(c),a=(i(50),i(18)),s=i(7),r=i(26),b=i(67),j=i(68),d=(i(51),i(1)),u=function(){var e=Object(n.useState)(1),t=Object(r.a)(e,2),i=t[0],o=t[1],c=window.location.pathname;return Object(n.useEffect)((function(){switch(c){case"/about":o(3);break;case"/projects":o(2);break;default:o(1)}}),[c]),Object(d.jsxs)(b.a,{bg:"dark",variant:"dark",style:{padding:"10px",marginBottom:"10px"},children:[Object(d.jsx)(b.a.Brand,{className:"logo-font",as:a.b,to:"/",onClick:function(){return o(1)},children:Object(d.jsx)("h4",{style:{margin:"0"},children:"Diego Bollini"})}),Object(d.jsx)(b.a.Collapse,{className:"justify-content-end",children:Object(d.jsxs)(j.a,{className:"justify-content-end",activeKey:i,onSelect:function(e){o(e)},children:[Object(d.jsx)(j.a.Link,{as:a.b,eventKey:1,to:"/",children:"Links"}),Object(d.jsx)(j.a.Link,{as:a.b,eventKey:2,to:"/projects",children:"Projects"}),Object(d.jsx)(j.a.Link,{as:a.b,eventKey:3,to:"/about",children:"About"})]})})]})},m=i(70),h=i(65),p=i(66),g=(i(35),function(){return Object(d.jsx)(m.a,{children:Object(d.jsxs)("div",{className:"mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center",children:[Object(d.jsx)(h.a,{alt:"logo",width:"150",height:"150",src:"".concat("/personal-portfolio","/profile_diego01.jpg"),className:"mb-3",rounded:!0}),Object(d.jsx)("h4",{className:"text-white mb-4",children:Object(d.jsx)("strong",{children:"About me:"})}),Object(d.jsx)("h5",{className:"text-white mb-5 max-button",children:"Information Technology Generalist, formally working in IT since 2016. I learn by doing every day, searching and asking those who know what I don't know. These days I am studying devops, python and docker / kubernetes. I enjoy working in diverse and interdisciplinary teams."}),Object(d.jsx)(p.a,{variant:"outline-light",href:"".concat("/personal-portfolio","DiegoBolliniResume.pdf"),target:"_blank",size:"lg",download:!0,children:"My 2021 resume"})]})})}),x=i(15),f=i(39),O=i.n(f),k=i(40),w=i.n(k),y=i(41),v=i.n(y),L=i(42),I=i.n(L),N=i(43),S=i.n(N),T=i(44),C=i.n(T),B=function(e){var t=Object(n.useState)(""),i=Object(r.a)(t,2),o=i[0],c=i[1];return Object(n.useEffect)((function(){e.link.includes("polywork")?c(Object(d.jsx)(x.Icon,{icon:S.a})):e.link.includes("portfolio")?c(Object(d.jsx)(x.Icon,{icon:C.a})):e.link.includes("github")?c(Object(d.jsx)(x.Icon,{icon:O.a})):e.link.includes("gitlab")?c(Object(d.jsx)(x.Icon,{icon:w.a})):e.link.includes("twitter")?c(Object(d.jsx)(x.Icon,{icon:v.a})):e.link.includes("linkedin")&&c(Object(d.jsx)(x.Icon,{icon:I.a}))}),[e]),Object(d.jsx)(p.a,{variant:"outline-light",href:e.link,className:"mb-3 max-button",size:"lg",block:!0,target:"_blank",children:o})},_=function(){return Object(d.jsx)(m.a,{children:Object(d.jsxs)("div",{className:"mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center",children:[Object(d.jsx)(h.a,{alt:"logo",width:"150",height:"150",src:"".concat("/personal-portfolio","/avatar_diego.png"),className:"mb-3"}),Object(d.jsx)("h5",{className:"mb-4 text-white",children:"devops in evopslution (?)"}),["https://github.com/diegobollini/personal-portfolio","https://github.com/diegobollini","https://gitlab.com/diegobollini","https://www.linkedin.com/in/diegobollini/","https://twitter.com/diegobollini","https://www.polywork.com/bolli"].map((function(e){return Object(d.jsx)(B,{link:e},e)}))]})})},M=function(){return Object(d.jsx)(_,{})},E=i(69),K=i(45),P=i.n(K),R=function(e){return Object(d.jsxs)(E.a,{className:"col-12 col-md6 col-lg-3 mb-4 mx-3 mw-3",children:[Object(d.jsxs)(E.a.Body,{style:{color:"black"},children:[Object(d.jsx)(E.a.Title,{children:e.name}),Object(d.jsx)(E.a.Text,{children:e.description}),Object(d.jsxs)(E.a.Text,{children:[Object(d.jsx)("strong",{children:"Language / Stack: "}),e.languages]})]}),Object(d.jsxs)("div",{className:"d-flex flex-row justify-content-around mb-3",children:[Object(d.jsx)(p.a,{variant:"outline-primary",href:e.repo,target:"_blank",children:Object(d.jsx)(x.Icon,{icon:P.a})}),""!==e.url&&Object(d.jsx)(p.a,{variant:"outline-success",href:e.url,target:"_blank",children:"It's live!"})]})]})},A=function(){return Object(d.jsxs)("div",{className:"py-3 d-flex flex-column justify-content-center align-items-center align-content-center",children:[Object(d.jsx)("h2",{className:"mb-3",style:{color:"white"},children:"Some things I have been experimenting with..."}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row justify-content-center",children:[{name:"La Libre website",url:"https://lalibrecf.com.ar",repo:"https://gitlab.com/diegobollini/web-la-libre",languages:"HTML, SCSS",description:"Website of La Libre, a feminist, associative and community bookstore in Rosario (a project of Ciudad Futura)."},{name:"La Libre testing website",url:"https://diegobollini.gitlab.io/proyecto-web-la-libre",repo:"https://gitlab.com/diegobollini/proyecto-web-la-libre",languages:"HTML, SCSS",description:"Web project for La Libre, a testing website for the Coderhouse web development course."},{name:"Links like a tree",url:"https://diegobollini.gitlab.io/links-like-a-tree",repo:"https://gitlab.com/diegobollini/links-like-a-tree",languages:"HTML, SCSS",description:"For testing and learning purposes, I am building a linktree fork."},{name:"Personal Portfolio with Create React App",url:"https://github.com/diegobollini/personal-portfolio",repo:"https://github.com/diegobollini/personal-portfolio",languages:"React.js",description:"Exploring react while making a mix between linktr.ee and personal portfolio"},{name:"La Libre Store",url:"https://tienda.lalibrecf.com.ar/",repo:"https://github.com/diegobollini/la-libre-catalogo",languages:"Typescript",description:"Online catalog and store for La Libre, forked from Goncy's 'Store with whatsapp checkout'."},{name:"Test Project",url:"",repo:"https://github.com/diegobollini/",languages:"Testing",description:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}].map((function(e,t){return Object(d.jsx)(R,{url:e.url,name:e.name,repo:e.repo,languages:e.languages,description:e.description},t)}))})})]})},H=function(){return Object(d.jsx)(A,{})},z=function(){return Object(d.jsxs)(a.a,{children:[Object(d.jsx)(u,{}),Object(d.jsx)("main",{children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"/",exact:!0,children:Object(d.jsx)(M,{})}),Object(d.jsx)(s.b,{path:"/projects",exact:!0,children:Object(d.jsx)(H,{})}),Object(d.jsx)(s.b,{path:"/about",exact:!0,children:Object(d.jsx)(g,{})}),Object(d.jsx)(s.a,{to:"/"})]})})]})};l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.0fab7e93.chunk.js.map