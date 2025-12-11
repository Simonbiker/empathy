import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Survey } from '../../../models/survey.model';
import { CommonModule } from '@angular/common';
import { PLUS_SVG } from '../../shared/icons/svg-constants';
import { SafeHtmlPipe } from "../../shared/pipes/save-html.pipe";

interface NewQuestionPayload {
    surveyId: string;
    questionType: string;
}

@Component({
  selector: 'app-survey-container',
  standalone: true,
  imports: [CommonModule, CardComponent, SafeHtmlPipe],
  templateUrl: './survey-container.component.html',
  styleUrl: './survey-container.component.css'
})
export class SurveyContainerComponent {
  @Input() surveys: Survey[] = [];
  
  @Input() listTitle: string = 'Available Surveys';

  @Output() editSurvey = new EventEmitter<string>();
  @Output() createSurvey = new EventEmitter<void>();

  @Output() questionTypeSelected = new EventEmitter<NewQuestionPayload>();
  
  svgMap: { [key: string]: string } = {
    'plus_svg': PLUS_SVG
  }

  handleEditClick(id: string): void {
    this.editSurvey.emit(id);
  }

  onQuestionTypeSelect(surveyId: string, type: string): void {
    console.log(`Question type selected: ${type} for Survey ID: ${surveyId}`);
    
    // Emit the necessary data (ID and Type) up to the HomeComponent
    this.questionTypeSelected.emit({ surveyId, questionType: type });
    // TODO: The HomeComponent will now handle the API call to add the question.
  }
}
