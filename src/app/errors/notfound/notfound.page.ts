import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
  standalone: true,
  imports: [IonicModule,]
})
export class NotfoundPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
