import {Component, OnInit} from '@angular/core';
import {DynamicScriptLoaderServiceService} from '../dynamic-script-loader-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private dynamicScriptLoader: DynamicScriptLoaderServiceService) {


  }

  ngOnInit() {
    // todo: for leonsans
    // this.loadScripts();
  }

  private loadScripts() {
    this.dynamicScriptLoader.load('pixi', 'pixi-filters', 'hammerjs', 'tweenMax',
      'pixi-filters', 'leonSans', 'headerFont').then(data => {
      console.log('script loaded');
    }).catch(error => console.log(error));

  }
}
