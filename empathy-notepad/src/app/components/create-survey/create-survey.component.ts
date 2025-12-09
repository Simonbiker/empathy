import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiDataService } from '../../service/api-data.service';
import { Survey } from '../../../models/survey.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-survey',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-survey.component.html',
  styleUrl: './create-survey.component.css'
})
export class CreateSurveyComponent implements OnInit {

  surveyForm!: FormGroup;

  constructor(private apiService: ApiDataService,
              private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.maxLength(200)], // to insure people actually write something not AI
      questions: this.fb.array([
        this.createQuestionFormGroup(1) // Start with one default question
      ])
    });
  }


  createQuestionFormGroup(questionId: number): FormGroup {
    return this.fb.group({
      questionId: [questionId],
      questionText: ['', Validators.required],
      mandatoryInd: [false],
      questionType: [1],
      
      options: this.fb.array([
        this.fb.control('Option 1', Validators.required),
        this.fb.control('Option 2', Validators.required)
      ]),
      
      randomizeOptionsInd: [false],
      programmerNotes: [''],
      instructions: ['']
    });
  }


  // GETTERS 
  get questions(): FormArray {
    return this.surveyForm.get('questions') as FormArray;
  }

  getOptions(questionIndex: number): FormArray {
    return this.questions.at(questionIndex).get('options') as FormArray;
  }

  // Controls
  addQuestion(): void {
    const newId = this.questions.length + 1;
    this.questions.push(this.createQuestionFormGroup(newId));
  }
  
  removeQuestion(index: number): void {
    this.questions.removeAt(index);
  }

  addOption(questionIndex: number): void {
    this.getOptions(questionIndex).push(this.fb.control('', Validators.required));
  }

  removeOption(questionIndex: number, optionIndex: number): void {
    this.getOptions(questionIndex).removeAt(optionIndex);
  }

  createNewSurvey(): void {
    if (this.surveyForm.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    const surveyPayload: Omit<Survey, 'id'> = this.surveyForm.value;

    this.apiService.createSurvey(surveyPayload).subscribe({
      next: (response: Survey) => {
        console.log('Survey created successfully!', response);
        alert(`Survey created with ID: ${response.id}`);
        this.surveyForm.reset(); // Clear form after success
      },
      error: (err) => {
        console.error('Failed to create survey:', err);
      }
    });
  }
}
