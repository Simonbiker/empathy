import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private apiUrl = 'https://techtestapi1.azurewebsites.net';

  constructor(private http: HttpClient) { }

  // TODO Get all serveys
  // TODO Get serveys by user id
  // TODO Post new serveys
  // TODO Update serveys
}
