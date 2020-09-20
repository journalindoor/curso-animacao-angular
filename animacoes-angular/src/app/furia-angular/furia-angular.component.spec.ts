import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuriaAngularComponent } from './furia-angular.component';

describe('FuriaAngularComponent', () => {
  let component: FuriaAngularComponent;
  let fixture: ComponentFixture<FuriaAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuriaAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuriaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
