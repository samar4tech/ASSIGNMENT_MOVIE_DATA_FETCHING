/*! For license information please see main.21800f1d.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{10:function(t,e,r){t.exports={movie_filter:"MovieFilter_movie_filter__QEkeV",movie_filter__control:"MovieFilter_movie_filter__control__KL2Db",label:"MovieFilter_label__tYMbF",select:"MovieFilter_select__21Pyc"}},14:function(t,e,r){t.exports={movie:"Movie_movie__1mK8A",poster:"Movie_poster__b_mSg",link:"Movie_link__2y91J"}},22:function(t,e,r){t.exports={"movies-list":"MoviesList_movies-list__NlrJ9"}},23:function(t,e,r){t.exports=r(40)},31:function(t,e,r){},39:function(t,e,r){},40:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(19),i=r.n(a),c=r(8),l=(r(31),r(20)),u=r(11),s=r(6),h=r(1),f=r(14),p=r.n(f),v=function(t){return o.a.createElement("li",{className:p.a.movie},o.a.createElement("h2",null,t.title),o.a.createElement("img",{className:p.a.poster,src:t.imageSrc,alt:t.title}),o.a.createElement("h3",null,t.releaseDate),o.a.createElement("p",null,t.openingText),o.a.createElement(c.b,{className:p.a.link,to:"/movies/".concat(t.id)},"View More"))},m=r(22),d=r.n(m),y=r(10),g=r.n(y),w=function(t){console.log(t);return o.a.createElement("div",{className:g.a.movie_filter},o.a.createElement("div",{className:g.a.movie_filter__control},o.a.createElement("label",{className:g.a.label},"Filter by year"),o.a.createElement("select",{className:g.a.select,onChange:function(e){var r=e.target.value;t.onChangeFilter(r)}},t.releaseYr.map((function(e,r){return o.a.createElement("option",{key:t.idArray[r],value:e},e)})))))},E=function(t){var e=Object(n.useState)([]),r=Object(s.a)(e,2),a=r[0],i=r[1],c=Object(n.useState)(!1),l=Object(s.a)(c,2),u=l[0],h=l[1],f=Object(n.useCallback)((function(e){h(!0);var r=t.movies.filter((function(t){return t.release===e}));i(r)}),[]);return o.a.createElement(n.Fragment,null,o.a.createElement(w,{releaseYr:t.releaseYr,idArray:t.movies.map((function(t){return t.id})),onChangeFilter:f}),o.a.createElement("ul",{className:d.a["movies-list"]},!u&&t.movies.map((function(t){return o.a.createElement(v,{id:t.id,key:t.id,title:t.title,releaseDate:t.release,openingText:t.openingText,imageSrc:t.posterPath})})),u&&a.map((function(t){return o.a.createElement(v,{id:t.id,key:t.id,title:t.title,releaseDate:t.release,openingText:t.openingText,imageSrc:t.posterPath})}))))},b=(r(39),r(17)),_=r(9),x=r.n(_);function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var s={};function h(){}function f(){}function p(){}var v={};c(v,o,(function(){return this}));var m=Object.getPrototypeOf,d=m&&m(m(j([])));d&&d!==e&&r.call(d,o)&&(v=d);var y=p.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var j=function(){var t=Object(h.g)().movieId,e=Object(n.useState)(!1),r=Object(s.a)(e,2),a=r[0],i=r[1],c=Object(n.useState)(null),l=Object(s.a)(c,2),f=l[0],p=l[1],v=Object(n.useState)({title:"",description:""}),m=Object(s.a)(v,2),d=m[0],y=m[1];return Object(n.useEffect)((function(){i(!0),p(null),function(){var e=Object(u.a)(L().mark((function e(){var r,n;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-task.vercel.app/api/movie?movieId=".concat(t));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,r.json();case 7:n=e.sent,console.log(n),y((function(t){return Object(b.a)(Object(b.a)({},t),{},{title:n.data.title,description:n.data.overview})})),i(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(t){return console.log(t)})).catch((function(t){console.log(t),p(t.message),i(!1)}))}),[t]),o.a.createElement("div",{className:x.a.description},a&&o.a.createElement("h2",{className:x.a.loading},"Loading...."),!a&&!f&&o.a.createElement("div",null,o.a.createElement("h2",{className:x.a.loading},d.title),o.a.createElement("p",{className:x.a.description},d.description)),!a&&f&&o.a.createElement("p",{className:x.a.loading},f))};function O(){O=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var s={};function h(){}function f(){}function p(){}var v={};c(v,o,(function(){return this}));var m=Object.getPrototypeOf,d=m&&m(m(L([])));d&&d!==e&&r.call(d,o)&&(v=d);var y=p.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var k=function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(!1),c=Object(s.a)(i,2),f=c[0],p=c[1],v=Object(n.useState)(null),m=Object(s.a)(v,2),d=m[0],y=m[1],g=Object(h.f)(),w=Object(n.useCallback)(Object(u.a)(O().mark((function t(){var e,r,n,o,i,c,u;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),y(null),t.prev=2,t.next=5,fetch("https://movie-task.vercel.app/api/popular?page=1");case 5:if((e=t.sent).ok){t.next=8;break}throw new Error("Something went wrong!");case 8:return t.next=10,e.json();case 10:r=t.sent,n=r.data.results,o=[],i=Object(l.a)(n);try{for(i.s();!(c=i.n()).done;)u=c.value,o.push({id:u.id,title:u.title,release:u.release_date,posterPath:"https://image.tmdb.org/t/p/original".concat(u.poster_path)})}catch(s){i.e(s)}finally{i.f()}a(o),g.push("/movies"),p(!1),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(2),y(t.t0.message),p(!1);case 24:p(!1);case 25:case"end":return t.stop()}}),t,null,[[2,20]])}))),[g]),b=o.a.createElement("p",null,"Found no movies.");return r.length>0&&(b=o.a.createElement(E,{movies:r,releaseYr:r.map((function(t){return t.release}))})),d&&(b=o.a.createElement("p",null,d)),f&&(b=o.a.createElement("p",null,"Loading...")),o.a.createElement(o.a.Fragment,null,o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/",exact:!0},o.a.createElement("section",null,!f&&!d&&o.a.createElement("button",{onClick:w},"Fetch Movies"),!f&&d&&o.a.createElement("p",null,d),f&&o.a.createElement("p",null,"Loading..."))),o.a.createElement(h.a,{path:"/movies",exact:!0},o.a.createElement("section",null,b)),o.a.createElement(h.a,{path:"/movies/:movieId"},o.a.createElement(j,null))))};i.a.render(o.a.createElement(c.a,null,o.a.createElement(k,null)),document.getElementById("root"))},9:function(t,e,r){t.exports={description:"SingleMovieDetail_description__1XxNs",loading:"SingleMovieDetail_loading__jUhub"}}},[[23,1,2]]]);
//# sourceMappingURL=main.21800f1d.chunk.js.map