import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiDataService } from '../../service/api-data.service';
import { Survey } from '../../../models/survey.model';
import { SurveyContainerComponent } from "../survey-container/survey-container.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SurveyContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  surveys: Survey[] = [];
  errorMessage: string | null = null;
  isLoading = true;

  constructor(private apiDataService: ApiDataService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys() {
    this.apiDataService.getSurveys().subscribe({
      next: (data) => {
        console.log('Surveys loaded', data);
        this.surveys = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load surveys', err);
        this.errorMessage = 'Could not load data.';
        this.isLoading = false;
      }
    });
  }  

  goToCreate(): void {
    this.router.navigate(['/surveys/create']);
  }

}
