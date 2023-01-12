import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private githubData: any;

  constructor() {}

  setGithubData(data: any) {
    this.githubData = data;
  }

  getData() {
    return this.githubData;
  }
}
