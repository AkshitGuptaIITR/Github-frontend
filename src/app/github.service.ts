import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getGithubData(userName: string) {
    let url = `http://localhost:5000/api/v1/github/${userName}`;
    return this.http.get(url);
  }
}
