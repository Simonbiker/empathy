import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Question } from '../../../models/survey.model';

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
}
