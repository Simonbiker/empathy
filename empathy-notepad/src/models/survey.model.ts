
export interface Question {
      questionId: number;
      questionText: string;
      mandatoryInd:boolean;
      questionType: number;
      options: string[];
      randomizeOptionsInd: boolean;
      programmerNotes: string;
      instructions: string;
}

export interface Survey {
      id: string;
      title: string;
      description: string;
      questions: Question[];
}