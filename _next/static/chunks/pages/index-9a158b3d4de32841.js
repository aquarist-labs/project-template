(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2179)}])},2179:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return t}});var d=c(5893),e={visible:{delay:0.5,opacity:1,transition:{when:"beforeChildren",staggerChildren:0.08}},hidden:{delay:0.5,opacity:0,transition:{when:"afterChildren"}},exit:{y:-10,opacity:0}},f=c(6702),g=c(9875),h=function(a){var b=a.item;return(0,d.jsxs)(g.E.div,{variants:e,className:"relative grid items-center p-4 bg-secondary-dark text-white font-bold",children:[(0,d.jsxs)("span",{className:"flex gap-2 justify-start",children:[(0,d.jsx)("span",{className:"mt-1",children:(0,d.jsx)(f.eM,{className:"w-6 h-6 fill-current text-secondary-light"})}),(0,d.jsx)("span",{children:b})]}),(0,d.jsx)("div",{className:"absolute w-full bottom-0",children:(0,d.jsx)(f.r7,{className:"max-w-full h-1"})})]},b)},i=function(a){var b=a.index,c=a.title,e=a.action,g=a.description,h=a.externalLink;return(0,d.jsxs)("div",{className:"flex flex-row justify-start gap-1",children:[(0,d.jsx)("span",{className:"text-secondary-light font-bold text-2xl -mt-1",children:b}),(0,d.jsxs)("div",{className:"grid grid-flow-row place-content-start justify-items-start gap-2",children:[(0,d.jsx)("span",{className:"text-lg font-bold",children:c}),(0,d.jsx)("p",{className:"text-secondary-light",children:h&&h.isEnable?(0,d.jsxs)("a",{className:"flex gap-1 align-middle self-center hover:underline",href:h.url,target:"_blank",rel:"noreferrer",children:[g,(0,d.jsx)(f.mM,{className:"fill-current w-5"})]}):g}),e&&e.isEnable&&(0,d.jsx)("a",{className:"p-2 bg-primary self-start text-xs font-bold",href:e.url,target:"_blank",rel:"noreferrer",children:e.title})]})]},b)},j=c(7294);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var l=function(a){var b=a.elements,c=(0,j.useState)(1),e=c[0],f=c[1];return(0,d.jsx)("div",{className:"grid grif-flow-row",children:b.map(function(a,b){return(0,d.jsx)(m,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({id:b+1},a,{isOpen:e,setIsOpen:f}),b)})})},m=function(a){var b=a.title,c=a.description,e=a.id,f=a.isOpen,h=a.setIsOpen,i=f===e;return(0,d.jsxs)("div",{onClick:function(){return h(e)},children:[(0,d.jsxs)("div",{className:"flex flex-row align-middle gap-2 border-t-2 ".concat(i&&"border-green-500"," hover:cursor-pointer"),children:[(0,d.jsx)("span",{className:"p-2 ".concat(i?"bg-green-500 text-white":"bg-gray-100 text-gray-500"," font-bold text-2xl transition-all"),children:e}),(0,d.jsx)("p",{className:"place-self-center text-xl",children:b})]}),i&&(0,d.jsx)(g.E.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:0.2},className:"px-10 py-4",children:c})]})},n=c(9245),o=c(2004),p=function(a){var b=a.title,c=a.children,e=n.s.projectRepoURL,h=n.s.projectDocumentationURL,i=n.s.projectVideo;return(0,d.jsx)(g.E.div,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},className:"grid grid-gap-4 bg-blue-500 text-white ",children:i.isEnable?(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)(o.Z,{width:"100%",url:i.youtubeUrl,controls:!0}),(0,d.jsx)("div",{className:"absolute w-full bottom-0 h-2 bg-green-700",children:(0,d.jsx)(g.E.div,{initial:{x:-200,opacity:1},animate:{x:0,opacity:1}})})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"p-8",children:[(0,d.jsx)("h1",{className:"text-2xl font-bold mb-2",children:b}),(0,d.jsx)("p",{children:c})]}),(0,d.jsxs)("div",{className:"grid grid-flow-col place-content-between bg-secondary-dark p-8",children:[e&&(0,d.jsxs)("a",{href:e,target:"_blank",rel:"noreferrer",children:[(0,d.jsx)("span",{className:"flex justify-center",children:(0,d.jsx)(f.H_,{className:"w-6 h-6 fill-current text-primary"})}),(0,d.jsx)("span",{className:"text-xs",children:"Repository"})]}),h&&(0,d.jsxs)("a",{href:e,target:"_blank",rel:"noreferrer",children:[(0,d.jsx)("span",{className:"flex justify-center",children:(0,d.jsx)(f.z,{className:"w-6 h-6 fill-current text-primary"})}),(0,d.jsx)("span",{className:"text-xs",children:"Documentation"})]})]})]})})},q=function(a){var b=a.sponsors;return(0,d.jsx)("div",{className:"flex justify-center items-center flex-wrap gap-4 p-4",children:b.map(function(a,b){return(0,d.jsx)("a",{href:a.href,target:"_blank",rel:"noreferrer",children:(0,d.jsx)("img",{className:"px-4 max-h-8",src:a.logo.src,width:120,alt:""})},b)})})},r=c(9008);function s(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function t(){var a=n.s.projectTitle,b=n.s.projectSubtitle,c=n.s.projectWhy,j=n.s.projectHow,k=n.s.projectGetStarted,m=n.s.projectFAQ,o=n.s.projectSponsors;return(0,d.jsxs)("div",{children:[(0,d.jsxs)(r.default,{children:[(0,d.jsxs)("title",{children:[a," "]}),(0,d.jsx)("meta",{name:"description",content:b}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsxs)("main",{className:"grid grid-flow-row gap-24 m-[22px]",children:[(0,d.jsxs)("div",{className:"grid grid-row-2 md:grid-cols-2 gap-14",children:[(0,d.jsx)(p,{title:"".concat(n.s.projectCta.title),children:n.s.projectCta.description}),(0,d.jsx)(g.E.div,{initial:"hidden",animate:"visible",variants:e,className:"grid grid-flow-row gap-4",children:n.s.projectBulletPoints.map(function(a,b){return(0,d.jsx)(h,{item:a},b)})})]}),(0,d.jsxs)("div",{className:"grid grid-flow-row gap-6",children:[(0,d.jsxs)("p",{className:"text-center text-secondary-light font-bold text-4xl mb-6",children:["Why ",a,"?"]}),(0,d.jsx)(g.E.div,{className:"grid grid-flow-row md:grid-flow-col gap-4 2xl:gap-20",initial:"hidden",animate:"visible",variants:e,children:c.map(function(a){return(0,d.jsxs)(g.E.div,{variants:e,className:"grid gap-2",children:[a.icon,(0,d.jsx)("span",{className:"text-primary font-bold",children:a.title}),(0,d.jsx)("p",{children:a.description})]},a.title)})})]}),(0,d.jsxs)("div",{className:"grid grid-flow-row gap-6",children:[(0,d.jsx)("p",{className:"text-center text-secondary-light font-bold text-4xl mb-6",children:"How it works?"}),(0,d.jsxs)("div",{className:"grid grid-flow-row gap-4 2xl:gap-8",children:[(0,d.jsx)("p",{children:j.description}),(0,d.jsx)("span",{className:"mt-8",children:(0,d.jsx)("img",{src:"/project-template//_next/static/media/how_it_works.515f06e0.svg",alt:"How ".concat(j.title," works")})})]})]}),(0,d.jsxs)("div",{className:"grid grid-flow-row gap-6",children:[(0,d.jsx)("p",{className:"text-center text-secondary-light font-bold text-4xl mb-6",children:"Get started"}),(0,d.jsxs)("div",{className:"relative grid grid-flow-row md:grid-flow-col gap-4 bg-secondary-dark px-6 py-10 text-white ",children:[k.map(function(a,b){return(0,d.jsx)(i,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){s(a,b,c[b])})}return a}({index:b+1},a),b)}),(0,d.jsx)("div",{className:"absolute w-full bottom-0",children:(0,d.jsx)(g.E.div,{initial:{x:-200,opacity:1},animate:{x:0,opacity:1},children:(0,d.jsx)(f.r7,{className:"max-w-full h-2"})})})]})]}),m.isEnabled&&(0,d.jsxs)("div",{className:"grid grid-flow-row gap-6 ",children:[(0,d.jsx)("p",{className:"text-center text-secondary-light font-bold text-4xl mb-6",children:"FAQ"}),(0,d.jsx)(l,{elements:m.elements})]}),o.isEnable&&(0,d.jsxs)("div",{className:"grid grid-flow-row gap-6 ",children:[(0,d.jsx)("p",{className:"text-center text-secondary-light font-bold text-4xl mb-6",children:"Sponsors"}),(0,d.jsx)(q,{sponsors:o.elements})]})]})]})}}},function(a){a.O(0,[774,548,888,179],function(){return a(a.s=5301)}),_N_E=a.O()}])