import { Component, OnInit } from '@angular/core';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  icons = {
    ambulance: faAmbulance,
  };

  constructor() {}

  ngOnInit() {}
}
