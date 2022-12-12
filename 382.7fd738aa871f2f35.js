"use strict";(self.webpackChunkmasdar=self.webpackChunkmasdar||[]).push([[382],{6847:(H,P,p)=>{p.d(P,{R:()=>g});var i=p(4650),l=p(529),t=p(4004),Z=p(7579),I=p(3466),C=p(4110);class f{constructor(r,d){this.httpClient=r,this.addHeader=d}uploadFile(r){return this.addHeader.post(`${I.x.uploadFile}`,r)}uploadV2(r){return this.addHeader.postUpload(`${I.x.uploadFile}`,r)}}f.\u0275fac=function(r){return new(r||f)(i.LFG(l.eN),i.LFG(C.G))},f.\u0275prov=i.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"});class o{constructor(r){this.uploadFileManager=r}upload(r){const d=new Z.x,m=new FormData;return m.append("image",r),this.uploadFileManager.uploadFile(m).subscribe(b=>{d.next(b.url)}),d.asObservable()}uploadV2(r){return this.uploadFileManager.uploadV2(r)}}o.\u0275fac=function(r){return new(r||o)(i.LFG(f))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"});var U=p(6895);function M(_,r){if(1&_&&(i.TgZ(0,"div",14),i._UZ(1,"span",15)(2,"div",16),i.qZA()),2&_){const d=i.oxw();i.Q6J("hidden",d.progressBarHide),i.xp6(1),i.Q6J("innerHTML",d.barWidth,i.oJD),i.xp6(1),i.Udp("width",d.barWidth)}}class g{constructor(r){this.imageUploadService=r,this.statusEnum={init:"\u0627\u062e\u062a\u0631 \u0635\u0648\u0631\u0629",uploading:"\u064a\u062a\u0645 \u0627\u0644\u0631\u0641\u0639\u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0625\u0646\u062a\u0638\u0627\u0631",error:"\u062d\u062f\u062b \u062d\u0637\u0623\u060c \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",done:"\u062a\u0645 \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062c\u0627\u062d"},this.path=new i.vpe,this.progressBarHide=!0,this.selectImageHide=!1,this.barWidth="0%",this.url="https://about.canva.com/wp-content/themes/canvaabout/img/proLandingPage/banner-wave-3.svg"}ngOnInit(){this.url=this.currentImage?this.currentImage:"assets/img/user.jpg",this.styleDetect(),this.status=this.statusEnum.init}styleDetect(){let r=localStorage.getItem("m-lang");"en"!=r&&r?"ar"==r&&(this.statusEnum={init:"\u0627\u062e\u062a\u0631 \u0635\u0648\u0631\u0629",uploading:"\u064a\u062a\u0645 \u0627\u0644\u0631\u0641\u0639\u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0625\u0646\u062a\u0638\u0627\u0631",error:"\u062d\u062f\u062b \u062d\u0637\u0623\u060c \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",done:"\u062a\u0645 \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062c\u0627\u062d"}):this.statusEnum={init:"Select image",uploading:"Uploading.. please wait",error:"Wrong happened, please try again",done:"Uploaded successfully"}}checkIfUploadInProgress(){return this.status!=this.statusEnum.uploading||(this.status="\u064a\u062a\u0645 \u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0628\u0627\u0644\u0641\u0639\u0644 \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0625\u0646\u062a\u0638\u0627\u0631",!1)}upload(r){if(this.status!=this.statusEnum.uploading){this.status=this.statusEnum.uploading;const d=r.files[0],m=new FormData;m.append("image",d),this.imageUploadService.uploadV2(m).pipe((0,t.U)(b=>{b.type==l.dt.UploadProgress?(this.selectImageHide=!0,this.progressBarHide=!1,this.barWidth=Math.round(100/(b.total||0)*b.loaded)+"%"):b.type==l.dt.Response&&(this.path.emit(b.body.url),this.selectImageHide=!1,this.status=this.statusEnum.done)})).subscribe(()=>{},()=>{this.status=this.statusEnum.error,this.selectImageHide=!1})}}onSelectFile(r){if(r.target.files&&r.target.files[0]){let d=new FileReader;d.readAsDataURL(r.target.files[0]),d.onload=m=>{this.url=m.target.result.toString()}}}}g.\u0275fac=function(r){return new(r||g)(i.Y36(o))},g.\u0275cmp=i.Xpm({type:g,selectors:[["upload-file"]],inputs:{currentImage:"currentImage"},outputs:{path:"path"},decls:16,vars:4,consts:[[1,"setting","image_picker"],[1,"settings_wrap"],[1,"drop_target",3,"hidden"],[1,"image_preview",3,"src"],["accept","image/*","type","file",3,"change"],["image",""],[1,"settings_actions","vertical"],["data-action","choose_from_uploaded"],[1,"fa","fa-picture-o"],[1,"progress-container"],["class","progress",3,"hidden",4,"ngIf"],[1,"image_details"],[1,"input_line","image_title"],["type","text","placeholder","Title"],[1,"progress",3,"hidden"],[3,"innerHTML"],[1,"bar"]],template:function(r,d){if(1&r){const m=i.EpF();i.TgZ(0,"div",0),i._UZ(1,"br"),i.TgZ(2,"div",1)(3,"label",2),i._UZ(4,"img",3),i.TgZ(5,"input",4,5),i.NdJ("change",function(T){i.CHM(m);const k=i.MAs(6);return d.onSelectFile(T),i.KtG(d.upload(k))}),i.qZA()(),i.TgZ(7,"div",6)(8,"a",7),i._UZ(9,"i",8),i._uU(10),i.qZA(),i.TgZ(11,"div",9),i.YNc(12,M,3,4,"div",10),i.qZA()(),i.TgZ(13,"div",11)(14,"label",12),i._UZ(15,"input",13),i.qZA()()()()}2&r&&(i.xp6(3),i.Q6J("hidden",d.selectImageHide),i.xp6(1),i.Q6J("src",d.url,i.LSH),i.xp6(6),i.hij(" ",d.status,""),i.xp6(2),i.Q6J("ngIf","0%"!=d.barWidth))},dependencies:[U.O5],styles:['.progress-container[_ngcontent-%COMP%]{padding-top:2px;padding-right:5px}.progress[_ngcontent-%COMP%]{width:100%;height:25px;text-align:center;position:relative;border:1px solid #b3b6c4}.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0;font-size:18px;font-family:Open Sans,serif;text-align:center;position:absolute;color:#c5c5c5}.bar[_ngcontent-%COMP%]{background:#145d9d;height:23px;margin:0;transition:all .5s ease-out}@font-face{font-family:Open Sans;font-style:normal;font-weight:400;src:local("Open Sans Regular"),local("OpenSans-Regular"),url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf) format("truetype")}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}body[_ngcontent-%COMP%]{background:#eee;font-family:Open Sans,Helvetica,sans-serif}.setting[_ngcontent-%COMP%]{background:transparent;margin:0 auto 3px;padding:12px}.setting[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#999;font-size:14px;font-weight:400;margin:0 0 6px;line-height:24px}.setting[_ngcontent-%COMP%]   a[data-action][_ngcontent-%COMP%]{color:#f0f0f0;font-size:14px;line-height:24px;transition:color .2s}.setting[_ngcontent-%COMP%]   a[data-action][_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:1.25em;text-align:center}.setting[_ngcontent-%COMP%]   a[data-action][_ngcontent-%COMP%]:hover{color:#f80}.setting[_ngcontent-%COMP%]   a[data-action].disabled[_ngcontent-%COMP%]{opacity:.35;cursor:default}.setting[_ngcontent-%COMP%]   a[data-action].disabled[_ngcontent-%COMP%]:hover{color:#555}.image_picker[_ngcontent-%COMP%]   .settings_wrap[_ngcontent-%COMP%]{overflow:hidden;position:relative}.image_picker[_ngcontent-%COMP%]   .settings_wrap[_ngcontent-%COMP%]   .drop_target[_ngcontent-%COMP%], .image_picker[_ngcontent-%COMP%]   .settings_wrap[_ngcontent-%COMP%]   .settings_actions[_ngcontent-%COMP%]{float:right}.image_picker[_ngcontent-%COMP%]   .settings_wrap[_ngcontent-%COMP%]   .drop_target[_ngcontent-%COMP%]{margin-right:18px}.image_picker[_ngcontent-%COMP%]   .settings_wrap[_ngcontent-%COMP%]   .settings_actions[_ngcontent-%COMP%]{margin-top:12px}.settings_actions.vertical[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block}.drop_target[_ngcontent-%COMP%]{position:relative;cursor:pointer;background:#3a4e98;border-top-color:#cc6d00;border-radius:4px;width:72px;height:72px;padding:3px 2px 2px 3px;transition:all .2s}.drop_target[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{visibility:hidden}.drop_target[_ngcontent-%COMP%]:before{content:"\\f1c5";font-family:"Font Awesome 5 Free";position:absolute;display:block;width:60px;line-height:60px;text-align:center;font-size:32px;color:#0000004d;transition:color .2s}.drop_target[_ngcontent-%COMP%]:hover, .drop_target.dropping[_ngcontent-%COMP%]{background:#f80;border-top-color:#cc6d00}.drop_target[_ngcontent-%COMP%]:hover:before, .drop_target.dropping[_ngcontent-%COMP%]:before{color:#0009}.drop_target[_ngcontent-%COMP%]   .image_preview[_ngcontent-%COMP%]{width:100%;height:100%;background:no-repeat center;background-size:contain;position:relative;z-index:2}.image_details[_ngcontent-%COMP%]{width:192px;padding:4px;background:hsl(0deg,0%,90%);border-radius:4px;position:absolute;top:0;left:84px;z-index:5;opacity:0;pointer-events:none;transition:opacity .4s}.dropped[_ngcontent-%COMP%] ~ .image_details[_ngcontent-%COMP%]{opacity:1;pointer-events:all}.image_details[_ngcontent-%COMP%]:before{content:"";display:block;width:0;height:0;border:6px solid transparent;border-right-color:#e6e6e6;position:absolute;left:-12px;top:10px}.image_details[_ngcontent-%COMP%]   .input_line[_ngcontent-%COMP%]{display:block;overflow:hidden;margin-bottom:4px}.image_details[_ngcontent-%COMP%]   .input_line[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}.image_details[_ngcontent-%COMP%]   .input_line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .image_details[_ngcontent-%COMP%]   .input_line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{float:left;line-height:24px}.image_details[_ngcontent-%COMP%]   .input_line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#666;width:20%}.image_details[_ngcontent-%COMP%]   .input_line[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:100%;color:#444;-webkit-appearance:none;appearance:none;border:1px solid hsl(0deg,0%,90%);border-radius:3px;background:#fff;height:24px;line-height:18px;padding:3px 5px;font-size:14px;transition:border .2s}.image_details[_ngcontent-%COMP%]   .input_line[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:hover, .image_details[_ngcontent-%COMP%]   .input_line[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{outline:0;border:1px solid #f80}.image_details[_ngcontent-%COMP%]   .input_line[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-input-placeholder{font-size:14px;color:#999}.image_details[_ngcontent-%COMP%]   a.confirm[_ngcontent-%COMP%]{position:absolute;right:-12px;top:50%;margin-top:-12px;display:block;width:21px;height:21px;border-radius:100%;background:#eee;line-height:23px;text-align:center;font-size:16px}body[_ngcontent-%COMP%]{overflow:hidden}']})},2382:(H,P,p)=>{p.r(P),p.d(P,{DashboardRoutingModule:()=>x});var i=p(3060),l=p(7340),t=p(4650),Z=p(6895);function I(a,e){1&a&&(t.TgZ(0,"ul")(1,"li")(2,"a",16)(3,"span"),t._uU(4,"Create title"),t.qZA()()(),t.TgZ(5,"li")(6,"a",17)(7,"span",18),t._uU(8,"Create documentation"),t.qZA()()()())}class C{constructor(){this.clicked=!1}ngOnInit(){}}C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-menu"]],decls:25,vars:1,consts:[[1,"aside","is-placed-left","is-expanded"],[1,"image"],["href","/"],["src","/assets/images/logo/Masdar-logo.png"],[1,"menu"],[1,"menu-list"],[1,"has-icon",3,"click"],[1,"icon"],[1,"fa","fa-solar-panel"],[1,"menu-item-label"],[4,"ngIf"],["routerLink","/dashboard/add-home-slider-image"],[1,"icon","has-update-mark"],[1,"fa","fa-ticket-alt"],["routerLink","/dashboard/home-masdar-info"],[1,"mdi","mdi-square-edit-outline"],["routerLink","/dashboard/create-doc-title"],["routerLink","/dashboard/create-documentation"],[1,""]],template:function(e,n){1&e&&(t.TgZ(0,"aside",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA()(),t.TgZ(4,"div",4)(5,"ul",5)(6,"li")(7,"a",6),t.NdJ("click",function(){return n.clicked=!n.clicked}),t.TgZ(8,"span",7),t._UZ(9,"i",8),t.qZA(),t.TgZ(10,"span",9),t._uU(11,"Documentation"),t.qZA()()(),t.YNc(12,I,9,0,"ul",10),t.TgZ(13,"li")(14,"a",11)(15,"span",12),t._UZ(16,"i",13),t.qZA(),t.TgZ(17,"span",9),t._uU(18,"Home slider images"),t.qZA()()(),t.TgZ(19,"li")(20,"a",14)(21,"span",12),t._UZ(22,"i",15),t.qZA(),t.TgZ(23,"span",9),t._uU(24,"Home masdar info"),t.qZA()()()()()()),2&e&&(t.xp6(12),t.Q6J("ngIf",n.clicked))},dependencies:[Z.O5,i.rH],styles:['.is-expanded[_ngcontent-%COMP%]{width:12rem}aside.is-placed-left[_ngcontent-%COMP%]{display:block}.aside[_ngcontent-%COMP%]{display:none;position:fixed;top:0;left:0;z-index:40;height:100vh;padding:0;box-shadow:none;background:#051d38;background-image:linear-gradient(90deg,#051d38,#1e344c)}.is-active[_ngcontent-%COMP%]{background-color:#04172c;color:#fff}li[_ngcontent-%COMP%]{display:list-item;text-align:-webkit-match-parent}.menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:0;color:#ffffffb3;display:block;padding:1rem 0}a.is-active[_ngcontent-%COMP%]{background-color:#04172c;color:#fff}a[_ngcontent-%COMP%]{color:#203752;cursor:pointer;text-decoration:none}.icon[_ngcontent-%COMP%]{width:3rem}.has-update-mark[_ngcontent-%COMP%]{position:relative}.mdi-table[_ngcontent-%COMP%]:before{content:"\\f4eb"}.menu-item-label[_ngcontent-%COMP%]{display:inline-block}a[_ngcontent-%COMP%]:hover{background-color:#04172c}']});class f{constructor(){}ngOnInit(){}}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-dashboard"]],decls:4,vars:1,consts:[[1,"container-router"],["myOutlet","outlet"]],template:function(e,n){if(1&e&&(t._UZ(0,"app-menu"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet",null,1),t.qZA()),2&e){const s=t.MAs(3);t.xp6(1),t.Q6J("@router",s.activatedRouteData.index)}},dependencies:[i.lC,C],data:{animation:[(0,l.X$)("router",[(0,l.eR)("0 => 1, 1 => 2, 2 => 3, 3 => 4, 4 => 5, 5 => 6, 6 => 7,0 => 2, 0 => 3, 0 => 4, 0 => 5, 0 => 6, 0 => 7,1 => 2, 1 => 3, 1 => 4, 1 => 5, 1 => 6, 1 => 7,2 => 3, 2 => 4, 2 => 5, 2 => 6, 2 => 7,3 => 4, 3 => 5, 3 => 6, 3 => 7, 4 => 5, 4 => 6, 4 => 7, 5 => 6, 5 => 7, 6 => 7",[(0,l.ru)([(0,l.IO)(":enter",[(0,l.oB)({transform:"translateX(100%)"}),(0,l.jt)(500,(0,l.oB)({transform:"translateX(0)"}))]),(0,l.IO)(":leave",[(0,l.oB)({transform:"translateX(0)"}),(0,l.jt)(500,(0,l.oB)({transform:"translateX(-100%)"}))])])]),(0,l.eR)("7 => 6, 7 => 5, 7 => 4, 7 => 3, 7 => 2, 7 => 1, 7 => 0,6 => 5, 6 => 4, 6 => 3, 6 => 2, 6 => 1, 6 => 0, 5 => 4, 5 => 3, 5 => 2, 5 => 1, 5 => 0, 4 => 3, 4 => 2, 4 => 1, 4 => 0, 3 => 2, 3 => 1, 3 => 0, 2 => 1, 2 => 0, 1 => 0",[(0,l.ru)([(0,l.IO)(":enter",[(0,l.oB)({transform:"translateX(-100%)"}),(0,l.jt)(500,(0,l.oB)({transform:"translateX(0)"}))]),(0,l.IO)(":leave",[(0,l.oB)({transform:"translateX(0)"}),(0,l.jt)(500,(0,l.oB)({transform:"translateX(100%)"}))])])])])]}});var o=p(4006),U=p(7579),M=p(529),g=p(3466),_=p(4110);class r{constructor(e,n){this.httpClient=e,this.addHeader=n,this.httpOptions={headers:new M.WM({"Content-Type":"application/json"})}}createTitle(e){return this.httpClient.post(g.x.titleCreate,JSON.stringify(e),this.httpOptions)}createDoc(e){return this.httpClient.post(g.x.doc,JSON.stringify(e),this.httpOptions)}getDocTitle(){return this.httpClient.get(g.x.getDocTitle)}deleteDocTitle(e){return this.httpClient.delete(`${g.x.deleteDocTitle}/${e}`)}updateDocTitle(e){return this.httpClient.put(g.x.updateDocTitle,JSON.stringify(e),this.httpOptions)}deleteDoc(e){return this.httpClient.delete(`${g.x.deleteDoc}/${e}`)}updateDoc(e){return this.httpClient.put(g.x.updateDoc,JSON.stringify(e),this.httpOptions)}getDoc(e){return this.httpClient.get(`${g.x.doc}/${e}`)}}r.\u0275fac=function(e){return new(e||r)(t.LFG(M.eN),t.LFG(_.G))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"});class d{constructor(e){this.docsRepository=e}createTitle(e){return this.docsRepository.createTitle(e)}createDoc(e){return this.docsRepository.createDoc(e)}getDocTitle(){return this.docsRepository.getDocTitle()}deleteDocTitle(e){return this.docsRepository.deleteDocTitle(e)}updateDocTitle(e){return this.docsRepository.updateDocTitle(e)}deleteDoc(e){return this.docsRepository.deleteDoc(e)}updateDoc(e){return this.docsRepository.updateDoc(e)}getDoc(e){return this.docsRepository.getDoc(e)}}d.\u0275fac=function(e){return new(e||d)(t.LFG(r))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"});class m{constructor(e){this.dashboardDocsManager=e}createTitle(e){return this.dashboardDocsManager.createTitle(e)}createDoc(e){return this.dashboardDocsManager.createDoc(e)}getDocTitle(){const e=new U.x;return this.dashboardDocsManager.getDocTitle().subscribe(n=>{e.next(n.data)}),e.asObservable()}deleteDocTitle(e){return this.dashboardDocsManager.deleteDocTitle(e)}updateDocTitle(e){return this.dashboardDocsManager.updateDocTitle(e)}deleteDoc(e){return this.dashboardDocsManager.deleteDoc(e)}updateDoc(e){return this.dashboardDocsManager.updateDoc(e)}getDoc(e){const n=new U.x;return this.dashboardDocsManager.getDoc(e).subscribe(s=>{n.next(s.data)}),n.asObservable()}}function b(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"tbody")(1,"tr",25)(2,"td",26),t._uU(3),t.qZA(),t.TgZ(4,"td",27),t._uU(5),t.qZA(),t.TgZ(6,"td",27),t._uU(7),t.qZA(),t.TgZ(8,"td",28)(9,"div",29)(10,"button",30),t.NdJ("click",function(){const c=t.CHM(n).$implicit,h=t.oxw();return t.KtG(h.getFields(c.id,c.title,c.displayOrder))}),t.TgZ(11,"span",4),t._UZ(12,"i",31),t.qZA()(),t.TgZ(13,"button",32),t.NdJ("click",function(){const c=t.CHM(n).$implicit,h=t.oxw();return t.KtG(h.deleteTitle(c.id))}),t.TgZ(14,"span",4),t._UZ(15,"i",33),t.qZA()()()()()()}if(2&a){const n=e.$implicit;t.xp6(3),t.Oqu(n.id),t.xp6(2),t.Oqu(n.title),t.xp6(2),t.Oqu(n.displayOrder)}}m.\u0275fac=function(e){return new(e||m)(t.LFG(d))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});class T{constructor(e){this.docsService=e,this.mainSection=new o.nJ({id:new o.p4(""),title:new o.p4(""),displayOrder:new o.p4("")})}ngOnInit(){this.getTitleList()}getTitleList(){this.titleList=this.docsService.getDocTitle()}createTitle(){this.docsService.createTitle(this.mainSection.getRawValue()).subscribe(()=>{this.mainSection.reset(),this.getTitleList()})}deleteTitle(e){this.docsService.deleteDocTitle(e).subscribe(()=>{this.getTitleList()})}updateTitle(){this.docsService.updateDocTitle(this.mainSection.getRawValue()).subscribe(()=>{this.mainSection.reset(),this.getTitleList()})}getFields(e,n,s){this.mainSection.patchValue({id:e}),this.title=n,this.displayOrder=s}}function k(a,e){if(1&a&&(t.TgZ(0,"option",37),t._uU(1),t.qZA()),2&a){const n=e.$implicit;t.s9C("value",n.id),t.xp6(1),t.hij("",n.title," ")}}function w(a,e){if(1&a&&(t.TgZ(0,"option",38),t._uU(1),t.qZA()),2&a){const n=e.$implicit;t.Q6J("value",n.id),t.xp6(1),t.hij("",n.title," ")}}function S(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"tbody")(1,"tr",39)(2,"td",40),t._uU(3),t.qZA(),t.TgZ(4,"td",41),t._uU(5),t.qZA(),t.TgZ(6,"td",41),t._uU(7),t.qZA(),t.TgZ(8,"td",42)(9,"div",43)(10,"button",44),t.NdJ("click",function(){const c=t.CHM(n).$implicit,h=t.oxw();return t.KtG(h.getFields(c.id,c.titleID,c.subTitle,c.tag,c.documentation,c.displayOrder))}),t.TgZ(11,"span",4),t._UZ(12,"i",45),t.qZA()(),t.TgZ(13,"button",46),t.NdJ("click",function(){const c=t.CHM(n).$implicit,h=t.oxw();return t.KtG(h.deleteDoc(c.id))}),t.TgZ(14,"span",4),t._UZ(15,"i",47),t.qZA()()()()()()}if(2&a){const n=e.$implicit;t.xp6(3),t.Oqu(n.id),t.xp6(2),t.Oqu(n.subTitle),t.xp6(2),t.Oqu(n.displayOrder)}}T.\u0275fac=function(e){return new(e||T)(t.Y36(m))},T.\u0275cmp=t.Xpm({type:T,selectors:[["app-create-doc-title"]],decls:58,vars:6,consts:[[1,"p-t-80"],[1,"card"],[1,"card-header"],[1,"card-header-title"],[1,"icon"],[1,"mdi","mdi-nature-people","default"],[1,"card-content"],[3,"formGroup"],[1,"field"],[1,"label"],[1,"control","has-icons-left"],["type","text","required","required","formControlName","title","placeholder","Section name",1,"input","has-text-centered",3,"ngModel","ngModelChange"],[1,"icon","is-small","is-left"],[1,"fas","fa-id-card"],["type","text","formControlName","displayOrder","placeholder","display order",1,"input","has-text-centered",3,"ngModel","ngModelChange"],[1,"columns"],[1,"column"],[1,"button","is-medium","is-fullwidth","is-primary",3,"click"],[1,"card","has-table"],[1,"b-table"],[1,"table-wrapper","has-mobile-cards"],[1,"table","is-striped","is-hoverable"],[1,""],[1,"th-wrap"],[4,"ngFor","ngForOf"],["draggable","false"],["data-label","ID"],["data-label","Title"],[1,"is-actions-cell"],[1,"buttons","is-right"],["type","button",1,"button","is-small","is-primary",3,"click"],[1,"mdi","mdi-eye","default"],["type","button",1,"button","is-small","is-danger",3,"click"],[1,"mdi","mdi-trash-can","default"]],template:function(e,n){1&e&&(t.TgZ(0,"body"),t._UZ(1,"div",0),t.TgZ(2,"section")(3,"div",1)(4,"header",2)(5,"p",3)(6,"span",4),t._UZ(7,"i",5),t.qZA(),t._uU(8," Main sections "),t.qZA()(),t.TgZ(9,"div",6)(10,"form",7)(11,"div",8)(12,"label",9),t._uU(13,"Section name"),t.qZA(),t.TgZ(14,"p",10)(15,"label")(16,"input",11),t.NdJ("ngModelChange",function(u){return n.title=u}),t.qZA()(),t.TgZ(17,"span",12),t._UZ(18,"i",13),t.qZA()()(),t.TgZ(19,"div",8)(20,"label",9),t._uU(21,"Display order"),t.qZA(),t.TgZ(22,"p",10)(23,"label")(24,"input",14),t.NdJ("ngModelChange",function(u){return n.displayOrder=u}),t.qZA()()()(),t.TgZ(25,"div",15)(26,"div",16)(27,"button",17),t.NdJ("click",function(){return n.createTitle()}),t._uU(28," Save "),t.qZA()(),t.TgZ(29,"div",16)(30,"button",17),t.NdJ("click",function(){return n.updateTitle()}),t._uU(31," Update "),t.qZA()()()()()()(),t.TgZ(32,"section")(33,"div",18)(34,"header",2)(35,"p",3)(36,"span",4),t._UZ(37,"i",5),t.qZA(),t._uU(38,"Documentation title list "),t.qZA()(),t.TgZ(39,"div",6)(40,"div",19)(41,"div",20)(42,"table",21)(43,"thead")(44,"tr")(45,"th",22)(46,"div",23),t._uU(47,"ID"),t.qZA()(),t.TgZ(48,"th",22)(49,"div",23),t._uU(50,"Title"),t.qZA()(),t.TgZ(51,"th",22)(52,"div",23),t._uU(53,"Display order"),t.qZA()(),t.TgZ(54,"th",22),t._UZ(55,"div",23),t.qZA()()(),t.YNc(56,b,16,3,"tbody",24),t.ALo(57,"async"),t.qZA()()()()()()()),2&e&&(t.xp6(10),t.Q6J("formGroup",n.mainSection),t.xp6(6),t.Q6J("ngModel",n.title),t.xp6(8),t.Q6J("ngModel",n.displayOrder),t.xp6(32),t.Q6J("ngForOf",t.lcZ(57,4,n.titleList)))},dependencies:[Z.sg,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u,Z.Ov],styles:["body[_ngcontent-%COMP%]{background-color:#f0f3f5;height:100%}.p-t-80[_ngcontent-%COMP%]{padding-top:100px!important}.button.is-primary[_ngcontent-%COMP%]{background-color:#203752;border-color:transparent;color:#fff;padding:5px}.card[_ngcontent-%COMP%]{margin-bottom:1.5rem;margin-left:15rem;margin-right:15rem}"]});class D{constructor(e){this.docsService=e,this.rtl=!1,this.documentationForm=new o.nJ({id:new o.p4(""),titleID:new o.p4(""),subTitle:new o.p4(""),documentation:new o.p4(""),tag:new o.p4(""),displayOrder:new o.p4("")})}ngOnInit(){this.getTitleList()}getTitleList(){this.titleList=this.docsService.getDocTitle()}createDoc(){this.docsService.createDoc(this.documentationForm.getRawValue()).subscribe(()=>{this.documentationForm.reset()})}deleteDoc(e){this.docsService.deleteDoc(e).subscribe(()=>{this.docAfter(this.selectID)})}updateDoc(){this.docsService.updateDoc(this.documentationForm.getRawValue()).subscribe(()=>{this.documentationForm.reset(),this.docAfter(this.selectID)})}doc(e){this.selectID=e.target.value,this.documentationResponse=this.docsService.getDoc(this.selectID)}docAfter(e){this.documentationResponse=this.docsService.getDoc(e)}getFields(e,n,s,u,c,h){this.documentationForm.patchValue({id:e}),this.titleID=this.documentationForm.get("titleID").setValue(n),this.subTitle=this.documentationForm.get("subTitle").setValue(s),this.tag=this.documentationForm.get("tag").setValue(u),this.documentation=this.documentationForm.get("documentation").setValue(c),this.displayOrder=this.documentationForm.get("displayOrder").setValue(h)}}D.\u0275fac=function(e){return new(e||D)(t.Y36(m))},D.\u0275cmp=t.Xpm({type:D,selectors:[["app-create-documentation"]],decls:106,vars:13,consts:[[1,"p-t-80"],[1,"card"],[1,"card-header"],[1,"card-header-title"],[1,"icon"],[1,"mdi","mdi-nature-people","default"],[1,"card-content"],[3,"formGroup"],[1,"field"],[1,"label"],[1,"control","has-icons-left"],[1,"select","is-fullwidth"],["required","required","formControlName","titleID"],["selected","","value","","disabled",""],["selected","",3,"value",4,"ngFor","ngForOf"],[1,"icon","is-small","is-left"],[1,"fas","fa-project-diagram"],["type","text","required","required","formControlName","subTitle","placeholder","Sub section name",1,"input","has-text-centered"],[1,"fas","fa-id-card"],["type","text","required","required","formControlName","tag","placeholder","Tags",1,"input","has-text-centered"],[1,"control"],[1,"radio"],["type","radio","name","type",3,"click"],["required","required","formControlName","documentation","rows","8"],["type","text","formControlName","displayOrder","placeholder","display order",1,"input","has-text-centered"],[1,"columns"],[1,"column"],[1,"button","is-medium","is-fullwidth","is-primary",3,"click"],[1,"card","has-table"],["required","required",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"b-table"],[1,"table-wrapper","has-mobile-cards"],[1,"table","is-striped","is-hoverable"],[1,""],[1,"th-wrap"],[4,"ngFor","ngForOf"],["selected","",3,"value"],[3,"value"],["draggable","false"],["data-label","ID"],["data-label","Title"],[1,"is-actions-cell"],[1,"buttons","is-right"],["type","button",1,"button","is-small","is-primary",3,"click"],[1,"mdi","mdi-eye","default"],["type","button",1,"button","is-small","is-danger",3,"click"],[1,"mdi","mdi-trash-can","default"]],template:function(e,n){1&e&&(t.TgZ(0,"body"),t._UZ(1,"div",0),t.TgZ(2,"section")(3,"div",1)(4,"header",2)(5,"p",3)(6,"span",4),t._UZ(7,"i",5),t.qZA(),t._uU(8," Documentation "),t.qZA()(),t.TgZ(9,"div",6)(10,"form",7)(11,"div",8)(12,"label",9),t._uU(13,"Section name"),t.qZA(),t.TgZ(14,"div",10)(15,"div",11)(16,"label")(17,"select",12)(18,"option",13),t._uU(19," Select section name "),t.qZA(),t.YNc(20,k,2,2,"option",14),t.ALo(21,"async"),t.qZA()()(),t.TgZ(22,"div",15),t._UZ(23,"i",16),t.qZA()()(),t.TgZ(24,"div",8)(25,"label",9),t._uU(26,"Sub section name"),t.qZA(),t.TgZ(27,"p",10)(28,"label"),t._UZ(29,"input",17),t.qZA(),t.TgZ(30,"span",15),t._UZ(31,"i",18),t.qZA()()(),t.TgZ(32,"div",8)(33,"label",9),t._uU(34,"Tags"),t.qZA(),t.TgZ(35,"p",10)(36,"label"),t._UZ(37,"input",19),t.qZA(),t.TgZ(38,"span",15),t._UZ(39,"i",18),t.qZA()()(),t.TgZ(40,"div",8)(41,"label",9),t._uU(42,"Text"),t.qZA(),t.TgZ(43,"div",20)(44,"label",21)(45,"input",22),t.NdJ("click",function(){return n.rtl=!1}),t.qZA(),t._uU(46," LTR "),t.qZA(),t.TgZ(47,"label",21)(48,"input",22),t.NdJ("click",function(){return n.rtl=!0}),t.qZA(),t._uU(49," RTL "),t.qZA()(),t.TgZ(50,"p",20)(51,"label")(52,"textarea",23),t._uU(53," "),t.qZA()()()(),t.TgZ(54,"div",8)(55,"label",9),t._uU(56,"Display order"),t.qZA(),t.TgZ(57,"p",10)(58,"label"),t._UZ(59,"input",24),t.qZA()()(),t.TgZ(60,"div",25)(61,"div",26)(62,"button",27),t.NdJ("click",function(){return n.createDoc()}),t._uU(63," Save "),t.qZA()(),t.TgZ(64,"div",26)(65,"button",27),t.NdJ("click",function(){return n.updateDoc()}),t._uU(66," Update "),t.qZA()()()()()()(),t.TgZ(67,"section")(68,"div",28)(69,"header",2)(70,"p",3)(71,"span",4),t._UZ(72,"i",5),t.qZA(),t._uU(73,"Documentation list "),t.qZA()(),t.TgZ(74,"div",6)(75,"div",8)(76,"label",9),t._uU(77,"Section name"),t.qZA(),t.TgZ(78,"div",10)(79,"div",11)(80,"label")(81,"select",29),t.NdJ("change",function(u){return n.doc(u)}),t.TgZ(82,"option",13),t._uU(83," Select section name "),t.qZA(),t.YNc(84,w,2,2,"option",30),t.ALo(85,"async"),t.qZA()()(),t.TgZ(86,"div",15),t._UZ(87,"i",16),t.qZA()()(),t.TgZ(88,"div",31)(89,"div",32)(90,"table",33)(91,"thead")(92,"tr")(93,"th",34)(94,"div",35),t._uU(95,"ID"),t.qZA()(),t.TgZ(96,"th",34)(97,"div",35),t._uU(98,"Sub Title"),t.qZA()(),t.TgZ(99,"th",34)(100,"div",35),t._uU(101,"Display order"),t.qZA()(),t.TgZ(102,"th",34),t._UZ(103,"div",35),t.qZA()()(),t.YNc(104,S,16,3,"tbody",36),t.ALo(105,"async"),t.qZA()()()()()()()),2&e&&(t.xp6(10),t.Q6J("formGroup",n.documentationForm),t.xp6(10),t.Q6J("ngForOf",t.lcZ(21,7,n.titleList)),t.xp6(32),t.Gre("textarea ",n.rtl?"m-rtl":"has-text-left",""),t.xp6(32),t.Q6J("ngForOf",t.lcZ(85,9,n.titleList)),t.xp6(20),t.Q6J("ngForOf",t.lcZ(105,11,n.documentationResponse)))},dependencies:[Z.sg,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.sg,o.u,Z.Ov],styles:[".m-rtl[_ngcontent-%COMP%]{direction:rtl}","body[_ngcontent-%COMP%]{background-color:#f0f3f5;height:100%}.p-t-80[_ngcontent-%COMP%]{padding-top:100px!important}.button.is-primary[_ngcontent-%COMP%]{background-color:#203752;border-color:transparent;color:#fff;padding:5px}.card[_ngcontent-%COMP%]{margin-bottom:1.5rem;margin-left:15rem;margin-right:15rem}"]});var J=p(5932);class A{constructor(){}ngOnInit(){}}A.\u0275fac=function(e){return new(e||A)},A.\u0275cmp=t.Xpm({type:A,selectors:[["app-home-slider"]],decls:83,vars:0,consts:[[1,"p-t-80"],[1,"card"],[1,"card-header"],[1,"card-header-title"],[1,"icon"],[1,"mdi","mdi-nature-people","default"],[1,"card-content"],[1,"field"],[1,"label"],[1,"control","has-icons-left"],["type","text","required","required","formControlName","title","placeholder","Image name",1,"input"],[1,"icon","is-small","is-left"],[1,"fas","fa-id-card"],[1,"file","is-link","has-name"],[1,"file-label","p-l","p-r"],["accept","image/*","type","file",1,"file-input"],["logoPath",""],[1,"file-cta"],[1,"file-icon"],[1,"fas","fa-upload"],[1,"file-label"],[1,"file-name"],[1,"checkbox"],["type","checkbox"],[1,"button","is-medium","is-fullwidth","is-primary"],[1,"card","has-table"],[1,"b-table"],[1,"table-wrapper","has-mobile-cards"],[1,"table","is-striped","is-hoverable"],[1,""],[1,"th-wrap"],["draggable","false"],["data-label","ID"],["data-label","Image",1,"has-no-head-mobile","is-image-cell"],[1,"image","is-64x64"],["src","https://avatars.dicebear.com/v2/gridy/Adrienne-Mayer-III.svg",1,"is-rounded"],["data-label","Name"],["data-label","Enabled"],[1,"is-actions-cell"],[1,"buttons","is-right"],["type","button",1,"button","is-small","is-primary"],[1,"mdi","mdi-eye","default"],["type","button",1,"button","is-small","is-danger"],[1,"mdi","mdi-trash-can","default"]],template:function(e,n){1&e&&(t.TgZ(0,"body"),t._UZ(1,"div",0),t.TgZ(2,"section")(3,"div",1)(4,"header",2)(5,"p",3)(6,"span",4),t._UZ(7,"i",5),t.qZA(),t._uU(8," Home slider image "),t.qZA()(),t.TgZ(9,"div",6)(10,"form")(11,"div",7)(12,"label",8),t._uU(13,"Image name"),t.qZA(),t.TgZ(14,"p",9)(15,"label"),t._UZ(16,"input",10),t.qZA(),t.TgZ(17,"span",11),t._UZ(18,"i",12),t.qZA()()(),t.TgZ(19,"div",7)(20,"div",13)(21,"label",14),t._UZ(22,"input",15,16),t.TgZ(24,"span",17)(25,"span",18),t._UZ(26,"i",19),t.qZA(),t.TgZ(27,"span",20),t._uU(28," Upload slider image "),t.qZA()(),t.TgZ(29,"span",21),t._uU(30," file name "),t.qZA()()()(),t.TgZ(31,"div",7)(32,"label",22),t._UZ(33,"input",23),t._uU(34," Add this image to the home slider "),t.qZA()(),t.TgZ(35,"button",24),t._uU(36," Add and save "),t.qZA()()()()(),t.TgZ(37,"section")(38,"div",25)(39,"header",2)(40,"p",3)(41,"span",4),t._UZ(42,"i",5),t.qZA(),t._uU(43,"Home slider images list "),t.qZA()(),t.TgZ(44,"div",6)(45,"div",26)(46,"div",27)(47,"table",28)(48,"thead")(49,"tr")(50,"th",29)(51,"div",30),t._uU(52,"ID"),t.qZA()(),t.TgZ(53,"th",29)(54,"div",30),t._uU(55," Image"),t.qZA()(),t.TgZ(56,"th")(57,"div",30),t._uU(58,"Name "),t.qZA()(),t.TgZ(59,"th")(60,"div",30),t._uU(61,"Enabled "),t.qZA()(),t.TgZ(62,"th",29),t._UZ(63,"div",30),t.qZA()()(),t.TgZ(64,"tbody")(65,"tr",31)(66,"td",32),t._uU(67," 1"),t.qZA(),t.TgZ(68,"td",33)(69,"div",34),t._UZ(70,"img",35),t.qZA()(),t.TgZ(71,"td",36),t._uU(72," masdar image slider one"),t.qZA(),t.TgZ(73,"td",37),t._uU(74," true"),t.qZA(),t.TgZ(75,"td",38)(76,"div",39)(77,"button",40)(78,"span",4),t._UZ(79,"i",41),t.qZA()(),t.TgZ(80,"button",42)(81,"span",4),t._UZ(82,"i",43),t.qZA()()()()()()()()()()()()())},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.u,o.F],styles:["body[_ngcontent-%COMP%]{background-color:#f0f3f5;height:100%}.p-t-80[_ngcontent-%COMP%]{padding-top:100px!important}.button.is-primary[_ngcontent-%COMP%]{background-color:#203752;border-color:transparent;color:#fff;padding:5px}.card[_ngcontent-%COMP%]{margin-bottom:1.5rem;margin-left:15rem;margin-right:15rem}"]});class v{constructor(e,n){this.httpClient=e,this.addHeader=n,this.httpOptions={headers:new M.WM({"Content-Type":"application/json"})}}createHomeMasdarInfo(e){return this.httpClient.post(g.x.homeMasdarInfo,JSON.stringify(e),this.httpOptions)}getHomeMasdarInfo(){return this.httpClient.get(g.x.homeMasdarInfo)}deleteHomeMasdarInfo(e){return this.httpClient.delete(`${g.x.homeMasdarInfo}/${e}`)}updateHomeMasdarInfo(e){return this.httpClient.put(g.x.homeMasdarInfo,JSON.stringify(e),this.httpOptions)}}v.\u0275fac=function(e){return new(e||v)(t.LFG(M.eN),t.LFG(_.G))},v.\u0275prov=t.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"});class y{constructor(e){this.dashboardHomeRepositoryService=e}createHomeMasdarInfo(e){return this.dashboardHomeRepositoryService.createHomeMasdarInfo(e)}getHomeMasdarInfo(){return this.dashboardHomeRepositoryService.getHomeMasdarInfo()}deleteHomeMasdarInfo(e){return this.dashboardHomeRepositoryService.deleteHomeMasdarInfo(e)}updateHomeMasdarInfo(e){return this.dashboardHomeRepositoryService.updateHomeMasdarInfo(e)}}y.\u0275fac=function(e){return new(e||y)(t.LFG(v))},y.\u0275prov=t.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"});class O{constructor(e){this.dashboardHomeManager=e}createHomeMasdarInfo(e){return this.dashboardHomeManager.createHomeMasdarInfo(e)}getHomeMasdarInfo(){const e=new U.x;return this.dashboardHomeManager.getHomeMasdarInfo().subscribe(n=>{e.next(n.data)}),e.asObservable()}deleteHomeMasdarInfo(e){return this.dashboardHomeManager.deleteHomeMasdarInfo(e)}updateHomeMasdarInfo(e){return this.dashboardHomeManager.updateHomeMasdarInfo(e)}}O.\u0275fac=function(e){return new(e||O)(t.LFG(y))},O.\u0275prov=t.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"});var F=p(6847);function N(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"tbody")(1,"tr",29)(2,"td",30),t._uU(3),t.qZA(),t.TgZ(4,"td",31)(5,"div",32),t._UZ(6,"img",33),t.qZA()(),t.TgZ(7,"td",34),t._uU(8),t.qZA(),t.TgZ(9,"td",35),t._uU(10),t.qZA(),t.TgZ(11,"td",36)(12,"div",37)(13,"button",38),t.NdJ("click",function(){const c=t.CHM(n).$implicit,h=t.oxw();return t.KtG(h.getFields(c.id,c.title,c.text,c.image))}),t.TgZ(14,"span",4),t._UZ(15,"i",39),t.qZA()(),t.TgZ(16,"button",40),t.NdJ("click",function(){const c=t.CHM(n).$implicit,h=t.oxw();return t.KtG(h.deleteHomeMasdarInfo(c.id))}),t.TgZ(17,"span",4),t._UZ(18,"i",41),t.qZA()()()()()()}if(2&a){const n=e.$implicit;t.xp6(3),t.Oqu(n.id),t.xp6(3),t.s9C("src",n.image,t.LSH),t.xp6(2),t.Oqu(n.title),t.xp6(2),t.Oqu(n.enabled)}}class q{constructor(e){this.homeService=e,this.masdarInfo=new o.nJ({id:new o.p4(""),title:new o.p4(""),text:new o.p4(""),image:new o.p4(""),enabled:new o.p4("")})}ngOnInit(){this.getMasdarInfo()}createMasdarInfo(){this.masdarInfo.patchValue({image:this.filePath}),this.homeService.createHomeMasdarInfo(this.masdarInfo.getRawValue()).subscribe(()=>{this.getMasdarInfo(),this.masdarInfo.reset(),this.filePath=void 0})}finalPath(e){this.filePath=e}getMasdarInfo(){this.items=this.homeService.getHomeMasdarInfo()}deleteHomeMasdarInfo(e){this.homeService.deleteHomeMasdarInfo(e).subscribe(()=>{this.getMasdarInfo()})}updateHomeMasdarInfo(){this.masdarInfo.patchValue(null!=this.filePath?{image:this.filePath}:{image:this.image}),this.homeService.updateHomeMasdarInfo(this.masdarInfo.getRawValue()).subscribe(()=>{this.getMasdarInfo(),this.masdarInfo.reset(),this.filePath=void 0})}getFields(e,n,s,u){this.masdarInfo.patchValue({id:e}),this.title=n,this.text=s,this.image=u}}q.\u0275fac=function(e){return new(e||q)(t.Y36(O))},q.\u0275cmp=t.Xpm({type:q,selectors:[["app-home-masdar-info"]],decls:67,vars:6,consts:[[1,"p-t-80"],[1,"card"],[1,"card-header"],[1,"card-header-title"],[1,"icon"],[1,"mdi","mdi-nature-people","default"],[1,"card-content"],[3,"formGroup"],[1,"field"],[1,"label"],[1,"control","has-icons-left"],["type","text","required","required","formControlName","title","placeholder","Title",1,"input",3,"ngModel","ngModelChange"],[1,"icon","is-small","is-left"],[1,"fas","fa-id-card"],[1,"control"],["required","required","formControlName","text","placeholder","Text","rows","3",1,"textarea",3,"ngModel","ngModelChange"],[3,"path"],[1,"checkbox"],["type","checkbox","checked","checked","formControlName","enabled"],[1,"columns"],[1,"column"],[1,"button","is-fullwidth","is-primary",3,"click"],[1,"card","has-table"],[1,"b-table"],[1,"table-wrapper","has-mobile-cards"],[1,"table","is-striped","is-hoverable"],[1,""],[1,"th-wrap"],[4,"ngFor","ngForOf"],["draggable","false"],["data-label","ID"],["data-label","Image",1,"has-no-head-mobile","is-image-cell"],[1,"image","is-64x64"],[1,"is-rounded",3,"src"],["data-label","Title"],["data-label","Enabled"],[1,"is-actions-cell"],[1,"buttons","is-right"],["type","button",1,"button","is-small","is-primary",3,"click"],[1,"mdi","mdi-eye","default"],["type","button",1,"button","is-small","is-danger",3,"click"],[1,"mdi","mdi-trash-can","default"]],template:function(e,n){1&e&&(t.TgZ(0,"body"),t._UZ(1,"div",0),t.TgZ(2,"section")(3,"div",1)(4,"header",2)(5,"p",3)(6,"span",4),t._UZ(7,"i",5),t.qZA(),t._uU(8," Home - Masdar info "),t.qZA()(),t.TgZ(9,"div",6)(10,"form",7)(11,"div",8)(12,"label",9),t._uU(13,"Title"),t.qZA(),t.TgZ(14,"p",10)(15,"label")(16,"input",11),t.NdJ("ngModelChange",function(u){return n.title=u}),t.qZA()(),t.TgZ(17,"span",12),t._UZ(18,"i",13),t.qZA()()(),t.TgZ(19,"div",8)(20,"label",9),t._uU(21,"Text"),t.qZA(),t.TgZ(22,"p",14)(23,"label")(24,"textarea",15),t.NdJ("ngModelChange",function(u){return n.text=u}),t.qZA()()()(),t.TgZ(25,"div",8)(26,"upload-file",16),t.NdJ("path",function(u){return n.finalPath(u)}),t.qZA()(),t.TgZ(27,"div",8)(28,"label",17),t._UZ(29,"input",18),t._uU(30," Add to the home Masdar info "),t.qZA()(),t.TgZ(31,"div",19)(32,"div",20)(33,"button",21),t.NdJ("click",function(){return n.createMasdarInfo()}),t._uU(34," Save "),t.qZA()(),t.TgZ(35,"div",20)(36,"button",21),t.NdJ("click",function(){return n.updateHomeMasdarInfo()}),t._uU(37," Update "),t.qZA()()()()()()(),t.TgZ(38,"section")(39,"div",22)(40,"header",2)(41,"p",3)(42,"span",4),t._UZ(43,"i",5),t.qZA(),t._uU(44,"Home - Masdar info list "),t.qZA()(),t.TgZ(45,"div",6)(46,"div",23)(47,"div",24)(48,"table",25)(49,"thead")(50,"tr")(51,"th",26)(52,"div",27),t._uU(53,"ID"),t.qZA()(),t.TgZ(54,"th",26)(55,"div",27),t._uU(56," Image"),t.qZA()(),t.TgZ(57,"th")(58,"div",27),t._uU(59,"Title "),t.qZA()(),t.TgZ(60,"th")(61,"div",27),t._uU(62,"Enabled "),t.qZA()(),t.TgZ(63,"th",26),t._UZ(64,"div",27),t.qZA()()(),t.YNc(65,N,19,4,"tbody",28),t.ALo(66,"async"),t.qZA()()()()()()()),2&e&&(t.xp6(10),t.Q6J("formGroup",n.masdarInfo),t.xp6(6),t.Q6J("ngModel",n.title),t.xp6(8),t.Q6J("ngModel",n.text),t.xp6(41),t.Q6J("ngForOf",t.lcZ(66,4,n.items)))},dependencies:[Z.sg,o._Y,o.Fj,o.Wl,o.JJ,o.JL,o.Q7,o.sg,o.u,F.R,Z.Ov],styles:["body[_ngcontent-%COMP%]{background-color:#f0f3f5;height:100%}.p-t-80[_ngcontent-%COMP%]{padding-top:100px!important}.button.is-primary[_ngcontent-%COMP%]{background-color:#203752;border-color:transparent;color:#fff;padding:5px}.card[_ngcontent-%COMP%]{margin-bottom:1.5rem;margin-left:15rem;margin-right:15rem}"]});const R=[{path:"",component:f,children:[{path:"create-doc-title",component:T},{path:"create-documentation",component:D},{path:"add-home-slider-image",component:A},{path:"home-masdar-info",component:q},{path:"upload",component:F.R}]}];class x{}x.\u0275fac=function(e){return new(e||x)},x.\u0275mod=t.oAB({type:x}),x.\u0275inj=t.cJS({imports:[i.Bz.forChild(R),J.F,i.Bz]})}}]);