(function(e){function t(t){for(var r,n,l=t[0],o=t[1],c=t[2],v=0,u=[];v<l.length;v++)n=l[v],a[n]&&u.push(a[n][0]),a[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,l=1;l<i.length;l++){var o=i[l];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=i[0]))}return e}var r={},a={1:0},s=[];function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=r,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;s.push([8,0]),i()})({8:function(e,t,i){e.exports=i("Vtdi")},JNt9:function(e,t,i){},Vtdi:function(e,t,i){"use strict";i.r(t);var r=i("Kw5r"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"list"===e.view,expression:"view==='list'"}]},[i("b-navbar",{attrs:{variant:"dark",type:"dark"}},[i("b-navbar-nav",{attrs:{href:"#"}},[i("b-btn",{attrs:{variant:"light"},on:{click:e.ujpartner}},[e._v("Új üzleti partner felvétele")])],1),i("b-nav-form",{attrs:{action:"#"}},[i("b-form-input",{staticClass:"mr-sm-2",attrs:{type:"text",placeholder:"Üzleti partner vagy Cég"},nativeOn:{click:function(t){e.keres=""},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.keresenter(t):null}},model:{value:e.keres,callback:function(t){e.keres=t},expression:"keres"}})],1)],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:"uja"===e.view||"edit"===e.view,expression:"view==='uja' || view==='edit'"}]},[i("b-navbar",{attrs:{variant:"dark",type:"dark"}},[i("b-navbar-nav",{attrs:{href:"#"}},[i("b-btn",{attrs:{variant:"light"},on:{click:function(t){e.view="list"}}},[e._v("Vissza a listához")])],1)],1)],1),i("div",{attrs:{id:"body"}},[i("div",{staticClass:"text-center cim"},[e._v("Üzleti partnerek nyilvántartása")]),i("b-btn",{attrs:{variant:"light"},on:{click:function(t){e.view="list"}}},[e._v("Partner Lista")]),i("div",{staticStyle:{height:"4px"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:"list"===e.view&&e.tbody.length,expression:"view==='list' && tbody.length"}],staticClass:"kerek"},[i("div",{staticStyle:{height:"13px"}}),i("b-table",{attrs:{striped:"",dark:"",fields:e.thead,items:e.tbody},scopedSlots:e._u([{key:"_id",fn:function(t){return[i("b-btn",{attrs:{size:"sm",variant:"success"},on:{click:function(i){e.edit(""+t.value)}}},[e._v("Módosítás")]),e._v("\n                    /\n                    "),i("b-btn",{attrs:{size:"sm",variant:"danger"},on:{click:function(i){e.del(""+t.value)}}},[e._v("Törlés")])]}}])})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.tbody.length&&"list"===e.view,expression:"!tbody.length  && view==='list'"}],staticClass:"text-center"},[i("br"),e.tbody_origin.length?i("div",{staticClass:"red"},[e._v("\n                Nincs az adatbázisban a keresési feltételnek megfelelő partner!\n            ")]):e._e(),e.tbody_origin.length?e._e():i("div",{staticClass:"red"},[e._v("\n                Az adatbázis üres!\n            ")]),i("br"),i("br"),i("b-btn",{attrs:{variant:"danger"},on:{click:e.ujpartner}},[e._v("Új partner felvétele")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:"uja"===e.view||"edit"===e.view,expression:"view==='uja' || view==='edit'"}],staticClass:"row"},[i("div",{staticClass:"col"}),i("div",{staticClass:"col"},[i("hr"),e.form._id?e._e():i("h5",{staticClass:"text-center"},[e._v("Új partner felvétele")]),e.form._id?i("h5",{staticClass:"text-center"},[e._v("Adatmódosítás")]):e._e(),i("hr"),i("b-form",{attrs:{name:"f1"}},[e._v("\n                    Partner neve\n                    "),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("b-input",{ref:"allnevi",attrs:{placeholder:"Partner neve",required:""},model:{value:e.form.cegnev,callback:function(t){e.$set(e.form,"cegnev",t)},expression:"form.cegnev"}})],1),e.form.cegnev&&!e.form.nev?i("div",[i("b-btn",{on:{click:e.csere}},[e._v("⇣")])],1):e._e()]),e._v("\n                    Cég neve\n\n                    "),i("b-input",{ref:"cegnevi",attrs:{required:"",placeholder:"Cég neve"},model:{value:e.form.nev,callback:function(t){e.$set(e.form,"nev",t)},expression:"form.nev"}}),e._v(" Cég címe\n                    "),i("b-input",{ref:"cegnevi",attrs:{required:"",placeholder:"Cég címe"},model:{value:e.form.cim,callback:function(t){e.$set(e.form,"cim",t)},expression:"form.cim"}}),e._v(" Cég telefonszáma\n                    "),i("b-input",{attrs:{placeholder:"Cég telefonszáma",required:""},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}}),e._v(" Cég adószáma\n                    "),i("b-input",{attrs:{placeholder:"Cég adószáma",required:""},model:{value:e.form.asz,callback:function(t){e.$set(e.form,"asz",t)},expression:"form.asz"}}),e._v(" Cég nyilvántartási száma\n                    "),i("b-input",{attrs:{placeholder:"Cég nyilvántartási száma",required:""},model:{value:e.form.nysz,callback:function(t){e.$set(e.form,"nysz",t)},expression:"form.nysz"}}),e._v(" Cég bankszámla száma\n                    "),i("b-input",{attrs:{placeholder:"Cég bankszámla száma",required:""},model:{value:e.form.bsz,callback:function(t){e.$set(e.form,"bsz",t)},expression:"form.bsz"}}),e._v(" Kapcsolat tipusa\n                    "),i("b-input",{attrs:{list:"tipus",placeholder:"Tipusa",required:""},model:{value:e.form.tipus,callback:function(t){e.$set(e.form,"tipus",t)},expression:"form.tipus"}}),i("datalist",{attrs:{id:"tipus"}},e._l(e.flist,function(t){return i("option",[e._v(e._s(t))])})),e._v("\n\n                    Utolsó tranzakció dátuma\n                    "),i("b-input",{attrs:{type:"date",list:"tipus"},model:{value:e.form.utrd,callback:function(t){e.$set(e.form,"utrd",t)},expression:"form.utrd"}})],1),i("hr"),i("div",{staticClass:"text-center"},[e.form.cegnev&&e.form.nev&&e.form.tipus?i("b-btn",{on:{click:e.ment}},[e._v("Mentés")]):e._e()],1)],1),i("div",{staticClass:"col"})])],1),e.hiba?i("div",{staticClass:"text-center red"},[e._v("\n        Hálózati hiba, a módosításokat nem sikerült menteni!\n    ")]):e._e()])},s=[],n="http://localhost:3000",l={name:"app",data(){return{keres:"",hiba:!1,view:"list",thead:[{key:"nev",label:"Cég neve",sortable:!0},{key:"cegnev",label:"Partner neve",sortable:!0},{key:"nev",label:"Cím",sortable:!0},{key:"tel",label:"Cég telefonszáma",mask:"(**)***-****",sortable:!0},{key:"utrd",label:"Utolsó tranzakció dátuma",sortable:!0,class:"text-center"},{key:"tel",label:"Cég adószám",mask:"********-*-**"},{key:"tel",label:"Cég nyilvántartási szám",mask:"**-**-******"},{key:"tel",label:"Cég bankszámla száma",mask:"********-********"},{key:"tipus",label:"Kapcsolat típusa",sortable:!0},{key:"tipus",label:"Típus",sortable:!0},{key:"_id",label:"Szerk. / Törl.",class:"text-right"}],tbody_origin:[],form:{}}},methods:{csere(){this.$set(this.form,"nev",this.form.cegnev),this.$set(this.form,"cegnev","");let e=setInterval(()=>{this.$refs.allnevi.focus(),clearInterval(e)},100)},ment(){this.form._id?this.axios.post(n+"/modify",this.form).then(e=>{if(e.data.n)this.view="list";else{this.hiba=!0;let e=setInterval(()=>{this.hiba=!1,clearInterval(e)},1500)}}):(this.keres=this.form.cegnev,this.axios.post(n+"/",this.form).then(e=>{if(e.data._id)this.form._id=e.data._id,this.tbody_origin.push(this.form),this.view="list";else{this.hiba=!0;let e=setInterval(()=>{this.hiba=!1,clearInterval(e)},1500)}}))},ujpartner(){this.form={szule:(new Date).getYear()+1900,utrd:(new Date).toLocaleDateString("hu-HU").split(".").map(e=>e.trim()).slice(0,3).join("-")},this.form.cegnev=this.keres,this.view="uja";let e=setInterval(()=>{this.$refs.cegnevi.focus(),clearInterval(e)},100)},keresenter(){0===this.tbody.length?this.ujpartner():1===this.tbody.length&&this.edit(this.tbody[0]._id)},edit(e){this.tbody_origin.find(t=>t._id==e)&&(this.form=this.tbody_origin.find(t=>t._id==e),this.view="uja")},del(e){this.axios.post(n+"/del",{id:e}).then(t=>{if(t.data.ok)this.tbody_origin=this.tbody_origin.map(t=>t._id==e?(t._id="",t):t),this.tbody_origin.sort((e,t)=>t._id.localeCompare(e._id)),this.tbody_origin.pop(),this.tbody_origin.sort((e,t)=>e.nev.localeCompare(t.nev)),this.keres="";else{this.hiba=!0;let e=setInterval(()=>{this.hiba=!1,clearInterval(e)},1500)}})}},computed:{flist(){let e=new Set;this.tbody_origin.forEach(t=>e.add(t.tipus));let t=[];return e.forEach(e=>t.push(e)),t.sort((e,t)=>e.localeCompare(t)),t},tbody(){let e=new RegExp(this.keres,"i");return this.tbody_origin.filter(t=>e.test(t.cegnev)||e.test(t.nev)||e.test(t.tipus)).slice(0,10)}},mounted(){this.axios.get(n+"/alldata").then(e=>this.tbody_origin=e.data.sort((e,t)=>e.nev.localeCompare(t.nev)))}},o=l,c=(i("dC7Z"),i("KHd+")),d=Object(c["a"])(o,a,s,!1,null,null,null),v=d.exports,u=i("n3sq"),f=(i("+eM2"),i("LdiE"),i("vDqi")),h=i.n(f),m=i("p/7L"),b=i.n(m);r["a"].use(b.a,h.a),r["a"].use(u["a"]),r["a"].config.productionTip=!1,new r["a"]({render:e=>e(v)}).$mount("#app")},dC7Z:function(e,t,i){"use strict";var r=i("JNt9"),a=i.n(r);a.a}});
//# sourceMappingURL=app.572f12fc.js.map