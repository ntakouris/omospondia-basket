(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(t,a,e){},223:function(t,a,e){"use strict";var i={name:"SocialShareDialog",props:["title","url","trigger"],data:function(){return{showDialog:!1,showSnackbar:!1}},watch:{trigger:function(t,a){this.showDialog=!1,this.showDialog=!0}},methods:{copySharingUrl:function(){this.copyToClipboard(this.url),this.showSnackbar=!0},copyToClipboard:function(t){var a=document.createElement("textarea");a.value=t,a.setAttribute("readonly",""),a.style={position:"absolute",left:"-9999px"},document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}}},s=(e(225),e(42)),o=Object(s.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(a){t.showDialog=a},"update:md-active":function(a){t.showDialog=a}}},[e("social-sharing",{staticStyle:{display:"flex","justify-content":"space-between"},attrs:{url:t.url,title:t.title,description:t.title,quote:t.title,hashtags:"basket12","twitter-user":"v_ntakouris"},inlineTemplate:{render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("network",{attrs:{network:"facebook"}},[a("img",{staticClass:"social",attrs:{src:"/facebook.png"}})]),a("network",{attrs:{network:"linkedin"}},[a("img",{staticClass:"social",attrs:{src:"/linkedin.png"}})]),a("network",{attrs:{network:"twitter"}},[a("img",{staticClass:"social",attrs:{src:"/twitter.png"}})])],1)},staticRenderFns:[]}}),e("md-dialog-actions",[e("md-button",{staticClass:"md-raised md-accent",on:{click:function(a){return t.copySharingUrl()}}},[t._v("Αντιγραφη συνδεσμου")]),e("md-button",{on:{click:function(a){t.showDialog=!1}}},[t._v("OK")])],1),e("md-snackbar",{attrs:{"md-duration":1e4,"md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(a){t.showSnackbar=a},"update:md-active":function(a){t.showSnackbar=a}}},[e("span",[t._v("Μπορείτε να κάνετε επικόλληση τον σύνδεσμο για να τον χρησιμοποιήσετε.")]),e("md-button",{staticClass:"md-primary",on:{click:function(a){t.showSnackbar=!1}}},[t._v("Ok")])],1)],1)],1)},[],!1,null,null,null);a.a=o.exports},224:function(t){t.exports=JSON.parse('{"baseUrl":"https://basket12.gr"}')},225:function(t,a,e){"use strict";var i=e(222);e.n(i).a},226:function(t,a,e){},237:function(t){t.exports=JSON.parse('[{"display":"Συνέντευξη του Βασίλη Ντάκουρη στον Γιάννη Ψαράκη και στην Live Sport","content":"Πως χειραγωγεί ακόμα και τις εκλογικές διαδικασίες η ηγετική ομάδα της ομοσποπονδίας. Η υποψηφιότητα. Οι καταγγελίες για την ολοκληρωτική αδιαφάνεια, οι προτάσεις και αρκετά άλλα!","author":"Γιάννης Ψαράκης","date":"14/10/2019","href":"https://ntakouris.wordpress.com/2019/10/14/916/","slug":"sinentefksi-ntakouris-livesport"},{"display":"Να ελεγχθούν οι προμήθειες","author":"Γιώργος Κογκαλίδης","date":"04/10/2019","href":"https://www.to10.gr/basket/739416/na-elegchthoun-promithies","slug":"elegxos-promithies"},{"display":"Οικονομικός έλεγχος στην ΕΟΚ","author":"Γιώργος Κογκαλίδης","date":"03/10/2019","href":"https://ebasket.gr/2019/10/oikonomikos-elegchos-stin-eok","slug":"oikonomikos-eok"},{"display":"Ομοσπονδιακοί προπονητές: Πρωταγωνιστές συνεχόμενου δράματος","author":"Γιάννης Ψαράκης","date":"17/09/2019","href":"https://basketballguru.gr/featured/item/1224-i-pikri-istoria-ton-proponiton-tis-ethnikis","slug":"protagonistes-dramatos"},{"display":"Μπάσκετ στην Ελλάδα: Παραμάγαζα γύρω από τους μικρούς","author":"Νίκος Μπουρλάκης","date":"07/08/2019","href":"https://www.sportime.gr/bloggers/nikos-mpourlakis/basket-stin-ellada-paramagaza-giro-apo-tous-mikrous","slug":"paramagaza-mikroi"},{"display":"Εκλογές φαντασμα(γορικές)","author":"Γιάννης Ψαράκης","date":"27/09/2018","href":"https://basketballguru.gr/articles/item/883-ekloges-eok","slug":"ekloges-fantasma"},{"display":"Γκόντας ο Αμερικανός","author":"Γιάννης Φιλέρης","content":"Μια συζήτηση για τη διαιτησία σε ΝΒΑ, Euroleague και βέβαια στην Ελλαδίτσα μας.","date":"25/08/2019","href":"https://www.contra.gr/basket/spyros-gkontas-nva-euroleague-basket-league-diaitisia.7488766.html","slug":"gkontas-amerikanos"},{"display":"Συνέντευξη του Βασίλη Ντάκουρη στο περιοδικό All Star Basket","content":"Παρηκμασμένο το μοντέλο της ΕΟΚ. Έχει ξενικήσει ένα μοναχικό αγώνα απέναντι στο «κράτος» του Βασιλακόπουλου. Ο πρώην διεθνής παίχτης του Πανελληνίου για το κίνητρο και τους στόχους του.","author":"Δημήτρης Καρύδας","date":"30/03/2018","href":"https://ntakouris.wordpress.com/2018/03/30/παρηκμασμένο-το-μοντέλο-της-εοκ-συν/","slug":"sinentefksi-ntakouris-allstarbasket"},{"display":"΄Ενστασις, κύριε πρόεδρε!","author":"Βασίλης Σκουντής","date":"03/10/2017","href":"http://www.gazzetta.gr/basketball/article/1144707/enstasis-kyrie-proedre","slug":"enstasis"},{"display":"Παλιάτσος ή ληστής","author":"Μίλτος Λαζαρίδης","content":"Αστέρια που διαμόρφωσαν την πρόσφατη ιστορία του αθλήματος, ηγούνται των Ομοσπονδιών στις χώρες τους.","date":"20/03/2017","href":"https://ebasket.gr/2017/03/paliatsos-i-listis","slug":"paliatsos-i-listis"}]')},238:function(t,a,e){"use strict";var i=e(226);e.n(i).a},255:function(t,a,e){"use strict";e.r(a);var i=e(237),s=e(224),o={name:"ApodeltiosiCard",components:{SocialShareDialog:e(223).a},props:["apodeltiosi"],data:function(){return{triggerDialog:!1}},methods:{getSharingUrl:function(){var t=s.baseUrl;return"".concat(t,"/apodeltiosi#").concat(this.apodeltiosi.slug)},openSharingDialog:function(){this.triggerDialog=!this.triggerDialog}}},r=(e(238),e(42)),n={name:"Apodeltiosi",components:{ApodeltiosiCard:Object(r.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("md-card",{staticClass:"diadikasia-card",staticStyle:{"margin-left":"0"},attrs:{"md-elevation":1,"md-with-hover":""}},[e("md-ripple",[e("md-card-header",[e("a",{attrs:{href:t.apodeltiosi.href,target:"_blank",id:t.apodeltiosi.slug}},[e("div",{staticClass:"md-title"},[t._v(t._s(t.apodeltiosi.display))])]),e("div",{staticClass:"md-subhead"},[t._v(t._s(t.apodeltiosi.author)+" - "+t._s(t.apodeltiosi.date))])])],1),t.apodeltiosi.content?e("md-card-content",[t._v("\n      "+t._s(t.apodeltiosi.content)+"\n    ")]):t._e(),e("md-card-actions",[e("md-button",{on:{click:function(a){return t.openSharingDialog()}}},[t._v("Μοιρασου")]),e("md-button",{staticClass:"md-icon-button",on:{click:function(a){return t.openSharingDialog()}}},[e("md-icon",[t._v("share")])],1)],1)],1),e("SocialShareDialog",{attrs:{title:t.apodeltiosi.display,url:t.getSharingUrl(),trigger:t.triggerDialog}})],1)},[],!1,null,"657e654b",null).exports},data:function(){return{apodeltiosi:i,title:"Αποδελτίωση Τύπου"}},metaInfo:function(){return{title:this.title,meta:[{property:"og:type",content:"website"},{property:"og:title",content:this.title},{property:"og:image",content:"/diafaneia.jpg"},{name:"twitter:image",content:"https://basket12.gr/diafaneia.jpg"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:this.title},{name:"twitter:site",content:"@v_ntakouris"},{name:"twitter:creator",content:"@v_ntakouris"}]}}},l=Object(r.a)(n,function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",{attrs:{title:this.title}},[a("section",this._l(this.apodeltiosi,function(t){return a("ApodeltiosiCard",{key:t.href,attrs:{apodeltiosi:t}})}),1),a("div",{staticClass:"anchor-pad-bot"})])},[],!1,null,null,null);a.default=l.exports}}]);