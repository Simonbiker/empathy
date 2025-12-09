import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiDataService } from '../../service/api-data.service';
import { Survey, Question } from '../../../models/survey.model'; // Assuming Question is imported here

@Component({
  selector: 'app-manage-survey',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './manage-survey.component.html'
})
export class ManageSurveyComponent implements OnInit {

  surveyForm!: FormGroup;
  isEditMode: boolean = false;
  currentSurveyId: string | null = null;
  isLoadingData: boolean = true; // To manage loading state for edit mode

  constructor(
    private fb: FormBuilder,
    private apiService: ApiDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm(); 

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      if (id) {
        this.isEditMode = true;
        this.currentSurveyId = id;
        this.loadSurveyForEdit(id);
      } else {
        this.isLoadingData = false;
        this.addQuestion(); 
      }
    });
  }

  initForm(): void {
    this.surveyForm = this.fb.group({
      id: [''], 
      title: ['', Validators.required],
      description: ['', Validators.minLength(5)],
      questions: this.fb.array([]) 
    });
  }


  loadSurveyForEdit(id: string): void {
    this.apiService.getSurveyById(id).subscribe({
      next: (surveyData: Survey) => {
        this.setQuestionsArray(surveyData.questions);
        
        this.surveyForm.patchValue(surveyData);
        this.isLoadingData = false;
      },
      error: (err) => {
        console.error('Failed to load survey for editing:', err);
        this.isLoadingData = false;
      }
    });
  }
  

  createQuestionFormGroup(questionId: number, question?: Question): FormGroup {
    return this.fb.group({
      questionId: [questionId],
      questionText: [question ? question.questionText : '', Validators.required],
      mandatoryInd: [question ? question.mandatoryInd : false],
      questionType: [question ? question.questionType : 1],
      
      options: this.fb.array(
        question 
          ? question.options.map(opt => this.fb.control(opt, Validators.required))
          : [this.fb.control('Option 1', Validators.required), this.fb.control('Option 2', Validators.required)]
      ),
      
      randomizeOptionsInd: [question ? question.randomizeOptionsInd : false],
      programmerNotes: [question ? question.programmerNotes : ''],
      instructions: [question ? question.instructions : '']
    });
  }


  setQuestionsArray(questions: Question[]): void {
    const questionControls = questions.map(question => {
        return this.createQuestionFormGroup(question.questionId, question);
    });
    this.surveyForm.setControl('questions', this.fb.array(questionControls));
  }


  // --- GETTERS ---

  get questions(): FormArray {
    return this.surveyForm.get('questions') as FormArray;
  }

  getOptions(questionIndex: number): FormArray {
    return this.questions.at(questionIndex).get('options') as FormArray;
  }

  // --- DYNAMIC CONTROL METHODS ---

  addQuestion(): void {
    const newId = this.questions.length > 0 ? this.questions.length + 1 : 1;
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

  // --- SUBMISSION LOGIC ---

  handleSave(): void {
    this.surveyForm.markAllAsTouched();
    if (this.surveyForm.invalid) {
      alert('Please complete all required fields.');
      return;
    }

    const payload = this.surveyForm.value as Survey;

    if (this.isEditMode && this.currentSurveyId) {
      this.apiService.updateSurvey(this.currentSurveyId, payload).subscribe({
        next: () => {
          alert(`Survey ${this.currentSurveyId} updated successfully!`);
          this.router.navigate(['/surveys']); 
        },
        error: (err) => console.error('Update failed:', err)
      });
    } else {
      const createPayload: Omit<Survey, 'id'> = { ...payload, id: undefined } as Omit<Survey, 'id'>;
      this.apiService.createSurvey(createPayload).subscribe({
        next: (res) => {
          alert(`Survey created with ID: ${res.id}`);
          this.router.navigate(['/surveys']); 
        },
        error: (err) => console.error('Create failed:', err)
      });
    }
  }
}