(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(25),i=n.n(s),o=(n(38),n(39),n(31)),c=n(18),l=n(15),d=n(1);var h=function(e){var t=Object(c.useMediaQuery)({query:"(orientation: portrait)"});return Object(d.jsxs)("div",{style:{width:t?"85%":"50%",margin:"auto"},children:[Object(d.jsx)(l.b,{to:"/",className:"AppLink",children:Object(d.jsx)("h1",{children:"Philipp Dowling"})}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{children:Object.entries(e.links).map((function(e,t){var n=Object(o.a)(e,2),a=n[0],r=n[1];return Object(d.jsx)(l.b,{className:"AppLink",to:a,children:Object(d.jsx)("div",{style:{margin:"10px",display:"inline-block"},children:r})},a+t)}))})]})},b=n(4),u=n(11);function j(e){var t=Object(c.useMediaQuery)({query:"(orientation: portrait)"});return Object(d.jsx)("div",{className:"ContentPage",children:Object(d.jsxs)("div",{style:{width:t?"90%":"70%",margin:"auto"},children:[e.children,Object(d.jsx)("div",{style:{height:"30px"}})]})})}function p(e){return Object(d.jsx)("a",{href:e.href,rel:"noreferrer",style:{color:"black",textDecoration:"none"},children:e.children})}var m=function(){return Object(d.jsx)(j,{children:Object(d.jsx)(u.a,{components:{a:p},children:"## About me\nI'm currently a product manager at **[Maltego](https://maltego.com)**, \nwhere I'm working on solutions in and around:\n\n- data integration\n- investigative link analysis and automation\n- data sources, data providers and open-source intelligence (OSINT)\n- cybersecurity operations, fraud, AML, dark web and other areas\n\nI'm also interested in natural language processing, machine learning and knowledge graphs, \nespecially in how these can be leveraged to build tools that help us better understand the world, \nas well as to map that understanding.\n\nIn the past, I co-founded **[metris.io](https://metris.io/)** \nand before that, I was working on NLP research around distributional semantic representation of text.\n"})})},g=n(9),x=[{header:"Master's thesis",subheader:"Effective and Scalable Sentence Representation through Dynamic Grassmannian Ellipsoids",text:"This work was my M.Sc. thesis at TUM, completed in part during a research visit at Stanford University. I worked on applying Grassmannian embeddings to semantic sentence representation and on methods to efficiently search over these representations.\n\nI found that subspace bases computed over word vectors (from e.g. FastText or Word2Vec) are much more effective \nrepresentations than weighted averages of such vectors, \nand that treating the bases as ellipsoids works even better. \nSince they're more complex structures than vectors, however, it also turns out these representations \nare much more expensive to search through at scale. The work also offers some approaches for dealing with this.\n    \nCode for the model and experiments is available on **[github](https://github.com/phdowling/dynamic-grassmannian-ellipsoids)**.",href:"/static/msc-thesis-final.pdf"}];function f(e){var t="### ".concat(e.header,"\n#### _").concat(e.subheader,"_\n").concat(e.text);return Object(d.jsxs)("div",{className:"DownloadItem",children:[Object(d.jsx)(u.a,{components:{a:p},children:t}),Object(d.jsx)("div",{className:"DownloadButtonContainer",children:Object(d.jsx)("a",{className:"DownloadButtonA",href:e.href,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"black"},children:"Download"})})]})}var O=function(){return Object(d.jsxs)(j,{children:[Object(d.jsx)("h2",{children:"Downloads"}),x.map((function(e,t){return Object(a.createElement)(f,Object(g.a)(Object(g.a)({},e),{},{key:"downloaditem_"+t}))})),Object(d.jsx)(u.a,{components:{a:p},children:"## Links\n- [Github](https://github.com/phdowling)\n- [LinkedIn](https://www.linkedin.com/in/philippdowling/)"})]})};var w=function(){return Object(d.jsx)("footer",{className:"Footer",children:"\xa92021 by Philipp Dowling"})};var v=function(){return Object(d.jsxs)(j,{children:[Object(d.jsx)(u.a,{children:"\nIf you'd like to get in touch with me, simply fill out the form below.\n"}),Object(d.jsx)("iframe",{title:"airtable-contact-form",className:"airtable-embed",src:"https://airtable.com/embed/shrLBfPGailzVgiWV?backgroundColor=purple",width:"100%",height:"790px",style:{background:"transparent",border:"1px solid #ccc",display:"block"}})]})};var k=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(h,{links:{"/":"Home","/links":"Links","/contact":"Contact"}}),Object(d.jsx)("div",{className:"MainContent",children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{exact:!0,path:"/",children:Object(d.jsx)(m,{})}),Object(d.jsx)(b.a,{path:"/links",children:Object(d.jsx)(O,{})}),Object(d.jsx)(b.a,{path:"/contact",children:Object(d.jsx)(v,{})})]})}),Object(d.jsx)(w,{})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.9472cacb.chunk.js.map