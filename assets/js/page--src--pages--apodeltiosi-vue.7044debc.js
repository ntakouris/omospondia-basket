(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{225:function(t,a,e){},226:function(t,a,e){"use strict";var s={name:"SocialShareDialog",props:["title","url","trigger"],data:function(){return{showDialog:!1,showSnackbar:!1}},watch:{trigger:function(t,a){this.showDialog=!1,this.showDialog=!0}},methods:{copySharingUrl:function(){this.copyToClipboard(this.url),this.showSnackbar=!0},copyToClipboard:function(t){var a=document.createElement("textarea");a.value=t,a.setAttribute("readonly",""),a.style={position:"absolute",left:"-9999px"},document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}}},i=(e(228),e(43)),o=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(a){t.showDialog=a},"update:md-active":function(a){t.showDialog=a}}},[e("social-sharing",{staticStyle:{display:"flex","justify-content":"space-between"},attrs:{url:t.url,title:t.title,description:t.title,quote:t.title,hashtags:"basket12","twitter-user":"v_ntakouris"},inlineTemplate:{render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("network",{attrs:{network:"facebook"}},[a("img",{staticClass:"social",attrs:{src:"/facebook.png"}})]),a("network",{attrs:{network:"linkedin"}},[a("img",{staticClass:"social",attrs:{src:"/linkedin.png"}})]),a("network",{attrs:{network:"twitter"}},[a("img",{staticClass:"social",attrs:{src:"/twitter.png"}})])],1)},staticRenderFns:[]}}),e("md-dialog-actions",[e("md-button",{staticClass:"md-raised md-accent",on:{click:function(a){return t.copySharingUrl()}}},[t._v("Αντιγραφη συνδεσμου")]),e("md-button",{on:{click:function(a){t.showDialog=!1}}},[t._v("OK")])],1),e("md-snackbar",{attrs:{"md-duration":1e4,"md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(a){t.showSnackbar=a},"update:md-active":function(a){t.showSnackbar=a}}},[e("span",[t._v("Μπορείτε να κάνετε επικόλληση τον σύνδεσμο για να τον χρησιμοποιήσετε.")]),e("md-button",{staticClass:"md-primary",on:{click:function(a){t.showSnackbar=!1}}},[t._v("Ok")])],1)],1)],1)}),[],!1,null,null,null);a.a=o.exports},227:function(t){t.exports=JSON.parse('{"baseUrl":"https://basket12.gr"}')},228:function(t,a,e){"use strict";var s=e(225);e.n(s).a},229:function(t,a,e){"use strict";var s={props:["href","id","_class"],data:function(){return{docHashMatches:!1}},mounted:function(){var t=document.location.hash.slice(1);this.hash=t,t&&t===this.id&&(this.docHashMatches=!0)}},i=e(43),o=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("a",{class:Object.assign({},{"scroll-workaround":!0},this._class),style:{color:this.docHashMatches?"red":"default"},attrs:{href:this.href,target:"_blank",id:this.id}},[this._t("default")],2)}),[],!1,null,null,null);a.a=o.exports},230:function(t,a,e){},241:function(t){t.exports=JSON.parse('[{"display":"Το τέλος της εποχής του «σκοταδισμού»!","content":"Πλήρως αντιδημοκρατικές διαδικασίες που επί δεκαετίες χαρακτήριζαν τις εκλογές της ΕΟΚ έφεραν στην επιφάνεια τον «σκοταδισμό» μέσα στον οποίο «βασίλευε» ο Γιώργος Βασιλακοπουλος.","author":"Αντώνης Καλκαβούρας","date":"30/06/2020","href":"https://www.gazzetta.gr/basketball/eok/article/1490286/telos-tis-epohis-toy-skotadismoy","slug":"telos-skotadismou"},{"display":"Για να μην ψηφίζουν τα ρακούν στις εκλογές της ΕΟΚ","content":"Εν αναμονή των ρυθμίσεων Λευτέρη Αυγενάκη, ο Βασίλης Ντάκουρης, ο άνθρωπος που έχει αποκαλύψει τις περισσότερες ατασθαλίες της ηγεσίας της...","author":"Γιάννης Φιλέρης","date":"18/05/2020","href":"https://www.contra.gr/basket/stis-ekloges-tis-eok-echoyn-psifisei-ta-rakoyn.7648126.html","slug":"psifizoun-rakoun"},{"display":"Ντάκουρης: «Η αντιμετώπιση της χειραγώγησης των εκλογών της ΕΟΚ»","author":"Gazzetta Team","date":"18/05/2020","href":"https://www.gazzetta.gr/basketball/eok/article/1475899/ntakoyris-i-antimetopisi-tis-heiragogisis-ton-eklogon-tis-eok","slug":"antimetopisi-heiragogisis"},{"display":"Ντάκουρης: “Να βγει η ΕΟΚ από το… καταφύγιό της”","author":"Δημήτρης Ιωαννίδης","date":"04/05/2020","href":"https://ebasket.gr/2020/05/ntakoyris-quot-na-vgei-i-eok-apo-to-katafygio-tis-quot-pic","slug":"katafygio"},{"display":"Ανάγκη ενίσχυσης των σωματείων μπάσκετ","author":"sportin.gr","date":"02/05/2020","href":"https://sportin.gr/article/anagki-enishysis-ton-somateion-mpasket","slug":"anagi-enisxisis"},{"display":"Παρατηρητήριο Εθνικής Αθλητικής Διακυβέρνησης. Αξιολόγηση λειτουργίας – Μελέτη περίπτωσης: Ελληνική Ομοσπονδία Καλαθοσφαίρισης (Ντάκουρης Β., Γαργαλιάνος Δ., Γκανάτσιος Γ.). Παρουσίαση στο Μηνιαίο Καλαθοσφαιρικό Περιοδικό ALL STAR-Μάρτιος 2020.","author":"Βασίλης Ντάκουρης","date":"25/04/2020","href":"https://ntakouris.wordpress.com/2020/04/25/%cf%80%ce%b1%cf%81%ce%b1%cf%84%ce%b7%cf%81%ce%b7%cf%84%ce%ae%cf%81%ce%b9%ce%bf-%ce%b5%ce%b8%ce%bd%ce%b9%ce%ba%ce%ae%cf%82-%ce%b1%ce%b8%ce%bb%ce%b7%cf%84%ce%b9%ce%ba%ce%ae%cf%82-%ce%b4%ce%b9%ce%b1/","slug":"paratiritirio"},{"display":"Ρεντζιάς: \\"Δεν είμαστε ούτε υπανάπτυκτοι, ούτε μπασκετική μπανανία\\"","author":"Δημήτρης Σκούρτας","date":"02/04/2020","href":"https://www.sport24.gr/interviews/rentzias-den-eimaste-oute-ypanaptyktoi-oute-mpasketikh-mpanania.5706137.html","slug":"banania"},{"display":"Η ΕΟΚ είναι ένα δωματιάκι που θέλεις… face control για να μπεις","content":"Συνέντευξη του Βασίλη Ντάκουρη στο gazzeta.gr για τις χειραγωγημένες έως σήμερα εκλογικές διαδικασίες της ΕΟΚ.","author":"Γιάννης Σταυρουλάκης","date":"13/02/2020","href":"https://www.gazzetta.gr/basketball/eok/article/1455541/ntakoyris-i-eok-einai-ena-domatiaki-poy-theleis-face-control-gia-na-mpeis","slug":"face-control"},{"display":"Οι προτάσεις του Παναγιώτη Φασούλα για την επόμενη μέρα της Ομοσπονδίας","author":"superbasket.gr","date":"09/02/2020","href":"https://www.superbasket.gr/greece/45860-oi-protaseis-tou-panagioti-fasoyla-gia-tin-epomeni-mera-tis-omospondias.html","slug":"fasoulas"},{"display":"Τηλεοπτική συνέντευξη Βασίλη Ντάκουρη στον Δημήτρη Κανελλάκη στο Atlas Sports","content":"Καλή διακυβέρνηση και ελληνικές εθνικές ομοσπονδίες. Η καλή διακυβέρνηση πολλαπλασιάζει τα ωφέλη στα σωματεία, στους προπονητές, στους αθλητές και σε όλα τα άλλα ενδιαφερόμενα μέρη. Η διαφάνεια, οι δημοκρατικές διαδικασίες, η λογοδοσία και η κοινωνική ευθύνη στην Ελληνική Ομοσπονδία Καλαθοσφαίρισης. Η αξιολόγηση αποτελεί βάση για την βελτίωση της απόδοσης της ομοσπονδίας.","author":"Δημήτρης Κανελλάκης","date":"03/02/2020","href":"https://ntakouris.wordpress.com/2020/03/15/1012/","slug":"tv-atlas-sports"},{"display":"Και “μαϊμού” πρακτικά των Γενικών Συνελεύσεων της ΕΟΚ στη ΓΓΑ","content":"Συνέντευξη του Βασίλη Ντάκουρη στο Infobasket.","author":"Νίκος Ζαμπάρας","date":"04/12/2019","href":"http://www.infobasket.gr/%CE%BA%CE%B1%CE%B9-%CE%BC%CE%B1%CF%8A%CE%BC%CE%BF%CF%8D-%CF%80%CF%81%CE%B1%CE%BA%CF%84%CE%B9%CE%BA%CE%AC-%CF%84%CF%89%CE%BD-%CE%B3%CE%B5%CE%BD%CE%B9%CE%BA%CF%8E%CE%BD-%CF%83","slug":"infobasket"},{"display":"Η κόπρος του Αυγεία","content":"Ο Δημήτρης Παπαδόπουλος ξεσπαθώνει και… απαντά στον Γιώργο Βασιλακόπουλο, δείχνοντας πως ο καιρός της αδράνειας έχει περάσει.","author":"Δημήτρης Παπαδόπουλος","date":"07/11/2019","href":"https://www.to10.gr/basket/765320/kopros-tou-avgia/","slug":"kopros-avgia"},{"display":"Συνέντευξη του Βασίλη Ντάκουρη στον Γιάννη Ψαράκη και στην Live Sport","content":"Πως χειραγωγεί ακόμα και τις εκλογικές διαδικασίες η ηγετική ομάδα της ομοσποπονδίας. Η υποψηφιότητα. Οι καταγγελίες για την ολοκληρωτική αδιαφάνεια, οι προτάσεις και αρκετά άλλα!","author":"Γιάννης Ψαράκης","date":"14/10/2019","href":"https://ntakouris.wordpress.com/2019/10/14/916/","slug":"sinentefksi-ntakouris-livesport"},{"display":"Να ελεγχθούν οι προμήθειες","author":"Γιώργος Κογκαλίδης","date":"04/10/2019","href":"https://www.to10.gr/basket/739416/na-elegchthoun-promithies","slug":"elegxos-promithies"},{"display":"Οικονομικός έλεγχος στην ΕΟΚ","author":"Γιώργος Κογκαλίδης","date":"03/10/2019","href":"https://ebasket.gr/2019/10/oikonomikos-elegchos-stin-eok","slug":"oikonomikos-eok"},{"display":"Ομοσπονδιακοί προπονητές: Πρωταγωνιστές συνεχόμενου δράματος","author":"Γιάννης Ψαράκης","date":"17/09/2019","href":"https://basketballguru.gr/featured/item/1224-i-pikri-istoria-ton-proponiton-tis-ethnikis","slug":"protagonistes-dramatos"},{"display":"Μπάσκετ στην Ελλάδα: Παραμάγαζα γύρω από τους μικρούς","author":"Νίκος Μπουρλάκης","date":"07/08/2019","href":"https://www.sportime.gr/bloggers/nikos-mpourlakis/basket-stin-ellada-paramagaza-giro-apo-tous-mikrous","slug":"paramagaza-mikroi"},{"display":"Εκλογές φαντασμα(γορικές)","author":"Γιάννης Ψαράκης","date":"27/09/2018","href":"https://basketballguru.gr/articles/item/883-ekloges-eok","slug":"ekloges-fantasma"},{"display":"Γκόντας ο Αμερικανός","author":"Γιάννης Φιλέρης","content":"Μια συζήτηση για τη διαιτησία σε ΝΒΑ, Euroleague και βέβαια στην Ελλαδίτσα μας.","date":"25/08/2019","href":"https://www.contra.gr/basket/spyros-gkontas-nva-euroleague-basket-league-diaitisia.7488766.html","slug":"gkontas-amerikanos"},{"display":"Συνέντευξη του Βασίλη Ντάκουρη στο περιοδικό All Star Basket","content":"Παρηκμασμένο το μοντέλο της ΕΟΚ. Έχει ξενικήσει ένα μοναχικό αγώνα απέναντι στο «κράτος» του Βασιλακόπουλου. Ο πρώην διεθνής παίχτης του Πανελληνίου για το κίνητρο και τους στόχους του.","author":"Δημήτρης Καρύδας","date":"30/03/2018","href":"https://ntakouris.wordpress.com/2018/03/30/παρηκμασμένο-το-μοντέλο-της-εοκ-συν/","slug":"sinentefksi-ntakouris-allstarbasket"},{"display":"΄Ενστασις, κύριε πρόεδρε!","author":"Βασίλης Σκουντής","date":"03/10/2017","href":"http://www.gazzetta.gr/basketball/article/1144707/enstasis-kyrie-proedre","slug":"enstasis"},{"display":"Παλιάτσος ή ληστής","author":"Μίλτος Λαζαρίδης","content":"Αστέρια που διαμόρφωσαν την πρόσφατη ιστορία του αθλήματος, ηγούνται των Ομοσπονδιών στις χώρες τους.","date":"20/03/2017","href":"https://ebasket.gr/2017/03/paliatsos-i-listis","slug":"paliatsos-i-listis"}]')},242:function(t,a,e){"use strict";var s=e(230);e.n(s).a},264:function(t,a,e){"use strict";e.r(a);var s=e(241),i=e(227),o=e(226),r=e(229),n={name:"ApodeltiosiCard",components:{SocialShareDialog:o.a,FocusableAnchor:r.a},props:["apodeltiosi"],data:function(){return{triggerDialog:!1}},methods:{getSharingUrl:function(){var t=i.baseUrl;return"".concat(t,"/apodeltiosi#").concat(this.apodeltiosi.slug)},openSharingDialog:function(){this.triggerDialog=!this.triggerDialog}}},l=(e(242),e(43)),c={name:"Apodeltiosi",components:{ApodeltiosiCard:Object(l.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("md-card",{staticClass:"diadikasia-card",staticStyle:{"margin-left":"0"},attrs:{"md-elevation":1,"md-with-hover":""}},[e("md-ripple",[e("md-card-header",[e("FocusableAnchor",{attrs:{href:t.apodeltiosi.href,id:t.apodeltiosi.slug}},[e("div",{staticClass:"md-title"},[t._v(t._s(t.apodeltiosi.display))])]),e("div",{staticClass:"md-subhead"},[t._v(t._s(t.apodeltiosi.author)+" - "+t._s(t.apodeltiosi.date))])],1)],1),t.apodeltiosi.content?e("md-card-content",[t._v("\n      "+t._s(t.apodeltiosi.content)+"\n    ")]):t._e(),e("md-card-actions",[e("md-button",{on:{click:function(a){return t.openSharingDialog()}}},[t._v("Μοιρασου")]),e("md-button",{staticClass:"md-icon-button",on:{click:function(a){return t.openSharingDialog()}}},[e("md-icon",[t._v("share")])],1)],1)],1),e("SocialShareDialog",{attrs:{title:t.apodeltiosi.display,url:t.getSharingUrl(),trigger:t.triggerDialog}})],1)}),[],!1,null,"60fd134d",null).exports},data:function(){return{apodeltiosi:s,title:"Αποδελτίωση Τύπου"}},metaInfo:function(){return{title:this.title,meta:[{property:"og:type",content:"website"},{property:"og:title",content:this.title},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:this.title},{name:"twitter:site",content:"@v_ntakouris"},{name:"twitter:creator",content:"@v_ntakouris"}]}}},u=Object(l.a)(c,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",{attrs:{title:this.title}},[a("section",this._l(this.apodeltiosi,(function(t){return a("ApodeltiosiCard",{key:t.href,attrs:{apodeltiosi:t}})})),1),a("div",{staticClass:"anchor-pad-bot"})])}),[],!1,null,null,null);a.default=u.exports}}]);