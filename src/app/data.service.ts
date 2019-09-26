import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  getHeadlines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+environment.apiKey);
  }
  byCategory(category){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category='+ category +'&apiKey='+environment.apiKey);
    
  }
}
