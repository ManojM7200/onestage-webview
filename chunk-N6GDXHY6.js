import{D as L,E as N,G as g,H as j,I as H,J as R,K as G,L as J,a as I,b as T,r as z,s as D,u as d,w as A,x as B}from"./chunk-OKNRTXQQ.js";import{Ac as U,Bb as _,Dc as E,Eb as k,Gb as S,Nb as F,Ob as r,Pb as f,Wa as m,Xa as y,aa as v,ba as x,fa as M,la as s,ma as C,mb as O,ob as u,ta as w,ua as b,va as P,xb as i,yb as a,zb as l}from"./chunk-SNTRB62P.js";var tt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-bottom-bar"]],decls:22,vars:0,consts:[[1,"toolbarNav"],["mat-flat-button","","routerLink","/top-artists","routerLinkActive","active-link",1,"active"],[1,"material-icons","color_blue","material-icons-outlined"],["mat-flat-button","","routerLink","/top-artists","routerLinkActive","active-link"],[1,"material-icons","color_blue"],["mat-flat-button","","routerLink","/top-tracks","routerLinkActive","active-link"],["mat-flat-button","","routerLink","/history","routerLinkActive","active-link"]],template:function(n,c){n&1&&(i(0,"footer")(1,"mat-toolbar",0)(2,"button",1)(3,"mat-icon",2),r(4," home"),a(),i(5,"span"),r(6,"Home"),a()(),i(7,"button",3)(8,"mat-icon",4),r(9," star_outlined"),a(),i(10,"span"),r(11,"Category"),a()(),i(12,"button",5)(13,"mat-icon",4),r(14,"favorite_outlined "),a(),i(15,"span"),r(16,"Favorites"),a()(),i(17,"button",6)(18,"mat-icon",4),r(19,"history"),a(),i(20,"span"),r(21,"History"),a()()()())},dependencies:[d,g,j],styles:['@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format("woff2")}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialiconsoutlined/v109/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format("woff2")}.material-icons[_ngcontent-%COMP%]{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}.material-icons-outlined[_ngcontent-%COMP%]{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}.toolbarNav[_ngcontent-%COMP%]{position:fixed;bottom:0;z-index:1000;display:flex;justify-content:space-around;padding:0;height:5rem;background-color:#fff;-webkit-box-shadow:3px 3px 5px 6px #ccc;-moz-box-shadow:3px 3px 5px 6px #ccc;box-shadow:2px 2px 4px 5px #ccc}.toolbarNav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;height:5rem}.toolbarNav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.toolbarNav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin:0;padding:.4rem;width:2rem}.toolbarNav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{background:#41bf8080;border-radius:18px}button[_ngcontent-%COMP%]:hover, .active-link[_ngcontent-%COMP%]{color:#8a2be2}']});let e=t;return e})();var V=(()=>{let t=class t{constructor(o){this.http=o,this.favorites=[]}getProviders(){return this.http.get("assets/json/searchResult.json")}addToFav(o){let n=this.getFav();n.push(o),this.setFav(n)}getFav(){let o=localStorage.getItem("favorites");return o?JSON.parse(o):[]}setFav(o){localStorage.setItem("favorites",JSON.stringify(o))}};t.\u0275fac=function(n){return new(n||t)(M(I))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Q=(()=>{let t=class t{constructor(){this.fontSize="3.5rem"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-logo"]],inputs:{fontSize:"fontSize"},decls:2,vars:0,consts:[[1,"logo-image"],["src","assets/images/logo.png"]],template:function(n,c){n&1&&(i(0,"div",0),l(1,"img",1),a())},styles:[".logo-image[_ngcontent-%COMP%]{width:10rem;margin-top:4px;margin-bottom:5px}.logo-image[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Sevillana;font-size:3.5rem;color:wheat;margin-bottom:0;margin-top:0}.logo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]});let e=t;return e})();function X(e,t){if(e&1){let h=_();i(0,"div",11),k("click",function(){let n=w(h).$implicit,c=S();return b(c.addToFav(n))}),i(1,"button",12)(2,"mat-icon",13),r(3,"favorite_outlined "),a()(),i(4,"span"),r(5),a()()}if(e&2){let h=t.$implicit;m(5),f(h.name)}}var lt=(()=>{let t=class t{constructor(o){this.providerservice=o,this.providers=[]}ngOnInit(){this.providerservice.getProviders().subscribe(o=>{this.providers=o.data,console.log(o)})}addToFav(o){this.providerservice.favorites.push(o)}};t.\u0275fac=function(n){return new(n||t)(y(V))},t.\u0275cmp=s({type:t,selectors:[["app-top-bar"]],decls:15,vars:2,consts:[["menu","matMenu"],[1,"top-bar-container"],[1,"header-block"],["fontSize","1.5rem"],[1,"side-icons"],[1,"material-icons"],["appearance","outline",1,"header-search-input",3,"matMenuTriggerFor"],["matInput","","placeholder","Search"],["matSuffix",""],["yPosition","below"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"],["mat-flat-button",""],[1,"material-icons","color_blue"]],template:function(n,c){if(n&1&&(i(0,"div",1)(1,"header",2),l(2,"app-logo",3),i(3,"div",4)(4,"mat-icon",5),r(5,"notifications"),a(),i(6,"mat-icon",5),r(7," account_circle "),a()()(),i(8,"mat-form-field",6),l(9,"input",7),i(10,"mat-icon",8),r(11,"search"),a()(),i(12,"mat-menu",9,0),O(14,X,6,1,"div",10),a()()),n&2){let K=F(13);m(8),u("matMenuTriggerFor",K),m(6),u("ngForOf",c.providers)}},dependencies:[U,d,B,A,g,N,R,H,G,Q],styles:[".header-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-left:.5rem;margin-right:.5rem}[_nghost-%COMP%]     .header-block .side-icons{padding-top:.5rem}[_nghost-%COMP%]     .header-block .side-icons .material-icons{font-size:1.8rem;height:1.8rem;width:1.8rem;color:#2c2c2c}[_nghost-%COMP%]     .header-search-input{width:96%;margin:auto;display:block;background:#fff;border-radius:8px}[_nghost-%COMP%]     .header-search-input .mat-mdc-form-field-infix{min-height:unset;padding:.5rem}[_nghost-%COMP%]     .header-search-input .mat-mdc-form-field-subscript-wrapper.mat-mdc-form-field-bottom-align{display:none}.top-bar-container[_ngcontent-%COMP%]{background-color:#fbc91b;height:10rem;border-radius:0 0 10% 10%}[_nghost-%COMP%]  .mat-mdc-menu-panel{max-width:none;width:98vw}[_nghost-%COMP%]  .serach-list-logo-wrap{width:50px}[_nghost-%COMP%]  .serach-list-logo-wrap img{width:100%}"]});let e=t;return e})();var ct=(()=>{let t=class t{constructor(){this.title=""}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-water-based-header"]],inputs:{title:"title"},decls:13,vars:1,consts:[[1,"header"],[1,"inner-header","flex"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 24 150 28","preserveAspectRatio","none","shape-rendering","auto",1,"waves"],["id","gentle-wave","d","M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"],[1,"parallax"],[0,"xlink","href","#gentle-wave","x","48","y","0","fill","rgba(255,255,255,0.7"],[0,"xlink","href","#gentle-wave","x","48","y","3","fill","rgba(255,255,255,0.5)"],[0,"xlink","href","#gentle-wave","x","48","y","5","fill","rgba(255,255,255,0.3)"],[0,"xlink","href","#gentle-wave","x","48","y","7","fill","#fff"]],template:function(n,c){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),r(3),a()(),i(4,"div"),P(),i(5,"svg",2)(6,"defs"),l(7,"path",3),a(),i(8,"g",4),l(9,"use",5)(10,"use",6)(11,"use",7)(12,"use",8),a()()()()),n&2&&(m(3),f(c.title))},styles:['@font-face{font-family:Lato;font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Lato;font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwiPGQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0}h1[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-weight:300;letter-spacing:2px;font-size:48px}p[_ngcontent-%COMP%]{font-family:Lato,sans-serif;letter-spacing:1px;font-size:14px;color:#333}.header[_ngcontent-%COMP%]{position:relative;text-align:center;background:linear-gradient(60deg,#543ab7,#00acc1);color:#fff}.logo[_ngcontent-%COMP%]{width:50px;fill:#fff;padding-right:15px;display:inline-block;vertical-align:middle}.inner-header[_ngcontent-%COMP%]{height:10vh;width:100%;margin:0;padding:0}[_nghost-%COMP%]     body{margin:0;font-family:Roboto,Helvetica Neue,sans-serif;background-color:#fff}.flex[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center}.waves[_ngcontent-%COMP%]{position:relative;width:100%;height:15vh;margin-bottom:-7px;min-height:100px;max-height:150px}.content[_ngcontent-%COMP%]{position:relative;height:20vh;text-align:center;background-color:#fff}.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite}.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%]:nth-child(1){animation-delay:-2s;animation-duration:7s}.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%]:nth-child(2){animation-delay:-3s;animation-duration:10s}.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%]:nth-child(3){animation-delay:-4s;animation-duration:13s}.parallax[_ngcontent-%COMP%] > use[_ngcontent-%COMP%]:nth-child(4){animation-delay:-5s;animation-duration:20s}@keyframes _ngcontent-%COMP%_move-forever{0%{transform:translate3d(-90px,0,0)}to{transform:translate3d(85px,0,0)}}@media (max-width: 768px){.waves[_ngcontent-%COMP%]{height:40px;min-height:40px}.content[_ngcontent-%COMP%]{height:30vh}h1[_ngcontent-%COMP%]{font-size:24px}}']});let e=t;return e})();var ft=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-provider-header"]],decls:7,vars:0,consts:[[1,"profile-header"],[1,"cover-photo"],["src","https://via.placeholder.com/1352x300","alt","Cover Photo"],[1,"profile-info"],["mat-card-avatar","","src","https://via.placeholder.com/100","alt","Profile Photo"]],template:function(n,c){n&1&&(i(0,"div",0)(1,"div",1),l(2,"img",2),a(),i(3,"div",3),l(4,"img",4),i(5,"h2"),r(6,"Kaanji Enterprice"),a()()())},dependencies:[L],styles:[".profile-header[_ngcontent-%COMP%]{text-align:center;background-color:#f5f5f5}.cover-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.profile-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-top:-40px}.profile-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;border:5px solid white;height:70px;width:70px}.profile-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:10px 0 5px 10px}"]});let e=t;return e})();var St=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=C({type:t}),t.\u0275inj=x({imports:[T,z,D,E,J]});let e=t;return e})();export{V as a,tt as b,lt as c,ft as d,ct as e,St as f};
