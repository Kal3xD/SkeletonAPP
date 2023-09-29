import { Component} from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AutenticacionService } from '../autenticacion.service';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})

export class HomePage {
  
  constructor(private activeroute: ActivatedRoute, private router: Router, public AuthenticationService: AutenticacionService){

  }
  /*
  @param $event
  
  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value;
    this.router.navigate(['home/'+direction]);
  }*/


  ionViewWillEnter(){
    this.router.navigate(['home/mis-datos']);
  }

  }

  