(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c42841a6"],{"0173":function(t,e,i){"use strict";var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hi-switch",class:t.rootElementClassList},[t.invert?e("input",{directives:[{name:"model",rawName:"v-model",value:t.cModel,expression:"cModel"}],key:"".concat(t.switchUniqueId,"-invert"),attrs:{type:"checkbox",id:t.switchUniqueId,disabled:t.disabled,"true-value":!1,"false-value":!0},domProps:{checked:Array.isArray(t.cModel)?t._i(t.cModel,null)>-1:t._q(t.cModel,!1)},on:{change:function(e){var i=t.cModel,l=e.target,a=!l.checked;if(Array.isArray(i)){var s=null,o=t._i(i,s);l.checked?o<0&&(t.cModel=i.concat([s])):o>-1&&(t.cModel=i.slice(0,o).concat(i.slice(o+1)))}else t.cModel=a}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.cModel,expression:"cModel"}],key:"".concat(t.switchUniqueId,"-normal"),attrs:{type:"checkbox",id:t.switchUniqueId,disabled:t.disabled},domProps:{checked:Array.isArray(t.cModel)?t._i(t.cModel,null)>-1:t.cModel},on:{change:function(e){var i=t.cModel,l=e.target,a=!!l.checked;if(Array.isArray(i)){var s=null,o=t._i(i,s);l.checked?o<0&&(t.cModel=i.concat([s])):o>-1&&(t.cModel=i.slice(0,o).concat(i.slice(o+1)))}else t.cModel=a}}}),e("label",{attrs:{for:t.switchUniqueId}},[e("span",{staticClass:"track"})])])},a=[],s=i("11c1"),o={name:"hi-switch",props:{model:{type:Boolean},disabled:{type:Boolean},invert:{type:Boolean},rootElementClassList:{type:Array,default:function(){return[]}}},data:function(){return{componentUUID:null}},computed:{cModel:{get:function(){return this.model},set:function(t){this.$emit("update:model",t)}},switchUniqueId:function(){return"hi-switch-".concat(this.componentUUID)}},created:function(){this.componentUUID=Object(s["v4"])()}},c=o,n=i("2877"),r=Object(n["a"])(c,l,a,!1,null,"18d7e21c",null);e["a"]=r.exports},"11c1":function(t,e,i){var l=i("c437"),a=i("c64e"),s=a;s.v1=l,s.v4=a,t.exports=s},2366:function(t,e){for(var i=[],l=0;l<256;++l)i[l]=(l+256).toString(16).substr(1);function a(t,e){var l=e||0,a=i;return[a[t[l++]],a[t[l++]],a[t[l++]],a[t[l++]],"-",a[t[l++]],a[t[l++]],"-",a[t[l++]],a[t[l++]],"-",a[t[l++]],a[t[l++]],"-",a[t[l++]],a[t[l++]],a[t[l++]],a[t[l++]],a[t[l++]],a[t[l++]]].join("")}t.exports=a},"73ca":function(t,e,i){"use strict";i("badd")},"7ae3":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t._self._c;return e("article",{staticClass:"tabSys"},[e("section",[e("h2",[t._v("Tab Type")]),e("HiTabs",{attrs:{size:"xl"}},[e("HiTab",{staticClass:"p-10",attrs:{label:"진행중",onActive:"",onNew:""}},[t._v("진행중인 컨텐츠")]),e("HiTab",{staticClass:"p-10",attrs:{label:"종료"}},[t._v("종료된 컨텐츠")]),e("HiTab",{staticClass:"p-10",attrs:{label:"임시저장"}},[t._v("임시저장  컨텐츠")])],1),e("HiTabs",{attrs:{type:"type01",size:"md",block:""}},[e("HiTab",{staticClass:"p-10",attrs:{label:"대화상대",onActive:""}},[t._v("대화상대 컨텐츠")]),e("HiTab",{staticClass:"p-10",attrs:{label:"최근대화목록"}},[t._v("최근대화목록 컨텐츠")])],1),e("HiTabs",{attrs:{type:"type02",align:"center"}},[e("HiTab",{staticClass:"p-10",attrs:{label:"학부모",onActive:""}},[t._v("학부모 컨텐츠")]),e("HiTab",{staticClass:"p-10",attrs:{label:"학생"}},[t._v("학생 컨텐츠")])],1),e("HiTabs",{attrs:{type:"type03",size:"xl",block:""}},[e("HiTab",{staticClass:"p-10",attrs:{label:"사용중인 양식",ico:"ico-chart"}},[t._v("사용중인 양식 컨텐츠")]),e("HiTab",{staticClass:"p-10",attrs:{label:"제출 내역",ico:"ico-chart"}},[t._v("제출 내역 컨텐츠")]),e("HiTab",{staticClass:"p-10",attrs:{label:"학생별 현황",ico:"ico-chart"}},[t._v("학생별 현황 컨텐츠")]),e("HiTab",{staticClass:"p-10",attrs:{label:"신청서 관리",ico:"ico-chart",onActive:""}},[t._v("신청서 관리 컨텐츠")])],1),e("HiTabs",{attrs:{type:"type04",size:"sm"}},[e("HiTab",{staticClass:"p-10",attrs:{label:"전체",onActive:""}},[t._v("전체 컨텐츠")]),e("HiTab",{staticClass:"p-10",attrs:{label:"좋음"}},[t._v("좋음 컨텐츠")]),e("HiTab",{staticClass:"p-10",attrs:{label:"노력"}},[t._v("노력 컨텐츠")])],1)],1),e("div",{staticClass:"ctrArea"},[e("div",{staticClass:"elArea"},[e("HiTabs",{attrs:{type:t.propsVal.type,size:t.propsVal.size,align:t.propsVal.align,block:!0===t.propsVal.block}},[e("HiTab",{staticClass:"p-10",attrs:{label:"선택 탭",onActive:""}},[t._v(" 선택 탭 컨텐츠 01")]),e("HiTab",{staticClass:"p-10",attrs:{label:"신규 알림 탭",onNew:""}},[t._v(" 신규 알림 탭 컨텐츠 02")]),e("HiTab",{staticClass:"p-10",attrs:{label:"아이콘 탭",ico:"ico-chart"}},[t._v("아이콘 탭 컨텐츠 03")])],1)],1),e("ul",{staticClass:"propArea"},[e("li",[e("label",[t._v("TABS TYPE")]),e("hi-select-box",{attrs:{value:t.propsVal.type,items:t.propsOpt.type,"empty-title":"TYPE"},on:{"update:value":function(e){t.propsVal.type=e}}})],1),e("li",[e("label",[t._v("TABS SIZE")]),e("hi-select-box",{attrs:{value:t.propsVal.size,items:t.propsOpt.size,"empty-title":"SIZE"},on:{"update:value":function(e){t.propsVal.size=e}}})],1),e("li",[e("label",[t._v("TABS ALIGN")]),e("hi-select-box",{attrs:{value:t.propsVal.align,items:t.propsOpt.align,"empty-title":"ALIGN"},on:{"update:value":function(e){t.propsVal.align=e}}})],1),e("li",[e("label",[t._v("TABS BLOCK")]),e("hi-switch",{on:{"update:model":function(e){t.propsVal.block=e}},model:{value:t.propsVal.block,callback:function(e){t.$set(t.propsVal,"block",e)},expression:"propsVal.block"}})],1)]),e("div",{staticClass:"codeArea"},[e("pre",[t._v("        "),e("code",{domProps:{innerHTML:t._s(t.generatedCode)}}),t._v("\n      ")])])])])},a=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hi-tabs"},[e("div",{class:t.classList},t._l(t.tabs,(function(i,l){return e("button",{key:l,class:{"is-active":i.isActive,"is-new":i.isNew},on:{click:function(e){return t.selectTab(i)}}},[i.ico?e("i",{class:"hi-ico "+i.ico}):t._e(),t._v("\n      "+t._s(i.label)+"\n    ")])})),0),e("div",{staticClass:"hi-tab-content"},[t._t("default")],2)])},o=[],c={name:"HiTabs",props:{block:{type:Boolean,default:!1},type:{type:String,default:null},size:{type:String,default:null},align:{type:String,default:null}},data:function(){return{tabs:[]}},methods:{addTab:function(t){this.tabs.push(t),(1===this.tabs.length||t.isActive)&&this.selectTab(t)}},computed:{classList:function(){var t=["hi-tab"];return this.type&&t.push(this.type),this.size&&t.push("tab-".concat(this.size)),"center"===this.align?t.push("j-center"):"left"!==this.align&&("right"===this.align&&t.push("j-right")),this.block&&t.push("tab-block"),t.join(" ")}}},n=c,r=i("2877"),u=Object(r["a"])(n,s,o,!1,null,null,null),p=u.exports,d=function(){var t=this,e=t._self._c;return t.isActive?e("div",[t._t("default")],2):t._e()},v=[],b={name:"HiTab",props:{label:{type:String,required:!0},onActive:{type:Boolean,default:!1},onNew:{type:Boolean,default:!1},ico:{type:String,default:null}},data:function(){return{isActive:this.onActive,isNew:this.onNew,isIco:this.ico}},mounted:function(){this.$parent.addTab(this)}},h=b,f=Object(r["a"])(h,d,v,!1,null,null,null),y=f.exports,m=i("aca8"),g=i("0173"),T={name:"ComponentsTab",components:{HiTabs:p,HiTab:y,HiSelectBox:m["a"],HiSwitch:g["a"]},data:function(){return{propsVal:{type:"",size:"md",align:"",block:!1,onActive:!0,onNew:!1,ico:""},propsOpt:{type:[{value:"",title:"default"},{value:"type01",title:"type01"},{value:"type02",title:"type02"},{value:"type03",title:"type03"},{value:"type04",title:"type04"}],size:[{value:"xs",title:"xs"},{value:"sm",title:"sm"},{value:"md",title:"md"},{value:"lg",title:"lg"},{value:"xl",title:"xl"}],align:[{value:"",title:"left"},{value:"center",title:"center"},{value:"right",title:"right"}],ico:[{value:"ico-none",title:"none"},{value:"ico-plus",title:"plus"},{value:"ico-chart",title:"chart"},{value:"ico-close-circle-fill",title:"close-circle-fill"},{value:"ico-speech-bubble",title:"speech-bubble"},{value:"ico-volume",title:"volume"},{value:"ico-sort-up",title:"sort-up"},{value:"ico-sort-down",title:"sort-down"},{value:"ico-printer",title:"printer"},{value:"ico-pointlist",title:"pointlist"},{value:"ico-file-upload",title:"file-upload"},{value:"ico-file-down",title:"file-down"},{value:"ico-time-fill",title:"time-fill"},{value:"ico-time",title:"time"},{value:"ico-refresh",title:"refresh"},{value:"ico-refresh2",title:"refresh2"},{value:"ico-expand",title:"expand"},{value:"ico-shrink",title:"shrink"},{value:"ico-drawnup",title:"drawnup"},{value:"ico-close",title:"close"},{value:"ico-close2",title:"close2"},{value:"ico-close3",title:"close3"}]}}},computed:{generatedCode:function(){var t=["hi-tab",this.propsVal.type?'type="'.concat(this.propsVal.type,'"'):"",this.propsVal.size?'size="tab-'.concat(this.propsVal.size,'"'):"",this.propsVal.align?'align="'.concat(this.propsVal.align,'"'):"",this.propsVal.block?"block":""].filter(Boolean).join(" ");[this.propsVal.onActive?"onActive":"",this.propsVal.onNew?"onNew":"",this.propsVal.ico?'ico="'.concat(this.propsVal.ico,'"'):""].filter(Boolean).join(" ");return"\n        &lt;HiTabs ".concat(t,' &gt;\n          &lt;HiTab label="탭메뉴01" class="p-10" onActive &gt;탭 컨텐츠 01&lt;/HiTab&gt;\n          &lt;HiTab label="탭메뉴01" class="p-10" onNew &gt;탭 컨텐츠 02&lt;/HiTab&gt;\n          &lt;HiTab label="탭메뉴01" class="p-10" ico="ico-chart" &gt;탭 컨텐츠 03&lt;/HiTab&gt;\n        &lt;/HiTabs&gt;\n    ')}}},_=T,w=(i("73ca"),Object(r["a"])(_,l,a,!1,null,"045a0ca7",null));e["default"]=w.exports},aca8:function(t,e,i){"use strict";var l=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeSelectBox,expression:"closeSelectBox"}],staticClass:"hi-selectbox",class:{"is-opened":t.isOpen,time:"time"===this.selectBoxType}},[e("button",{staticClass:"selected",attrs:{disabled:t.disabled},on:{click:t.toggleSelectBox}},[t._t("selected",(function(){return[t._v("\n      "+t._s(t.getValueTitle(t.value))+"\n    ")]}),{value:t.value})],2),t.isOpen?e("div",{staticClass:"option__layer",staticStyle:{display:"block"}},t._l(t.dividedItems,(function(i){return e("button",{key:i.value,ref:"hi-select-box-".concat(i.value),refInFor:!0,staticClass:"option",class:{"is-selected":i.value===t.value},on:{click:function(e){return t.selectItem(i)}}},[t._t("list",null,{item:i}),t._v("\n      "+t._s(i.title)+"\n    ")],2)})),0):t._e()])},a=[],s={name:"hi-select-box",props:{value:{type:[String,Number]},defaultValue:{type:[String,Number]},items:{type:Array},divide:{type:Number},selectBoxType:{type:String},disabled:{type:Boolean},emptyTitle:{type:String}},data:function(){return{isOpen:!1}},computed:{dividedItems:function(){var t=this;return this.divide?this.items.filter((function(e){return parseInt(e.value,10)%t.divide===0})):this.items}},watch:{isOpen:function(t){if(t){var e="hi-select-box-".concat(this.value);this.doFocus(e)}}},mounted:function(){!this.value&&this.defaultValue&&this.$emit("update:value",this.defaultValue)},methods:{closeSelectBox:function(){this.isOpen=!1},toggleSelectBox:function(){this.isOpen=!this.isOpen},getValueTitle:function(t){var e=this.dividedItems.find((function(e){return e.value===t}));return e?e.title:this.emptyTitle||"?"},selectItem:function(t){this.$emit("update:value",t.value),this.closeSelectBox()},doFocus:function(t){var e=this;this.$nextTick((function(){e.$refs[t]&&e.$refs[t][0]&&e.$refs[t][0].focus()}))}}},o=s,c=i("2877"),n=Object(c["a"])(o,l,a,!1,null,"3c53a6c4",null);e["a"]=n.exports},badd:function(t,e,i){},c437:function(t,e,i){var l,a,s=i("e1f4"),o=i("2366"),c=0,n=0;function r(t,e,i){var r=e&&i||0,u=e||[];t=t||{};var p=t.node||l,d=void 0!==t.clockseq?t.clockseq:a;if(null==p||null==d){var v=s();null==p&&(p=l=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==d&&(d=a=16383&(v[6]<<8|v[7]))}var b=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:n+1,f=b-c+(h-n)/1e4;if(f<0&&void 0===t.clockseq&&(d=d+1&16383),(f<0||b>c)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=b,n=h,a=d,b+=122192928e5;var y=(1e4*(268435455&b)+h)%4294967296;u[r++]=y>>>24&255,u[r++]=y>>>16&255,u[r++]=y>>>8&255,u[r++]=255&y;var m=b/4294967296*1e4&268435455;u[r++]=m>>>8&255,u[r++]=255&m,u[r++]=m>>>24&15|16,u[r++]=m>>>16&255,u[r++]=d>>>8|128,u[r++]=255&d;for(var g=0;g<6;++g)u[r+g]=p[g];return e||o(u)}t.exports=r},c64e:function(t,e,i){var l=i("e1f4"),a=i("2366");function s(t,e,i){var s=e&&i||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null),t=t||{};var o=t.random||(t.rng||l)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var c=0;c<16;++c)e[s+c]=o[c];return e||a(o)}t.exports=s},e1f4:function(t,e){var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(i){var l=new Uint8Array(16);t.exports=function(){return i(l),l}}else{var a=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}}}]);
//# sourceMappingURL=chunk-c42841a6.d61f0dac.js.map