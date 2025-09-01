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
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatStepperModule
],
})
export class AppComponent {
editarPessoa(_t133: any) {
throw new Error('Method not implemented.');
}
  
  pessoas: any[] = [];
  novaPessoa: any = { nome: '', idade: 0, email: '' };
  
Menu: MatMenuPanel<any> | null | undefined;
formGroup: FormGroup<any> | undefined;

  constructor(private http: HttpClient) {
    this.listarPessoas();
  }

   listarPessoas() {
    this.http.get<any[]>('http://localhost:8080/pessoas').subscribe(dados => {
      this.pessoas = dados;
    });
  }

  cadastrarPessoa() {
    this.http.post('http://localhost:8080/pessoas', this.novaPessoa).subscribe(() => {
      this.novaPessoa = { nome: '', idade: 0, email: '' };
      this.listarPessoas();
    });
  }

  excluirPessoa(id: number) {
    if (confirm('Tem certeza que deseja excluir este paciente?')) {
      this.http.delete(`http://localhost:8080/pessoas/${id}`)
        .subscribe(() => this.listarPessoas());
    }
  }
}

