import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  FormsModule
HttpClientModule