
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

export interface Survey {
      id: number;
      title: string;
      description: string;
      questions: Question[];
}