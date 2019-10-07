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
  sabrangDes = 'SABRANG is celebrated annually by the University since 2011, with the objective to provide an opportunity to the ' +
    'students from different colleges and universities across the nation and encourage them to show their potential and ' +
    'talents. Response in SABRANG Carnival 2k18 held on October 26-28, 2018 was overwhelming. Students of different institutions ' +
    'from various parts of the country participated in around 27 different events during the fest. ' +
    'Spread over a span of three days, the fest is likely to attract huge participation from across country along with ' +
    'the present strength of approx. 700 students of the University. Apart from 2000+ participating students, around 100 ' +
    'faculty and staff members will also grace the occasion. The fest focuses on taking in its fold the major ' +
    'disciplines of the University i.e. Management & Engineering and Technology.';
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


