import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BumblebeeVanillaComponent } from './bumblebee-vanilla.component';

describe('BumblebeeVanillaComponent', () => {
  let component: BumblebeeVanillaComponent;
  let fixture: ComponentFixture<BumblebeeVanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BumblebeeVanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BumblebeeVanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
