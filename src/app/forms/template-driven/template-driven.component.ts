import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {

  pessoa = {
    nome: '',
    sobrenome: '',
    endereco: '',
    telefone: '',

  }
}


