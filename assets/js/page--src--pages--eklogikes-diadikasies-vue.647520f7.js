(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{227:function(e,t,c){},228:function(e,t,c){"use strict";var a={name:"SocialShareDialog",props:["title","url","trigger"],data:function(){return{showDialog:!1,showSnackbar:!1}},watch:{trigger:function(e,t){this.showDialog=!1,this.showDialog=!0}},methods:{copySharingUrl:function(){this.copyToClipboard(this.url),this.showSnackbar=!0},copyToClipboard:function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}},i=(c(234),c(42)),o=Object(i.a)(a,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("md-dialog",{attrs:{"md-active":e.showDialog},on:{"update:mdActive":function(t){e.showDialog=t},"update:md-active":function(t){e.showDialog=t}}},[c("social-sharing",{staticStyle:{display:"flex","justify-content":"space-between"},attrs:{url:e.url,title:e.title,description:e.title,quote:e.title,hashtags:"basket12","twitter-user":"v_ntakouris"},inlineTemplate:{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("network",{attrs:{network:"facebook"}},[t("img",{staticClass:"social",attrs:{src:"/facebook.png"}})]),t("network",{attrs:{network:"linkedin"}},[t("img",{staticClass:"social",attrs:{src:"/linkedin.png"}})]),t("network",{attrs:{network:"twitter"}},[t("img",{staticClass:"social",attrs:{src:"/twitter.png"}})])],1)},staticRenderFns:[]}}),c("md-dialog-actions",[c("md-button",{staticClass:"md-accent",on:{click:function(t){return e.copySharingUrl()}}},[e._v("Αντιγραφη συνδεσμου")]),c("md-button",{on:{click:function(t){e.showDialog=!1}}},[e._v("OK")])],1),c("md-snackbar",{attrs:{"md-duration":1e4,"md-active":e.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(t){e.showSnackbar=t},"update:md-active":function(t){e.showSnackbar=t}}},[c("span",[e._v("Μπορείτε να κάνετε επικόλληση τον σύνδεσμο για να τον χρησιμοποιήσετε.")]),c("md-button",{staticClass:"md-primary",on:{click:function(t){e.showSnackbar=!1}}},[e._v("Ok")])],1)],1)],1)},[],!1,null,null,null);t.a=o.exports},233:function(e){e.exports=JSON.parse('{"baseUrl":"https://basket12.gr"}')},234:function(e,t,c){"use strict";var a=c(227);c.n(a).a},235:function(e,t,c){},242:function(e){e.exports=JSON.parse('[{"title":"Ποια σωματεία (κατά αλφαβητική σειρά) και με ποιούς αντιπροσώπους ψήφισαν στις εκλογές του 2016.","slug":"somateia","href":"https://ntakouris.wordpress.com/2018/03/14/%CF%84%CE%B1-%CF%80%CF%81%CE%B1%CE%B3%CE%BC%CE%B1%CF%84%CE%B9%CE%BA%CE%AC-%CE%B1%CF%80%CE%BF%CF%84%CE%B5%CE%BB%CE%AD%CF%83%CE%BC%CE%B1%CF%84%CE%B1-%CF%84%CF%89%CE%BD-%CE%B5%CE%BA%CE%BB/#somateia"},{"title":"Ποιοι αντιπρόσωποι (κατά αλφαβητική σειρά) και με ποια σωματεία ψήφισαν στις εκλογές του 2016.","slug":"antiprosopoi","href":"https://ntakouris.wordpress.com/2018/03/14/%CF%84%CE%B1-%CF%80%CF%81%CE%B1%CE%B3%CE%BC%CE%B1%CF%84%CE%B9%CE%BA%CE%AC-%CE%B1%CF%80%CE%BF%CF%84%CE%B5%CE%BB%CE%AD%CF%83%CE%BC%CE%B1%CF%84%CE%B1-%CF%84%CF%89%CE%BD-%CE%B5%CE%BA%CE%BB/#antiprosopoi"},{"title":"Υποχρεωτική ποσόστωση γυναικών/αντρών τουλάχιστον του 1/3 των μελών του Δ.Σ. της ομοσπονδίας και στις ενώσεις, σύμφωνα με τον νέο νόμο 4603/2019","slug":"posostosi","href":"https://ntakouris.wordpress.com/2019/09/22/%ce%bf%ce%b9-%cf%83%ce%b7%ce%bc%ce%b1%ce%bd%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b1%ce%bb%ce%bb%ce%b1%ce%b3%ce%ad%cf%82-%cf%83%cf%84%ce%b7%ce%bd-%ce%bd%ce%ad%ce%b1-%ce%b5%ce%ba%ce%bb%ce%bf%ce%b3%ce%b9#posostosi-ginekon"},{"title":"Εκλογή αντιπροσώπου του αθλητικού σωματείου στην ΕΟΚ από την Γενική Συνέλευση του Σωματείου σύμφωνα με τον νέο νόμο 4603/2019.","slug":"antiprosopos","href":"https://ntakouris.wordpress.com/2019/09/22/%ce%bf%ce%b9-%cf%83%ce%b7%ce%bc%ce%b1%ce%bd%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b1%ce%bb%ce%bb%ce%b1%ce%b3%ce%ad%cf%82-%cf%83%cf%84%ce%b7%ce%bd-%ce%bd%ce%ad%ce%b1-%ce%b5%ce%ba%ce%bb%ce%bf%ce%b3%ce%b9#eklogi-antiprosopou"},{"title":"Η εκλογική διαδικασία – αρχαιρεσίες στην ομοσπονδία και στις ενώσεις σύμφωνα με τον νέο νόμο 4603/2019","slug":"ax-omospondia","href":"https://ntakouris.wordpress.com/2019/09/22/%ce%bf%ce%b9-%cf%83%ce%b7%ce%bc%ce%b1%ce%bd%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b1%ce%bb%ce%bb%ce%b1%ce%b3%ce%ad%cf%82-%cf%83%cf%84%ce%b7%ce%bd-%ce%bd%ce%ad%ce%b1-%ce%b5%ce%ba%ce%bb%ce%bf%ce%b3%ce%b9#arxeresies-omospondias"},{"title":"Η εκλογική διαδικασία – αρχαιρεσίες στο αθλητικό σωματείο σύμφωνα με τον νέο νόμο 4603/2019","slug":"ax-somateio","href":"https://ntakouris.wordpress.com/2019/09/22/%ce%bf%ce%b9-%cf%83%ce%b7%ce%bc%ce%b1%ce%bd%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b1%ce%bb%ce%bb%ce%b1%ce%b3%ce%ad%cf%82-%cf%83%cf%84%ce%b7%ce%bd-%ce%bd%ce%ad%ce%b1-%ce%b5%ce%ba%ce%bb%ce%bf%ce%b3%ce%b9#arxeresies-somatio"},{"title":"Ολόκληρη η νομοθεσία για το «ΑΘΛΗΤΙΚΟ ΣΩΜΑΤΕΙΟ» του νόμου 2725/1999, όπως ισχύει έως σήμερα (20-9-2019) και σύμφωνα με τον νέο νόμο 4603/2019","slug":"nomothesia-somatio","href":"https://ntakouris.wordpress.com/2019/09/22/%ce%bf%ce%b9-%cf%83%ce%b7%ce%bc%ce%b1%ce%bd%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b1%ce%bb%ce%bb%ce%b1%ce%b3%ce%ad%cf%82-%cf%83%cf%84%ce%b7%ce%bd-%ce%bd%ce%ad%ce%b1-%ce%b5%ce%ba%ce%bb%ce%bf%ce%b3%ce%b9#somatio"},{"title":"Ολόκληρη η νομοθεσία για την «ΑΘΛΗΤΙΚΗ ΕΝΩΣΗ» του νόμου 2725/1999, όπως ισχύει έως σήμερα (20-9-2019) και σύμφωνα με τον νέο νόμο 4603/2019","slug":"nomothesia-enosi","href":"https://ntakouris.wordpress.com/2019/09/22/%ce%bf%ce%b9-%cf%83%ce%b7%ce%bc%ce%b1%ce%bd%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b1%ce%bb%ce%bb%ce%b1%ce%b3%ce%ad%cf%82-%cf%83%cf%84%ce%b7%ce%bd-%ce%bd%ce%ad%ce%b1-%ce%b5%ce%ba%ce%bb%ce%bf%ce%b3%ce%b9#enosi"},{"title":"Ολόκληρη η νομοθεσία για την «ΑΘΛΗΤΙΚΗ ΟΜΟΣΠΟΝΔΙΑ» του νόμου 2725/1999, όπως ισχύει έως σήμερα (20-9-2019) και σύμφωνα με τον νέο νόμο 4603/2019","slug":"nomothesia-omospondia","href":"https://ntakouris.wordpress.com/2019/09/22/%ce%bf%ce%b9-%cf%83%ce%b7%ce%bc%ce%b1%ce%bd%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b1%ce%bb%ce%bb%ce%b1%ce%b3%ce%ad%cf%82-%cf%83%cf%84%ce%b7%ce%bd-%ce%bd%ce%ad%ce%b1-%ce%b5%ce%ba%ce%bb%ce%bf%ce%b3%ce%b9#omospondia"},{"title":"Δημόσια καταγγελία – Εισαγγελική παραγγελία – Γιατί τόσο απροκάλυπτα κρύβονται και διαστρεβλώνονται τα εκλογικά αποτελέσματα του 2016 - Η αυθαίρετη διαδικασία ανακήρυξης των υποψηφίων.","slug":"eklogika-apotelesmata","href":"https://ntakouris.wordpress.com/2018/01/06/%CE%B5%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CE%AE-%CE%BF%CE%BC%CE%BF%CF%83%CF%80%CE%BF%CE%BD%CE%B4%CE%AF%CE%B1-%CE%BA%CE%B1%CE%BB%CE%B1%CE%B8%CE%BF%CF%83%CF%86%CE%B1%CE%AF%CF%81%CE%B9%CF%83%CE%B7%CF%82/"},{"title":"Φεμινισμός, ανυπαρξία γυναικών στο ΔΣ και το παγκόσμιο αρνητικό φαινόμενο της Ελληνικής Ομοσπονδίας Καλαθοσφαίρισης","slug":"feminismos","href":"https://ntakouris.wordpress.com/2015/06/23/%CF%86%CE%B5%CE%BC%CE%B9%CE%BD%CE%B9%CF%83%CE%BC%CF%8C%CF%82-%CE%B1%CE%B8%CE%BB%CE%B7%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%BD%CF%8C%CE%BC%CE%BF%CF%82-%CE%BA%CE%B1%CE%B9-%CF%84%CE%BF-%CF%86%CE%B1%CE%B9/"}]')},243:function(e,t,c){"use strict";var a=c(235);c.n(a).a},256:function(e,t,c){"use strict";c.r(t);var a=c(242),i=c(233),o={name:"EklogikiCard",components:{SocialShareDialog:c(228).a},props:["diadikasia"],data:function(){return{triggerDialog:!1}},methods:{getSharingUrl:function(){var e=i.baseUrl;return"".concat(e,"/eklogikes-diadikasies#").concat(this.diadikasia.slug)},openSharingDialog:function(){this.triggerDialog=!this.triggerDialog}}},s=(c(243),c(42)),n={name:"EklogikesDiadikasies",components:{EklogikiCard:Object(s.a)(o,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("md-card",{staticClass:"md-elevation-4 diadikasia-card",staticStyle:{"margin-left":"0"}},[c("md-ripple",[c("a",{attrs:{href:e.diadikasia.href,target:"_blank",id:e.diadikasia.slug}},[c("md-card-header",[c("div",{staticClass:"md-title",style:""!==e.diadikasia.href?"":"color: black;"},[e._v("\n            "+e._s(e.diadikasia.title)+"\n          ")])])],1)]),c("md-card-actions",[c("md-button",{on:{click:function(t){return e.openSharingDialog()}}},[e._v("Μοιρασου")]),c("md-button",{staticClass:"md-icon-button",on:{click:function(t){return e.openSharingDialog()}}},[c("md-icon",[e._v("share")])],1)],1)],1),c("SocialShareDialog",{attrs:{title:e.diadikasia.title,url:e.getSharingUrl(),trigger:e.triggerDialog}})],1)},[],!1,null,"58685480",null).exports},data:function(){return{eklogikesDiadikasies:a,title:"Εκλογικές διαδικασίες"}},metaInfo:function(){return{title:this.title,meta:[{property:"og:type",content:"website"},{property:"og:title",content:this.title},{property:"og:image",content:"/diafaneia.jpg"},{name:"twitter:image",content:"/diafaneia.jpg"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:this.title},{name:"twitter:site",content:"@v_ntakouris"},{name:"twitter:creator",content:"@v_ntakouris"}]}}},r=Object(s.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",{attrs:{title:this.title}},this._l(this.eklogikesDiadikasies,function(e){return t("EklogikiCard",{key:e.title,attrs:{diadikasia:e}})}),1)},[],!1,null,"565eda2d",null);t.default=r.exports}}]);