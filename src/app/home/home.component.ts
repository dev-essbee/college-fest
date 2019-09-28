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
import {DynamicScriptLoaderServiceService} from '../dynamic-script-loader-service.service';
import {Router} from '@angular/router';

declare var Parallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit, OnDestroy, AfterViewInit {
  headerImg: string;
  parallaxInst: any;
  router: Router;
  @ViewChild('sabrangLogoRef', {static: false}) sabrangLogoRef: ElementRef;

  @ViewChild('about', {static: false}) aboutRef: ElementRef;
  docStyle;
  registerEle;
  boundingClientRect;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderServiceService) {
    this.headerImg = 'http://via.placeholder.com/1920x1080';

  }

  ngOnInit() {
    // this.loadScripts();
  }

  ngAfterContentInit() {
    // todo replace get element by id with viewchild

  }

  private loadScripts() {
    this.dynamicScriptLoader.load('pixi', 'pixi-filters', 'hammerjs', 'tweenMax',
      'pixi-filters', 'leonSans', 'headerFont').then(data => {
      console.log('script loaded');
    }).catch(error => console.log(error));

  }

  ngAfterViewInit(): void {
    this.parallaxInst = new Parallax(this.sabrangLogoRef.nativeElement,
      {
        relativeInput: true,
      });
    this.docStyle = document.documentElement.style;
    this.registerEle = document.querySelector('.register');
    this.boundingClientRect = this.registerEle.getBoundingClientRect();
    console.log(this.boundingClientRect);
  }

  ngOnDestroy(): void {
    this.parallaxInst.destroy();
  }

  scrollToAbout(): void {
    this.aboutRef.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  onMouseMove(e) {
    console.log('move');
    const x = e.clientX - this.boundingClientRect.left;
    const y = e.clientY - this.boundingClientRect.top;
    const xc = this.boundingClientRect.width / 2;
    const yc = this.boundingClientRect.height / 2;
    const dx = x - xc;
    const dy = y - (yc + 240);
    this.docStyle.setProperty('--rx', `${dy / -1}deg`);
    this.docStyle.setProperty('--ry', `${dx / 10}deg`);

  }

  onMouseUp() {
    console.log('up');
    this.docStyle.setProperty('--tz', '-12px');
  }

  onMouseLeave() {
    console.log('leave');
    this.docStyle.setProperty('--ty', '0');
    this.docStyle.setProperty('--rx', '0');
    this.docStyle.setProperty('--ry', '0');
  }

  onMouseDown() {
    console.log('down');
    this.docStyle.setProperty('--tz', '-25px');

  }

  navigateToEvents() {
    this.router.navigate(['/events']);
  }
}


