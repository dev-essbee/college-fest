import {
  Component,
  HostListener,
  OnInit,
  AfterContentInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ViewChildren, AfterViewInit
} from '@angular/core';

import {Router} from '@angular/router';

declare var Parallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// @HostListener('window:resize', ['$event'])
export class HomeComponent implements OnInit, AfterContentInit, OnDestroy, AfterViewInit {
  headerImg: string;
  parallaxInst: any;
  router: Router;
  eventDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
    ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
    'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in' +
    ' reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
    ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  @ViewChild('sabrangLogoRef', {static: false}) sabrangLogoRef: ElementRef;

  @ViewChild('about', {static: false}) aboutRef: ElementRef;
  docStyle;
  registerEle;
  boundingClientRect;

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterContentInit() {


  }

  ngAfterViewInit(): void {
    this.parallaxInst = new Parallax(this.sabrangLogoRef.nativeElement,
      {
        relativeInput: true,
      });
    this.docStyle = document.documentElement.style;
    this.registerEle = document.querySelector('.register');
    this.boundingClientRect = this.registerEle.getBoundingClientRect();
    // console.log(this.boundingClientRect);
  }

  ngOnDestroy(): void {
    this.parallaxInst.destroy();
  }

  scrollToAbout(): boolean {
    this.aboutRef.nativeElement.scrollIntoView({behavior: 'smooth'});
    return true;
  }

  onMouseMove(e) {
    // console.log('move');
    const innerWth = window.innerWidth;
    const innerHt = window.innerHeight;
    const resW = (340 * innerWth) / 1920;
    let resH = innerHt / 976;
    const x = e.clientX - this.boundingClientRect.left;
    const y = e.clientY - this.boundingClientRect.top;
    const xc = this.boundingClientRect.width / 2;
    const yc = this.boundingClientRect.height / 2;
    if (innerHt < 750) {
      resH = 10;
    }
    const dx = x - (xc + resH);
    const dy = y - (yc + resW);
    // console.log(innerHt);

    this.docStyle.setProperty('--rx', `${dy / -1}deg`);
    this.docStyle.setProperty('--ry', `${dx / 10}deg`);

  }

  onMouseUp() {
    // console.log('up');
    this.docStyle.setProperty('--tz', '-12px');
  }

  onMouseLeave() {
    // console.log('leave');
    this.docStyle.setProperty('--ty', '0');
    this.docStyle.setProperty('--rx', '0');
    this.docStyle.setProperty('--ry', '0');
  }

  onMouseDown() {
    // console.log('down');
    this.docStyle.setProperty('--tz', '-25px');

  }

  navigateToEvents() {
    this.router.navigate(['/events']);
  }
}


