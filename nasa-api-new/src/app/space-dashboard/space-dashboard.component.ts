import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-space-dashboard',
  templateUrl: './space-dashboard.component.html',
  styleUrls: ['./space-dashboard.component.css']
})
export class SpaceDashboardComponent implements OnInit {

  items: any = [];
  asteroids: any = [];
  images: any = [];
  weather: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAsteroids();
    this.getImages();
    this.getWeather();
  }

  getAsteroids() {
    this.asteroids = [];
    this.rest.getAsteroids().subscribe((data: {}) => {
      console.log(data);
      this.items = data as object[];

    });
  }

   getImages() {
    this.images = [];
    this.rest.getImages().subscribe((data: {}) => {
      console.log(data);
      this.items = data as object[];

    });
   }

  getWeather() {
    this.weather = [];
    this.rest.getWeather().subscribe((data: {}) => {
      console.log(data);
      this.items = data as object[];

    });
  }



}
