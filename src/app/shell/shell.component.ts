import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaObserver } from '@angular/flex-layout';
import { faHome, faIdCard, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ShellComponent implements OnInit {
  menuItems = [
    {
      label: 'LEBANON',
      icon: faHome,
      url: '/home',
    },
    {
      label: 'IDENTITY_CARD',
      icon: faIdCard,
      url: '/about',
    },
    {
      label: 'IDENTITY_CARD',
      icon: faIdCard,
      url: '/about',
    },
    {
      label: 'IDENTITY_CARD',
      icon: faIdCard,
      url: '/about',
    },
    {
      label: 'IDENTITY_CARD',
      icon: faIdCard,
      url: '/about',
    },
    {
      label: 'IDENTITY_CARD',
      icon: faIdCard,
      url: '/about',
    },
    {
      label: 'IDENTITY_CARD',
      icon: faIdCard,
      url: '/about',
    },
    {
      label: 'IDENTITY_CARD',
      icon: faIdCard,
      url: '/about',
    },
    {
      label: 'IDENTITY_CARD',
      icon: faIdCard,
      url: '/about',
    },
    {
      label: 'IDENTITY_CARD',
      icon: faIdCard,
      url: '/about',
    },
  ];

  icon = faChevronLeft;

  constructor(private router: Router, private titleService: Title, private media: MediaObserver) {}

  ngOnInit() {}

  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  urlIsActive(url: string) {
    return this.router.isActive(url, true);
  }
}
