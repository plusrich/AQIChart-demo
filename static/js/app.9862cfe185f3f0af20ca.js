webpackJsonp([1],{"+eEh":function(t,e){t.exports=((t,e)=>{let i=0,a=0,n=0,o=0,r=0;for(var s of t){let t=s[e][2];"-"!==t&&(t<51?i+=1:t<101?a+=1:t<201?n+=1:t<301?o+=1:r+=1)}return[{value:i,name:"优",visualMap:!1},{value:a,name:"良",visualMap:!1},{value:n,name:"轻度污染",visualMap:!1},{value:o,name:"中度污染",visualMap:!1},{value:r,name:"重度污染",visualMap:!1}]})},"5yYE":function(t,e){},MNID:function(t,e){t.exports=((t,e)=>{for(var i=0;i<t.length;i++)for(var a=0;a<t.length-i-1;a++)if(t[a][e][2]>t[a+1][e][2]||isNaN(t[a][e][2])){let e=t[a];t[a]=t[a+1],t[a+1]=e}return t.slice(0,5)})},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n=i("mtWM"),o=i.n(n),r=i("fZjL"),s=i.n(r),c={props:{c:{type:Object,required:!0}},data:function(){return{cityName:s()(this.c)[0]}},methods:{selectThisCity:function(t){!0===t.target.checked?this.$emit("showCity",this.c):this.$emit("deleteCity",this.c)}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"category"}},[e("span",[e("input",{attrs:{type:"checkbox",id:this.cityName},on:{click:this.selectThisCity}}),this._v(" "),e("label",{attrs:{for:this.cityName}},[this._v(this._s(this.cityName))])])])},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("5yYE")},"data-v-35ffbc68",null).exports,h=i("BO1k"),d=i.n(h),p=i("XLwt"),y=i.n(p),f=i("MNID"),v=i.n(f),m=i("+eEh"),w=i.n(m),x={name:"Chart",data:function(){return{day:[],aqiData:[],option:{baseOption:{title:[{textStyle:{color:"white",fontFamily:"Microsoft YaHei"},left:"center"},{text:"空气质量Top 5城市",top:100,left:50,textStyle:{color:"white",fontSize:16}},{text:"空气质量比例",top:180,right:120,textStyle:{color:"white",fontSize:16}}],legend:[{data:["PM 2.5"],right:0,bottom:0,textStyle:{color:"white"}},{top:260,right:0,orient:"vertical",data:["优","良","轻度污染","中度污染","重度污染"],textStyle:{color:"white"}}],tooltip:{},geo:{map:"china",roam:!0,label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},backgroundColor:"#404a59",visualMap:[{show:!0,type:"continuous",min:0,max:200,seriesIndex:0,calculable:!0,inRange:{color:["#50a3ba","#eac736","#d94e5d"]},textStyle:{color:"#fff"}},{show:!1,type:"continuous",min:0,max:200,dimension:0,seriesIndex:1,calculable:!0,inRange:{color:["#50a3ba","#eac736","#d94e5d"]},textStyle:{color:"#fff"}}],timeline:{show:!0,axisType:"category",autoPlay:!0,playInterval:1e3,data:["2015-01-05","2015-01-06","2015-01-07","2015-01-08"],lineStyle:{color:"white"},label:{color:"white"},controlStyle:{color:"white",borderColor:"white"}},grid:[{show:!0,left:60,top:170,width:200,height:200,borderWidth:0}],xAxis:[{type:"value",min:0,max:200,splitNumber:4,splitLine:{show:!1},position:"top",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#aaa"}}],yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#aaa"}}],series:[{name:"PM 2.5",type:"scatter",coordinateSystem:"geo",itemStyle:{color:"white"},tooltip:{formatter:function(t){return t.name+" : "+t.value[2]}}},{type:"bar"},{type:"pie",radius:"20%",center:[800,320],color:["rgb(80,163,186)","rgb(135,176,137)","rgb(232,198,55)","rgb(224,130,76)","rgb(217,78,93)"]}]}}}},props:{locate:{type:Array,required:!0}},computed:{coordinates:function(){var t=[],e=!0,i=!1,a=void 0;try{for(var n,o=d()(this.aqiData);!(e=(n=o.next()).done);e=!0){var r=n.value,c=[],l=!0,u=!1,h=void 0;try{for(var p,y=d()(this.locate);!(l=(p=y.next()).done);l=!0){var f=p.value,v=s()(f)[0];c.push({name:v,value:[f[v][0],f[v][1],r[v]?Number(r[v]):"-"]})}}catch(t){u=!0,h=t}finally{try{!l&&y.return&&y.return()}finally{if(u)throw h}}t.push(c)}}catch(t){i=!0,a=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw a}}return t}},methods:{drawChart:function(){y.a.init(document.getElementById("main")).setOption(this.option,!0)},requestAQIData:function(t){var e=this;o.a.get("./static/cityAQI/"+t).then(function(i){e.aqiData.push(i.data),e.day.push(t.slice(0,-5))}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;o.a.get("./static/china.json").then(function(e){y.a.registerMap("china",e.data),t.drawChart()}).catch(function(t){console.log(t)}),this.requestAQIData("2015-01-05.json"),this.requestAQIData("2015-01-06.json"),this.requestAQIData("2015-01-07.json"),this.requestAQIData("2015-01-08.json"),console.log(this.day)},watch:{coordinates:function(t){var e=this,i=t.map(function(t,i){var a=v()(t,"value"),n=w()(t,"value");return{title:[{text:e.day[i]+" 全国部分城市空气质量"},{subtext:e.day[i]},{subtext:e.day[i]}],yAxis:{data:a.map(function(t){return t.name})},series:[{data:t},{data:a.map(function(t){return t.value[2]})},{data:n}]}});this.option.options=i,this.drawChart()}}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"main"}})])}]};var C={name:"Home",data:function(){return{datas:"",cityCoordinates:[],arrow_icon:"./static/arrow.png",cityList:[]}},methods:{showCityOnMap:function(t){this.cityCoordinates.push(t)},deleteCityOnMap:function(t){for(var e=0;e<this.cityCoordinates.length;e++)t===this.cityCoordinates[e]&&this.cityCoordinates.splice(e,1)},showCityList:function(t){if(this.cityList.includes(t)){this.cityList.splice(this.cityList.findIndex(function(e){return e===t}),1)}else this.cityList.push(t)}},mounted:function(){var t=this;o.a.get("./static/classifiedCoordinates.json").then(function(e){t.datas=e.data}).catch(function(t){console.log(t)})},components:{city:u,chart:i("VU/8")(x,g,!1,function(t){i("R8gv")},"data-v-c9ad9742",null).exports}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("h3",{attrs:{id:"title"}},[t._v("请选择城市")]),t._v(" "),i("div",t._l(t.datas,function(e,a){return i("div",{key:a,attrs:{id:"option"}},[i("div",{attrs:{id:"menu"},on:{click:function(e){t.showCityList(a)}}},[i("h3",{attrs:{id:"letter"}},[t._v(t._s(a.toUpperCase()))]),t._v(" "),i("img",{class:[{rotate1:!t.cityList.includes(a)},{rotate2:t.cityList.includes(a)}],attrs:{id:"arrow",src:t.arrow_icon}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.cityList.includes(a),expression:"cityList.includes(category)"}],attrs:{id:"items"}},t._l(e,function(e,a){return i("city",{key:a,attrs:{c:e},on:{showCity:t.showCityOnMap,deleteCity:t.deleteCityOnMap}})}))])})),t._v(" "),i("chart",{attrs:{locate:t.cityCoordinates}})],1)},staticRenderFns:[]};var _={name:"App",components:{Home:i("VU/8")(C,b,!1,function(t){i("i88C")},"data-v-00e06979",null).exports}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Home")],1)},staticRenderFns:[]};var M=i("VU/8")(_,L,!1,function(t){i("oiBd")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:M},template:"<App/>"})},R8gv:function(t,e){},i88C:function(t,e){},oiBd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9862cfe185f3f0af20ca.js.map