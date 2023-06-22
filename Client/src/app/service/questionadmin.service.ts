import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from './quiz.service';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionadminService {

 
  constructor(private _http:HttpClient) { }
   
  public getQuizQuestions(qid){
    return this._http.get(`${baseUrl}/question/quiz/${qid}`)
  }

  public addQuizQuestion(question){
    return this._http.post(`${baseUrl}/question/`,question)

  }

  public getQuestionById(qstnid){
    return this._http.get(`${baseUrl}/question/${qstnid}`)
  }

  public updateQstn(question){
    return this._http.put(`${baseUrl}/question/`,question)
  }

  public delete(qstnId){
    return this._http.delete(`${baseUrl}/question/${qstnId}`)
  }

  public getTotalmark(questions){
    return this._http.post(`${baseUrl}/question/validatemark`,questions)
  }

  public getAllQuestion(){
    return this._http.get(`${baseUrl}/question/`)
  }
 
}
