import {Component, HostListener, OnInit} from '@angular/core';
import {DynamicScriptLoaderServiceService} from '../dynamic-script-loader-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  boundingClientRect;
  docStyle;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderServiceService) {
  }

  ngOnInit() {
    // todo: for leonsans
    // this.loadScripts();
    this.docStyle = document.documentElement.style;
    const aElem = document.querySelector('a');
    this.boundingClientRect = aElem.getBoundingClientRect();
  }

  private loadScripts() {
    this.dynamicScriptLoader.load('pixi', 'pixi-filters', 'hammerjs', 'tweenMax',
      'pixi-filters', 'leonSans', 'headerFont').then(data => {
      console.log('script loaded');
    }).catch(error => console.log(error));

  }

  onMouseMove(e) {
    const x = e.clientX - this.boundingClientRect.left;
    const y = e.clientY - this.boundingClientRect.top;

    const xc = this.boundingClientRect.width / 2;
    const yc = this.boundingClientRect.height / 2;

    const dx = x - xc;
    const dy = y - yc;

    this.docStyle.setProperty('--rx', '$(dy/-1)deg');
    this.docStyle.setProperty('--ry', '$(dx/10)deg');
  }


  onMouseLeave(e) {
    this.docStyle.setProperty('--ty', '0');
    this.docStyle.setProperty('--rx', '0');
    this.docStyle.setProperty('--ry', '0');
  }

  onMouseDown(e) {
    this.docStyle.setProperty('--tz', '-25px');
  }

  onMouseUp(e) {
    this.docStyle.setProperty('--tz', '-12px');
  }
}
