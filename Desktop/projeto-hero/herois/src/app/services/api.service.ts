import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = 'https://heroes.globalthings.net/api/Heroes'
  private options: any = { headers:new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})};

  constructor(private http: HttpClient) { }


  create(data:any) {
    return this.http.post(`${this.api}posts`, JSON.stringify(data), this.options);
  }

  read() {
    return this.http.get(`${this.api}posts`)
  }

  update(data:any) {
    return this.http.put(`${this.api}posts/1`, JSON.stringify(data),this.options)
  }

  delete() {
    return this.http.delete(`${this.api}posts/1`)

  }






}
