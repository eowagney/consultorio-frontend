import { Component, OnInit } from '@angular/core';
import { PessoaService, Pessoa } from './services/pessoa.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <h1>Cadastro de Pessoas</h1>
      <form (ngSubmit)="salvarPessoa()">
        <input [(ngModel)]="novaPessoa.nome" name="nome" placeholder="Nome" required>
        <input [(ngModel)]="novaPessoa.email" name="email" placeholder="Email" required>
        <button type="submit">Salvar</button>
      </form>
      <ul>
        <li *ngFor="let pessoa of pessoas">
          {{ pessoa.nome }} - {{ pessoa.email }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent implements OnInit {
  pessoas: Pessoa[] = [];
  novaPessoa: Pessoa = { nome: '', email: '' };

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.pessoaService.listar().subscribe(data => this.pessoas = data);
  }

  salvarPessoa() {
    this.pessoaService.salvar(this.novaPessoa).subscribe(() => {
      this.novaPessoa = { nome: '', email: '' };
      this.carregarPessoas();
    });
  }
}
