(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{222:function(t,a,e){},223:function(t,a,e){"use strict";var r={name:"SocialShareDialog",props:["title","url","trigger"],data:function(){return{showDialog:!1,showSnackbar:!1}},watch:{trigger:function(t,a){this.showDialog=!1,this.showDialog=!0}},methods:{copySharingUrl:function(){this.copyToClipboard(this.url),this.showSnackbar=!0},copyToClipboard:function(t){var a=document.createElement("textarea");a.value=t,a.setAttribute("readonly",""),a.style={position:"absolute",left:"-9999px"},document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}}},n=(e(225),e(42)),i=Object(n.a)(r,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(a){t.showDialog=a},"update:md-active":function(a){t.showDialog=a}}},[e("social-sharing",{staticStyle:{display:"flex","justify-content":"space-between"},attrs:{url:t.url,title:t.title,description:t.title,quote:t.title,hashtags:"basket12","twitter-user":"v_ntakouris"},inlineTemplate:{render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("network",{attrs:{network:"facebook"}},[a("img",{staticClass:"social",attrs:{src:"/facebook.png"}})]),a("network",{attrs:{network:"linkedin"}},[a("img",{staticClass:"social",attrs:{src:"/linkedin.png"}})]),a("network",{attrs:{network:"twitter"}},[a("img",{staticClass:"social",attrs:{src:"/twitter.png"}})])],1)},staticRenderFns:[]}}),e("md-dialog-actions",[e("md-button",{staticClass:"md-raised md-accent",on:{click:function(a){return t.copySharingUrl()}}},[t._v("Αντιγραφη συνδεσμου")]),e("md-button",{on:{click:function(a){t.showDialog=!1}}},[t._v("OK")])],1),e("md-snackbar",{attrs:{"md-duration":1e4,"md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(a){t.showSnackbar=a},"update:md-active":function(a){t.showSnackbar=a}}},[e("span",[t._v("Μπορείτε να κάνετε επικόλληση τον σύνδεσμο για να τον χρησιμοποιήσετε.")]),e("md-button",{staticClass:"md-primary",on:{click:function(a){t.showSnackbar=!1}}},[t._v("Ok")])],1)],1)],1)},[],!1,null,null,null);a.a=i.exports},224:function(t){t.exports=JSON.parse('{"baseUrl":"https://basket12.gr"}')},225:function(t,a,e){"use strict";var r=e(222);e.n(r).a},227:function(t,a,e){},241:function(t){t.exports=JSON.parse('[{"display":"Η συμμετοχή γυναικών στα διοικητικά συμβούλια των Ελληνικών Αθλητικών Ομοσπονδιών","subhead":"Πανελλήνια Ένωση Προώθησης Γυναικών στον Αθλητισμό και τα Σπορ - Π.Ε.Π.Γ.Α.Σ. - Τόμος ΧΙ (1)_2019","source":"https://www.pepgas.gr/%CF%80%CE%B5%CF%81%CE%B9%CE%BF%CE%B4%CE%B9%CE%BA%CF%8C/%CF%80%CE%B5%CF%81%CE%B9%CE%B5%CF%87%CF%8C%CE%BC%CE%B5%CE%BD%CE%B1/%CF%84%CE%BF%CE%BC%CE%BF%CF%83-%CF%87%CE%B9-12019?fbclid=IwAR2DP1kymP0d0z2unNDD9uCqm1QzIvzSyIMbAZkDKjJ3j1OzR75LVYouI-s","href":"https://www.pepgas.gr/sites/default/files/drakou_et_al_40-54_new.pdf?fbclid=IwAR1fW054g8p1azxpmdN94TmefL4I-odunS1IsKGgUSoxiXD9CbsgJHNYXW4","slug":"simetoxi-ginekon"}]')},242:function(t,a,e){"use strict";var r=e(227);e.n(r).a},260:function(t,a,e){"use strict";e.r(a);var r=e(241),n=e(224),i={name:"ArthroCard",components:{SocialShareDialog:e(223).a},props:["arthro"],data:function(){return{triggerDialog:!1}},methods:{getSharingUrl:function(){var t=n.baseUrl;return"".concat(t,"/arthra#").concat(this.arthro.slug)},openSharingDialog:function(){this.triggerDialog=!this.triggerDialog}}},o=(e(242),e(42)),s={name:"Arthra",components:{ArthroCard:Object(o.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("md-card",{staticClass:"diadikasia-card",staticStyle:{"margin-left":"0"},attrs:{"md-elevation":1,"md-with-hover":""}},[e("md-ripple",[e("md-card-header",{attrs:{id:t.arthro.slug}},[e("a",{staticClass:"md-title",attrs:{href:t.arthro.href,target:"_blank"}},[t._v(t._s(t.arthro.display))]),e("div",{staticClass:"md-subhead"},[t._v(t._s(t.arthro.subhead))])])],1),e("md-card-actions",[e("md-button",{attrs:{href:t.arthro.source,target:"_blank"}},[t._v("\n        ΠΗΓΗ\n        "),e("md-icon",{staticStyle:{"margin-left":"4px"}},[t._v("center_focus_strong")])],1),e("md-button",{attrs:{href:t.arthro.href}},[t._v("\n        ΠΡΟΒΟΛΗ\n        "),e("md-icon",{staticStyle:{"margin-left":"4px"}},[t._v("archive")])],1),e("md-button",{on:{click:function(a){return t.openSharingDialog()}}},[t._v("Μοιρασου")]),e("md-button",{staticClass:"md-icon-button",on:{click:function(a){return t.openSharingDialog()}}},[e("md-icon",[t._v("share")])],1)],1)],1),e("SocialShareDialog",{attrs:{title:t.arthro.display,url:t.getSharingUrl(),trigger:t.triggerDialog}})],1)},[],!1,null,"c063f818",null).exports},data:function(){return{arthra:r,title:"Επιστημονικά Άρθρα"}},metaInfo:function(){return{title:this.title,meta:[{property:"og:type",content:"website"},{property:"og:title",content:this.title},{property:"og:image",content:"/diafaneia.jpg"},{name:"twitter:image",content:"/diafaneia.jpg"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:this.title},{name:"twitter:site",content:"@v_ntakouris"},{name:"twitter:creator",content:"@v_ntakouris"}]}}},c=Object(o.a)(s,function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",{attrs:{title:this.title}},[a("section",this._l(this.arthra,function(t){return a("ArthroCard",{key:t.href,attrs:{arthro:t}})}),1)])},[],!1,null,null,null);a.default=c.exports}}]);