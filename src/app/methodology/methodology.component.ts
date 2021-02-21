import { Component, OnInit } from '@angular/core';
import { faFileAlt, faCopy, faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.scss'],
})
export class MethodologyComponent implements OnInit {
  icons = {
    file: faFileAlt,
    copy: faCopy,
    chart: faChartBar,
  };

  constructor() {}

  ngOnInit(): void {}
}
