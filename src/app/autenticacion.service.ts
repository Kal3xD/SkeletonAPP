import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { Observable, delay, of, tap, BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { DbtaskService } from './dbtask.service';





@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  authState = new BehaviorSubject(false);  
  constructor(
   private router: Router,
   private storage: Storage,
   public dbtaskService: DbtaskService,
   public toastController: ToastController
  ) {
   this.isLogged();
   }

   isLogged(){
      this.storage['get']("USER_DATA").
      then((response: null)=>{
         console.log(response)
         if(response!=null){
            this.authState.next(true);
         }
      })
   }

   login(login:any){
      
      this.dbtaskService.getSesionData(login)
      .then((data)=>{ 
        if(data===undefined){ 
          this.presentToast("Credenciales Incorrectas");
        }else{ 
          data.active=1; 
          this.dbtaskService.updateSesionData(data) 
          .then((response)=>{ 
            this.storage['set']("USER_DATA",data); 
            this.authState.next(true);
            this.router.navigate(['home']); 
            
          });
        }
      })
      .catch((error)=>{
        console.log(error);
      });
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
    isAuthenticated() {
      return this.authState.value;
    }
}
