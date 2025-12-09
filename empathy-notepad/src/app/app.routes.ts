import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageSurveyComponent } from './components/manage-survey/manage-survey.component';


export const routes: Routes = [
  { path: 'surveys', component: HomeComponent },  
  { path: 'surveys/create', component: ManageSurveyComponent },
  { path: 'surveys/edit/:id', component: ManageSurveyComponent },  
  { path: '', redirectTo: '/surveys', pathMatch: 'full' },
  { path: '**', redirectTo: '/surveys' }
];