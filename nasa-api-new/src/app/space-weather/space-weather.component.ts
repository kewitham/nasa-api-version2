import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-space-weather',
  templateUrl: './space-weather.component.html',
  styleUrls: ['./space-weather.component.css']
})
export class SpaceWeatherComponent implements OnInit {

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
