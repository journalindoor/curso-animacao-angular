import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bumblebee-vanilla',
  templateUrl: './bumblebee-vanilla.component.html',
  styleUrls: ['./bumblebee-vanilla.component.scss'],
})
export class BumblebeeVanillaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    function partida() {
      const motor = document.querySelectorAll('.bumblebee .motor');
      motor[0].addEventListener('click', () => {
        const movel = document.querySelectorAll('.bumblebee .movel');
        let i;
        for (i = 0; i < movel.length; i++) {
          movel[i].classList.toggle('balanca');
        }
      });
    }

    function ligaFarol() {
      const farol = document.querySelectorAll('.bumblebee .farol');
      farol[0].addEventListener('click', () => {
        farol[0].classList.toggle('aceso');
      });
    }

    partida();
    ligaFarol();
  }
}
