(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6881)}])},6881:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return b}});var r=n(5893),i=n(9008),s=n(8833),l=n.n(s),c=function(e){var t=e.href,n=e.text;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[n,(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 inline",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,r.jsx)("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),(0,r.jsx)("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})]})]})})},a=function(e){var t=e.text;return t?t.map((function(e){var t=e.annotations,n=t.bold,i=t.code,s=t.color,a=t.italic,o=t.strikethrough,x=t.underline,d=e.text;return(0,r.jsx)("span",{className:[n?l().bold:"",i?l().code:"",a?l().italic:"",o?l().strikethrough:"",x?l().underline:""].join(" "),style:"default"!==s?{color:s}:{},children:d.link?(0,r.jsx)(c,{href:d.link.url,text:d.content}):d.content},d.content)})):null},o=n(7294),x=function(e){var t=e.content;return(0,r.jsxs)("div",{className:"grid grid-cols-4 items-center mb-2",children:[(0,r.jsx)("div",{className:"col-span-1 text-gray-700 px-4 py-1 text-sm text-right tabular-nums",children:t.key}),(0,r.jsx)("div",{className:"col-span-3 text-gray-700 px-4 py-1 text-sm border-l border-gray-400 tabular-nums",children:t.value})]})},d=function(e){var t=e.type,n=e.id,i=e[t];switch(t){case"paragraph":return(0,r.jsx)("p",{children:(0,r.jsx)(a,{text:i.text})});case"heading_1":return(0,r.jsx)("div",{className:"grid grid-cols-12 items-center mt-8 mb-6",children:(0,r.jsx)("h1",{className:"col-start-2 col-span-10 text-5xl md:text-5xl font-bold tracking-tighter leading-tight",children:(0,r.jsx)(a,{text:i.text})})});case"heading_2":return(0,r.jsx)("div",{className:"grid grid-cols-12 items-center mt-6 mb-4",children:(0,r.jsx)("h2",{className:"col-start-2 col-span-10 text-2xl md:text-2xl font-bold tracking-tighter leading-tight",children:(0,r.jsx)(a,{text:i.text})})});case"heading_3":return(0,r.jsx)("h3",{className:"mb-8 text-2xl md:text-2xl font-bold tracking-tighter leading-tight mt-8",children:(0,r.jsx)(a,{text:i.text})});case"bulleted_list_item":case"numbered_list_item":var s=i.text.map((function(e){return e.text.content.split("|")}))[0];return 2===s.length?(0,r.jsx)(x,{content:{key:s[0],value:s[1]}}):(0,r.jsx)("div",{className:"grid grid-cols-12 items-center mt-6 mb-4",children:(0,r.jsx)("li",{className:"col-start-2 col-span-10 text-gray-700 px-4 py-1 text-sm tabular-nums",children:(0,r.jsx)(a,{text:i.text})})});case"to_do":return(0,r.jsx)("div",{children:(0,r.jsxs)("label",{htmlFor:n,children:[(0,r.jsx)("input",{type:"checkbox",id:n,defaultChecked:i.checked})," ",(0,r.jsx)(a,{text:i.text})]})});case"toggle":var l;return(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(a,{text:i.text})}),null===(l=i.children)||void 0===l?void 0:l.map((function(e){return(0,r.jsx)(Fragment,{children:renderBlock(e)},e.id)}))]});case"child_page":return(0,r.jsx)("p",{children:i.title});case"image":var c="external"===i.type?i.external.url:i.file.url,o=i.caption?i.caption[0].plain_text:"";return(0,r.jsxs)("figure",{children:["avatar"===o&&(0,r.jsx)("img",{src:c,className:"inline-block w-12 h-12 rounded-full",alt:"avatar"}),"avatar"!==o&&(0,r.jsx)("img",{src:c,alt:o})]});case"divider":return(0,r.jsx)("hr",{},n);case"quote":return(0,r.jsx)("blockquote",{children:i.text[0].plain_text},n);case"table_of_contents":return console.log(i),(0,r.jsx)("p",{});default:return"\u274c Unsupported block (".concat("unsupported"===t?"unsupported by Notion API":t,")")}},h=function(e){var t=e.blocks;return(0,r.jsx)("div",{children:(0,r.jsx)("section",{children:t.map((function(e){return(0,r.jsx)(o.Fragment,{children:d(e)},e.id)}))})})},u=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5 md:px-20",children:t})},m=function(){return(0,r.jsx)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:(0,r.jsx)("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",children:"marusho.io"})})},j=function(){return(0,r.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,r.jsx)(u,{children:(0,r.jsx)("div",{className:"py-2 flex flex-col lg:flex-row items-center",children:(0,r.jsx)("h3",{className:"text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2",children:"marusho.io"})})})})},f=function(){return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"marusho profile"}),(0,r.jsx)("meta",{property:"og:image",content:"https://marusho.io/og.jpg"})]})},g=function(e){e.preview;var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:t})}),(0,r.jsx)(j,{})]})},p=function(){return(0,r.jsxs)("section",{className:"flex flex-col md:flex-row justify-center mt-16 mb-16 md:mb-12",children:[(0,r.jsx)("div",{className:"flex justify-center p-4",children:(0,r.jsx)("img",{src:"/avatar.jpg",className:"w-36 h-36 rounded-full",alt:"icon"})}),(0,r.jsx)("div",{className:"flex justify-center p-4 items-center",children:(0,r.jsx)("p",{className:"text-xl md:text-xl tracking-tighter leading-tight",children:"Web Developer"})})]})};var v=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(u,{children:(0,r.jsx)("div",{className:"mt-20 mb-12",children:(0,r.jsx)("h3",{className:"text-3xl text-center",children:"\ud83e\udd8a"})})})})},_=!0,b=function(e){var t=e.page,n=e.blocks;return t&&n?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(g,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"marusho.io"})}),(0,r.jsxs)(u,{children:[(0,r.jsx)(m,{}),(0,r.jsx)(p,{}),(0,r.jsx)(h,{blocks:n}),(0,r.jsx)(v,{})]})]})}):(0,r.jsx)("div",{})}},8833:function(e){e.exports={container:"notion_container__gIOiY",name:"notion_name__VDTts",back:"notion_back___tDoP",bold:"notion_bold__rraeS",code:"notion_code__y8gx3",italic:"notion_italic__yP6x5",strikethrough:"notion_strikethrough__lNdQ_",underline:"notion_underline__fPhna"}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);