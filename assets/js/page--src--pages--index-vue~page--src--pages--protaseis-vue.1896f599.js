(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{222:function(t,e,i){},223:function(t,e,i){"use strict";var a={name:"SocialShareDialog",props:["title","url","trigger"],data:function(){return{showDialog:!1,showSnackbar:!1}},watch:{trigger:function(t,e){this.showDialog=!1,this.showDialog=!0}},methods:{copySharingUrl:function(){this.copyToClipboard(this.url),this.showSnackbar=!0},copyToClipboard:function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style={position:"absolute",left:"-9999px"},document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}},n=(i(225),i(42)),o=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e},"update:md-active":function(e){t.showDialog=e}}},[i("social-sharing",{staticStyle:{display:"flex","justify-content":"space-between"},attrs:{url:t.url,title:t.title,description:t.title,quote:t.title,hashtags:"basket12","twitter-user":"v_ntakouris"},inlineTemplate:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("network",{attrs:{network:"facebook"}},[e("img",{staticClass:"social",attrs:{src:"/facebook.png"}})]),e("network",{attrs:{network:"linkedin"}},[e("img",{staticClass:"social",attrs:{src:"/linkedin.png"}})]),e("network",{attrs:{network:"twitter"}},[e("img",{staticClass:"social",attrs:{src:"/twitter.png"}})])],1)},staticRenderFns:[]}}),i("md-dialog-actions",[i("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){return t.copySharingUrl()}}},[t._v("Αντιγραφη συνδεσμου")]),i("md-button",{on:{click:function(e){t.showDialog=!1}}},[t._v("OK")])],1),i("md-snackbar",{attrs:{"md-duration":1e4,"md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.showSnackbar=e},"update:md-active":function(e){t.showSnackbar=e}}},[i("span",[t._v("Μπορείτε να κάνετε επικόλληση τον σύνδεσμο για να τον χρησιμοποιήσετε.")]),i("md-button",{staticClass:"md-primary",on:{click:function(e){t.showSnackbar=!1}}},[t._v("Ok")])],1)],1)],1)},[],!1,null,null,null);e.a=o.exports},224:function(t){t.exports=JSON.parse('{"baseUrl":"https://basket12.gr"}')},225:function(t,e,i){"use strict";var a=i(222);i.n(a).a},229:function(t,e,i){},230:function(t,e,i){},231:function(t,e,i){},232:function(t,e,i){},236:function(t,e,i){"use strict";var a=i(224),n=(i(243),i(244),{name:"SimpleExpandable",props:["title","slugs"],data:function(){return{collapsed:!0}},mounted:function(){var t=document.location.hash.slice(1);t&&this.slugs.includes(t)&&(this.toggleCollapsed(),this.$nextTick(function(){window.setTimeout(function(){document.location.hash=t,document.getElementById(t).scrollIntoView()},500)}))},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed,this.collapsed||this.$emit("expand",!0)}}}),o=(i(245),i(42)),s=Object(o.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"expandable-header",on:{click:function(e){return t.toggleCollapsed()}}},[t._v(t._s(t.title)+" "),i("md-icon",[t._v(t._s(t.collapsed?"keyboard_arrow_down":"keyboard_arrow_up"))])],1),t.collapsed?t._e():i("div",{staticStyle:{"margin-left":"12px"}},[t._t("default")],2)])},[],!1,null,"1e8395f5",null).exports,c=i(223),l={name:"UrlShareButton",components:{SocialShareDialog:c.a},props:["title","url"],data:function(){return{triggerDialog:!1}},methods:{openDialog:function(){this.triggerDialog=!this.triggerDialog}}},r=(i(246),Object(o.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"inline-block"}},[i("button",{on:{click:function(e){return t.openDialog()}}},[t._v("Μοιράσου "),i("md-icon",{staticStyle:{"margin-left":"6px"}},[t._v("trending_up")])],1),i("SocialShareDialog",{attrs:{trigger:t.triggerDialog,title:t.title,url:t.url}})],1)},[],!1,null,"0eace359",null).exports),d={name:"ProtasiCard",props:["protasi"],components:{SimpleExpandable:s,SocialShareDialog:c.a,UrlShareButton:r},data:function(){return{collapsed:!0,triggerDialog:!1,feedbackFormUrl:"https://docs.google.com/forms/d/e/1FAIpQLSc9oE-wt_siyXiV6lmuTllL5nPfWui8nvI7c_sdZC2EroxfLw/viewform?fbclid=IwAR1HR893dnk9MU2r7pGShAgh271Mo9B_lcjdcSNT2ofiEgUl1NksNjeaDTQ"}},mounted:function(){var t=document.location.hash.slice(1);t&&t===this.protasi.id&&(this.collapsed=!1,this.$nextTick(function(){window.setTimeout(function(){document.location.hash=t,document.getElementById(t).scrollIntoView()},500)}))},methods:{getSharingUrl:function(t){var e=a.baseUrl;return"".concat(e,"/protaseis#").concat(t)},toggleCollapsed:function(){this.collapsed=!this.collapsed},openDialog:function(){this.triggerDialog=!this.triggerDialog},openSharingDialog:function(){this.openDialog()},childExpanded:function(t){t&&this.collapsed&&(this.collapsed=!this.collapsed)}}},u=(i(247),Object(o.a)(d,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("md-card",{class:t.collapsed?"smallflex":"bigflex",attrs:{"md-elevation":1,"md-with-hover":"",id:t.protasi.id}},[i("md-card-header",[i("div",{staticClass:"md-title"},[t._v(t._s(t.protasi.title))])]),i("md-card-content",{class:t.collapsed?"collapsed":"uncollapsed"},[i("ul",t._l(t.protasi.items,function(e){return i("li",{key:"object"==typeof e?e.display:e},["object"==typeof e?i("SimpleExpandable",{attrs:{title:e.display,slugs:e.urls.map(function(t){return t.slug})},on:{expand:t.childExpanded}},t._l(e.urls,function(e){return i("div",{key:e.title},[i("a",{staticStyle:{display:"inline-block"},attrs:{href:e.href,target:"_blank",id:e.slug}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),i("UrlShareButton",{attrs:{title:e.title,url:t.getSharingUrl(e.slug)}})],1)}),0):i("div",[t._v(t._s(e))])],1)}),0),i("p",{staticStyle:{"margin-left":"24px","margin-top":"12px","line-height":"48px"}},[t._v("Κατάθεση προτάσεων ή προβλημάτων "),i("md-button",{staticClass:"md-raised md-accent",attrs:{href:t.feedbackFormUrl,target:"_blank"}},[t._v(" εδω")])],1)]),i("md-card-actions",[i("md-button",{class:t.collapsed?"md-primary":"",on:{click:t.toggleCollapsed}},[t._v(" "+t._s(t.collapsed?"Περισσοτερα":"Λιγοτερα"))]),i("md-button",{class:"md-icon-button "+(t.collapsed?"md-primary":""),on:{click:t.toggleCollapsed}},[i("md-icon",[t._v(t._s(t.collapsed?"keyboard_arrow_down":"keyboard_arrow_up"))])],1),i("md-button",{on:{click:function(e){return t.openSharingDialog()}}},[t._v("Μοιρασου")]),i("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.openSharingDialog()}}},[i("md-icon",[t._v("share")])],1)],1),i("SocialShareDialog",{attrs:{url:t.getSharingUrl(this.protasi.id),title:t.protasi.title,trigger:t.triggerDialog}})],1)},[],!1,null,null,null).exports),p=i(248),f={name:"ProtaseisContainer",components:{ProtasiCard:u},data:function(){return{protaseis:p}}},m=(i(249),Object(o.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.protaseis,function(t){return e("ProtasiCard",{key:t.title,staticClass:"card",attrs:{protasi:t}})}),1)},[],!1,null,"bfe79d2c",null));e.a=m.exports},243:function(t,e,i){"use strict";var a=i(1),n=i(92)(!0);a(a.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(145)("includes")},244:function(t,e,i){"use strict";var a=i(1),n=i(93);a(a.P+a.F*i(94)("includes"),"String",{includes:function(t){return!!~n(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},245:function(t,e,i){"use strict";var a=i(229);i.n(a).a},246:function(t,e,i){"use strict";var a=i(230);i.n(a).a},247:function(t,e,i){"use strict";var a=i(231);i.n(a).a},248:function(t){t.exports=JSON.parse('[{"title":"Χρηστή Διακυβέρνηση στις διοικητικές και οικονομικές διαδικασίες","id":"xristi-diakivernisi","items":[{"display":"Δημοκρατικές, διαφανείς και συμμετοχικές διαδικασίες στην λήψη αποφάσεων","urls":[{"title":"Αναλυτικός καθορισμός των εκλογικών διαδικασιών της ΕΟΚ","slug":"tropoi-xiragogisis","href":"https://ntakouris.wordpress.com/2019/11/25/%cf%8c%ce%bb%ce%bf%ce%b9-%ce%bf%ce%b9-%cf%84%cf%81%cf%8c%cf%80%ce%bf%ce%b9-%cf%87%ce%b5%ce%b9%cf%81%ce%b1%ce%b3%cf%8e%ce%b3%ce%b7%cf%83%ce%b7%cf%82-%cf%84%cf%89%ce%bd-%cf%84%ce%b5%ce%bb%ce%b5%cf%85/"}]},"Ανάρτηση όλων των διαδικασιών / πρακτικών στο Πρόγραμμα Διαύγεια. (έσοδα – έξοδα, προσλήψεις, επιλογές συμμετεχόντων κλπ.)","Ψηφιοποίηση όλων των διαδικασιών με προτεραιότητα εκείνων μεταξύ της Ομοσπονδίας, των Ενώσεων και των Σωματείων","Αναμόρφωση και εκσυγχρονισμός όλων των Κανονισμών και του Καταστατικού","Σχεδιασμός, οργάνωση, ηγεσία, έλεγχος και αξιολόγηση σε όλες τις διαδικασίες","Προσδιορισμός των αξιών, της φιλοσοφίας, του οράματος, της αποστολής και των στόχων","Ανάρτηση στην ιστοσελίδα όλων των πληροφοριών που αφορούν στην Ομοσπονδία"]},{"title":"Αναδιοργάνωση του οργανογράμματος λειτουργίας της Ομοσπονδίας","id":"anadiorganosi-orgranogramatos","items":["Δημιουργία Διεύθυνσης υποστήριξης της ψηφιοποίησης όλων των οικονομικών και διοικητικών και κάθε άλλης μορφής διαδικασιών","Δημιουργία Διεύθυνσης «Μπάσκετ για Όλους», η οποία θα συντονίζει το mini basket, το maxibasket, τα τουρνουά 3 εναντίον 3, το street ball, το μπάσκετ αναψυχής, των παλαιμάχων, των ιδιωτικών πρωταθλημάτων και θα συνεργάζεται για κάθε άλλη σχετική καλαθοσφαιρική δραστηριότητα όπως σχολικά πρωταθλήματα, εκπαιδευτικές δράσεις κλπ",{"display":"Δημιουργία Διεύθυνσης ανάπτυξης των πρωταθλημάτων 3 ενταντίον 3","urls":[{"title":"Η ανάπτυξη του αγωνίσματος 3Χ3 δεν μπορεί να περιμένει άλλο. Δέκα προτάσεις!","slug":"anaptiksi-3x3","href":"https://ntakouris.wordpress.com/2019/10/29/%CE%B7-%CE%B1%CE%BD%CE%AC%CF%80%CF%84%CF%85%CE%BE%CE%B7-%CF%84%CE%BF%CF%85-%CE%B1%CE%B3%CF%89%CE%BD%CE%AF%CF%83%CE%BC%CE%B1%CF%84%CE%BF%CF%82-3%CF%873-%CE%B4%CE%B5%CE%BD-%CE%BC%CF%80%CE%BF%CF%81%CE%B5/"}]},"Δημιουργία Διεύθυνσης Προβολής και Μάρκετινγκ","Θέσπιση κριτηρίων για την πρόσληψη εξειδικευμένων στελεχών"]},{"title":"Υποστήριξη των σωματείων εθελοντικού χαρακτήρα","id":"ypostiriksi-somation","items":["Παροχή εξατομικευμένων συμβουλών","Ενίσχυση δράσεων των σωματείων μέσω κοινών προγραμμάτων-χορηγιών","Μείωση του κόστους λειτουργίας των ενώσεων με την εφαρμογή ενιαίων προγραμμάτων και εφαρμογών","Υποστήριξη στην εύρεση χορηγιών σε επίπεδο ενώσεων","Ενίσχυση των διαδικασιών εξεύρεσης / κατασκευής / συντήρησης / εκσυγχρονισμού ποιοτικών αθλητικών καλαθοσφαιρικών εγκαταστάσεων","Μείωση κόστους συμμετοχής στα πρωταθλήματα","Ψηφιοποίηση όλων των διαδικασιών με την ομοσπονδία (έκδοση δελτίων, δήλωση συμμετοχής στο πρωτάθλημα κλπ)",{"display":"Διάχυση και ανταλλαγή καλών πρακτικών, ευρωπαϊκών εμπειριών, κλπ","urls":[{"title":"Ορισμένες καλές πρακτικές για την οργάνωση και τη διοίκηση των σωματείων","slug":"orismenes-praktikes","href":"https://ntakouris.wordpress.com/2018/01/20/%ce%ba%ce%b1%ce%bb%ce%ad%cf%82-%cf%80%cf%81%ce%b1%ce%ba%cf%84%ce%b9%ce%ba%ce%ad%cf%82-%ce%b3%ce%b9%ce%b1-%cf%84%ce%b7%ce%bd-%ce%bf%cf%81%ce%b3%ce%ac%ce%bd%cf%89%cf%83%ce%b7-%ce%ba%ce%b1%ce%b9-%ce%b4/?fbclid=IwAR1Q_ukHgNZYn_MCbphgCBED2S1jUPg7XLdZrNec_CKeeaV9Pz383IyZnMQ"}]},"Διοργάνωση εργαστηρίων – δράσεων στους τομείς της οργάνωσης και διοίκησης"]},{"title":"Υποστήριξη του καλαθοσφαιριστή","id":"ypostiriksi-kalathosferisti","items":["Προγράμματα πρόληψης και προαγωγής της υγείας για όλες τις ηλικίες, με προταιρεότητα την μείωση των τραυματισμών","Υποστήριξη στο θέμα της Διπλής Καριέρας","Ασφάλιση","Ουσιαστική συνεργασία με τον Πανελλήνιο Σύνδεσμο Αμειβόμενων Καλαθοσφαιριστών","Προσδιορισμός των προϋποθέσεων για την συμμετοχή Ελλήνων καλαθοσφαιριστών στα πρωταθλήματα","Συγκρότηση κώδικα δεοντολογίας του αθλητή"]},{"title":"Υποστήριξη του ρόλου του Προπονητή","id":"ypostiriksi-proponiti","items":["Θέσπιση κριτηρίων και διαδικασιών για την πρόσληψη προπονητών σε όλα τα επίπεδα των εθνικών ομάδων αλλά και των ομάδων-κλιμακίων των ενώσεων","Ουσιαστική συνεργασία με τον Σύνδεσμο Ελλήνων Προπονητών Καλαθοσφαίρισης","Θέσπιση δωρεάν σεμιναρίων των προπονητών που συμμετέχουν στα πρωταθλήματα, με προτεραιότητα εκείνων για τις μικρές υποχρεωτικής παρακολούθησης","Καταγραφή δεδομένων, μελέτη και καθορισμός στόχων για την σταδιακή υποστήριξη των επαγγελματικών δικαιωμάτων των προπονητών","Άμεση επέκταση της υποχρεωτικής κάρτας του προπονητή σε όλες τις κατηγορίες και βαθμίδες","Συγκρότηση κώδικα δεοντολογίας των προπονητών"]},{"title":"Υποστήριξη της γυναικείας καλαθοσφαίρισης","id":"ypostiriksi-ginekas","items":["Συμμετοχή γυναικών σε όλα τα όργανα και τις επιτροπές της διοίκησης της ομοσπονδίας","Πρωτοβουλίες και επιπρόσθετα μέτρα υποστήριξης του ρόλου της γυναίκας αθλήτριας, προπονήτριας και διοικητικού παράγοντα σε όλες τις δράσεις της ομοσπονδίας","Αξιοποίηση του έμψυχου γυναικείου καλαθοσφαιρικού δυναμικού όλων των σχετικών επαγγελμάτων που έχουν σχέση με τον αθλητισμό"]},{"title":"Αναβάθμιση των συνεργασιών και καθορισμός στόχων με όλα τα ενδιαφερόμενα μέρη (stakeholders)","id":"anavathmisi-endiaferomenon","items":["Ανάπτυξη συνεργασίας με κάθε ενδιαφερόμενο μέρος ξεχωριστά για αμοιβαίο όφελος (εν ενεργεία και παλαίμαχοι αθλητές, προπονητές, διαιτητές, στελέχη της Ομοσπονδίας, γονείς αθλητών, δημοσιογράφοι, χορηγοί, προμηθευτές, σε πανελλήνιο αλλά και ευρωπαϊκό επίπεδο","Συλλογικές δράσεις με κάθε ενδιαφερόμενο μέρος","Συγκρότηση κατόπιν συμφωνίας σχετικών κωδικών δεοντολογίας","Εκσυγχρονισμός όλων των θεσμικών (τυπικών) αλλά και άτυπων μορφών συνεργασιών"]},{"title":"Ριζική αναδιοργάνωση όλων των αγωνιστικών πρωταθλημάτων όλων των ηλικιών","id":"anadiorganosi-protathlimaton","items":["Ορισμός χωροταξικών, πληθυσμιακών, ηλικιακών, οικονομικών, αθλητικών κριτηρίων","Μείωση των εξόδων των διοργανώσεων",{"display":"Αναβάθμιση των τελικών Κυπέλλου Ελλάδος","urls":[{"title":"Προτάσεις για γίνει το Κύπελλο Ελλάδος γιορτή ανάπτυξης","slug":"kypelo-anaptiksi","href":"https://ntakouris.wordpress.com/2018/02/08/%ce%bc%ce%b5%cf%81%ce%b9%ce%ba%ce%ad%cf%82-%cf%80%cf%81%ce%bf%cf%84%ce%ac%cf%83%ce%b5%ce%b9%cf%82-%ce%b3%ce%b9%ce%b1-%ce%b3%ce%af%ce%bd%ce%b5%ce%b9-%cf%84%ce%bf-%ce%ba%cf%8d%cf%80%ce%b5%ce%bb%ce%bb/"}]},"Αναβάθμιση της Α2 Εθνικής Κατηγορίας","Αύξηση της συμμετοχής σε όλα τα επίπεδα","Θέσπιση πρωτοβουλιών και υποστήριξη του οικογενειακού χαρακτήρα παρουσίας φιλάθλων σε όλους τους αγώνες","Εκσυγχρονισμός των όρων και των προϋποθέσεων όλων των προκηρύξεων των πρωταθλημάτων","Υποστήριξη των ακαδημιών μικρών ηλικιών"]},{"title":"Εφαρμογή πολιτικών κοινωνικής ευθύνης","id":"koinoniki-efthini","items":["Υποστήριξη ευαίσθητων κοινωνικών ομάδων","Προαγωγή της Ολυμπιακής Εκεχειρίας","Προαγωγή και υποστήριξη εθελοντικών δράσεων","Οικολογική λειτουργία καλαθοσφαιρικών εγκαταστάσεων (ανακύκλωση, πράσινη ενέργεια κτλ)"]},{"title":"Συνεργασία με όλους τους φορείς (δημόσιους, ιδιωτικούς, ευρωπαϊκούς, διεθνείς)","id":"synergasia-foreon","items":["Ευρωπαϊκή / Παγκόσμια Ομοσπονδία","ΓΓΑ, ΕΟΕ, Εθνική Ολυμπιακή Ακαδημία","Υπουργεία","Γενικές Γραμματείες","Οργανισμούς Τοπικής Αυτοδιοίκησης","Εκπαιδευτικά ιδρύματα","Κοινωφελή ιδρύματα"]},{"title":"Επιμόρφωση - Εκπαίδευση όλων των συμμετεχόντων στο άθλημα","id":"epimorfosi-simetehonton","items":["Επιμορφωτικές δράσεις για αθλητές, προπονητές, διαιτητές, κριτές, διοικητικά στελέχη, εθελοντές, γονείς αθλητών, δημοσιογράφους","Αξιοποίηση εκπαιδευτικών ευκαιριών που προσφέρουν η Ευρωπαϊκή και η Παγκόσμια Ομοσπονδία","Διοργάνωση ετήσιων συνεδρίων με θέματα σχετικά με το άθλημα","Μόνιμη συνεργασία με τις Ειδικότητες Καλαθοσφαίρισης των ΤΕΦΑΑ της χώρας","Δημιουργία θέσεων πρακτικής άσκησης για φοιτητές, στην Ομοσπονδία, στις Ενώσεις και στα Σωματεία","Δημιουργία μουσείου του αθλήματος στην Αθήνα στο πρότυπο του Basketball Hall of Fame της Αμερικής και υποστήριξη οποιονδήποτε άλλων σχετικών πρωτοβουλιών","Δημιουργία θεσμού «Πρεσβευτή του αθλήματος»","Εκπαιδευτική διάσταση στην ιστοσελίδα της Ομοσπονδίας"]},{"title":"Εναρμόνιση με τα Ευρωπαϊκά δεδομένα","id":"enarmonisi-europe","items":["Εφαρμογή εξ ολοκλήρου του πειθαρχικού κανονισμού της ευρωπαϊκής ομοσπονδίας και στα ελληνικά πρωταθλήματα","Υιοθέτηση καλών ευρωπαϊκών πρακτικών για την αντιμετώπιση των απειλών του παράνομου στοιχηματισμού, της χειραγώγησης παιχνιδιών, των αναβολικών, της βίας στα γήπεδα και άλλων","Συμμετοχή της Ομοσπονδίας, των Ενώσεων και των Σωματείων σε Ευρωπαϊκά προγράμματα"]}]')},249:function(t,e,i){"use strict";var a=i(232);i.n(a).a}}]);