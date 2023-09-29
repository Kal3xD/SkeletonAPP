import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { DbtaskService } from '../dbtask.service';



import { AutenticacionService } from '../autenticacion.service';
import { __param } from 'tslib';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login:any = {
    usuario: "",
    password: ""

  }

  field:string="";
  alertController: any;

  constructor(private router: Router,public toastController: ToastController, public dbtaskService: DbtaskService ,private storage: Storage,private auth: AutenticacionService ) { }

  ngOnInit() {
    
  }

  
  ingresar(){
  
      if(this.validateModel(this.login)){
        this.auth.login(this.login);
      }
      else{
        this.presentToast("Falta "+this.field);
      }
    }
  
  /* Registrar */

  registrar(){
    this.createSesionData(this.login)
  }
/*
  @param login*/
  
  createSesionData(login: any){
    if(this.validateModel(login)){

      let copy= Object.assign({},login);
      copy.Active=1;
      this.dbtaskService.createSesionData(copy)
      .then((data)=>{
        this.presentToast("Bienvenido");
        this.storage['set']("USER_DATA", data);
        this.router.navigate(['home']);

      })
      .catch((error)=>{
        this.presentToast("El usuario ya existe");
      })
    }
    else{
      this.presentToast("Falta: "+this.field)
    }
  }

  validateModel(model:any){
    for (var [key, value] of Object.entries(model)) {
      if (value=="") {
        this.field= key;
        return false;
      }
    }
    

    var password = model.password;
    const regex = /^[0-9]*$/;
    const onlyNumbers = regex.test(password); // true
    if(!onlyNumbers){
      this.field = "Password invalida";
      return false;
    }
    else if(model.usuario.length < 3 || model.usuario.length > 8){
      this.field = "Usuario invalido";
      return false;
    }
    else if(model.password.length != 4){
      this.field = "Password invalida";
      return false;
    }
    return true;
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }


  ionViewWillEnter(){
    console.log('ionViewDidEnter');
      // Se valida que exista una sesión activa
      this.dbtaskService.sesionActive()
      .then((data)=>{
        if(data!=undefined){
          this.storage['set']("USER_DATA",data); 
          this.router.navigate(['home']);
        }
      })
      .catch((error)=>{
        console.error(error);
        this.router.navigate(['login']);
      })
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Creación de Usuario',
      message: 'Mensaje <strong>El usuario no existe, desea registrarse?</strong>',
      buttons: [
        {
          text: 'NO',
          role: 'cancel'
        }, {
          text: 'SI',
          handler: () => {
            this.createSesionData(this.login)
          }
        }
      ]
    });

    await alert.present();
  }
}

