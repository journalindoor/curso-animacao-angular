import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-furia-angular',
  templateUrl: './furia-angular.component.html',
  styleUrls: ['./furia-angular.component.scss'],
})
export class FuriaAngularComponent implements OnInit, AfterViewInit {
  @ViewChild('furia', { read: ElementRef, static: true })
  elementToAnimate: ElementRef;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit(): void {
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(this.elementToAnimate.nativeElement)
      .duration(2000)
      .easing('ease-in')
      .delay(2000)
      .iterations(4)
      .fromTo('opacity', '1', '0')
      .fromTo('transform', 'scale(1)', 'scale(0)');

    animation.play();
  }

  ngOnInit(): void {}
}
