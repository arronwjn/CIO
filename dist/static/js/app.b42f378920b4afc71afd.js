webpackJsonp([1],{"1rBb":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",[n("router-link",{attrs:{to:{path:"/home",activeClass:"router-link-exact-active"}}},[e._v("首页")])],1),e._v(" "),n("div",[n("router-link",{attrs:{to:{path:"/center",activeClass:"router-link-exact-active"}}},[e._v("个人中心")])],1)])},r=[],a={render:o,staticRenderFns:r};t.a=a},"2hpJ":function(e,t){},"3uqQ":function(e,t){},E8fY:function(e,t){},FbH0:function(e,t){},GlZy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"detail",data:function(){return{}},created:function(){},methods:{back:function(){this.$router.go(-1)}}}},"J+Y9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_URL=void 0;var o=n("vt++"),r=o.env.domain,a=r+"/";t.API_URL={GETFACADELIST:{domain:a,apiUrl:"wap.php/car/getFacadeList",author:"王超",fetchUrl:a+"wap.php/car/getFacadeList",remark:"汽车列表",method:"POST"}}},KOga:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return e?(0,u.default)(e).sort().map(function(t){var n=e[t];return Array.isArray(n)?n.sort().map(function(e){return encodeURIComponent(t)+"[]="+encodeURIComponent(e)}).join("&"):n?encodeURIComponent(t)+"="+encodeURIComponent(n):encodeURIComponent(t)+"="}).join("&"):""}Object.defineProperty(t,"__esModule",{value:!0});var a=n("fZjL"),u=o(a),c=n("mvHQ"),i=o(c),l=n("//Fk"),d=o(l),s=n("Zrlr"),f=o(s),p=n("wxAW"),v=o(p),h=n("J+Y9"),_=n("vt++"),m=function(){function e(){(0,f.default)(this,e)}return(0,v.default)(e,null,[{key:"fetch",value:function(t,n){if(t)return e.fetchData(t,n);Alert.alert("FetchDataModule模块调用异常，请检查传递参数")}},{key:"fetchData",value:function(t,n){return h.API_URL[t].showLoading,"GET"==h.API_URL[t].method?e.get(t,n):"POST"==h.API_URL[t].method?e.post(t,n):void 0}},{key:"get",value:function(t,n){return fetch(h.API_URL[t].fetchUrl+"?"+r(n),{method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json",Source:e.state.Source}}).then(function(o){return e.HandleRequestResults(o,t,n)}).catch(function(e){return new d.default(function(t,n){n(e)})})}},{key:"post",value:function(t,n){return fetch(h.API_URL[t].fetchUrl,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:(0,i.default)(n)}).then(function(o){return e.HandleRequestResults(o,t,n)}).catch(function(e){return new d.default(function(t,n){n(e)})})}},{key:"HandleRequestResults",value:function(t,n,o){return h.API_URL[n].showLoading,t.ok?t.json().then(function(e){return new d.default(function(t){-999!=e.errcode&&t(e)})}):(_.env.showNetWorkErrorInfo&&t.text().then(function(e){}),_.env.defaultUploadNetWorkErrorInfo&&t.text().then(function(t){e.ErrorApiFetch(n,t,o)}),new d.default(function(e,t){t()}))}},{key:"wechat",value:function(e,t,n){fetch(e+"?"+r(t),{method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).then(function(e){n(e)}).catch(function(e){errorHandler(e)})}},{key:"GetRequest",value:function(){var e=location.search,t=new Object;if(-1!=e.indexOf("?"))for(var n=e.substr(1),o=n.split("&"),r=0;r<o.length;r++)t[o[r].split("=")[0]]=unescape(o[r].split("=")[1]);return t}},{key:"SetSate",value:function(t,n){e.state[t]=n}},{key:"ShowLoading",value:function(){e.state.FetchDataLoading._show()}},{key:"HideLoading",value:function(){e.state.FetchDataLoading._hide()}},{key:"ErrorApiFetch",value:function(t,n,o){var a=y(h.API_URL[t].developer);fetch(_.errorCollectApi,{method:"POST",headers:{city:encodeURIComponent(e.state.city),"Content-Type":"application/x-www-form-urlencoded",user_id:e.state.user_id,access_token:e.state.access_token},body:r({project:""+_.AppName+_.AppPlatform+"端",post_author:a.name,server_return:n,api_address:h.API_URL[t].method+":"+h.API_URL[t].fetchUrl+"?"+r(o),api_author:h.API_URL[t].author})}).then(function(e){e.ok&&e.json().then(function(e){})})}}]),e}();t.default=m,m.state={city:null,user_id:null,access_token:null,FetchDataLoading:null,device_identification:null,latitude:null,longitude:null,Source:"web",ccyp_province_id:0,dj_province_id:0,district:null};var y=function(e){return e&&_.developer.allDeveloper[e]?_.developer.allDeveloper[e]:_.developer.main}},M93x:function(e,t,n){"use strict";function o(e){n("3uqQ")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("xJD8"),a=n.n(r),u=n("qN95"),c=n("VU/8"),i=o,l=c(a.a,u.a,i,"data-v-520b1aa0",null);t.default=l.exports},NHnr:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n("7+uW"),a=o(r),u=n("M93x"),c=o(u),i=n("YaEn"),l=o(i);a.default.config.productionTip=!1,new a.default({el:"#app",router:l.default,template:"<App/>",components:{App:c.default}})},NTC3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"footer",data:function(){return{}},created:function(){}}},SGm2:function(e,t,n){"use strict";function o(e){n("2hpJ")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("b+5s"),a=n.n(r),u=n("yxqt"),c=n("VU/8"),i=o,l=c(a.a,u.a,i,"data-v-dc9802c0",null);t.default=l.exports},"WW4/":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"detail"},[n("div",{on:{click:function(t){e.back()}}},[e._v("返回")]),e._v(" "),n("div",[e._v(e._s(e.$route.params.goodId))])])},r=[],a={render:o,staticRenderFns:r};t.a=a},X6d5:function(e,t,n){"use strict";function o(e){n("FbH0")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("tMdc"),a=n.n(r),u=n("suqh"),c=n("VU/8"),i=o,l=c(a.a,u.a,i,"data-v-e5380280",null);t.default=l.exports},YaEn:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=o(r),u=n("/ocq"),c=o(u),i=n("X6d5"),l=o(i),d=n("uNhH"),s=o(d),f=n("SGm2"),p=o(f),v=n("M93x"),h=o(v);a.default.use(c.default),t.default=new c.default({routes:[{path:"/",component:h.default,children:[{path:"",redirect:"/home"},{path:"/home",component:l.default,children:[{path:"detail/:goodId",name:"detail",meta:{requiresAuth:!0},component:s.default}]},{path:"/center",component:p.default}]}]})},"b+5s":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"userCenter",data:function(){return{}},created:function(){},methods:{back:function(){this.$router.go(-1)}}}},bUJC:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"header"},[e._v("\n    头部\n")])},r=[],a={render:o,staticRenderFns:r};t.a=a},dQCR:function(e,t,n){"use strict";function o(e){n("E8fY")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("NTC3"),a=n.n(r),u=n("1rBb"),c=n("VU/8"),i=o,l=c(a.a,u.a,i,"data-v-66b06e72",null);t.default=l.exports},"h/N8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"header",data:function(){return{}},created:function(){}}},hxP8:function(e,t,n){"use strict";function o(e){n("l6qL")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("h/N8"),a=n.n(r),u=n("bUJC"),c=n("VU/8"),i=o,l=c(a.a,u.a,i,"data-v-90c256f2",null);t.default=l.exports},l6qL:function(e,t){},qN95:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={render:o,staticRenderFns:r};t.a=a},suqh:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"homes"},[e.$route.meta.requiresAuth?e._e():n("div",{staticClass:"home"},[n("myheader"),e._v(" "),n("div",{staticClass:"main"},[e._v("\n        home\n        "),n("div",{on:{click:function(t){e.godetail(1)}}},[e._v("列表1")]),e._v(" "),n("div",{on:{click:function(t){e.godetail(2)}}},[e._v("列表2")]),e._v(" "),n("div",{on:{click:function(t){e.godetail(3)}}},[e._v("列表3")]),e._v(" "),n("div",{on:{click:function(t){e.godetail(4)}}},[e._v("列表4")])]),e._v(" "),n("myfooter")],1),e._v(" "),e.$route.meta.requiresAuth?n("div",[n("router-view")],1):e._e()])},r=[],a={render:o,staticRenderFns:r};t.a=a},tMdc:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("KOga"),a=o(r),u=n("hxP8"),c=o(u),i=n("dQCR"),l=o(i);t.default={name:"home",data:function(){return{}},created:function(){a.default.fetch("GETFACADELIST").then(function(e){console.log(e,"sfwefwefewfewfwe")})},methods:{godetail:function(e){this.$router.push({name:"detail",params:{goodId:e}})}},components:{myheader:c.default,myfooter:l.default}}},uNhH:function(e,t,n){"use strict";function o(e){n("vFSa")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("GlZy"),a=n.n(r),u=n("WW4/"),c=n("VU/8"),i=o,l=c(a.a,u.a,i,"data-v-dfc4ea1c",null);t.default=l.exports},vFSa:function(e,t){},"vt++":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n={main:{name:"王健男",phone:15333347509},allDeveloper:{xuanhe:{name:"王健男",phone:15333347509}}},o={domain:"http://zuche.ueepub.cn",log:!0,showLog:!0,showNetWorkErrorInfo:!0,defaultUploadNetWorkErrorInfo:!1},r={domain:"http://zuche.ueepub.cn",log:!1,showLog:!1,showNetWorkErrorInfo:!1,defaultUploadNetWorkErrorInfo:!0},a=function(){return r}();a.showLog||function(){console.disableYellowBox=!0}(),a.log||function(){e.console={info:function(){},log:function(){},warn:function(){},error:function(){}}}(),t.AppName="咨讯",t.AppPlatform="mobile web",t.AppVersion="1.0.0",t.AppEnv="debug",t.AppStorageName="CaoXianSheng",t.errorCollectApi="http://doc.wenshuai.cn/api/error/add",t.developmentConfig=o,t.productionConfig=r,t.env=a,t.developer=n}).call(t,n("DuR2"))},xJD8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},yxqt:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[e._v("\n    userCenter\n    "),n("div",{staticClass:"back",on:{click:function(t){e.back()}}},[e._v("返回")])])},r=[],a={render:o,staticRenderFns:r};t.a=a}},["NHnr"]);
//# sourceMappingURL=app.b42f378920b4afc71afd.js.map