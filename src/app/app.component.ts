import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  pessoas = [
    { id: 1, nome: 'João da Silva', idade: 30 },
    { id: 2, nome: 'Maria Souza', idade: 25 },
    { id: 3, nome: 'Carlos Pereira', idade: 40 }
  ];
}
