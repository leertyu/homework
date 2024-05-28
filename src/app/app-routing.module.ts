import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/common/login.component';
import { QuestionComponent } from './pages/questions/question/question.component';
import { CategoriesComponent } from './pages/questions/categories/categories.component';
import { ScoreComponent } from './pages/questions/score/score.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'score', component: ScoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
