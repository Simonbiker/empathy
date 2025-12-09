import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../../models/survey.model';


type NewSurveyBody = Omit<Survey, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private apiUrl = 'https://techtestapi1.azurewebsites.net';

  constructor(private http: HttpClient) { }

  getSurveys(): Observable<Survey[]> { 
    return this.http.get<Survey[]>(`${this.apiUrl}/survey`); // using the singular resource path /survey instead of the plural /surveys
  }

  // TODO Get serveys by user id
  getSurveyById(id: string): Observable<Survey> {
    return this.http.get<Survey>(`${this.apiUrl}/surveys/${id}`);
  }
  // TODO Post new serveys
  createSurvey(newSurveyData: NewSurveyBody): Observable<Survey> {
    return this.http.post<Survey>(`${this.apiUrl}/survey`, newSurveyData);
  }
  // TODO Update serveys

  // TODO Delete serveys
  
}
