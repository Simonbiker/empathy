export interface Question {
      questionId: number;
      questionText: string;
      mandatoryInd:boolean;
      questionType: number;
      questions: string[];
      randomizeOptionsInd: boolean;
      programmerNotes: string;
      instructions: string;
}

export interface SurveyDto {
      id: number;
      title: string;
      description: string;
      questions: Question[];
}