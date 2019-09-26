import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsHomeComponent } from './sponsors-home.component';

describe('SponsorsHomeComponent', () => {
  let component: SponsorsHomeComponent;
  let fixture: ComponentFixture<SponsorsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
