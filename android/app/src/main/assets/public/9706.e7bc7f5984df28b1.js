"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9706],{9706:(k,c,r)=>{r.r(c),r.d(c,{MenuPageModule:()=>b});var m=r(177),g=r(4341),o=r(791),l=r(8465),d=r(467),n=r(3953),p=r(3656),f=r(1626);let h=(()=>{var e;class i{constructor(t){this.http=t,this.apiUrl="http://192.168.101.9:3000/usuarios"}getUserById(t){return this.http.get(`${this.apiUrl}/${t}`)}}return(e=i).\u0275fac=function(t){return new(t||e)(n.KVO(f.Qq))},e.\u0275prov=n.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),i})();const v=[{path:"",component:(()=>{var e;class i{constructor(t,a,u){this.navController=t,this.alertController=a,this.bienvenidaService=u,this.usuario="",this.image="assets/slide1.png"}ngOnInit(){this.cargarUsuario()}cargarUsuario(){const t=JSON.parse(localStorage.getItem("user")||"{}");t&&t.id&&this.bienvenidaService.getUserById(t.id).subscribe(a=>{this.usuario=a.username},a=>{console.error("Error al obtener los datos del usuario",a)})}confirmLogout(){var t=this;return(0,d.A)(function*(){yield(yield t.alertController.create({header:"Confirmaci\xf3n",message:"\xbfEst\xe1 seguro que desea salir?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:()=>{localStorage.removeItem("user"),t.navController.navigateRoot(["/home"])}}]})).present()})()}}return(e=i).\u0275fac=function(t){return new(t||e)(n.rXU(p.q9),n.rXU(o.hG),n.rXU(h))},e.\u0275cmp=n.VBU({type:e,selectors:[["app-menu"]],decls:58,vars:2,consts:[["contentId","main-content"],["color","primary"],["src","assets/Logo_DuocUC.svg.png",1,"menu-img"],[1,"menu-content","white-background"],["routerLink","/asignaturas"],["slot","start","name","school-outline","color","primary"],["routerLink","/asistencias"],["slot","start","name","calendar-outline","color","primary"],["routerLink","/leer-qr"],["slot","start","name","qr-code-outline","color","primary"],["routerLink","/restablecer-contrasena"],["slot","start","name","lock-closed-outline","color","primary"],["expand","block","color","danger",3,"click"],["slot","start","name","exit-outline"],["slot","start","name","arrow-round-back"],["id","main-content",1,"ion-page","white-background"],["slot","start"],[1,"ion-padding","background-white"],[1,"bienvenida"],["alt","Imagen de bienvenida",1,"carousel-image",3,"src"],[1,"external-links"],["lines","none"],["slot","start","name","logo-instagram","color","primary"],["href","https://www.instagram.com/duocplazaoeste/","target","_blank"],["slot","start","name","globe-outline","color","primary"],["href","https://www.duoc.cl/","target","_blank"]],template:function(t,a){1&t&&(n.j41(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar",1),n.nrm(3,"ion-img",2),n.k0s()(),n.j41(4,"ion-content",3)(5,"ion-list")(6,"ion-item",4),n.nrm(7,"ion-icon",5),n.j41(8,"ion-label"),n.EFF(9,"Mis Asignaturas"),n.k0s()(),n.j41(10,"ion-item",6),n.nrm(11,"ion-icon",7),n.j41(12,"ion-label"),n.EFF(13,"Mi Asistencia"),n.k0s()(),n.j41(14,"ion-item",8),n.nrm(15,"ion-icon",9),n.j41(16,"ion-label"),n.EFF(17,"Leer QR"),n.k0s()(),n.nrm(18,"ion-item-divider"),n.j41(19,"ion-item",10),n.nrm(20,"ion-icon",11),n.j41(21,"ion-label"),n.EFF(22,"Cambiar Contrase\xf1a"),n.k0s()(),n.j41(23,"ion-item")(24,"ion-button",12),n.bIt("click",function(){return a.confirmLogout()}),n.nrm(25,"ion-icon",13),n.EFF(26," Cerrar Sesi\xf3n "),n.k0s()(),n.j41(27,"ion-item")(28,"ion-menu-toggle"),n.nrm(29,"ion-icon",14),n.j41(30,"ion-button"),n.EFF(31,"Cerrar"),n.k0s()()()()()(),n.j41(32,"div",15)(33,"ion-header")(34,"ion-toolbar",1)(35,"ion-buttons",16),n.nrm(36,"ion-menu-button"),n.k0s(),n.j41(37,"ion-title"),n.EFF(38,"Men\xfa"),n.k0s()()(),n.j41(39,"ion-content",17)(40,"ion-text",1)(41,"h1"),n.EFF(42),n.k0s(),n.j41(43,"p"),n.EFF(44,"Est\xe1s accediendo a tu portal personal de DuocUC. Aqu\xed podr\xe1s gestionar tus asignaturas, registrar tu asistencia y m\xe1s."),n.k0s()(),n.j41(45,"div",18),n.nrm(46,"img",19),n.k0s(),n.j41(47,"div",20)(48,"ion-item",21),n.nrm(49,"ion-icon",22),n.j41(50,"ion-label")(51,"a",23),n.EFF(52,"Instagram Duoc Plaza Oeste"),n.k0s()()(),n.j41(53,"ion-item",21),n.nrm(54,"ion-icon",24),n.j41(55,"ion-label")(56,"a",25),n.EFF(57,"Sitio Web Duoc"),n.k0s()()()()()()),2&t&&(n.R7$(42),n.SpI("Bienvenido, ",a.usuario,"!"),n.R7$(4),n.Y8G("src",a.image,n.B4B))},dependencies:[o.Jm,o.QW,o.W9,o.eU,o.iq,o.KW,o.uz,o.Dg,o.he,o.nf,o.oS,o.MC,o.cA,o.IO,o.BC,o.ai,o.N7,l.Wk],styles:[".menu-content[_ngcontent-%COMP%]{--background: linear-gradient(to bottom, #ffffff, #f3f3f3)}.bienvenida[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:300px;margin:10px 0}.carousel-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.external-links[_ngcontent-%COMP%]{margin-top:20px;padding:10px}.external-links[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:10px}.background-white[_ngcontent-%COMP%]{--background: #ffffff;background-color:#fff}"]}),i})()}];let M=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[l.iI.forChild(v),l.iI]}),i})(),b=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[m.MD,g.YN,o.bv,M]}),i})()}}]);