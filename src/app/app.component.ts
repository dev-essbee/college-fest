import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService) {

  }

  title = 'sabrang';


  ngOnInit(): void {
    // console.log('app-component-on-init');
    this.wowService.init();
  }

  ngOnDestroy(): void {
    this.wowSubscription.unsubscribe();
  }


}
