"use strict";(self.webpackChunkmasdar=self.webpackChunkmasdar||[]).push([[816],{4905:(w,d,a)=>{a.r(d),a.d(d,{DocumentationRoutingModule:()=>y});var h=a(2313),t=a(4650),p=a(7579),m=a(9942),f=a(529),u=a(7605);let C=(()=>{class o{constructor(n,e){this.httpClient=n,this.addHeader=e,this.httpOptions={headers:new f.WM({"Content-Type":"application/json"})}}getDocTitle(){return this.httpClient.get(m.x.getDocTitle)}getDoc(n){return this.httpClient.get(`${m.x.doc}/${n}`)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(f.eN),t.LFG(u.G))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),b=(()=>{class o{constructor(n){this.docsRepositoryService=n}getDocTitle(){return this.docsRepositoryService.getDocTitle()}getDoc(n){return this.docsRepositoryService.getDoc(n)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(C))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),M=(()=>{class o{constructor(n){this.docsManagerService=n}getDocTitle(){const n=new p.x;return this.docsManagerService.getDocTitle().subscribe(e=>{n.next(e.data)}),n.asObservable()}getDoc(n){const e=new p.x;return this.docsManagerService.getDoc(n).subscribe(r=>{e.next(r.data)}),e.asObservable()}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(b))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var g=a(6895),s=a(4006);function _(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",20)(1,"a",21),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.getTitles())}),t._uU(2,"\u0639\u0631\u0636 \u0627\u0644\u0643\u0644"),t.qZA()()}}function O(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",22)(1,"a",21),t.NdJ("click",function(){const c=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.doc(c.id))}),t.TgZ(2,"div",23)(3,"div",24)(4,"div",25)(5,"div",26)(6,"span",27),t._uU(7),t.qZA()()()()()()()}if(2&o){const n=i.$implicit;t.xp6(7),t.Oqu(n.title)}}function P(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",22)(1,"a",28),t.NdJ("click",function(){const c=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.sendData(c.subTitle,c.documentation))}),t.TgZ(2,"div",23)(3,"div",24)(4,"div",25)(5,"div",26)(6,"span",27),t._uU(7),t.qZA()()()()()()()}if(2&o){const n=i.$implicit;t.xp6(7),t.Oqu(n.subTitle)}}const x=[{path:"documentation",pathMatch:"full",component:(()=>{class o{constructor(n){this.docsService=n,this.coll=document.getElementsByClassName("collapsible"),this.titleIsHide=!1,this.subTitleIsHide=!0}ngOnInit(){this.getTitles()}getTitles(){this.docsService.getDocTitle().subscribe(n=>{this.titleList=n,this.titles=n}),this.titleIsHide=!1,this.subTitleIsHide=!0}doc(n){this.documentation=this.docsService.getDoc(n),this.titleIsHide=!0,this.subTitleIsHide=!1}sendData(n,e){this.subTitle=n,this.docContent=e}applyFilter(){this.titleIsHide=!1,this.subTitleIsHide=!0,this.name||(this.titles=this.titleList),this.titles=[],this.titles=this.titleList.filter(n=>{if(n.title){const e=n.title.toLocaleLowerCase().match(this.name.toLocaleLowerCase());if(e)return e}})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(M))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-documentation"]],decls:29,vars:10,consts:[[1,"m-container"],[1,"footer"],[1,"row","align-items-center","justify-content-xl-between"],[1,"col-xl-6","m-auto","text-center"],[1,"copyright"],[1,"m-search"],["type","text","placeholder","\u0627\u0628\u062d\u062b \u0639\u0646 \u0645\u0642\u0627\u0644\u0629",3,"ngModel","keyup","ngModelChange"],["class","show-all",4,"ngIf"],[1,"row",3,"hidden"],["class","col-xl-3 col-lg-6",4,"ngFor","ngForOf"],["id","list",1,"row",3,"hidden"],["id","content",1,"overlay"],[1,"popup"],[1,"content"],[1,"chat"],[1,"chat-header","clearfix"],["href","/documentation#list",1,"close"],[1,"chat-about"],[1,"chat-with"],[1,"docContent","chat-history"],[1,"show-all"],[3,"click"],[1,"col-xl-3","col-lg-6"],[1,"card","card-stats","mb-4","mb-xl-0"],[1,"card-body"],[1,"row"],[1,"col","m-p-0"],[1,"h2","font-weight-bold","mb-0"],["href","/documentation#content",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"footer",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"br"),t.TgZ(6,"p"),t._uU(7,"\u0634\u0631\u062d \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0633\u0648\u0642 \u0627\u0644\u0645\u0635\u062f\u0631 \u0627\u0644\u0625\u062d\u062a\u0631\u0627\u0641\u064a"),t.qZA(),t.TgZ(8,"div",5)(9,"input",6),t.NdJ("keyup",function(){return e.applyFilter()})("ngModelChange",function(c){return e.name=c}),t.qZA(),t.YNc(10,_,3,0,"div",7),t.qZA()()()()(),t.TgZ(11,"div",8),t.YNc(12,O,8,1,"div",9),t.qZA(),t.TgZ(13,"div",10),t.YNc(14,P,8,1,"div",9),t.ALo(15,"async"),t.qZA()(),t.TgZ(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"a",16),t._uU(22,"\xd7"),t.qZA(),t.TgZ(23,"div",17)(24,"div",18),t._uU(25),t.qZA()()(),t.TgZ(26,"div",19)(27,"p"),t._uU(28),t.qZA()()()()()()),2&n&&(t.xp6(9),t.Q6J("ngModel",e.name),t.xp6(1),t.Q6J("ngIf",e.titleIsHide),t.xp6(1),t.Q6J("hidden",e.titleIsHide),t.xp6(1),t.Q6J("ngForOf",e.titles),t.xp6(1),t.Q6J("hidden",e.subTitleIsHide),t.xp6(1),t.Q6J("ngForOf",t.lcZ(15,8,e.documentation)),t.xp6(11),t.Oqu(e.subTitle),t.xp6(3),t.Oqu(e.docContent))},dependencies:[g.sg,g.O5,s.Fj,s.JJ,s.On,g.Ov],styles:['.follow-div[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:8px}.padding-t[_ngcontent-%COMP%]{padding-top:5px}.padding-t-15[_ngcontent-%COMP%]{padding-top:15px}a.button3[_ngcontent-%COMP%]{display:block;padding:.1em 1.2em;margin:0 .1em .1em 0;border-radius:2em;box-sizing:border-box;text-decoration:none;font-family:Changa,serif;font-weight:600;color:#fff;background-color:#3088ba;text-align:center;transition:all .2s}a.button3.renew-subscription[_ngcontent-%COMP%]{background-color:#b83113;color:#bcbcf3!important}a.button3[_ngcontent-%COMP%]:hover{background-color:#3088ba;cursor:pointer}@media all and (max-width: 30em){a.button3[_ngcontent-%COMP%]{display:block;margin:.1em auto;font-weight:500}}[_ngcontent-%COMP%]:root{--blue: #5e72e4;--indigo: #5603ad;--purple: #8965e0;--pink: #f3a4b5;--red: #f5365c;--orange: #fb6340;--yellow: #ffd600;--green: #2dce89;--teal: #11cdef;--cyan: #2bffc6;--gray: #8898aa;--gray-dark: #32325d;--light: #ced4da;--lighter: #e9ecef;--primary: #5e72e4;--secondary: #f7fafc;--success: #2dce89;--info: #11cdef;--warning: #fb6340;--danger: #f5365c;--light: #adb5bd;--dark: #212529;--default: #172b4d;--white: #fff;--neutral: #fff;--darker: black;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: Open Sans, sans-serif;--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], main[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}body[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;margin:0;text-align:left;color:#525f7f;background-color:#f8f9fe}[tabindex="-1"][_ngcontent-%COMP%]:focus{outline:0!important}h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem}p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}dfn[_ngcontent-%COMP%]{font-style:italic}strong[_ngcontent-%COMP%]{font-weight:bolder}a[_ngcontent-%COMP%]{text-decoration:none;color:#5e72e4;background-color:transparent;-webkit-text-decoration-skip:objects}a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#233dd2}a[_ngcontent-%COMP%]:not([href]):not([tabindex]){text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:not([href]):not([tabindex]):hover, a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus{outline:0}caption[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem;caption-side:bottom;text-align:left;color:#8898aa}button[_ngcontent-%COMP%]{border-radius:0}button[_ngcontent-%COMP%]:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{padding:0;border-style:none}input[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}input[type=date][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%]{-webkit-appearance:listbox}legend[_ngcontent-%COMP%]{font-size:1.5rem;line-height:inherit;display:block;width:100%;max-width:100%;margin-bottom:.5rem;padding:0;white-space:normal;color:inherit}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{outline-offset:-2px;-webkit-appearance:none}[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, [type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}[hidden][_ngcontent-%COMP%]{display:none!important}h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%]{font-family:inherit;font-weight:600;line-height:1.5;margin-bottom:.5rem;color:#f0f0f5}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.25rem}h5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%]{font-size:.8125rem}.container-fluid[_ngcontent-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px}.row[_ngcontent-%COMP%]{direction:rtl;display:flex;margin-right:-15px;margin-left:-15px;flex-wrap:wrap}.col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%]{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;padding-bottom:15px}.col[_ngcontent-%COMP%]{max-width:100%;flex-basis:0;flex-grow:1}.col-auto[_ngcontent-%COMP%]{width:auto;max-width:none;flex:0 0 auto}@media (min-width: 992px){.col-lg-6[_ngcontent-%COMP%]{max-width:50%;flex:0 0 50%}}@media (min-width: 1200px){.col-xl-3[_ngcontent-%COMP%]{max-width:25%;flex:0 0 25%}.col-xl-6[_ngcontent-%COMP%]{max-width:50%;flex:0 0 50%}}.card[_ngcontent-%COMP%]{font-family:Changa,serif;position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;border:1px solid rgba(0,0,0,.05);border-radius:.375rem;background-color:#100a13;background-clip:border-box}.card-body[_ngcontent-%COMP%]{padding:1.5rem;flex:1 1 auto}.card-title[_ngcontent-%COMP%]{margin-bottom:1.25rem}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.bg-info[_ngcontent-%COMP%]{background-color:#11cdef!important}.like-text[_ngcontent-%COMP%]{color:#11cdef}a.bg-info[_ngcontent-%COMP%]:hover, a.bg-info[_ngcontent-%COMP%]:focus, button.bg-info[_ngcontent-%COMP%]:hover, button.bg-info[_ngcontent-%COMP%]:focus{background-color:#0da5c0!important}.bg-warning[_ngcontent-%COMP%]{background-color:#fb6340!important}a.bg-warning[_ngcontent-%COMP%]:hover, a.bg-warning[_ngcontent-%COMP%]:focus, button.bg-warning[_ngcontent-%COMP%]:hover, button.bg-warning[_ngcontent-%COMP%]:focus{background-color:#fa3a0e!important}.bg-danger[_ngcontent-%COMP%]{background-color:#f5365c!important}a.bg-danger[_ngcontent-%COMP%]:hover, a.bg-danger[_ngcontent-%COMP%]:focus, button.bg-danger[_ngcontent-%COMP%]:hover, button.bg-danger[_ngcontent-%COMP%]:focus{background-color:#ec0c38!important}.bg-default[_ngcontent-%COMP%]{background-color:#172b4d!important}a.bg-default[_ngcontent-%COMP%]:hover, a.bg-default[_ngcontent-%COMP%]:focus, button.bg-default[_ngcontent-%COMP%]:hover, button.bg-default[_ngcontent-%COMP%]:focus{background-color:#0b1526!important}.rounded-circle[_ngcontent-%COMP%]{border-radius:50%!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}@media (min-width: 1200px){.justify-content-xl-between[_ngcontent-%COMP%]{justify-content:space-between!important}}.shadow[_ngcontent-%COMP%]{box-shadow:0 0 2rem #8898aa26!important}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mr-2[_ngcontent-%COMP%]{margin-right:.5rem!important;font-weight:500!important;font-size:1.5rem!important}.mt-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mb-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.pt-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pb-8[_ngcontent-%COMP%]{padding-bottom:8rem!important}.m-auto[_ngcontent-%COMP%]{margin:auto!important}@media (min-width: 768px){.pt-md-8[_ngcontent-%COMP%]{padding-top:8rem!important}}@media (min-width: 1200px){.mb-xl-0[_ngcontent-%COMP%]{margin-bottom:0!important}}.text-nowrap[_ngcontent-%COMP%]{white-space:nowrap!important;padding-right:5px}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-uppercase[_ngcontent-%COMP%]{text-transform:uppercase!important}.font-weight-bold[_ngcontent-%COMP%]{font-weight:600!important}.sub-text[_ngcontent-%COMP%]{font-family:inherit;font-weight:600;line-height:1.5;margin-bottom:.5rem;color:#32325d;font-size:1rem!important}.text-success[_ngcontent-%COMP%]{color:#2dce89!important}a.text-success[_ngcontent-%COMP%]:hover, a.text-success[_ngcontent-%COMP%]:focus{color:#24a46d!important}.bg-success[_ngcontent-%COMP%]{background-color:#24a46d}.text-warning[_ngcontent-%COMP%]{color:#fb6340!important}a.text-warning[_ngcontent-%COMP%]:hover, a.text-warning[_ngcontent-%COMP%]:focus{color:#fa3a0e!important}.text-danger[_ngcontent-%COMP%]{color:#f5365c!important}a.text-danger[_ngcontent-%COMP%]:hover, a.text-danger[_ngcontent-%COMP%]:focus{color:#ec0c38!important}.text-muted[_ngcontent-%COMP%]{color:#8898aa!important}@media print{*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-shadow:none!important;text-shadow:none!important}a[_ngcontent-%COMP%]:not(.btn){text-decoration:underline}p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{orphans:3;widows:3}h2[_ngcontent-%COMP%]{page-break-after:avoid}@page{size:a3}body[_ngcontent-%COMP%]{min-width:992px!important}}figcaption[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{display:block}main[_ngcontent-%COMP%]{overflow:hidden}.bg-yellow[_ngcontent-%COMP%]{background-color:#ffd600!important}a.bg-yellow[_ngcontent-%COMP%]:hover, a.bg-yellow[_ngcontent-%COMP%]:focus, button.bg-yellow[_ngcontent-%COMP%]:hover, button.bg-yellow[_ngcontent-%COMP%]:focus{background-color:#ccab00!important}.bg-gradient-primary[_ngcontent-%COMP%]{background:linear-gradient(87deg,#5e72e4 0,#825ee4 100%)!important}@-webkit-keyframes floating-lg{0%{transform:translateY(0)}50%{transform:translateY(15px)}to{transform:translateY(0)}}@keyframes floating-lg{0%{transform:translateY(0)}50%{transform:translateY(15px)}to{transform:translateY(0)}}@-webkit-keyframes floating{0%{transform:translateY(0)}50%{transform:translateY(10px)}to{transform:translateY(0)}}@keyframes floating{0%{transform:translateY(0)}50%{transform:translateY(10px)}to{transform:translateY(0)}}@-webkit-keyframes floating-sm{0%{transform:translateY(0)}50%{transform:translateY(5px)}to{transform:translateY(0)}}@keyframes floating-sm{0%{transform:translateY(0)}50%{transform:translateY(5px)}to{transform:translateY(0)}}[class*=shadow][_ngcontent-%COMP%]{transition:all .15s ease}.text-sm[_ngcontent-%COMP%]{font-size:.875rem!important}.text-white[_ngcontent-%COMP%]{color:#fff!important}a.text-white[_ngcontent-%COMP%]:hover, a.text-white[_ngcontent-%COMP%]:focus{color:#e6e6e6!important}[class*=btn-outline-][_ngcontent-%COMP%]{border-width:1px}.card-stats[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:1rem 1.5rem}.main-content[_ngcontent-%COMP%]{position:relative}@media (min-width: 768px){.main-content[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{padding-right:39px!important;padding-left:39px!important}}.footer[_ngcontent-%COMP%]{font-family:Changa,serif;padding-top:1rem;padding-right:0;padding-left:0;padding-bottom:0;background:rgba(16,10,19,.6);margin-bottom:10px}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem!important;font-weight:700!important;color:#c6d8ea}.header[_ngcontent-%COMP%]{position:relative}.icon[_ngcontent-%COMP%]{width:3rem;height:3rem}.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2.25rem}.icon-shape[_ngcontent-%COMP%]{display:inline-flex;padding:12px;text-align:center;border-radius:50%;align-items:center;justify-content:center}.icon-shape[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.25rem}@media (min-width: 768px){@-webkit-keyframes show-navbar-dropdown{0%{transition:visibility .25s,opacity .25s,transform .25s;transform:translateY(10px) perspective(200px) rotateX(-2deg);opacity:0}to{transform:translate(0);opacity:1}}@keyframes show-navbar-dropdown{0%{transition:visibility .25s,opacity .25s,transform .25s;transform:translateY(10px) perspective(200px) rotateX(-2deg);opacity:0}to{transform:translate(0);opacity:1}}@-webkit-keyframes hide-navbar-dropdown{0%{opacity:1}to{transform:translateY(10px);opacity:0}}@keyframes hide-navbar-dropdown{0%{opacity:1}to{transform:translateY(10px);opacity:0}}}@-webkit-keyframes show-navbar-collapse{0%{transform:scale(.95);transform-origin:100% 0;opacity:0}to{transform:scale(1);opacity:1}}@keyframes show-navbar-collapse{0%{transform:scale(.95);transform-origin:100% 0;opacity:0}to{transform:scale(1);opacity:1}}@-webkit-keyframes hide-navbar-collapse{0%{transform:scale(1);transform-origin:100% 0;opacity:1}to{transform:scale(.95);opacity:0}}@keyframes hide-navbar-collapse{0%{transform:scale(1);transform-origin:100% 0;opacity:1}to{transform:scale(.95);opacity:0}}p[_ngcontent-%COMP%]{font-size:1rem;font-weight:300;line-height:1.7}.box[_ngcontent-%COMP%]{width:40%;margin:0 auto;background:rgba(255,255,255,.2);padding:35px;border:2px solid #fff;border-radius:20px/50px;background-clip:padding-box;text-align:center}.telegram[_ngcontent-%COMP%]{color:#012232;font-weight:600;font-size:2.2em}.button[_ngcontent-%COMP%]{font-family:Changa,serif!important;font-size:2.2em;padding:10px;color:#8c0303!important;border:2px solid #d80618;background-color:#75b2ea!important;border-radius:20px/50px;font-weight:1100!important;text-decoration:none;cursor:pointer;transition:all .3s ease-out;width:100%}.button[_ngcontent-%COMP%]:hover{background:#06D85F}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.7);transition:opacity .5s;visibility:hidden;opacity:0}.overlay[_ngcontent-%COMP%]:target{visibility:visible;opacity:1;z-index:15000000}.popup[_ngcontent-%COMP%]{margin:0 auto;background:#0B0D0E;border-radius:5px;width:30%;position:relative;transition:all 5s ease-in-out;z-index:1500000111}.popup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;color:#333;font-family:Tahoma,Arial,sans-serif}.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;top:0px;left:20px;transition:all .2s;font-size:30px;font-weight:700;text-decoration:none;color:#fff!important}.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover{color:#06d85f}.popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{overflow:auto}@media screen and (max-width: 700px){.box[_ngcontent-%COMP%], .popup[_ngcontent-%COMP%]{width:100%}}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}body[_ngcontent-%COMP%]{direction:rtl;font:14px/20px Changa,serif;color:#fff}i[_ngcontent-%COMP%]{font-family:"Font Awesome 5 Free";font-size:medium;position:relative}.container[_ngcontent-%COMP%]{margin:0 auto;border-radius:5px}.people-list[_ngcontent-%COMP%]{width:260px;float:right}@media screen and (min-width: 400px){.people-list[_ngcontent-%COMP%]{width:initial;float:right}.people-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:20px;list-style-type:none;display:inline-grid;margin:5px}}.people-list[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{color:#fff}input[_ngcontent-%COMP%]::-moz-placeholder{color:#3a3b3c}input[_ngcontent-%COMP%]::placeholder{color:#3a3b3c}.people-list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Changa,serif;border-radius:3px;border:none;padding:5px;color:#3a3b3c;background:#bdbfd6;width:100%;font-size:13px;font-weight:700}.name[_ngcontent-%COMP%]{color:#fff}.people-list[_ngcontent-%COMP%]   .fa-search[_ngcontent-%COMP%]{position:relative;right:-25px}.people-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:10px 0 20px 20px}li[_ngcontent-%COMP%]{list-style-type:none}.people-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:20px;list-style-type:none}.people-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{float:right}.people-list[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{float:right;margin-top:8px}.people-list[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{padding-right:8px}.people-list[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{color:#86bb71;font-weight:300}.people-list[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{color:#94c2ed;display:block;width:160px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.chat[_ngcontent-%COMP%]{font-family:Changa,serif;float:right;background:#111E25;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#434651;z-index:200000}.message-send[_ngcontent-%COMP%]{font-family:Changa,serif!important;direction:rtl;text-align:right;font-weight:400!important;font-size:16px!important}.chat[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]{padding:20px;border-bottom:2px solid #bb1515}.chat[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{float:right}.chat[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .chat-about[_ngcontent-%COMP%]{float:right;padding-right:10px;margin-top:6px}.chat[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .chat-with[_ngcontent-%COMP%]{font-weight:700;font-size:16px;color:#fff}.chat[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .chat-num-messages[_ngcontent-%COMP%]{color:#92959e}.chat[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .fa-star[_ngcontent-%COMP%]{float:right;color:#d8dadf;font-size:20px;margin-top:12px}.messages-body[_ngcontent-%COMP%]{overflow-y:scroll}@media screen and (min-width: 500px){.messages-body[_ngcontent-%COMP%]{overflow-y:scroll}.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#647692}.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#364762}.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#aaa}}.chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]{padding-right:5px;border-bottom:2px solid #bb1515;overflow-y:scroll;height:400px}.chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]{margin-bottom:15px}.chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   .message-data-time[_ngcontent-%COMP%]{color:#a8aab1;padding-left:6px}.chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{color:#fff;padding:18px 20px;line-height:26px;font-size:16px;border-radius:7px;margin-bottom:30px;width:90%;position:relative}.chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:after{bottom:100%;right:7%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-bottom-color:#006b41;border-width:10px;margin-right:-10px}.chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   .my-message[_ngcontent-%COMP%]{background:#006b41}.chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   .other-message[_ngcontent-%COMP%]{background:#4A777A}.chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]   .other-message[_ngcontent-%COMP%]:after{border-bottom-color:#4a777a;right:93%}.chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]{padding:10px}.chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:none;padding:10px 20px;font:14px/22px Lato,Arial,sans-serif;margin-bottom:10px;border-radius:5px;resize:none;text-align:right}.chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .fa-file-o[_ngcontent-%COMP%], .chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .fa-file-image-o[_ngcontent-%COMP%]{font-size:16px;color:gray;cursor:pointer}.chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;color:#94c2ed;font-size:16px;text-transform:uppercase;border:none;cursor:pointer;font-weight:700;background:#F2F5F8}.chat[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#75b1e8}.online[_ngcontent-%COMP%], .offline[_ngcontent-%COMP%], .me[_ngcontent-%COMP%]{margin-right:3px;font-size:10px}.online[_ngcontent-%COMP%]{color:#86bb71}.offline[_ngcontent-%COMP%]{color:#e38968}.me[_ngcontent-%COMP%]{color:#94c2ed}.align-left[_ngcontent-%COMP%]{text-align:left}.align-right[_ngcontent-%COMP%]{text-align:right}.float-right[_ngcontent-%COMP%]{float:right}.float-left[_ngcontent-%COMP%]{float:left}.m[_ngcontent-%COMP%]{direction:rtl}.clearfix[_ngcontent-%COMP%]:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0;padding:0;margin:0}.m-container[_ngcontent-%COMP%]{padding:20px;background-color:#17202a}.m-p-0[_ngcontent-%COMP%]{margin-bottom:0!important;padding-bottom:0!important}input[_ngcontent-%COMP%]{font-family:Changa,serif;border-radius:3px;border:none;padding:5px;color:#3a3b3c;background:#bdbfd6;width:95%;font-size:13px;font-weight:700}a[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]:hover   .card[_ngcontent-%COMP%]{background-color:#2a487e}.show-all[_ngcontent-%COMP%]{font-size:14px!important;font-weight:700;color:#bdbfd6}.show-all[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#4579b1}.docContent[_ngcontent-%COMP%]{font-size:18px;margin:5px;color:#bbcddd;alignment:right;direction:rtl;white-space:pre-line}.chat[_ngcontent-%COMP%]   .chat-history[_ngcontent-%COMP%]{padding-right:5px!important;overflow-y:scroll!important;height:550px!important;border-bottom:none!important}']}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.Bz.forChild(x)]}),o})()}}]);