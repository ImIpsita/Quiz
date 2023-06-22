import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

    public viewQuiz(){
       return this._http.get(`${baseUrl}/quiz/`)
    }

    public addQuiz(quiz){
      return this._http.post(`${baseUrl}/quiz/`,quiz)
   }

   public deleteQuiz(qId){
    return this._http.delete(`${baseUrl}/quiz/${qId}`);
  }

  public getQuiz(qId){
    return this._http.get(`${baseUrl}/quiz/${qId}`)
  }

  public updateQuiz(updatequiz){
    return this._http.put(`${baseUrl}/quiz/`,updatequiz)
  }

  public getAllQuizsBycatId(catId){
     return this._http.get(`${baseUrl}/quiz/catagory/${catId}`)
  }

  public getAllQuizzes(){
    return this._http.get(`${baseUrl}/quiz/`)
  }

 
}
