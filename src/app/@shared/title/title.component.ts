import { Component, Input, OnInit } from '@angular/core';
import { TitleTheme } from '@shared/title/title-model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() theme: TitleTheme = 'primary';
  constructor() {}

  ngOnInit(): void {}

  get classes() {
    return {
      [`title--${this.theme}`]: true,
    };
  }
}
