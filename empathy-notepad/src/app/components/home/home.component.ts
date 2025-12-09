import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { ApiDataService } from '../../service/api-data.service';
import { Survey } from '../../../models/survey.model';
import { CreateSurveyComponent } from '../create-survey/create-survey.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule, CreateSurveyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  surveys: Survey[] = [];
  errorMessage: string | null = null;
  isLoading = true;

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
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
}
