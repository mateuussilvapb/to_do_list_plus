import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EmitterService } from 'src/app/services/shared/emitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public resultado: string | null = '';

  constructor(private router: Router, private emitter: EmitterService) {}

  ngOnInit(): void {
    this.router.navigate(['/listSections']);
    // this.mostrarJanelaInicial();
  }

  private mostrarJanelaInicial() {
    this.resultado = window.prompt(
      'Para iniciar a aplicação, é preciso informar o nome da primeira seção.\nInforme o nome da primeira seção: '
    );

    while (this.resultado === null || this.resultado === '') {
      this.resultado = window.prompt(
        'Nenhuma seção foi informada.\nPor favor, informe a primeira seção: '
      );
    }
    this.emitter.setInfo(this.resultado);
    this.router.navigate(['/listSections']);
  }
}
