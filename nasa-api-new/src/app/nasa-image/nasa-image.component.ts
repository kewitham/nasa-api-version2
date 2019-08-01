import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nasa-image',
  templateUrl: './nasa-image.component.html',
  styleUrls: ['./nasa-image.component.css']
})
export class NasaImageComponent implements OnInit {

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
