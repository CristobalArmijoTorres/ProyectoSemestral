"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[653],{653:(H,g,i)=>{i.r(g),i.d(g,{HomePageModule:()=>P});var f=i(177),s=i(791),d=i(4341),m=i(8465),u=i(467),e=i(3953),p=i(3656),v=i(6354),h=i(1626);let C=(()=>{var o;class l{constructor(n){this.http=n,this.apiUrl="http://192.168.84.55:3000/usuarios"}login(n,r){return this.http.get(`${this.apiUrl}?username=${n}`).pipe((0,v.T)(t=>{const a=t.find(I=>I.password===r);return a?{success:!0,user:a}:{success:!1,message:"Usuario o contrase\xf1a incorrectos"}}))}}return(o=l).\u0275fac=function(n){return new(n||o)(e.KVO(h.Qq))},o.\u0275prov=e.jDH({token:o,factory:o.\u0275fac,providedIn:"root"}),l})();const M=[{path:"",component:(()=>{var o;class l{constructor(n,r,t,a){this.toastController=n,this.navCtrol=r,this.alertController=t,this.userService=a,this.usuarioIngresado="",this.claveIngresada=""}funcionAlerta(){var n=this;return(0,u.A)(function*(){yield(yield n.alertController.create({header:"\xbfOlvidaste tu contrase\xf1a?",subHeader:"Tranquilo, se enviar\xe1 un mensaje a tu correo para recuperarla",message:"El mensaje se envi\xf3 correctamente, ahora podr\xe1s recuperar tu contrase\xf1a",buttons:["Ok"]})).present()})()}ingresar(){var n=this;return(0,u.A)(function*(){console.log("Usuario ingresado:",n.usuarioIngresado),console.log("Clave ingresada:",n.claveIngresada),n.userService.login(n.usuarioIngresado,n.claveIngresada).subscribe(function(){var r=(0,u.A)(function*(t){t.success?(console.log("Usuario encontrado:",t.user),localStorage.setItem("user",JSON.stringify(t.user)),yield(yield n.toastController.create({message:"Ingresando...",duration:1e3,position:"middle",color:"success"})).present(),n.navCtrol.navigateForward("profesor"===t.user.role?"/menu-profe":"/menu")):yield(yield n.toastController.create({message:"El usuario o la contrase\xf1a ingresada no es correcta, int\xe9ntalo nuevamente",duration:3e3,position:"middle",color:"danger"})).present()});return function(t){return r.apply(this,arguments)}}(),function(){var r=(0,u.A)(function*(t){console.error("Error al conectar con el servidor:",t),yield(yield n.toastController.create({message:"Hubo un error al conectar con el servidor, int\xe9ntalo nuevamente",duration:3e3,position:"middle",color:"danger"})).present()});return function(t){return r.apply(this,arguments)}}())})()}}return(o=l).\u0275fac=function(n){return new(n||o)(e.rXU(s.K_),e.rXU(p.q9),e.rXU(s.hG),e.rXU(C))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-home"]],decls:20,vars:4,consts:[[3,"translucent"],["color","primary"],[1,"background-white",3,"fullscreen"],["type","text","placeholder","Ingrese su Usuario",3,"ngModelChange","ngModel"],["type","password","placeholder","Ingrese la clave",3,"ngModelChange","ngModel"],["fill","clear",3,"click"],["shape","round","fill","outline",3,"click"]],template:function(n,r){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),e.EFF(3,"DuocUC 2.0"),e.k0s()()(),e.j41(4,"ion-content",2)(5,"ion-card")(6,"ion-card-header")(7,"h1"),e.EFF(8,"Iniciar Sesi\xf3n"),e.k0s()(),e.j41(9,"ion-card-content")(10,"label"),e.EFF(11,"Usuario: "),e.k0s(),e.j41(12,"ion-input",3),e.mxI("ngModelChange",function(a){return e.DH7(r.usuarioIngresado,a)||(r.usuarioIngresado=a),a}),e.k0s(),e.j41(13,"label"),e.EFF(14,"Clave: "),e.k0s(),e.j41(15,"ion-input",4),e.mxI("ngModelChange",function(a){return e.DH7(r.claveIngresada,a)||(r.claveIngresada=a),a}),e.k0s(),e.j41(16,"ion-button",5),e.bIt("click",function(){return r.funcionAlerta()}),e.EFF(17," Olvid\xe9 mi contrase\xf1a "),e.k0s(),e.j41(18,"ion-button",6),e.bIt("click",function(){return r.ingresar()}),e.EFF(19,"Aceptar"),e.k0s()()()()),2&n&&(e.Y8G("translucent",!0),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(8),e.R50("ngModel",r.usuarioIngresado),e.R7$(3),e.R50("ngModel",r.claveIngresada))},dependencies:[d.BC,d.vS,s.Jm,s.b_,s.I9,s.ME,s.W9,s.eU,s.$w,s.BC,s.ai,s.Gw],styles:["ion-card[_ngcontent-%COMP%]{--background: #f4f80c;--color: black;margin:40px}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}ion-card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{display:grid;justify-content:center;align-items:center;margin-top:15px}.background-white[_ngcontent-%COMP%]{--background: #ffffff;background-color:#fff}"]}),l})()}];let y=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[m.iI.forChild(M),m.iI]}),l})(),P=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[f.MD,d.YN,s.bv,y]}),l})()}}]);