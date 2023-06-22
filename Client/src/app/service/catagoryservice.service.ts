import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CatagoryserviceService {

  constructor(private _http:HttpClient) { }
  //load all categories
  public categories(){
     return this._http.get(`${baseUrl}/catagory/`);
  }

  //add catagory
  public addCatagory(catagory){

    return this._http.post(`${baseUrl}/catagory/`,catagory);
  }

  public updateCatagory(updatecatagory){
    return this._http.put(`${baseUrl}/catagory/`,updatecatagory);
  }

  public deleteCatagory(catId){
    return this._http.delete(`${baseUrl}/catagory/${catId}`);
  }

  public getCatagory(catId){
    return this._http.get(`${baseUrl}/catagory/${catId}`);
  }

  public getAllCatagory(){
    return this._http.get(`${baseUrl}/catagory/`);
  }

}
