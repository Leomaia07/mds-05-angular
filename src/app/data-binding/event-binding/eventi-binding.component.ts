import { Component } from '@angular/core';

@Component({
  selector: 'app-eventi-binding',
  imports: [],
  templateUrl: './eventi-binding.component.html',
  styleUrl: './eventi-binding.component.scss'
})
export class EventiBindingComponent {

  message: string = 'Clique no botão para mudar esta mensagem';

  changeMessage() {
    this.message = 'Você clicou no botão';
  }

  returnToDefaultMessage() {
    this.message = 'Clique no botão para mudar esta mensagem'
  }
}
