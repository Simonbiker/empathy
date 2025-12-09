import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { ApiDataService } from '../../service/api-data.service';
import { Survey } from '../../../models/survey.model';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule],
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

  goToEdit(id: string): void {
    this.router.navigate(['/surveys/edit', id]);
  }

  goToCreate(): void {
    this.router.navigate(['/surveys/create']);
  }

}
