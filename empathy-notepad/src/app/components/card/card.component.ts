import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../../../models/survey.model';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input({ required: true }) surveyData!: Survey;  
}
