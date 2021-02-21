import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  @Input() container: HTMLElement;
  icons = {
    arrowLeft: faChevronLeft,
    arrowRight: faChevronRight,
  };
  activeIndex = 0;
  constructor() {}

  ngOnInit(): void {
    this.container.style.scrollBehavior = 'smooth';
    setTimeout(() => {}, 1000);
  }

  navigateLeft() {
    if (this.activeIndex !== this.items.length - 1) {
      this.container.scrollLeft -= this.container.clientWidth - this.container.firstElementChild.clientWidth;
      this.activeIndex += 1;
    }
  }

  navigateRight() {
    if (this.activeIndex !== 0) {
      this.container.scrollLeft += this.container.clientWidth - this.container.firstElementChild.clientWidth;
      this.activeIndex -= 1;
    }
  }

  get items() {
    const numberOfScrollable =
      this.container.scrollWidth / (this.container.clientWidth - this.container.firstElementChild.clientWidth);
    if (numberOfScrollable) {
      return Array(Math.ceil(numberOfScrollable))
        .fill()
        .map((x, i) => i);
    }
    return [];
  }

  navigateTo(index: number) {
    this.container.scrollLeft = -(index * (this.container.clientWidth - this.container.firstElementChild.clientWidth));
    this.activeIndex = index;
  }
}
