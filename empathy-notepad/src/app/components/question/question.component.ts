import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Question } from '../../../models/survey.model';

interface QuestionConfigChange {
  questionId: string;
  field: 'randomizeOptions' | 'mandatoryInd';
  value: boolean;
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() questionData!: Question;
  @Input() displayIndex!: number;

  @Output() configChange = new EventEmitter<QuestionConfigChange>();

  onCheckboxChange(field: 'randomizeOptions' | 'mandatoryInd', event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    this.configChange.emit({
      questionId: this.questionData.questionId.toString(), 
      field: field,
      value: isChecked,
    });
  }
}
