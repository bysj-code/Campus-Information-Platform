(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ershouwupin/add-or-update"],{"264c":function(e,n,i){"use strict";i.r(n);var r=i("4f9b"),u=i.n(r);for(var t in r)"default"!==t&&function(e){i.d(n,e,(function(){return r[e]}))}(t);n["default"]=u.a},3390:function(e,n,i){"use strict";var r=i("c995"),u=i.n(r);u.a},"44f3":function(e,n,i){"use strict";i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return t})),i.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"6591"))}},u=function(){var e=this,n=e.$createElement;e._self._c},t=[]},"4f9b":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(i("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function t(e,n,i,r,u,t,a){try{var o=e[t](a),c=o.value}catch(s){return void i(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function a(e){return function(){var n=this,i=arguments;return new Promise((function(r,u){var a=e.apply(n,i);function o(e){t(a,r,u,o,c,"next",e)}function c(e){t(a,r,u,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("6591"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{ruleForm:{wupinmingcheng:"",wupinfenlei:"",tupian:"",guige:"",xinjiuchengdu:"",yuanjia:"",ershoujia:"",shangpinmiaoshu:"",beizhu:"",maijiazhanghao:"",maijiaxingming:"",maijiashouji:"",clicktime:"",clicknum:"",userid:""},wupinfenleiOptions:[],wupinfenleiIndex:0,user:{},ro:{wupinmingcheng:!1,wupinfenlei:!1,tupian:!1,guige:!1,xinjiuchengdu:!1,yuanjia:!1,ershoujia:!1,shangpinmiaoshu:!1,beizhu:!1,maijiazhanghao:!1,maijiaxingming:!1,maijiashouji:!1,clicktime:!1,clicknum:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var i=this;return a(r.default.mark((function u(){var t,a,o,c;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return t=e.getStorageSync("nowTable"),u.next=3,i.$api.session(t);case 3:return a=u.sent,i.user=a.data,i.ruleForm.maijiazhanghao=i.user.maijiazhanghao,i.ruleForm.maijiaxingming=i.user.maijiaxingming,i.ruleForm.maijiashouji=i.user.maijiashouji,u.next=10,i.$api.option("wupinfenlei","wupinfenlei",{});case 10:if(a=u.sent,i.wupinfenleiOptions=a.data,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){u.next=20;break}return i.ruleForm.id=n.id,u.next=18,i.$api.info("ershouwupin",i.ruleForm.id);case 18:a=u.sent,i.ruleForm=a.data;case 20:if(!n.cross){u.next=87;break}o=e.getStorageSync("crossObj"),u.t0=r.default.keys(o);case 23:if((u.t1=u.t0()).done){u.next=87;break}if(c=u.t1.value,"wupinmingcheng"!=c){u.next=29;break}return i.ruleForm.wupinmingcheng=o[c],i.ro.wupinmingcheng=!0,u.abrupt("continue",23);case 29:if("wupinfenlei"!=c){u.next=33;break}return i.ruleForm.wupinfenlei=o[c],i.ro.wupinfenlei=!0,u.abrupt("continue",23);case 33:if("tupian"!=c){u.next=37;break}return i.ruleForm.tupian=o[c],i.ro.tupian=!0,u.abrupt("continue",23);case 37:if("guige"!=c){u.next=41;break}return i.ruleForm.guige=o[c],i.ro.guige=!0,u.abrupt("continue",23);case 41:if("xinjiuchengdu"!=c){u.next=45;break}return i.ruleForm.xinjiuchengdu=o[c],i.ro.xinjiuchengdu=!0,u.abrupt("continue",23);case 45:if("yuanjia"!=c){u.next=49;break}return i.ruleForm.yuanjia=o[c],i.ro.yuanjia=!0,u.abrupt("continue",23);case 49:if("ershoujia"!=c){u.next=53;break}return i.ruleForm.ershoujia=o[c],i.ro.ershoujia=!0,u.abrupt("continue",23);case 53:if("shangpinmiaoshu"!=c){u.next=57;break}return i.ruleForm.shangpinmiaoshu=o[c],i.ro.shangpinmiaoshu=!0,u.abrupt("continue",23);case 57:if("beizhu"!=c){u.next=61;break}return i.ruleForm.beizhu=o[c],i.ro.beizhu=!0,u.abrupt("continue",23);case 61:if("maijiazhanghao"!=c){u.next=65;break}return i.ruleForm.maijiazhanghao=o[c],i.ro.maijiazhanghao=!0,u.abrupt("continue",23);case 65:if("maijiaxingming"!=c){u.next=69;break}return i.ruleForm.maijiaxingming=o[c],i.ro.maijiaxingming=!0,u.abrupt("continue",23);case 69:if("maijiashouji"!=c){u.next=73;break}return i.ruleForm.maijiashouji=o[c],i.ro.maijiashouji=!0,u.abrupt("continue",23);case 73:if("clicktime"!=c){u.next=77;break}return i.ruleForm.clicktime=o[c],i.ro.clicktime=!0,u.abrupt("continue",23);case 77:if("clicknum"!=c){u.next=81;break}return i.ruleForm.clicknum=o[c],i.ro.clicknum=!0,u.abrupt("continue",23);case 81:if("userid"!=c){u.next=85;break}return i.ruleForm.userid=o[c],i.ro.userid=!0,u.abrupt("continue",23);case 85:u.next=23;break;case 87:i.styleChange();case 88:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},wupinfenleiChange:function(e){this.wupinfenleiIndex=e.target.value,this.ruleForm.wupinfenlei=this.wupinfenleiOptions[this.wupinfenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.yuanjia||e.$validate.isIntNumer(e.ruleForm.yuanjia)){n.next=3;break}return e.$utils.msg("原价应输入整数"),n.abrupt("return");case 3:if(!e.ruleForm.ershoujia||e.$validate.isIntNumer(e.ruleForm.ershoujia)){n.next=6;break}return e.$utils.msg("二手价应输入整数"),n.abrupt("return");case 6:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){n.next=9;break}return e.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 9:if(!e.ruleForm.id){n.next=14;break}return n.next=12,e.$api.update("ershouwupin",e.ruleForm);case 12:n.next=16;break;case 14:return n.next=16,e.$api.add("ershouwupin",e.ruleForm);case 16:e.$utils.msgBack("提交成功");case 17:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),r=n.getMonth()+1,u=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(i,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,i("543d")["default"])},"5e35":function(e,n,i){"use strict";(function(e){i("7343");r(i("66fd"));var n=r(i("f540"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},c995:function(e,n,i){},f540:function(e,n,i){"use strict";i.r(n);var r=i("44f3"),u=i("264c");for(var t in u)"default"!==t&&function(e){i.d(n,e,(function(){return u[e]}))}(t);i("3390");var a,o=i("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"f988e0e4",null,!1,r["a"],a);n["default"]=c.exports}},[["5e35","common/runtime","common/vendor"]]]);