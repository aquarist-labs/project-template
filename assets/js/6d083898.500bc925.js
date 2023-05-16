"use strict";(self.webpackChunkk_3_s_website=self.webpackChunkk_3_s_website||[]).push([[469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),u=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),c=n,d=m["".concat(o,".").concat(c)]||m[c]||h[c]||r;return a?l.createElement(d,s(s({ref:t},p),{},{components:a})):l.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=a(7462),n=(a(7294),a(3905));const r={title:"Release Notes - v0.8.0",description:"Release notes for v.0.8.0",slug:"release-notes-v0.8",authors:[{name:"The s3gw team"}],tags:["release-notes"],hide_table_of_contents:!1},s="Release Notes - v0.8.0",i={permalink:"/blog/release-notes-v0.8",source:"@site/blog/2022-11-11-release-notes-0.8.md",title:"Release Notes - v0.8.0",description:"Release notes for v.0.8.0",date:"2022-11-11T00:00:00.000Z",formattedDate:"November 11, 2022",tags:[{label:"release-notes",permalink:"/blog/tags/release-notes"}],readingTime:2.1,hasTruncateMarker:!0,authors:[{name:"The s3gw team"}],frontMatter:{title:"Release Notes - v0.8.0",description:"Release notes for v.0.8.0",slug:"release-notes-v0.8",authors:[{name:"The s3gw team"}],tags:["release-notes"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - v0.9.0",permalink:"/blog/release-notes-v0.9"},nextItem:{title:"Release Notes - v0.7.0",permalink:"/blog/release-notes-v0.7"}},o={authorsImageUrls:[void 0]},u=[{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"What&#39;s Changed",id:"whats-changed-1",level:2},{value:"Containers",id:"containers",level:2}],p={toc:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This release adds several bug fixes, together with UI improvements. In\naddition, the documentation, testing and other have been improved."),(0,n.kt)("p",null,"This release is meant for testing and feedback gathering. It is not recommended\nfor production use."),(0,n.kt)("p",null,"Should a bug be found and not expected to be related to the list below, one\nshould feel encouraged to file an issue in our\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw/issues/new/choose"},"Github repository"),"."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"S3GW"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added a mechanism to check for incompatibility issues without changing the\noriginal metadata database. When any incompatibility is found it is also shown\nin the logs."),(0,n.kt)("li",{parentName:"ul"},"Added GC thread deleting permanently removed buckets, its objects and\nversions."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"UI"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add basic object management features (#146)."),(0,n.kt)("li",{parentName:"ul"},"Add feature to upload objects into buckets via browser (#167).")))),(0,n.kt)("h2",{id:"fixes"},"Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"S3GW"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed segfault when SFSAtomicWriter::complete is called with mtime output\nvariable set to nullptr"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"UI"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fix table pagination issue. Only the first page was visible.")))),(0,n.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"S3GW"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In order to make stat_bucket call available, SFSBucket::update_container_stat\nnow returns 0."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"UI"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Display an error message on the login page if the RGW endpoint is not\nconfigured correctly."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Charts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Expose ",(0,n.kt)("inlineCode",{parentName:"li"},"ETag")," header in the Traefik s3gw ingress to allow multipart\nuploads via browser (#170)."),(0,n.kt)("li",{parentName:"ul"},"Add the ",(0,n.kt)("inlineCode",{parentName:"li"},"OPTIONS")," method to the Traefik CORS configuration (#188)."),(0,n.kt)("li",{parentName:"ul"},"Fix an issue in the GW ingress related to TLS + wildcard host.")))),(0,n.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("h2",{id:"known-issues"},"Known Issues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multipart uploads are currently tracked solely in memory. Should the gateway\nbe stopped, ongoing multipart uploads will be lost."),(0,n.kt)("li",{parentName:"ul"},"Listing multipart uploads does not account for prefix or delimiters.")),(0,n.kt)("h2",{id:"whats-changed-1"},"What's Changed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update charts submodule after 0.7.0 release by @0xavi0 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/169"},"https://github.com/aquarist-labs/s3gw/pull/169")),(0,n.kt)("li",{parentName:"ul"},"adr: Adds ADR for project labels by @jhmarina in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/148"},"https://github.com/aquarist-labs/s3gw/pull/148")),(0,n.kt)("li",{parentName:"ul"},"adr: Add instruction for release captain by @jhmarina in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/153"},"https://github.com/aquarist-labs/s3gw/pull/153")),(0,n.kt)("li",{parentName:"ul"},"docs: Update rancher instructions and change addresses by @0xavi0 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/200"},"https://github.com/aquarist-labs/s3gw/pull/200")),(0,n.kt)("li",{parentName:"ul"},"Update the release captain howto to the latest workflow. by @votdev in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/201"},"https://github.com/aquarist-labs/s3gw/pull/201")),(0,n.kt)("li",{parentName:"ul"},"Release v0.8.0  by @votdev in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/205"},"https://github.com/aquarist-labs/s3gw/pull/205")),(0,n.kt)("li",{parentName:"ul"},"Update docs. by @votdev in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/206"},"https://github.com/aquarist-labs/s3gw/pull/206")),(0,n.kt)("li",{parentName:"ul"},"Release v0.8.0 by @votdev in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/207"},"https://github.com/aquarist-labs/s3gw/pull/207")),(0,n.kt)("li",{parentName:"ul"},"Adapt and add ADRs by @votdev in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/209"},"https://github.com/aquarist-labs/s3gw/pull/209")),(0,n.kt)("li",{parentName:"ul"},"Adapt .gitmodules to new branch names. by @votdev in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/210"},"https://github.com/aquarist-labs/s3gw/pull/210")),(0,n.kt)("li",{parentName:"ul"},"Adapt release process docs. Tags need to be created. by @votdev in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pull/211"},"https://github.com/aquarist-labs/s3gw/pull/211"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw/compare/v0.7.0...v0.8.0"},"https://github.com/aquarist-labs/s3gw/compare/v0.7.0...v0.8.0")),(0,n.kt)("h2",{id:"containers"},"Containers"),(0,n.kt)("p",null,"The container images can be found at:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pkgs/container/s3gw"},"s3gw")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw/pkgs/container/s3gw-ui"},"s3gw-ui"))))}h.isMDXComponent=!0}}]);