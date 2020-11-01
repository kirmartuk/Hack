(function(t){function e(e){for(var r,a,o=e[0],u=e[1],s=e[2],f=0,l=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},c={app:0},i=[];function o(t){return u.p+"js/"+({Auth:"Auth",AuthLayout:"AuthLayout",MainLayout:"MainLayout",acts:"acts","animal-card":"animal-card",dashboard:"dashboard",dicts:"dicts",reports:"reports",requests:"requests"}[t]||t)+"."+{Auth:"2a239729",AuthLayout:"9b3d5c0a",MainLayout:"2ac69c3f",acts:"5f1f5d11","animal-card":"93906d02",dashboard:"eb55bd32",dicts:"34f9deff",reports:"f6462e1d",requests:"d3d556cc"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={Auth:1,AuthLayout:1,MainLayout:1,"animal-card":1,dashboard:1,dicts:1,requests:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({Auth:"Auth",AuthLayout:"AuthLayout",MainLayout:"MainLayout",acts:"acts","animal-card":"animal-card",dashboard:"dashboard",dicts:"dicts",reports:"reports",requests:"requests"}[t]||t)+"."+{Auth:"07dace68",AuthLayout:"f353110e",MainLayout:"c85af9f9",acts:"31d6cfe0","animal-card":"a88ae456",dashboard:"66655665",dicts:"dfd5ffaf",reports:"31d6cfe0",requests:"5fd77f27"}[t]+".css",c=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],f=s.getAttribute("data-href");if(f===r||f===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=i);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=o(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03db":function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return l}));n("99af"),n("d3b7");var r,a=n("ade3"),c=n("2909"),i=n("5530"),o=n("82c0"),u=n("ebcc"),s=n("5f8e"),f="fetchRequests",l="requests";e["c"]={state:{loading:!1,list:[],params:{limit:10,offset:0,count:null}},actions:(r={},Object(a["a"])(r,f,(function(t){var e=t.state,n=t.commit,r=t.getters,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=Object(i["a"])(Object(i["a"])({},e.params),a);return 0===s.offset&&n(u["e"],{name:l,list:[]}),n(u["c"],l),r.apiService.fetchRequests(s).then((function(t){n(u["e"],{name:l,list:[].concat(Object(c["a"])(e.list),Object(c["a"])(t))}),n(u["j"],{name:l,params:{offset:s.offset+t.length}})}))["catch"](Object(o["b"])(n,"Ошибка получения списка заявок (fetchRequests)"))["finally"]((function(){return n(u["b"],l)}))})),Object(a["a"])(r,s["a"],(function(t){var e=t.commit;e(u["e"],{name:l,list:[]})})),r)}},"0f9a":function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return b}));n("b0c0"),n("d3b7"),n("e25e");var r=n("ade3"),a=n("5530"),c=localStorage;function i(t){return c.getItem(t)}function o(t,e){return c.setItem(t,e),e}function u(t){c.removeItem(t)}var s,f=n("82c0"),l=n("ebcc"),d=n("5f8e"),m="login",h="fetchProfile",b="user",p="auth_token";e["d"]={state:{loading:!1,model:{access:i(p)||null}},getters:{isAuthenticated:function(t){return!!(t.model||{}).access},isProfileLoaded:function(t){return!!(t.model||{}).name},headers:function(t,e){var n=e.isAuthenticated;return n?{Authorization:"Bearer "+t.model.access}:{}},isDzhkh:function(t){return"1"===t.model.access},isPrefecture:function(t){return"2"===t.model.access},isExploiting:function(t){return"3"===t.model.access},isShelter:function(t){return"4"===t.model.access}},actions:(s={},Object(r["a"])(s,m,(function(t,e){var n=t.commit,r=t.getters,a=e.login,c=e.password;return n(l["c"],b),r.apiService.auth({login:a,password:c}).then((function(t){n(l["f"],{name:b,model:t}),o(p,a)}))["catch"](Object(f["b"])(n,"Ошибка входа (login)"))["finally"]((function(){return n(l["b"],b)}))})),Object(r["a"])(s,h,(function(t){var e=t.state,n=t.commit,r=t.getters;return n(l["c"],b),r.apiService.fetchProfile().then((function(t){var r=["ДЖКХ","Префектура","Управляющая компания","Приют"];n(l["i"],{name:b,model:Object(a["a"])(Object(a["a"])({},t),{},{name:r[parseInt(e.model.access)-1]})})}))["catch"](Object(f["b"])(n,"Ошибка получения профиля (fetchProfile)"))["finally"]((function(){return n(l["b"],b)}))})),Object(r["a"])(s,d["a"],(function(t){var e=t.commit;e(l["f"],{name:b,model:{}}),u(p)})),s)}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"el-fade-in",mode:"out-in"}},[n("router-view")],1)],1)},c=[],i={name:"App"},o=i,u=n("2877"),s=Object(u["a"])(o,a,c,!1,null,null,null),f=s.exports,l=(n("99af"),n("4de4"),n("caad"),n("13d5"),n("d3b7"),n("2532"),n("2909")),d=n("8c4f"),m=n("2f62"),h=(n("3ca3"),n("ddb0"),n("4795"),n("2b3d"),n("5530")),b=n("bc3a"),p=n.n(b),v=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_URL||"/",g=n("5f8e"),j=(n("cdd7"),p.a.create({baseURL:v,withCredentials:!0}));j.interceptors.request.use((function(t){return Object(h["a"])(Object(h["a"])({},t),{},{headers:Object(h["a"])(Object(h["a"])({},t.headers),T.getters.headers)})}),(function(t){return t})),j.interceptors.response.use((function(t){return(t&&t.data?t.data:t)||{}}),(function(t){var e=t.response?t.response.status:408;return 401===e&&T.dispatch(g["a"]),console.warn("interceptors error",e,t.response,t),Promise.reject(t)}));var O,A={client:j,auth:function(t){var e=t.login,n=t.password;return new Promise((function(t){setTimeout((function(){var r={login:e,password:n,access:e};t(r)}),1e3)}))},fetchDicts:function(){return this.client.get("/api/dicts")},fetchShelters:function(){return this.client.get("/api/shelters")},fetchBreeds:function(){return this.client.get("/api/breeds")},fetchProfile:function(){return new Promise((function(t){setTimeout((function(){t({name:"Иван",surname:"Иванов"})}),0)}))},fetchAnimals:function(t){return this.client.get("/api/animals",{params:t})},fetchAnimal:function(t){return this.client.get("/api/animals/".concat(t))},createAnimal:function(t){var e=Object(h["a"])({},t.data);return e.cardId="12301-12",e.size="Маленький",e.animal_breed=806,e.animal_type=2,this.client.post("/api/animals",e)},updateAnimal:function(t){return new Promise((function(e){setTimeout((function(){e(t)}),500)}))},fetchAnimalActs:function(t){return this.client.get("/api/history/".concat(t))},fetchRequests:function(){return this.client.get("/api/requests")},exportAnimalCard:function(t){return this.client.request({url:"/api/report/".concat(t),method:"GET",responseType:"blob"}).then((function(e){var n="Карточка_"+t+".docx",r=window.URL.createObjectURL(new Blob([e],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})),a=document.createElement("a");a.href=r,a.setAttribute("download",n),document.body.appendChild(a),a.click(),a.remove()}))},addAnimalDoc:function(t){return this.client.post("/api/history",t)}},y=A,w=(n("b0c0"),n("ade3")),S=n("82c0"),L=n("ebcc"),x=(O={},Object(w["a"])(O,L["d"],(function(t,e){t.error=e})),Object(w["a"])(O,L["c"],(function(t,e){var n=Object(S["a"])(t,e);n.loading=!0})),Object(w["a"])(O,L["b"],(function(t,e){var n=Object(S["a"])(t,e);n.loading=!1})),Object(w["a"])(O,L["f"],(function(t,e){var n=e.name,a=e.model,c=Object(S["a"])(t,n);r["default"].set(c,"model",a)})),Object(w["a"])(O,L["i"],(function(t,e){var n=e.name,r=e.model,a=Object(S["a"])(t,n);a.model=Object(h["a"])(Object(h["a"])({},a.model),r)})),Object(w["a"])(O,L["e"],(function(t,e){var n=e.name,a=e.list,c=Object(S["a"])(t,n);r["default"].set(c,"list",a)})),Object(w["a"])(O,L["a"],(function(t,e){var n=e.name,r=e.list,a=Object(S["a"])(t,n);a.list=a.list.concat(r)})),Object(w["a"])(O,L["h"],(function(t,e){var n=e.name,r=e.index,a=e.value,c=Object(S["a"])(t,n);Object.assign(c.list[r],a)})),Object(w["a"])(O,L["g"],(function(t,e){var n=e.name,a=e.params,c=Object(S["a"])(t,n);r["default"].set(c,"params",a)})),Object(w["a"])(O,L["j"],(function(t,e){var n=e.name,r=e.params,a=Object(S["a"])(t,n);a.params=Object(h["a"])(Object(h["a"])({},a.params),r)})),O),P=n("0f9a"),E=n("b374"),q=n("8744"),_=n("c631"),C=n("03db"),D=n("d1d5"),M={user:P["d"],animal:E["g"],acts:q["c"],shelters:_["b"],requests:C["c"],dicts:D["e"]};r["default"].use(m["a"]);var T=new m["a"].Store({getters:{apiService:function(){return y}},mutations:x,modules:M});n("fb6a");function k(t){var e=t.to,n=t.next;return e.matched.length?n():n({name:"AnimalsDashboard"})}function B(t){var e=t.next,n=t.store,r=n.getters,a=r.isAuthenticated,c=r.isProfileLoaded;return a?c?e():n.dispatch(P["a"]).then((function(){return e()}))["catch"]((function(){return e({name:"login"})})):e({name:"login"})}function R(t){var e=t.from,n=t.next,r=t.store,a=r.getters.isAuthenticated;return a?n(e):n()}function I(t){var e=t.next,n=t.store;return n.dispatch(g["a"]),e({name:"login"})}function N(t,e){if(!e.length)return t.next;var n=e[0],r=e.slice(1);return function(e){if(void 0!==e)t.next(e);else{var a=N(t,r);n(Object(h["a"])(Object(h["a"])({},t),{},{next:a}))}}}r["default"].use(d["a"]);var U=[{path:"/auth",name:"AppLogin",component:function(){return n.e("AuthLayout").then(n.bind(null,"eeea"))},redirect:{name:"login"},meta:{middleware:[R]},children:[{path:"/login",name:"login",component:function(){return n.e("Auth").then(n.bind(null,"a55b"))}}]},{path:"/",name:"AppMain",component:function(){return n.e("MainLayout").then(n.bind(null,"e2f0"))},redirect:{name:"AnimalsDashboard"},meta:{middleware:[B]},children:[{path:"/animals-dashboard",name:"AnimalsDashboard",component:function(){return n.e("dashboard").then(n.bind(null,"7277"))}},{path:"/animal/:id",name:"AnimalCard",props:!0,component:function(){return n.e("animal-card").then(n.bind(null,"5e9c"))}},{path:"/dicts",name:"Dicts",component:function(){return n.e("dicts").then(n.bind(null,"e3e8"))}},{path:"/acts",name:"Acts",component:function(){return n.e("acts").then(n.bind(null,"5a67"))}},{path:"/reports",name:"Reports",component:function(){return n.e("reports").then(n.bind(null,"c11b"))}},{path:"/requests",name:"Requests",component:function(){return n.e("requests").then(n.bind(null,"2336"))}},{path:"/logout",name:"Logout",meta:{middleware:[I]}}]}],z=new d["a"]({mode:"history",routes:U});z.beforeEach((function(t,e,n){var r=t.matched.reduce((function(t,e){var n=e.meta.middleware?e.meta.middleware.filter((function(e){return!t.includes(e)})):[];return n.length?[].concat(Object(l["a"])(t),Object(l["a"])(n)):t}),[k]);N({to:t,from:e,next:n,store:T},r)()}));var J=z,V=n("5c96"),$=n.n(V),F=n("dccd"),G=n.n(F);n("0fae"),n("a24a");r["default"].config.productionTip=!1,r["default"].use($.a,{locale:G.a}),new r["default"]({router:J,store:T,render:function(t){return t(f)}}).$mount("#app")},"5f8e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r="logout"},"82c0":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));n("277d"),n("ac1f"),n("1276");var r=n("ebcc");function a(t,e,n){return function(a){var c=a&&a.response?a.response.status:0,i={title:e,message:n,status:c,error:a};throw t(r["d"],i),a||new Error(n||e)}}function c(t,e){if(!e)throw Error("State ref empty: ".concat(e));var n=Array.isArray(e)?e:e.split("."),r=t;while(1){var a=n.shift();if(!a||!r[a])break;r=r[a]}if(r===t)throw Error("State property not found: ".concat(e));return r}},8744:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));n("d3b7");var r,a=n("ade3"),c=n("82c0"),i=n("ebcc"),o=n("5f8e"),u="fetchAnimalActs",s="acts";e["c"]={state:{loading:!1,model:{},list:[]},actions:(r={},Object(a["a"])(r,u,(function(t,e){var n=t.commit,r=t.getters;return n(i["c"],s),r.apiService.fetchAnimalActs(e).then((function(t){n(i["i"],{name:s,model:{id:e,acts:t}})}))["catch"](Object(c["b"])(n,"Ошибка получения списка документов животного (fetchAnimalActs)"))["finally"]((function(){return n(i["b"],s)}))})),Object(a["a"])(r,o["a"],(function(t){var e=t.commit;e(i["f"],{name:s,model:{}}),e(i["e"],{name:s,list:[]})})),r)}},a24a:function(t,e,n){},b374:function(t,e,n){"use strict";n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return b}));n("99af"),n("d3b7");var r,a=n("ade3"),c=n("2909"),i=n("5530"),o=n("82c0"),u=n("ebcc"),s=n("5f8e"),f="fetchAnimals",l="fetchAnimal",d="createAnimal",m="addDocument",h="exportAnimalCard",b="animal";e["g"]={state:{loading:!1,model:{},list:[],params:{limit:10,offset:0,count:null}},actions:(r={},Object(a["a"])(r,f,(function(t){var e=t.state,n=t.commit,r=t.getters,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=Object(i["a"])(Object(i["a"])({},e.params),a);return 0===s.offset&&n(u["e"],{name:b,list:[]}),n(u["c"],b),r.apiService.fetchAnimals(s).then((function(t){var r=t[0],a=t[1];n(u["e"],{name:b,list:[].concat(Object(c["a"])(e.list),Object(c["a"])(r))}),n(u["j"],{name:b,params:{offset:s.offset+r.length,count:a}})}))["catch"](Object(o["b"])(n,"Ошибка получения списка животных (fetchAnimals)"))["finally"]((function(){return n(u["b"],b)}))})),Object(a["a"])(r,l,(function(t,e){var n=t.commit,r=t.getters;return n(u["c"],b),r.apiService.fetchAnimal(e).then((function(t){n(u["f"],{name:b,model:t})}))["catch"](Object(o["b"])(n,"Ошибка получения данных животного (fetchAnimal)"))["finally"]((function(){return n(u["b"],b)}))})),Object(a["a"])(r,d,(function(t,e){var n=t.commit,r=t.getters;return n(u["c"],b),r.apiService.createAnimal(e)["catch"](Object(o["b"])(n,"Ошибка создания карточки животного (createAnimal)"))["finally"]((function(){return n(u["b"],b)}))})),Object(a["a"])(r,h,(function(t,e){var n=t.commit,r=t.getters;return n(u["c"],b),r.apiService.exportAnimalCard(e)["catch"](Object(o["b"])(n,"Ошибка экспорта карточки (exportAnimalCard)"))["finally"]((function(){return n(u["b"],b)}))})),Object(a["a"])(r,m,(function(t,e){var n=t.commit,r=t.getters;return n(u["c"],b),r.apiService.addAnimalDoc(e).then((function(t){console.log(t)}))["catch"](Object(o["b"])(n,"Ошибка экспорта карточки (exportAnimalCard)"))["finally"]((function(){return n(u["b"],b)}))})),Object(a["a"])(r,s["a"],(function(t){var e=t.commit;e(u["f"],{name:b,model:{}}),e(u["e"],{name:b,list:[]}),e(u["g"],{name:b,params:{limit:10,offset:0,count:null}})})),r)}},c631:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("d3b7");var r,a=n("ade3"),c=n("82c0"),i=n("ebcc"),o=n("5f8e"),u="fetchShelters",s="shelters";e["b"]={state:{loading:!1,list:[]},actions:(r={},Object(a["a"])(r,u,(function(t){var e=t.state,n=t.commit,r=t.getters;if(!(e.list.length>0))return n(i["c"],s),r.apiService.fetchShelters().then((function(t){n(i["e"],{name:s,list:t})}))["catch"](Object(c["b"])(n,"Ошибка получения списка приютов (fetchShelters)"))["finally"]((function(){return n(i["b"],s)}))})),Object(a["a"])(r,o["a"],(function(t){var e=t.commit;e(i["e"],{name:s,list:[]})})),r)}},cdd7:function(t){t.exports=JSON.parse("{}")},d1d5:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return l}));n("4fad"),n("d3b7");var r,a=n("ade3"),c=n("82c0"),i=n("ebcc"),o=n("5f8e"),u="fetchDicts",s="fetchShelters",f="fetchBreeds",l="dicts";e["e"]={state:{loading:!1,model:{}},actions:(r={},Object(a["a"])(r,u,(function(t){var e=t.state,n=t.commit,r=t.getters;if(!(Object.entries(e.model).length>0))return n(i["c"],l),r.apiService.fetchDicts().then((function(t){n(i["i"],{name:l,model:t})}))["catch"](Object(c["b"])(n,"Ошибка получения словарей (fetchDicts)"))["finally"]((function(){return n(i["b"],l)}))})),Object(a["a"])(r,s,(function(t){var e=t.commit,n=t.getters;return n.apiService.fetchShelters().then((function(t){console.log("update shelters"),e(i["i"],{name:l,model:{shelters:t}})}))})),Object(a["a"])(r,f,(function(t){var e=t.commit,n=t.getters;return n.apiService.fetchBreeds().then((function(t){console.log("update shelters"),e(i["i"],{name:l,model:{_animalBreeds:t}})}))})),Object(a["a"])(r,o["a"],(function(t){var e=t.commit;e(i["f"],{name:l,model:{}})})),r)}},ebcc:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"i",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"h",(function(){return f})),n.d(e,"g",(function(){return l})),n.d(e,"j",(function(){return d}));var r="loading",a="loaded",c="setError",i="setModel",o="updateModel",u="setList",s="addListItems",f="updateListItem",l="setParams",d="updateParams"}});
//# sourceMappingURL=app.03cd786b.js.map