import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-furia-angular',
  templateUrl: './furia-angular.component.html',
  styleUrls: ['./furia-angular.component.scss'],
})
export class FuriaAngularComponent implements OnInit, AfterViewInit {
  constructor(private animationCtrl: AnimationController) {}
  @ViewChild('banco', { read: ElementRef, static: true })
  banco: ElementRef;
  @ViewChild('tanque', { read: ElementRef, static: true })
  tanque: ElementRef;
  @ViewChild('cano', { read: ElementRef, static: true })
  cano: ElementRef;
  @ViewChild('motor', { read: ElementRef, static: true })
  motor: ElementRef;
  @ViewChild('farol', { read: ElementRef, static: true })
  farol: ElementRef;

  aceso = false;
  motorLigado = false;

  balancando: Animation;

  ngAfterViewInit(): void {
    this.balancando = this.animationCtrl
    .create()
    .addElement(this.banco.nativeElement)
    .addElement(this.tanque.nativeElement)
    .addElement(this.cano.nativeElement)
    .addElement(this.motor.nativeElement)
    .addElement(this.farol.nativeElement)
    .duration(200)
    .iterations(Infinity)
    .fromTo('transform', 'translateY(0)', 'translateY(-2px)');
  }

  partida() {
      this.motorLigado = !this.motorLigado;
      if (this.motorLigado){
        this.balancando.play();
      } else {
        this.balancando.stop();
      }
  }

  acendeFarol() {
    this.aceso = !this.aceso;
  }

  ngOnInit(): void {}
}
