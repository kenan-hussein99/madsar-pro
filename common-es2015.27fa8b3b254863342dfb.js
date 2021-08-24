"use strict";(self.webpackChunkmasdar=self.webpackChunkmasdar||[]).push([[592],{5778:function(t,o,e){e.d(o,{F:function(){return u}});var r=e(9765),n=e(7716),i=e(9942),a=e(7605),s=e(1841),c=e(6796);let p=(()=>{class t{constructor(t,o,e){this.addHeader=t,this.httpClient=o,this.userService=e}getFirestoreStoreInteractions(t){return this.userService.isLoggedIn()?this.addHeader.get(`${i.x.storeinteractionsfs}/${t}`):this.httpClient.get(`${i.x.storeinteractionsfs}/${t}`)}}return t.\u0275fac=function(o){return new(o||t)(n.LFG(a.G),n.LFG(s.eN),n.LFG(c.K))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t){this.storeRepository=t}getFirestoreStoreInteractions(t){return this.storeRepository.getFirestoreStoreInteractions(t)}}return t.\u0275fac=function(o){return new(o||t)(n.LFG(p))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),u=(()=>{class t{constructor(t){this.storeManager=t}getFirestoreStoreInteractions(t){const o=new r.xQ;return this.storeManager.getFirestoreStoreInteractions(t).subscribe(t=>{o.next(t.data)}),o.asObservable()}}return t.\u0275fac=function(o){return new(o||t)(n.LFG(d))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},9021:function(t,o,e){e.d(o,{r:function(){return d}});var r=e(665),n=e(7574),i=e(7716),a=e(9942),s=e(1841);let c=(()=>{class t{constructor(t){this.httpClient=t}contactUs(t){return this.httpClient.post(a.x.contactUs,JSON.stringify(t))}}return t.\u0275fac=function(o){return new(o||t)(i.LFG(s.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=e(3441);let d=(()=>{class t{constructor(t,o){this.contactUsService=t,this.toast=o,this.contactForm=new r.cw({email:new r.NI(""),userName:new r.NI(""),subject:new r.NI(""),text:new r.NI("")})}ngOnInit(){}contactUs(){if(!this.contactForm.valid)return void this.toast.formNotValid();const t=this.contactUsService.contactUs(this.contactForm.getRawValue()),o=new n.y(o=>{t.subscribe(()=>{setTimeout(()=>{o.next(this.toast.sendEmailSuccess),this.contactForm.reset(),o.complete()})},t=>{o.error(this.toast.wrongHappened)})});this.toast.async(o)}}return t.\u0275fac=function(o){return new(o||t)(i.Y36(c),i.Y36(p.F))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-contact"]],decls:21,vars:1,consts:[[1,"form",3,"formGroup"],["formControlName","userName","placeholder","\u0627\u0643\u062a\u0628 \u0627\u0633\u0645\u0643 \u0647\u0646\u0627","required",""],["formControlName","email","placeholder","\u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0623\u0648 \u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643","required",""],["formControlName","subject","placeholder","\u0639\u0646\u0648\u0627\u0646 \u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","required",""],["formControlName","text","placeholder","\u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u0631\u063a\u0628 \u0628\u0633\u0624\u0627\u0644\u0646\u0627 \u0639\u0646\u0647\u061f","required",""],[3,"click"],[1,"fa","fa-envelope"]],template:function(t,o){1&t&&(i.TgZ(0,"body"),i.TgZ(1,"form",0),i.TgZ(2,"h2"),i._uU(3,"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"),i.qZA(),i.TgZ(4,"p"),i._uU(5,"\u0627\u0633\u0645\u0643\u061f"),i._UZ(6,"input",1),i.qZA(),i.TgZ(7,"p"),i._uU(8,"\u0643\u064a\u0641 \u0646\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643\u061f"),i._UZ(9,"input",2),i.qZA(),i.TgZ(10,"p"),i._uU(11,"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0633\u0627\u0644\u0629"),i._UZ(12,"input",3),i.qZA(),i.TgZ(13,"p"),i._uU(14,"\u0631\u0633\u0627\u0644\u062a\u0643:"),i._UZ(15,"textarea",4),i.qZA(),i.TgZ(16,"button",5),i.NdJ("click",function(){return o.contactUs()}),i._uU(17,"\u0623\u0631\u0633\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629"),i.qZA(),i.TgZ(18,"div"),i._UZ(19,"span",6),i._uU(20," support@masdar-pro.com "),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(1),i.Q6J("formGroup",o.contactForm))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7],styles:['body[_ngcontent-%COMP%]{direction:rtl;font-family:"Changa",serif}.form[_ngcontent-%COMP%]{width:340px;height:620px;background:#e6e6e6;border-radius:8px;box-shadow:0 0 40px -10px #000;margin:calc(50vh - 300px) auto;display:inherit;padding:20px 30px;max-width:calc(100vw - 40px);box-sizing:border-box;font-family:"Changa",serif;position:relative}h2[_ngcontent-%COMP%]{margin:10px 0;padding-bottom:10px;width:180px;color:#78788c;border-bottom:3px solid #78788c}input[_ngcontent-%COMP%]{width:100%;padding:10px;box-sizing:border-box;background:none;outline:none;resize:none;border:0;transition:all .3s;border-bottom:2px solid #bebed2}textarea[_ngcontent-%COMP%]{width:100%;padding:10px;box-sizing:border-box;background:none;outline:none;resize:none;border:0;transition:all .3s;border-bottom:2px solid #bebed2}input[_ngcontent-%COMP%]:focus{border-bottom:2px solid #78788c}p[_ngcontent-%COMP%]:before{content:attr(type);display:block;margin:28px 0 0;font-size:14px;color:#5a5a5a}button[_ngcontent-%COMP%]{float:right;padding:8px 12px;margin:8px 0 0;border:2px solid #78788c;background:0;color:#5a5a6e;cursor:pointer;transition:all .3s;font-family:"Changa",serif}button[_ngcontent-%COMP%]:hover{background:#78788c;color:#fff}div[_ngcontent-%COMP%]{content:"Hi";position:absolute;bottom:-15px;right:-20px;background:#50505a;color:#fff;width:320px;padding:16px 4px 16px 0;border-radius:6px;font-size:13px;box-shadow:10px 10px 40px -14px #000}span[_ngcontent-%COMP%]{margin:0 5px 0 15px}']}),t})()}}]);