import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question, Survey } from '../../../models/survey.model';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu/menu.component';
import { QuestionComponent } from '../question/question.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MenuComponent, QuestionComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() questionData!: Question; 
  @Input() displayIndex!: number;
  @Input() surveyData!: Survey;
  
  @Output() editSurvey = new EventEmitter<String>();
  @Output() typeSelected = new EventEmitter<string>(); 

  onQuestionTypeSelect(type: string): void {
    console.log(`Question type selected for survey ${this.surveyData.id}: ${type}`);
    // TODO logic to add question of selected type to the survey
  }
}
