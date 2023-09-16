import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController, AnimationController,Animation, IonCard, IonCardContent } from '@ionic/angular';


@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
})
export class MisDatosPage implements OnInit {

  @ViewChild('animacion', { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  @ViewChild('inputnombre', { read: ElementRef })
  inputnombre: ElementRef;

  @ViewChild('inputapellido', { read: ElementRef })
  inputapellido: ElementRef;
  
  data: any;

  persona={
    nombre:"",
    apellido:""
  }
  
  private animation: any;
  animacion_inputs: any;

  constructor(public toastController: ToastController,
    public alertController: AlertController,
    private activeroute: ActivatedRoute,
    private router: Router,
    private animationCtrl: AnimationController,) {

      
  
        
        this.inputnombre = ElementRef.prototype as any;
        this.inputapellido = ElementRef.prototype as any;
        this.animacion_inputs = Animation.prototype as any;
     }


  ngAfterViewInit() {
    
    
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(2500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.5');

    this.animation.play();

    this.animacion_inputs = this.animationCtrl
      .create()
      .addElement(this.inputnombre.nativeElement)
      .addElement(this.inputapellido.nativeElement)
      .duration(100)
      .iterations(2)
      .fromTo('transform', 'translateX(0px)', 'translateX(1500px)',)
      .fromTo('opacity', '1', '0.5');

      this.animacion_inputs.stop()

      
    
  }

  ngOnInit() {
  }

  async presentAlert1(){
    const alerta = await this.alertController.create({
      header:"Datos Usuario",
      subHeader:"Su nombre es: ",
      message: this.persona.nombre +" "+ this.persona.apellido , 
      buttons: ["OK"],
    });
    await alerta.present();
    let result = await alerta.onDidDismiss();
    console.log(result)
    
  }

async limpiarCampos(){
  
  await this.animacion_inputs.play();
  
}

mis_datos(){
    
    
  this.router.navigate(['/home/mis-datos']);
}

certificaciones(){
  this.router.navigate(['/home/certificaciones'])
}

exp_lab(){
  this.router.navigate(['/home/exp-laboral'])
}

}
