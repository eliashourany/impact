import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class DrawerComponent implements OnInit {
  @Input() opened: boolean;
  @Output() openedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onOpenedChanged(value: boolean) {
    this.openedChange.emit(value);
  }
}
