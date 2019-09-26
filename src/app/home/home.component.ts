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

declare var Parallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit, OnDestroy, AfterViewInit {
  headerImg: string;
  parallaxInst: any;
  @ViewChild('sabrangLogoRef', {static: false}) sabrangLogoRef: ElementRef;

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
  }

  ngOnDestroy(): void {
    this.parallaxInst.destroy();
  }

}
