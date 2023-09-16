import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.page.html',
  styleUrls: ['./certificaciones.page.scss'],
})
export class CertificacionesPage implements OnInit {

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,) {
    
   }

  ngOnInit() {
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
