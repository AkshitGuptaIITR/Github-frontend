import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private github: GithubService) {
    this.github
      .getGithubData('AkshitGuptaIITR')
      .subscribe((data) => console.log(data));
  }
  title = 'github-frontend';
  userNameForm = new FormGroup({
    userName: new FormControl(''),
  });
  handleSubmit() {
    console.log(this.userNameForm.value);
  }
}
