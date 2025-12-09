import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Survey } from '../../../models/survey.model';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() surveyData!: Survey;
  
  @Output() editSurvey = new EventEmitter<Survey>(); 

  onEditClick(): void {
    this.editSurvey.emit(this.surveyData); 
  }
}
