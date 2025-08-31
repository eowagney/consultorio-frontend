import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatMenuModule, MatMenuPanel } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    RouterOutlet,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatStepperModule
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  pessoas: any[] = [];
  novaPessoa: any = {};
  
Menu: MatMenuPanel<any> | null | undefined;
formGroup: FormGroup<any> | undefined;

  constructor(private http: HttpClient) {
    this.listarPessoas();
  }

  listarPessoas() {
    this.http.get<any[]>('http://localhost:8080/pessoas')
      .subscribe({
        next: data => this.pessoas = data,
        error: err => console.error('Erro ao listar pessoas', err)
      });
  }

  cadastrarPessoa() {
    if (!this.novaPessoa.nome || !this.novaPessoa.idade || !this.novaPessoa.email) {
      alert('Preencha nome e idade!');
      return;
    }

    this.http.post('http://localhost:8080/pessoas', this.novaPessoa)
      .subscribe({
        next: () => {
          this.novaPessoa = {};
          this.listarPessoas();
        },
        error: err => console.error('Erro ao cadastrar pessoa', err)
      });
  }
}

