!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=23)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("@babel/runtime/helpers/objectSpread")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-router/lib/Link")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("redux-devtools-extension")},function(e,t){e.exports=require("react-router-redux")},function(e,t){e.exports=require("@babel/runtime/helpers/extends")},function(e,t){e.exports=require("react-router/lib/Router")},function(e,t){e.exports=require("react-router/lib/RouterContext")},function(e,t){e.exports=require("yargs")},function(e){e.exports={"github.js":"/github.js"}},function(e,t,r){"use strict";r.r(t);var n=r(9),o=r.n(n),i=r(10),u=r.n(i),a=r(0),c=r.n(a),s=r(11),l=r(12),p=r.n(l),f=r(13),d=r(1),m=r.n(d),b=r(2),h=r.n(b),v=r(3),x=r.n(v),y=r(4),g=r.n(y),j=r(5),q=r.n(j),E=r(14),w=r.n(E),P=function(e){function t(){return m()(this,t),x()(this,g()(t).apply(this,arguments))}return q()(t,e),h()(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(w.a,{to:"/github/popular/javascript"},"javascript"))}}]),t}(a.Component),_=function(e){function t(){return m()(this,t),x()(this,g()(t).apply(this,arguments))}return q()(t,e),h()(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Select a Language",c.a.createElement(P,null))}}]),t}(a.Component),O=r(7),T=r(8),A=r.n(T),S={items:[]},C=function(e){function t(){return m()(this,t),x()(this,g()(t).apply(this,arguments))}return q()(t,e),h()(t,[{key:"render",value:function(){var e=this.props.items;return console.log(e),c.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap"}},e.map(function(e){var t=e.name,r=e.owner;return c.a.createElement("li",{key:t,style:{margin:30}},c.a.createElement("ul",null,c.a.createElement("li",null,t),c.a.createElement("li",null,r)))}))}}]),t}(a.Component),D=Object(O.connect)(function(e){return{items:e.github.items}})(C);D.getInitialData=function(){return function(e){return e({type:"UPDATE_LANGUAGE_ITEM",payload:{items:[{name:"sss",owner:"sss"},{name:"aaa",owner:"aaa"},{name:"bbb",owner:"bbb"},{name:"xxx",owner:"xxx"}]}}),Promise.resolve()}};var N=[{path:"/github",component:_,childRoutes:[{path:"popular/:id",component:D}]}],R=r(15),k=r.n(R),I=r(6),M=r(16),L=r(17),U={appName:""},G=Object(I.combineReducers)({routing:L.routerReducer,appName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_APP_NAME":return A()({},e,t.payload);default:return e}},github:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LANGUAGE_ITEM":return A()({},e,t.payload);default:return e}}});var H=r(18),W=r.n(H),z=r(19),Y=r.n(z),B=r(20),F="undefined"==typeof window?r.n(B).a:Y.a,J=function(e){var t=e.store,r=e.routes,n=e.history,o=e.renderProps;return c.a.createElement(O.Provider,{store:t},c.a.createElement(F,W()({routes:r,history:n},o)))},K=r(21).argv.status,Q=o()();Q.use(u()()),Q.use(o.a.static("public")),Q.use(o.a.static("dist")),Q.use(function(e,t,r){r()}),Q.use(function(e,t,r){var n=e.url;if("/"===n)e.appName="github";else{var o=n.split("/")[1];e.appName=o}r()});var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(I.createStore)(G,e,Object(M.composeWithDevTools)(Object(I.applyMiddleware)(k.a)))}({});Q.get("*",function(e,t){var n=e.appName,o=r(22);console.log(n,o);var i=o["".concat(n,".js")];console.log(i,1e6),Object(f.match)({location:e.url,routes:N},function(r,n,o){if(console.log(e.url),r)return t.writeHead(500,{ContentType:"text/html"}),t.write("<html><div>server is error</div></html>"),void t.end();if(!o)return t.writeHead(404,{ContentType:"text/html"}),t.write("<html><div>404 not found</div></html>"),void t.end();(o.components&&o.components[0].getInitialData?V.dispatch(o.components[0].getInitialData()):Promise.resolve()).then(function(){var e=V.getState(),r=c.a.createElement(J,{store:V,renderProps:o}),n=Object(s.renderToString)(r);t.send('\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <title>SSR with RR</title>\n            <link rel="icon" href="data:;base64,=">\n            <script>window.__INITIAL_DATA__ = '.concat(p()(e),'<\/script>\n          </head>\n\n          <body>\n            <div id="app">').concat(n,'</div>\n            <script src="/dll.dll.js"><\/script>\n            <script src=').concat(i," defer> <\/script>\n          </body>\n        </html>\n      "))})})}),Q.listen({online:8080,dev:8081}[K],function(){console.log("server is on")})}]);