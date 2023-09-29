import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
  standalone: true,
  imports: [IonicModule,]
})
export class NotfoundPage implements OnInit {

  constructor(private activeroute: ActivatedRoute,
    private router: Router,) {}

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home'])
  }

}
