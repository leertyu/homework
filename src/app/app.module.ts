import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/common/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ValidateErrorComponent } from './pages/validate/validate-error.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorDialogComponent } from './pages/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesComponent } from './pages/questions/categories/categories.component';
import { QuestionComponent } from './pages/questions/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidateErrorComponent,
    ErrorDialogComponent,
    CategoriesComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButton,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
