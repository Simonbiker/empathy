import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { PLUS_SVG } from '../../shared/icons/svg-constants';
import { SafeHtmlPipe } from "../../shared/pipes/save-html.pipe";
import { Router } from '@angular/router';
import { Survey } from '../../../models/survey.model';

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

constructor(private router: Router) {}
  
  @Input() surveys: Survey[] = [];

  @Input() listTitle: string = 'Available Surveys';

  @Output() createSurvey = new EventEmitter<void>();

  @Output() questionTypeSelected = new EventEmitter<NewQuestionPayload>();
  
  svgMap: { [key: string]: string } = {
    'plus_svg': PLUS_SVG
  }

  trackById(index: number, item: any): string {
      return item.id;
    }

  onQuestionTypeSelect(surveyId: string, type: string): void {
    console.log(`Question type selected: ${type} for Survey ID: ${surveyId}`);
    this.questionTypeSelected.emit({ surveyId, questionType: type });
  }

  goToEdit(id: string): void {
    this.router.navigate(['/surveys/edit', id]);
  }

}
