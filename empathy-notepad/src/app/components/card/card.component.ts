import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Survey } from '../../../models/survey.model';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu/menu.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() surveyData!: Survey;
  
  @Output() editSurvey = new EventEmitter<Survey>(); 

  onEditClick(): void {
    this.editSurvey.emit(this.surveyData); 
  }

  onQuestionTypeSelect(type: string): void {
    console.log(`Question type selected for survey ${this.surveyData.id}: ${type}`);
    // TODO logic to add question of selected type to the survey
  }
}
