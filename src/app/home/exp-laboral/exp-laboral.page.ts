import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.page.html',
  styleUrls: ['./exp-laboral.page.scss'],
})
export class ExpLaboralPage implements OnInit {

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
  ) { }

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
