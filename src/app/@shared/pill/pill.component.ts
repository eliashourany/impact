import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PillSize, PillTheme } from '@shared/pill/pill.model';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
})
export class PillComponent implements OnInit {
  @Input() label: string;
  @Input() size: PillSize = 'md';
  @Input() theme: PillTheme = 'primary';
  @Input() clickable = false;
  @Output() clicked = new EventEmitter<Event>();
  constructor() {}

  ngOnInit(): void {}

  get classes() {
    return {
      [`pill--${this.theme}`]: true,
      [`pill--${this.size}`]: true,
      'pill--clickable': this.clickable,
    };
  }
}
