(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{222:function(e,c,t){},223:function(e,c,t){"use strict";var a={name:"SocialShareDialog",props:["title","url","trigger"],data:function(){return{showDialog:!1,showSnackbar:!1}},watch:{trigger:function(e,c){this.showDialog=!1,this.showDialog=!0}},methods:{copySharingUrl:function(){this.copyToClipboard(this.url),this.showSnackbar=!0},copyToClipboard:function(e){var c=document.createElement("textarea");c.value=e,c.setAttribute("readonly",""),c.style={position:"absolute",left:"-9999px"},document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)}}},i=(t(225),t(42)),s=Object(i.a)(a,function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",[t("md-dialog",{attrs:{"md-active":e.showDialog},on:{"update:mdActive":function(c){e.showDialog=c},"update:md-active":function(c){e.showDialog=c}}},[t("social-sharing",{staticStyle:{display:"flex","justify-content":"space-between"},attrs:{url:e.url,title:e.title,description:e.title,quote:e.title,hashtags:"basket12","twitter-user":"v_ntakouris"},inlineTemplate:{render:function(){var e=this.$createElement,c=this._self._c||e;return c("div",[c("network",{attrs:{network:"facebook"}},[c("img",{staticClass:"social",attrs:{src:"/facebook.png"}})]),c("network",{attrs:{network:"linkedin"}},[c("img",{staticClass:"social",attrs:{src:"/linkedin.png"}})]),c("network",{attrs:{network:"twitter"}},[c("img",{staticClass:"social",attrs:{src:"/twitter.png"}})])],1)},staticRenderFns:[]}}),t("md-dialog-actions",[t("md-button",{staticClass:"md-raised md-accent",on:{click:function(c){return e.copySharingUrl()}}},[e._v("Αντιγραφη συνδεσμου")]),t("md-button",{on:{click:function(c){e.showDialog=!1}}},[e._v("OK")])],1),t("md-snackbar",{attrs:{"md-duration":1e4,"md-active":e.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(c){e.showSnackbar=c},"update:md-active":function(c){e.showSnackbar=c}}},[t("span",[e._v("Μπορείτε να κάνετε επικόλληση τον σύνδεσμο για να τον χρησιμοποιήσετε.")]),t("md-button",{staticClass:"md-primary",on:{click:function(c){e.showSnackbar=!1}}},[e._v("Ok")])],1)],1)],1)},[],!1,null,null,null);c.a=s.exports},224:function(e){e.exports=JSON.parse('{"baseUrl":"https://basket12.gr"}')},225:function(e,c,t){"use strict";var a=t(222);t.n(a).a},233:function(e,c,t){},250:function(e){e.exports=JSON.parse('[{"display":"Όλοι οι τρόποι χειραγώγησης των τελευταίων εκλογικών διαδικασιών στην ΕΟΚ και τι πρέπει να αλλάξει","href":"https://ntakouris.wordpress.com/2019/11/25/%CF%8C%CE%BB%CE%BF%CE%B9-%CE%BF%CE%B9-%CF%84%CF%81%CF%8C%CF%80%CE%BF%CE%B9-%CF%87%CE%B5%CE%B9%CF%81%CE%B1%CE%B3%CF%8E%CE%B3%CE%B7%CF%83%CE%B7%CF%82-%CF%84%CF%89%CE%BD-%CF%84%CE%B5%CE%BB%CE%B5%CF%85/","date":"25/11/2019","slug":"tropoi-xiragogisis"},{"display":"Παρέμβαση - Ομιλία του Βασίλη Ντάκουρη στην Ετήσια Σύνοδο 2019 του Ινστιτούτου Διεθνούς και Ελληνικού Αθλητικού Δικαίου (ΙΔΕΑΔ) με θέμα \\"Η διαφθορά στον αθλητισμό\\"","href":"https://ideadhellas.blogspot.com/2019/10/18-10-2019_15.html","date":"18/10/2019","slug":"diakivernisi-eok"},{"display":"Η δημοκρατία της ψευδοσυμμετοχής και ο εκφασισμός όλων των διοικητικών και οικονομικών διαδικασιών από την μικρή ηγετική ομάδα της Ελληνικής Ομοσπονδίας Καλαθοσφαίρισης","href":"https://ntakouris.wordpress.com/2019/09/14/%ce%b7-%ce%b4%ce%b7%ce%bc%ce%bf%ce%ba%cf%81%ce%b1%cf%84%ce%af%ce%b1-%cf%84%ce%b7%cf%82-%cf%88%ce%b5%cf%85%ce%b4%ce%bf%cf%83%cf%85%ce%bc%ce%bc%ce%b5%cf%84%ce%bf%cf%87%ce%ae%cf%82-%ce%ba%ce%b1%ce%b9","date":"15/09/2019","slug":"dimokratia-psevdosimetoxis"},{"display":"Πέντε δημόσια έγγραφα και ο Γενικός Γραμματέας της Ελληνικής Ομοσπονδίας Καλαθοσφαίρισης. Να απαντήσει ή να παραιτηθεί","href":"https://ntakouris.wordpress.com/2019/03/16/%cf%80%ce%ad%ce%bd%cf%84%ce%b5-%ce%b4%ce%b7%ce%bc%cf%8c%cf%83%ce%b9%ce%b1-%ce%ad%ce%b3%ce%b3%cf%81%ce%b1%cf%86%ce%b1-%ce%ba%ce%b1%ce%b9-%ce%bf-%ce%b3%ce%b5%ce%bd%ce%b9%ce%ba%cf%8c%cf%82-%ce%b3%cf%81","date":"16/03/2019","slug":"eggrafa-grammateas"},{"display":"Οι ανεξέλεγκτες και αδιαφανείς επιχορηγήσεις σε σωματεία και ενώσεις από την Ελληνική Ομοσπονδία Καλαθοσφαίρισης. Η έγγραφη καταγγελία στην ΓΓΑ","href":"https://ntakouris.wordpress.com/2019/01/08/%ce%bf%ce%b9-%ce%b1%ce%bd%ce%b5%ce%be%ce%ad%ce%bb%ce%b5%ce%b3%ce%ba%cf%84%ce%b5%cf%82-%ce%ba%ce%b1%ce%b9-%ce%b1%ce%b4%ce%b9%ce%b1%cf%86%ce%b1%ce%bd%ce%b5%ce%af%cf%82-%ce%b5%cf%80%ce%b9%cf%87%ce%bf","date":"08/01/2019","slug":"anekselegtes-epixorigiseis"},{"display":"Πόσα χρήματα και σε ποιους χρωστάει τελικά η Ελληνική Ομοσπονδία Καλαθοσφαίρισης;","href":"https://ntakouris.wordpress.com/2018/12/10/%cf%80%cf%8c%cf%83%ce%b1-%cf%87%cf%81%ce%ae%ce%bc%ce%b1%cf%84%ce%b1-%ce%ba%ce%b1%ce%b9-%cf%83%ce%b5-%cf%80%ce%bf%ce%b9%ce%bf%cf%85%cf%82-%cf%87%cf%81%cf%89%cf%83%cf%84%ce%ac%ce%b5%ce%b9-%cf%84%ce%b5","date":"10/12/2018","slug":"posa-xrimata"},{"display":"Ποια είναι τα 39 άτομα προσωπικού της ΕΟΚ και τα 17 της ΕΣΚΑ. Τα αναπάντητα ερωτήματα για την σπατάλη του δημόσιου χρήματος","href":"https://ntakouris.wordpress.com/2018/09/18/%ce%b5%ce%b9%cf%83%ce%b1%ce%b3%ce%b3%ce%b5%ce%bb%ce%b9%ce%ba%ce%ae-%cf%80%ce%b1%cf%81%ce%b1%ce%b3%ce%b3%ce%b5%ce%bb%ce%af%ce%b1-%cf%80%ce%bf%ce%b9%ce%b1-%ce%b5%ce%af%ce%bd%ce%b1%ce%b9-%cf%84%ce%b1-39","date":"18/09/2018","slug":"prosopiko-spatali"},{"display":"Οι αναπάντητες ερωτήσεις στην Απολογιστική Γ.Σ. για το 2017 της ομοσπονδίας καλαθοσφαίρισης ενάντια στην ολοκληρωτική αδιαφάνειά της","href":"https://ntakouris.wordpress.com/2018/04/15/%ce%bf%ce%b9-%ce%b1%ce%bd%ce%b1%cf%80%ce%ac%ce%bd%cf%84%ce%b7%cf%84%ce%b5%cf%82-%ce%b5%cf%81%cf%89%cf%84%ce%ae%cf%83%ce%b5%ce%b9%cf%82-%cf%83%cf%84%ce%b7%ce%bd-%ce%b1%cf%80%ce%bf%ce%bb%ce%bf%ce%b3/","date":"15/04/2018","slug":"apologistiki-2017"},{"display":"Υποχρεώθηκε να αναρτήσει τις πρώτες αποφάσεις η ΕΟΚ, μετά από καταγγελίες και αιτήματα στην ΓΓΑ,  για την μη εφαρμογή του Προγράμματος της Διαύγεια, σε συνέχεια της απάντησης του Υπουργείου Διοικητικής Ανασυγκρότησης.","href":"https://ntakouris.wordpress.com/2018/06/03/%ce%bc%ce%b5%cf%84%ce%ac-%cf%84%ce%b7%ce%bd-%ce%b1%cf%80%ce%ac%ce%bd%cf%84%ce%b7%cf%83%ce%b7-%cf%84%ce%bf%cf%85-%cf%85%cf%80%ce%bf%cf%85%cf%81%ce%b3%ce%b5%ce%af%ce%bf%cf%85-%ce%b4%ce%b9%ce%bf%ce%b9/","date":"03/06/2018","slug":"ypoxreosi-eok"}]')},251:function(e,c,t){"use strict";var a=t(233);t.n(a).a},260:function(e,c,t){"use strict";t.r(c);var a=t(250),i=t(224),s={name:"KataggeliaCard",components:{SocialShareDialog:t(223).a},props:["kataggelia"],data:function(){return{triggerDialog:!1}},methods:{getSharingUrl:function(){var e=i.baseUrl;return"".concat(e,"/kataggelies#").concat(this.kataggelia.slug)},openSharingDialog:function(){this.triggerDialog=!this.triggerDialog}}},r=(t(251),t(42)),n={name:"Kataggelies",components:{KataggeliaCard:Object(r.a)(s,function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticClass:"card"},[t("md-card",{staticClass:"diadikasia-card",staticStyle:{"margin-left":"0"},attrs:{"md-elevation":1,"md-with-hover":""}},[t("md-ripple",[t("md-card-header",[t("a",{attrs:{href:e.kataggelia.href,target:"_blank",id:e.kataggelia.slug}},[t("div",{staticClass:"md-title"},[e._v(e._s(e.kataggelia.display))])]),t("div",{staticClass:"md-subhead"},[e._v(e._s(e.kataggelia.date))])])],1),t("md-card-actions",[t("md-button",{on:{click:function(c){return e.openSharingDialog()}}},[e._v("Μοιρασου")]),t("md-button",{staticClass:"md-icon-button",on:{click:function(c){return e.openSharingDialog()}}},[t("md-icon",[e._v("share")])],1)],1)],1),t("SocialShareDialog",{attrs:{title:e.kataggelia.display,url:e.getSharingUrl(),trigger:e.triggerDialog}})],1)},[],!1,null,"69759f69",null).exports},data:function(){return{kataggelies:a,title:"Δημόσιες Καταγγελίες"}},metaInfo:function(){return{title:this.title,meta:[{property:"og:type",content:"website"},{property:"og:title",content:this.title},{property:"og:image",content:"/diafaneia.jpg"},{name:"twitter:image",content:"https://basket12.gr/diafaneia.jpg"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:this.title},{name:"twitter:site",content:"@v_ntakouris"},{name:"twitter:creator",content:"@v_ntakouris"}]}}},o=Object(r.a)(n,function(){var e=this.$createElement,c=this._self._c||e;return c("Layout",{attrs:{title:this.title}},[c("section",this._l(this.kataggelies,function(e){return c("KataggeliaCard",{key:e.href,attrs:{kataggelia:e}})}),1),c("div",{staticClass:"anchor-pad-bot"})])},[],!1,null,"b33ada10",null);c.default=o.exports}}]);