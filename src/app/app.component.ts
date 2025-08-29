import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  pessoas: any[] = [];
  novaPessoa: any = {};

  constructor(private http: HttpClient) {
    this.listarPessoas();
  }

  listarPessoas() {
    this.http.get<any[]>('/pessoas')
      .subscribe({
        next: data => this.pessoas = data,
        error: err => console.error('Erro ao listar pessoas', err)
      });
  }

  cadastrarPessoa() {
    if (!this.novaPessoa.nome || !this.novaPessoa.idade) {
      alert('Preencha nome e idade!');
      return;
    }

    this.http.post('/pessoas', this.novaPessoa)
      .subscribe({
        next: () => {
          this.novaPessoa = {};
          this.listarPessoas();
        },
        error: err => console.error('Erro ao cadastrar pessoa', err)
      });
  }
}
