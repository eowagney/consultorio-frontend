import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export class Pessoa {
  nome = '';
  email = '';
}

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PessoaComponent {
  novaPessoa: Pessoa = new Pessoa();
  pessoas: Pessoa[] = [];

  adicionarPessoa() {
    this.pessoas.push({ ...this.novaPessoa }); // adiciona cópia
    this.novaPessoa = new Pessoa();           // reseta formulário
  }
}
