"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{488:function(t,n,e){e.d(n,{TP:function(){return f},tx:function(){return d},wr:function(){return o},z1:function(){return p},zv:function(){return v}});var r=e(861),c=e(757),a=e.n(c),u=e(759),i="40349690-1733ca14f63c11d59cbaf9c83",s="https://api.themoviedb.org/3",o=function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},888:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(439),c=e(791),a=e(689),u=e(87),i=e(488),s="MovieDetails_container__o8VqJ",o=e(184),p=function(){var t=(0,a.UO)().movieId,n=(0,c.useState)(null),e=(0,r.Z)(n,2),p=e[0],f=e[1];return(0,c.useEffect)((function(){(0,i.TP)(t).then(f)}),[t]),p?(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("h1",{children:p.title}),(0,o.jsx)("p",{children:p.overview}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,o.jsx)(a.j3,{})]}):(0,o.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=888.81087dcd.chunk.js.map