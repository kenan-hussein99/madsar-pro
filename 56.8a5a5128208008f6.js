"use strict";(self.webpackChunkmasdar=self.webpackChunkmasdar||[]).push([[56],{4056:(v,g,a)=>{a.r(g),a.d(g,{HomeRoutingModule:()=>c});var f=a(9299),t=a(4650),h=a(7579),C=a(3466),_=a(529);class i{constructor(e){this.httpClient=e}getHomeMasdarInfo(){return this.httpClient.get(C.x.homeMasdarInfo)}}i.\u0275fac=function(e){return new(e||i)(t.LFG(_.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"});class r{constructor(e){this.homeRepository=e}getHomeMasdarInfo(){return this.homeRepository.getHomeMasdarInfo()}}r.\u0275fac=function(e){return new(e||r)(t.LFG(i))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"});class s{constructor(e){this.homeManager=e}getHomeMasdarInfo(){const e=new h.x;return this.homeManager.getHomeMasdarInfo().subscribe(o=>{e.next(o.data)}),e.asObservable()}}s.\u0275fac=function(e){return new(e||s)(t.LFG(r))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"});var m=a(6895);function x(n,e){if(1&n&&(t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"figure",8),t._UZ(4,"img",9),t.qZA()(),t.TgZ(5,"div",10),t._uU(6),t.qZA(),t.TgZ(7,"div",11)(8,"div",12),t._uU(9),t.qZA()()()()),2&n){const o=e.$implicit;t.xp6(4),t.s9C("src",o.image,t.LSH),t.xp6(2),t.hij(" ",o.title," "),t.xp6(3),t.hij(" ",o.text," ")}}class d{constructor(e){this.homeService=e}ngOnInit(){this.getMasdarInfo()}getMasdarInfo(){this.items=this.homeService.getHomeMasdarInfo()}}d.\u0275fac=function(e){return new(e||d)(t.Y36(s))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-view-services"]],decls:7,vars:3,consts:[[1,"section"],[1,"container"],[1,"title","m-card","has-text-centered"],[1,"columns","is-multiline"],["class","column is-2",4,"ngFor","ngForOf"],[1,"column","is-2"],[1,"card","m-card","fade-in-three"],[1,"card-image"],[1,"image","is-3"],["alt","Image",3,"src"],[1,"card-header-title","m-card-title","is-centered"],[1,"card-content","has-text-right","m-card-content-padding"],[1,"content"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._uU(3," \u0627\u0644\u0645\u0635\u062f\u0631 \u0644\u0644\u0645\u062d\u0627\u0633\u0628\u0629 "),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,x,10,3,"div",4),t.ALo(6,"async"),t.qZA()()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",t.lcZ(6,1,o.items)))},dependencies:[m.sg,m.Ov],styles:[".m-card[_ngcontent-%COMP%]{font-family:Changa,serif;font-weight:400;color:#fff;background-color:#282828;padding-top:0}.m-card-title[_ngcontent-%COMP%]{padding:5px;color:#eab42a}.m-card-content-padding[_ngcontent-%COMP%]{padding:5px}.section[_ngcontent-%COMP%]{padding:3rem 1.5rem}.container[_ngcontent-%COMP%]{flex-grow:1;margin:0 auto;position:relative;width:auto}.fade-in-one[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn ease 1s;-webkit-animation:_ngcontent-%COMP%_fadeIn ease 5s;-moz-animation:fadeIn ease 10s;-o-animation:fadeIn ease 10s}.fade-in-two[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn ease 3s;-webkit-animation:_ngcontent-%COMP%_fadeIn ease 5s;-moz-animation:fadeIn ease 12s;-o-animation:fadeIn ease 12s}.fade-in-three[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn ease 5s;-webkit-animation:_ngcontent-%COMP%_fadeIn ease 5s;-moz-animation:fadeIn ease 13s;-o-animation:fadeIn ease 13s}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"]});class l{constructor(){}ngOnInit(){}}l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-our-service"]],decls:48,vars:0,consts:[["id","services",1,"section-color","services"],[1,"container","m-font"],[1,"columns","is-multiline"],["data-aos","fade-in","data-aos-easing","linear",1,"column","is-12","about-me","aos-init","aos-animate"],[1,"title","has-text-centered","section-title","m-font"],[1,"columns","is-12"],["data-aos","fade-in","data-aos-easing","linear",1,"column","is-4","has-text-centered","aos-init","aos-animate"],["aria-hidden","true","focusable","false","data-prefix","fad","data-icon","meteor","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512","data-fa-i2svg","",1,"svg-inline--fa","fa-meteor","fa-w-16","fa-3x"],[1,"fa-group"],["fill","currentColor","d","M491.12794.70921c-38.6972,11.5936-111.77976,34.29644-187.67439,61.2961-2.09343-6.99991-3.99939-13.49983-5.5929-18.59351a16.058,16.058,0,0,0-22.90274-9.49988c-42.39976,22.09347-152.77349,82.59271-214.37343,142.4982-1.09359,1-2.49962,2-3.49947,3A194.83045,194.83045,0,1,0,332.6522,454.90662c.99985-1,1.9997-2.40622,2.99954-3.49995,59.78772-61.6086,120.3722-172.10721,142.47819-214.40356a16.06158,16.06158,0,0,0-9.49854-22.906c-5.20233-1.59373-11.6076-3.5-18.60653-5.59368,26.99587-75.999,49.69552-148.99813,61.30311-187.70077A16.18325,16.18325,0,0,0,491.12794.70921ZM191.97061,448.00046A127.99839,127.99839,0,1,1,319.951,320.00207,127.97573,127.97573,0,0,1,191.97061,448.00046Z",1,"fa-secondary"],["fill","currentColor","d","M191.97061,192.00368A127.99839,127.99839,0,1,0,319.951,320.00207,127.97573,127.97573,0,0,0,191.97061,192.00368Zm-31.9951,127.99839a31.9996,31.9996,0,1,1,31.9951-31.9996A31.959,31.959,0,0,1,159.97551,320.00207Zm47.99265,63.9992a15.9998,15.9998,0,1,1,15.99755-15.9998A16.04976,16.04976,0,0,1,207.96816,384.00127Z",1,"fa-primary"],["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","paint-brush","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512","data-fa-i2svg","",1,"svg-inline--fa","fa-paint-brush","fa-w-16","fa-3x"],["fill","currentColor","d","M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"],["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","rocket","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512","data-fa-i2svg","",1,"svg-inline--fa","fa-rocket","fa-w-16","fa-3x"],["fill","currentColor","d","M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"],["data-aos","fade-in","data-aos-easing","linear",1,"column","is-4","has-text-centered","aos-init"],["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","upload","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512","data-fa-i2svg","",1,"svg-inline--fa","fa-upload","fa-w-16","fa-3x"],["fill","currentColor","d","M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"],["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","bus","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512","data-fa-i2svg","",1,"svg-inline--fa","fa-bus","fa-w-16","fa-3x"],["fill","currentColor","d","M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zM112 400c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm16-112c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32v128c0 17.67-14.33 32-32 32H128zm272 112c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"],["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","code","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 512","data-fa-i2svg","",1,"svg-inline--fa","fa-code","fa-w-16","fa-3x"],["fill","currentColor","d","M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),t._uU(5,"\u062e\u062f\u0645\u0627\u062a\u0646\u0627 \u062f\u0627\u0626\u0645\u0629 \u0645\u0631\u0641\u0642\u0629 \u0645\u0639 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c"),t.qZA(),t._UZ(6,"br"),t.qZA(),t.TgZ(7,"div",5)(8,"div",6),t.O4$(),t.TgZ(9,"svg",7)(10,"g",8),t._UZ(11,"path",9)(12,"path",10),t.qZA()(),t.kcU(),t._UZ(13,"hr"),t.TgZ(14,"h2"),t._uU(15," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua "),t.qZA()(),t.TgZ(16,"div",6),t.O4$(),t.TgZ(17,"svg",11),t._UZ(18,"path",12),t.qZA(),t.kcU(),t._UZ(19,"hr"),t.TgZ(20,"h2"),t._uU(21," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua "),t.qZA()(),t.TgZ(22,"div",6),t.O4$(),t.TgZ(23,"svg",13),t._UZ(24,"path",14),t.qZA(),t.kcU(),t._UZ(25,"hr"),t.TgZ(26,"h2"),t._uU(27," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua "),t.qZA()()(),t._UZ(28,"hr"),t.TgZ(29,"div",5)(30,"div",15),t.O4$(),t.TgZ(31,"svg",16),t._UZ(32,"path",17),t.qZA(),t.kcU(),t._UZ(33,"hr"),t.TgZ(34,"h2"),t._uU(35," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua "),t.qZA()(),t.TgZ(36,"div",15),t.O4$(),t.TgZ(37,"svg",18),t._UZ(38,"path",19),t.qZA(),t.kcU(),t._UZ(39,"hr"),t.TgZ(40,"h2"),t._uU(41," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua "),t.qZA()(),t.TgZ(42,"div",15),t.O4$(),t.TgZ(43,"svg",20),t._UZ(44,"path",21),t.qZA(),t.kcU(),t._UZ(45,"hr"),t.TgZ(46,"h2"),t._uU(47," Lorem Lorem Lorem Lorem Lorem, Lorem adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua "),t.qZA()()()()()())},styles:[".section-color[_ngcontent-%COMP%]{padding:100px;background-color:#43485c;color:#fff}.m-font[_ngcontent-%COMP%]{font-family:Changa,serif;color:#fff}.svg-inline--fa.fa-w-16[_ngcontent-%COMP%]{width:1em}svg[_ngcontent-%COMP%]:not(:root).svg-inline--fa{overflow:visible}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.main-content[_ngcontent-%COMP%]{padding-top:2rem;color:#3c4172;font-family:Poppins,sans-serif}"]});class u{constructor(){this.imageObject=[{image:"assets/images/home-page/slider/1.jpg",thumbImage:"assets/images/home-page/slider/1.jpg"},{image:"assets/images/home-page/slider/3.jpg",thumbImage:"assets/images/home-page/slider/3.jpg"},{image:"assets/images/home-page/slider/2.jpg",thumbImage:"assets/images/home-page/slider/2.jpg"}]}ngOnInit(){}}u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-masdar-home"]],decls:15,vars:0,consts:[[1,"has-margin-bottom-50"],[1,"hero","is-medium","has-background","m-release"],[1,"hero-body","m-font","has-text-right","has-padding-50"],[1,"container"],[1,"title","is-1","has-text-white"],[1,"subtitle","is-2","has-text-white"],[1,"has-text-centered"],["href",""],[1,"button","is-large","is-danger"]],template:function(e,o){1&e&&(t.TgZ(0,"body"),t._UZ(1,"app-view-services"),t.TgZ(2,"div",0)(3,"section",1)(4,"div",2)(5,"div",3)(6,"h1",4),t._uU(7," \u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u062d\u0627\u0644\u064a 3.4.2 "),t.qZA(),t.TgZ(8,"h2",5),t._uU(9," \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u062e\u0627\u0635 \u0628\u0627\u0644\u0625\u0635\u062f\u0627\u0631\u0627\u062a \u064a\u062d\u0648\u064a \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u064a\u0632\u0627\u062a \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u062a\u064a \u062a\u0645\u062a \u0625\u0636\u0627\u0641\u062a\u0647\u0627 \u0648\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062a\u062d\u062f\u064a\u062b "),t.qZA(),t.TgZ(10,"div",6)(11,"a",7)(12,"button",8),t._uU(13,"\u0642\u0633\u0645 \u0627\u0644\u0625\u0635\u062f\u0627\u0631\u0627\u062a"),t.qZA()()()()()()(),t._UZ(14,"app-our-service"),t.qZA())},dependencies:[d,l],styles:[".is-20px[_ngcontent-%COMP%]{background:tomato;width:20px}body[_ngcontent-%COMP%]{background-color:#0b0d0e}.is-danger[_ngcontent-%COMP%]{background-color:#c00;font-family:Changa,serif}.m-font[_ngcontent-%COMP%]{font-family:Changa,serif}.p-t-80[_ngcontent-%COMP%]{padding-top:70px!important}.hero.is-primary[_ngcontent-%COMP%]{background:linear-gradient(to top right,#487AFA 10%,#425664)}.m-release[_ngcontent-%COMP%]{background-color:#282828}.k-font[_ngcontent-%COMP%]{font-family:Lucida Console,Courier,monospace}.hero[_ngcontent-%COMP%]   .has-background[_ngcontent-%COMP%]{position:relative;overflow:hidden}.hero[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{position:absolute;object-fit:cover;object-position:center center;width:100%;height:100%}.hero.is-transparent[_ngcontent-%COMP%]{opacity:.3}"]});var Z=a(9383);class p{constructor(){}ngOnInit(){}}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-home"]],decls:108,vars:27,consts:[["src","assets/home/1th-logo1.png","alt","Masdar",1,"home-image"],["src","assets/home/2th-sub.png","alt","Masdar",1,"home-image"],[1,"container"],[1,"gradient-cards"],[1,"card"],[1,"container-card","bg-green-box"],[1,"card-head"],["width","80","height","80","viewBox","0 0 120 120","fill","none","xmlns","http://www.w3.org/2000/svg"],["x","1","y","1","width","118","height","118","rx","24","fill","url(#paint0_linear_1366_4547)","fill-opacity","0.15","stroke","url(#paint1_radial_1366_4547)","stroke-width","2"],["d","M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z","fill","#54E8A9"],["d","M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z","fill","#2FCB89"],["id","paint0_linear_1366_4547","x1","0.0063367","y1","0.168432","x2","120.853","y2","119.009","gradientUnits","userSpaceOnUse"],["stop-color","#2FCB89","stop-opacity","0.7"],["offset","0.489583","stop-color","#2FCB89","stop-opacity","0"],["offset","1","stop-color","#2FCB89","stop-opacity","0.7"],["id","paint1_radial_1366_4547","cx","0","cy","0","r","1","gradientUnits","userSpaceOnUse","gradientTransform","translate(60 60) rotate(96.8574) scale(122.674 149.921)"],["stop-color","#54E8A9"],["offset","1","stop-color","#1A3E31","stop-opacity","0.2"],[1,"title-text"],[1,"card-title"],[1,"center"],[1,"card-description"],["href","https://masdar-pro.com/m/masdar"],[1,"container-card","bg-white-box"],["x","1","y","1","width","118","height","118","rx","24","fill","url(#paint0_linear_1366_4565)","fill-opacity","0.15","stroke","url(#paint1_radial_1366_4565)","stroke-width","2"],["rx","21.9462","ry","22.2891","transform","matrix(0.964749 0.263173 -0.254526 0.967066 60.1463 63.0804)","stroke","white","stroke-width","1.00101","stroke-linecap","round","stroke-dasharray","4 5.01"],["rx","17.4359","ry","17.5832","transform","matrix(-1 0 0 1 60.1466 39.5834)","fill","white"],["d","M63.5924 38.93C64.4717 38.4692 65.0312 37.6495 64.9014 36.2874C64.7314 34.4228 63.2378 33.7982 61.2597 33.624V31.0427H59.721V33.5522C59.3212 33.5522 58.9118 33.5626 58.5019 33.5725V31.0427H56.9631V33.624C56.3974 33.6416 55.7384 33.6328 53.876 33.624V35.3039C55.0905 35.282 55.7283 35.2019 55.8744 36.0003V43.0678C55.7815 43.7013 55.2869 43.6103 54.186 43.5905L53.8765 45.4649C56.682 45.4649 56.9641 45.4754 56.9641 45.4754V47.6858H58.5029V45.506C58.9224 45.5164 59.3319 45.5164 59.722 45.5164V47.6863H61.2607V45.4759C63.8385 45.3323 65.5619 44.6666 65.7917 42.1774C65.9713 40.1803 65.0526 39.2888 63.5935 38.9305L63.5924 38.93ZM58.5318 35.4167C59.4008 35.4167 62.1186 35.14 62.1186 36.9942C62.1186 38.7661 59.4008 38.5612 58.5318 38.5612V35.4167ZM58.5318 43.6004V40.1381C59.5708 40.1381 62.7528 39.8412 62.7528 41.869C62.7528 43.8256 59.5708 43.5999 58.5318 43.5999V43.6004Z","fill","#2E3042"],["d","M82.5643 62.834C92.1944 62.834 100 70.7058 100 80.4172C100 90.1286 92.1944 98.0004 82.5643 98.0004C72.9342 98.0004 65.1284 90.1286 65.1284 80.4172C65.1284 70.7058 72.9342 62.834 82.5643 62.834ZM92.0516 84.2822H76.3964C76.2271 84.282 76.0646 84.3491 75.9441 84.469L72.8514 87.5626C72.8065 87.6073 72.7759 87.6645 72.7634 87.7269C72.751 87.7893 72.7573 87.854 72.7815 87.9128C72.8057 87.9716 72.8468 88.0217 72.8994 88.0568C72.9521 88.0919 73.0139 88.1104 73.077 88.1098H88.7323C88.9015 88.11 89.064 88.0429 89.1845 87.923L92.2772 84.8284C92.3217 84.7836 92.352 84.7264 92.3643 84.6642C92.3765 84.602 92.3701 84.5376 92.346 84.479C92.3218 84.4205 92.2809 84.3705 92.2285 84.3355C92.1761 84.3004 92.1145 84.2819 92.0516 84.2822ZM88.7323 78.4665H73.077L73.0029 78.4742C72.9476 78.487 72.8968 78.5146 72.8556 78.5539C72.8145 78.5933 72.7846 78.6431 72.769 78.6981C72.7534 78.7531 72.7527 78.8113 72.767 78.8666C72.7813 78.9219 72.8101 78.9724 72.8503 79.0127L75.9452 82.1074L76.0215 82.1733C76.1305 82.2502 76.2612 82.2942 76.3964 82.2942H92.0516L92.1257 82.2865C92.181 82.2737 92.2319 82.2462 92.273 82.2068C92.3141 82.1674 92.3441 82.1177 92.3596 82.0627C92.3752 82.0077 92.3759 81.9495 92.3616 81.8941C92.3473 81.8388 92.3185 81.7883 92.2783 81.748L89.1834 78.6534L89.1071 78.5874C88.9978 78.5086 88.8667 78.4663 88.7323 78.4665Z","fill","white"],["d","M92.0507 84.5023H76.3954C76.2262 84.5022 76.0637 84.57 75.9432 84.6911L72.8505 87.8164C72.8056 87.8616 72.775 87.9194 72.7625 87.9825C72.75 88.0455 72.7563 88.1109 72.7806 88.1703C72.8048 88.2296 72.8458 88.2803 72.8985 88.3158C72.9511 88.3512 73.013 88.3699 73.0761 88.3693H88.7313C88.9006 88.3695 89.0631 88.3017 89.1836 88.1806L92.2763 85.0541C92.3208 85.0089 92.3511 84.9512 92.3633 84.8883C92.3756 84.8255 92.3692 84.7604 92.345 84.7012C92.3208 84.6421 92.2799 84.5916 92.2275 84.5562C92.1751 84.5208 92.1136 84.502 92.0507 84.5023ZM88.7313 78.627H73.0761L73.002 78.6347C72.9467 78.6477 72.8958 78.6755 72.8547 78.7152C72.8136 78.755 72.7836 78.8053 72.7681 78.8608C72.7525 78.9164 72.7518 78.9752 72.7661 79.0311C72.7804 79.087 72.8092 79.138 72.8494 79.1787L75.9443 82.3052L76.0206 82.3718C76.1295 82.4495 76.2603 82.4939 76.3954 82.4939H92.0507L92.1248 82.4861C92.1801 82.4732 92.2309 82.4454 92.2721 82.4056C92.3132 82.3659 92.3431 82.3156 92.3587 82.26C92.3743 82.2045 92.375 82.1457 92.3606 82.0898C92.3463 82.0338 92.3176 81.9829 92.2773 81.9421L89.1825 78.8157L89.1062 78.7491C88.9968 78.6694 88.8657 78.6267 88.7313 78.627ZM92.0507 72.8259H76.3954C76.2262 72.8258 76.0637 72.8936 75.9432 73.0147L72.8505 76.1411C72.806 76.1864 72.7757 76.2441 72.7634 76.3069C72.7512 76.3698 72.7576 76.4349 72.7817 76.4941C72.8059 76.5532 72.8468 76.6037 72.8992 76.6391C72.9516 76.6745 73.0132 76.6932 73.0761 76.6929H88.7313C88.9006 76.6931 89.0631 76.6253 89.1836 76.5042L92.2763 73.3788C92.3212 73.3336 92.3518 73.2758 92.3643 73.2128C92.3767 73.1498 92.3704 73.0844 92.3462 73.025C92.322 72.9656 92.2809 72.915 92.2283 72.8795C92.1756 72.844 92.1138 72.8254 92.0507 72.8259Z","fill","#2E3042"],["cx","37.4359","cy","78.7687","rx","17.4359","ry","17.5832","fill","white"],["d","M43.9081 78.9791L37.4362 82.8079L30.96 78.9791L37.4362 68.2188L43.9081 78.9791ZM37.4362 84.0374L30.96 80.2086L37.4362 89.3434L43.9124 80.2086L37.4362 84.0374Z","fill","#2E3042"],["id","paint0_linear_1366_4565","x1","0","y1","0","x2","120","y2","120","gradientUnits","userSpaceOnUse"],["stop-color","white","stop-opacity","0.7"],["offset","0.505208","stop-color","white","stop-opacity","0"],["offset","1","stop-color","white","stop-opacity","0.7"],["id","paint1_radial_1366_4565","cx","0","cy","0","r","1","gradientUnits","userSpaceOnUse","gradientTransform","translate(60 60) rotate(96.8574) scale(122.674 149.921)"],["stop-color","white"],["offset","1","stop-color","#363437","stop-opacity","0.2"],[1,"container-card","bg-yellow-box"],["x","1","y","1","width","118","height","118","rx","24","fill","url(#paint0_linear_1366_4557)","fill-opacity","0.15","stroke","url(#paint1_radial_1366_4557)","stroke-width","2"],["d","M74.2105 36C73.373 36 72.5698 35.6839 71.9776 35.1213C71.3853 34.5587 71.0526 33.7956 71.0526 33C71.0526 32.2044 71.3853 31.4413 71.9776 30.8787C72.5698 30.3161 73.373 30 74.2105 30H86.8421C87.6796 30 88.4829 30.3161 89.0751 30.8787C89.6673 31.4413 90 32.2044 90 33V45C90 45.7956 89.6673 46.5587 89.0751 47.1213C88.4829 47.6839 87.6796 48 86.8421 48C86.0046 48 85.2014 47.6839 84.6091 47.1213C84.0169 46.5587 83.6842 45.7956 83.6842 45V40.242L65.3905 57.621C64.7983 58.1834 63.9953 58.4994 63.1579 58.4994C62.3205 58.4994 61.5175 58.1834 60.9253 57.621L52.1053 49.242L35.3905 65.121C34.7949 65.6675 33.9972 65.9699 33.1693 65.963C32.3413 65.9562 31.5492 65.6407 30.9637 65.0845C30.3782 64.5282 30.0461 63.7758 30.0389 62.9892C30.0317 62.2026 30.35 61.4448 30.9253 60.879L49.8726 42.879C50.4648 42.3166 51.2679 42.0006 52.1053 42.0006C52.9426 42.0006 53.7457 42.3166 54.3379 42.879L63.1579 51.258L79.219 36H74.2105ZM36.3158 78V87C36.3158 87.7957 35.9831 88.5587 35.3909 89.1213C34.7986 89.6839 33.9954 90 33.1579 90C32.3204 90 31.5171 89.6839 30.9249 89.1213C30.3327 88.5587 30 87.7957 30 87V78C30 77.2043 30.3327 76.4413 30.9249 75.8787C31.5171 75.3161 32.3204 75 33.1579 75C33.9954 75 34.7986 75.3161 35.3909 75.8787C35.9831 76.4413 36.3158 77.2043 36.3158 78ZM52.1053 66C52.1053 65.2043 51.7726 64.4413 51.1803 63.8787C50.5881 63.3161 49.7849 63 48.9474 63C48.1098 63 47.3066 63.3161 46.7144 63.8787C46.1222 64.4413 45.7895 65.2043 45.7895 66V87C45.7895 87.7957 46.1222 88.5587 46.7144 89.1213C47.3066 89.6839 48.1098 90 48.9474 90C49.7849 90 50.5881 89.6839 51.1803 89.1213C51.7726 88.5587 52.1053 87.7957 52.1053 87V66ZM64.7368 69C65.5744 69 66.3776 69.3161 66.9698 69.8787C67.562 70.4413 67.8947 71.2043 67.8947 72V87C67.8947 87.7957 67.562 88.5587 66.9698 89.1213C66.3776 89.6839 65.5744 90 64.7368 90C63.8993 90 63.0961 89.6839 62.5039 89.1213C61.9117 88.5587 61.5789 87.7957 61.5789 87V72C61.5789 71.2043 61.9117 70.4413 62.5039 69.8787C63.0961 69.3161 63.8993 69 64.7368 69ZM83.6842 57C83.6842 56.2044 83.3515 55.4413 82.7593 54.8787C82.1671 54.3161 81.3638 54 80.5263 54C79.6888 54 78.8856 54.3161 78.2933 54.8787C77.7011 55.4413 77.3684 56.2044 77.3684 57V87C77.3684 87.7957 77.7011 88.5587 78.2933 89.1213C78.8856 89.6839 79.6888 90 80.5263 90C81.3638 90 82.1671 89.6839 82.7593 89.1213C83.3515 88.5587 83.6842 87.7957 83.6842 87V57Z","fill","#FFEE24"],["id","paint0_linear_1366_4557","x1","-0.0208152","y1","-0.102528","x2","119.899","y2","119.817","gradientUnits","userSpaceOnUse"],["stop-color","#FFE34B","stop-opacity","0.7"],["offset","0.510417","stop-color","#FFE34B","stop-opacity","0"],["offset","1","stop-color","#FFE34B","stop-opacity","0.7"],["id","paint1_radial_1366_4557","cx","0","cy","0","r","1","gradientUnits","userSpaceOnUse","gradientTransform","translate(60 60) rotate(96.8574) scale(122.674 149.921)"],["stop-color","#FFEE24"],["offset","1","stop-color","#302A1A","stop-opacity","0.2"],[1,"container-card","bg-blue-box"],["x","1","y","1","width","118","height","118","rx","24","fill","url(#paint0_linear_1366_4582)","fill-opacity","0.15","stroke","url(#paint1_radial_1366_4582)","stroke-width","2"],["d","M90.9405 64.775L88.0155 69.55L85.1155 64.775H80.0655L85.5155 72.85L79.5905 82H84.4905L88.0155 76.175L91.5155 82H96.4405L90.4905 72.85L95.9405 64.775H90.9405Z","fill","#87A1FF"],["d","M44.9833 35.52L27.3433 43.92V52.53L35.1833 49.17V82H44.9833V35.52ZM71.37 35.52L53.73 43.92V52.53L61.57 49.17V82H71.37V35.52Z","fill","#87A1FF"],["id","paint0_linear_1366_4582","x1","120.194","y1","119.827","x2","-13.1225","y2","17.1841","gradientUnits","userSpaceOnUse"],["stop-color","#61A0FF","stop-opacity","0.7"],["offset","0.489583","stop-color","#61A0FF","stop-opacity","0"],["offset","1","stop-color","#61A0FF","stop-opacity","0.7"],["id","paint1_radial_1366_4582","cx","0","cy","0","r","1","gradientUnits","userSpaceOnUse","gradientTransform","translate(60 60) rotate(96.8574) scale(122.674 149.921)"],["stop-color","#87A1FF"],["offset","1","stop-color","#16161D","stop-opacity","0.2"]],template:function(e,o){1&e&&(t._UZ(0,"img",0)(1,"br")(2,"img",1)(3,"p"),t.TgZ(4,"div",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6),t.O4$(),t.TgZ(9,"svg",7),t._UZ(10,"rect",8)(11,"path",9)(12,"path",10),t.TgZ(13,"defs")(14,"linearGradient",11),t._UZ(15,"stop",12)(16,"stop",13)(17,"stop",14),t.qZA(),t.TgZ(18,"radialGradient",15),t._UZ(19,"stop",16)(20,"stop",17),t.qZA()()(),t.kcU(),t.TgZ(21,"div",18),t._uU(22),t.ALo(23,"translate"),t.qZA()(),t.TgZ(24,"p",19),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.TgZ(27,"div",20)(28,"button"),t._uU(29),t.ALo(30,"translate"),t._UZ(31,"span")(32,"span")(33,"span")(34,"span"),t.qZA()(),t.TgZ(35,"p",21)(36,"a",22),t._uU(37,"\u0627\u0636\u063a\u0637 \u0647\u0646\u0627 \u0644\u0632\u064a\u0627\u0631\u0629 \u0645\u062a\u062c\u0631 \u062a\u062c\u0631\u064a\u0628\u064a"),t.qZA()()()(),t.TgZ(38,"div",4)(39,"div",23)(40,"div",6),t.O4$(),t.TgZ(41,"svg",7),t._UZ(42,"rect",24)(43,"ellipse",25)(44,"ellipse",26)(45,"path",27)(46,"path",28)(47,"path",29)(48,"ellipse",30)(49,"path",31),t.TgZ(50,"defs")(51,"linearGradient",32),t._UZ(52,"stop",33)(53,"stop",34)(54,"stop",35),t.qZA(),t.TgZ(55,"radialGradient",36),t._UZ(56,"stop",37)(57,"stop",38),t.qZA()()(),t.kcU(),t.TgZ(58,"div",18),t._uU(59),t.ALo(60,"translate"),t.qZA()(),t.TgZ(61,"p",19),t._uU(62),t.ALo(63,"translate"),t.qZA()()(),t.TgZ(64,"div",4)(65,"div",39)(66,"div",6),t.O4$(),t.TgZ(67,"svg",7),t._UZ(68,"rect",40)(69,"path",41),t.TgZ(70,"defs")(71,"linearGradient",42),t._UZ(72,"stop",43)(73,"stop",44)(74,"stop",45),t.qZA(),t.TgZ(75,"radialGradient",46),t._UZ(76,"stop",47)(77,"stop",48),t.qZA()()(),t.kcU(),t.TgZ(78,"div",18),t._uU(79),t.ALo(80,"translate"),t.qZA()(),t.TgZ(81,"p",19),t._uU(82),t.ALo(83,"translate"),t.qZA()()(),t.TgZ(84,"div",4)(85,"div",49)(86,"div",6),t.O4$(),t.TgZ(87,"svg",7),t._UZ(88,"rect",50)(89,"path",51)(90,"path",52),t.TgZ(91,"defs")(92,"linearGradient",53),t._UZ(93,"stop",54)(94,"stop",55)(95,"stop",56),t.qZA(),t.TgZ(96,"radialGradient",57),t._UZ(97,"stop",58)(98,"stop",59),t.qZA()()(),t.kcU(),t.TgZ(99,"div",18),t._uU(100),t.ALo(101,"translate"),t.qZA()(),t.TgZ(102,"p",19),t._uU(103),t.ALo(104,"translate"),t.qZA(),t.TgZ(105,"p",21)(106,"a",22),t._uU(107,"\u0627\u0636\u063a\u0637 \u0647\u0646\u0627 \u0644\u0632\u064a\u0627\u0631\u0629 \u0645\u062a\u062c\u0631 \u062a\u062c\u0631\u064a\u0628\u064a"),t.qZA()()()()()()),2&e&&(t.xp6(22),t.hij(" ",t.lcZ(23,9,"home_1th-card_title")," "),t.xp6(3),t.Oqu(t.lcZ(26,11,"home_1th-card_sub_title")),t.xp6(4),t.hij(" ",t.lcZ(30,13,"create_account")," "),t.xp6(30),t.hij(" ",t.lcZ(60,15,"home_2th-card_title")," "),t.xp6(3),t.Oqu(t.lcZ(63,17,"home_2th-card_sub_title")),t.xp6(17),t.hij(" ",t.lcZ(80,19,"home_3th-card_title")," "),t.xp6(3),t.Oqu(t.lcZ(83,21,"home_3th-card_sub_title")),t.xp6(18),t.hij(" ",t.lcZ(101,23,"home_4th-card_title")," "),t.xp6(3),t.Oqu(t.lcZ(104,25,"home_4th-card_sub_title")))},dependencies:[Z.X$],styles:['button[_ngcontent-%COMP%]{font-family:Changa,serif;width:230px;height:40px;background:#bb1515;border-style:none;color:#fff;font-size:15px;outline:none;cursor:pointer;position:relative;padding:0;overflow:hidden;transition:all .5s;box-shadow:0 1px 2px #0003}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:block}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){height:3px;width:200px;top:0;left:-200px;background:linear-gradient(to right,rgba(0,0,0,0),#f6e58d);border-top-right-radius:1px;border-bottom-right-radius:1px;animation:_ngcontent-%COMP%_span1 2s linear infinite;animation-delay:1s}@keyframes _ngcontent-%COMP%_span1{0%{left:-200px}to{left:200px}}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){height:70px;width:3px;top:-70px;right:0;background:linear-gradient(to bottom,rgba(0,0,0,0),#f6e58d);border-bottom-left-radius:1px;border-bottom-right-radius:1px;animation:_ngcontent-%COMP%_span2 2s linear infinite;animation-delay:2s}@keyframes _ngcontent-%COMP%_span2{0%{top:-70px}to{top:70px}}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){height:3px;width:200px;right:-200px;bottom:0;background:linear-gradient(to left,rgba(0,0,0,0),#f6e58d);border-top-left-radius:1px;border-bottom-left-radius:1px;animation:_ngcontent-%COMP%_span3 2s linear infinite;animation-delay:3s}@keyframes _ngcontent-%COMP%_span3{0%{right:-200px}to{right:200px}}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){height:70px;width:3px;bottom:-70px;left:0;background:linear-gradient(to top,rgba(0,0,0,0),#f6e58d);border-top-right-radius:1px;border-top-left-radius:1px;animation:_ngcontent-%COMP%_span4 2s linear infinite;animation-delay:4s}@keyframes _ngcontent-%COMP%_span4{0%{bottom:-70px}to{bottom:70px}}button[_ngcontent-%COMP%]:hover{transition:all .5s;transform:rotate(-3deg) scale(1.1);box-shadow:0 3px 5px #0006}button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{animation-play-state:paused}body[_ngcontent-%COMP%]{background-color:#000}.container[_ngcontent-%COMP%]{width:1200px!important;padding:0!important;margin-right:auto;margin-left:auto;direction:rtl}@media screen and (min-width: 992px) and (max-width: 1439px){.container[_ngcontent-%COMP%]{max-width:1279px!important;padding:0!important;margin:0 80px!important;width:auto!important}}@media screen and (max-width: 991px){.container[_ngcontent-%COMP%]{max-width:959px!important;margin:0 16px!important;padding:0!important;width:auto!important}}.gradient-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:32px;padding:0}@media screen and (max-width: 991px){.gradient-cards[_ngcontent-%COMP%]{grid-template-columns:1fr}}.container-title[_ngcontent-%COMP%]{text-align:center;padding:0!important;margin-bottom:40px;font-size:40px;color:#fff;font-weight:600;line-height:60px}.card[_ngcontent-%COMP%]{max-width:550px;border:0;width:100%;margin-inline:auto}.container-card[_ngcontent-%COMP%]{position:relative;border:2px solid transparent;background:linear-gradient(71deg,#080509,#1a171c,#080509);background-clip:padding-box;border-radius:45px;padding:15px}.container-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:32px}.bg-green-box[_ngcontent-%COMP%], .bg-white-box[_ngcontent-%COMP%], .bg-yellow-box[_ngcontent-%COMP%], .bg-blue-box[_ngcontent-%COMP%]{position:relative}.bg-green-box[_ngcontent-%COMP%]:after, .bg-white-box[_ngcontent-%COMP%]:after, .bg-yellow-box[_ngcontent-%COMP%]:after, .bg-blue-box[_ngcontent-%COMP%]:after{position:absolute;inset:-1px;content:"";z-index:-1;border-radius:45px}.bg-green-box[_ngcontent-%COMP%]:after{background:linear-gradient(71deg,#0d1212,#3da077,#0d1212)}.bg-white-box[_ngcontent-%COMP%]:after{background:linear-gradient(71deg,#121013,#b0afb0,#121013)}.bg-yellow-box[_ngcontent-%COMP%]:after{background:linear-gradient(71deg,#110e0e,#afa220,#110e0e)}.bg-blue-box[_ngcontent-%COMP%]:after{background:linear-gradient(71deg,#0c0a0e,#5f6fad,#0c0a0e)}.card-title[_ngcontent-%COMP%]{font-weight:600;color:#e2dbdb;line-height:40px;font-size:17px;padding-bottom:8px}.card-description[_ngcontent-%COMP%]{font-weight:600;line-height:32px;color:#ffffff80;font-size:16px;max-width:470px}.card-head[_ngcontent-%COMP%]{display:grid;align-items:center;grid-template-columns:1fr 2fr;column-gap:5px}.card-head[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{font-size:22px;width:100%;color:#fff;font-weight:600}']});const b=[{path:"masdar-home",pathMatch:"full",component:u},{path:"home",pathMatch:"full",component:p}];class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[f.Bz.forChild(b)]})}}]);