import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Survey } from '../../../models/survey.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-container',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './survey-container.component.html',
  styleUrl: './survey-container.component.css'
})
export class SurveyContainerComponent {
  @Input() surveys: Survey[] = [];
  
  @Input() listTitle: string = 'Available Surveys';

  @Output() editSurvey = new EventEmitter<string>();
  @Output() createSurvey = new EventEmitter<void>();
  
  handleEditClick(id: string): void {
    this.editSurvey.emit(id);
  }
}
