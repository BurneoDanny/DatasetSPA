import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  private URL: string = 'https://datasetspa-default-rtdb.firebaseio.com/collection.json';

  constructor(private http:HttpClient) {}

  getResponse(){
    return this.http.get(this.URL);
  }
}
