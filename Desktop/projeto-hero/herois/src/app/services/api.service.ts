import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  public apiKey:'394772d23dfb455a9fc5ee31ce8ee53a';

  constructor(public http : HttpClient) { }

  getNews(){
    return this.http.get('https://heroes.globalthings.net/api/Heroes?api_key='+this.apiKey);
  }









}
