(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{220:function(t,e,n){var content=n(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("083745fe",content,!0,{sourceMap:!1})},222:function(t,e,n){"use strict";var c=n(220);n.n(c).a},223:function(t,e,n){var c=n(42),o=n(224),r=n(225);e=c(!1);var l=o(r);e.push([t.i,".nuxt-content h2{font-weight:700;font-size:20px;margin-top:15px}.nuxt-content p{margin-top:10px}.icon.icon-link{background-image:url("+l+");display:inline-block;width:20px;height:20px;background-size:20px 20px}",""]),t.exports=e},224:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},225:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8ZyBpZD0iaGFzaCI+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNMzAsMTJWOGgtNS4wMDRsMS04aC00bC0xLDhoLTcuOTk4bDEtOGgtNGwtMSw4SDJ2NGg2LjQ5OEw3LjUsMjBIMnY0aDVsLTEsOGg0bDEtOGg4bC0xLjAwMiw4SDIyDQoJCQlsMS04aDd2LTRoLTYuNWwwLjk5Ni04SDMweiBNMTkuNSwyMGgtOGwwLjk5OC04aDcuOTk4TDE5LjUsMjB6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},232:function(t,e,n){"use strict";n.r(e);n(16);var c=n(3),o=n(230),r={filters:{formatDate:function(){return Object(o.a)(new Date,"dd MMM yyyy")}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.app,o=t.params,r=o.slug,e.prev=2,e.next=5,n("".concat(c.i18n.defaultLocale,"/blog"),r).fetch();case 5:article=e.sent,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",e.t0({statusCode:404,message:"Page not found"}));case 11:if(c.i18n.defaultLocale===c.i18n.locale){e.next=21;break}return e.prev=12,e.next=15,n("".concat(c.i18n.locale,"/blog"),r).fetch();case 15:article=e.sent,e.next=21;break;case 18:e.prev=18,e.t1=e.catch(12),"/".concat(c.i18n.defaultLocale,"/blog");case 21:return e.abrupt("return",{article:article});case 22:case"end":return e.stop()}}),e,null,[[2,8],[12,18]])})))()}},l=(n(222),n(18)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"container mx-auto my-10"},[n("header",{staticClass:"text-4xl text-center font-bold"},[t._v("\n    "+t._s(t.article.title)+"\n    "),n("p",{staticClass:"text-xl"},[t._v("\n      "+t._s(t._f("formatDate")(t.article.createdAt))+"\n    ")])]),t._v(" "),n("nuxt-content",{staticClass:"w-3/4 mx-auto py-6",attrs:{document:t.article}}),t._v(" "),n("nuxt-link",{staticClass:"underline text-lg",attrs:{to:"/blog"}},[t._v("\n    Blog Home\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(104).default})}}]);