(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Auth"],{"206d":function(n,t,o){"use strict";o("4413")},4413:function(n,t,o){},a55b:function(n,t,o){"use strict";o.r(t);var e=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"login"},[o("h3",{staticClass:"login__title"},[n._v("База животных без владельцев")]),o("el-input",{attrs:{placeholder:"Введите логин","prefix-icon":"el-icon-user"},model:{value:n.login,callback:function(t){n.login=t},expression:"login"}}),o("el-input",{attrs:{placeholder:"Введите пароль","prefix-icon":"el-icon-lock","show-password":""},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}}),o("transition",{attrs:{name:"el-fade-in"}},[n.error?o("el-alert",{attrs:{type:"error"},on:{close:function(t){n.error=""}}},[n._v(n._s(n.error))]):n._e()],1),o("div",{staticClass:"login__controls"},[o("el-button",{attrs:{type:"success"},on:{click:n.auth}},[n._v("Войти")])],1)],1)},s=[],a=(o("caad"),o("0f9a")),i={name:"Login",data:function(){return{login:"",password:"",error:""}},computed:{loading:function(){return this.$store.state[a["c"]].loading}},methods:{auth:function(){var n=this,t=this.login,o=this.password,e=["1","2","3","4"];t&&o&&e.includes(t)&&this.$store.dispatch(a["b"],{login:t,password:o}).then((function(){n.$router.push({name:"AnimalsDashboard"})}))["catch"]((function(t){n.error=t}))}}},r=i,l=(o("206d"),o("2877")),c=Object(l["a"])(r,e,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=Auth.2a239729.js.map