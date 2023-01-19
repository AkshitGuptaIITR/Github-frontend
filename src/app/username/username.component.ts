import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { GithubService } from '../Github/github.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent {
  private gitData: any;

  constructor(
    private github: GithubService,
    private _router: Router,
    private githubData: DataService
  ) {}
  userNameForm = new FormGroup({
    userName: new FormControl(''),
  });

  handleSubmit() {
    this.github
      .getGithubData(this.userNameForm.value.userName || '')
      .subscribe((data) => {
        this.gitData = data;
        this.handleData();
      });
  }

  handleData() {
    this._router.navigate([this.userNameForm.value.userName]);
    this.githubData.setGithubData(this.gitData);
  }
}
