import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  countDown;
  counter = 30*60;
  tick = 1000;

  constructor(public navCtrl: NavController) {
    this.countDown = Observable.timer(0, this.tick)
      .take(this.counter)
      .map(() => --this.counter);
  }

}
