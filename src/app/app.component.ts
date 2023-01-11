import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GithubService } from './Github/github.service';
import { LoaderService } from './Loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private github: GithubService,
    private loadingService: LoaderService
  ) {}
  title = 'github-frontend';
  userNameForm = new FormGroup({
    userName: new FormControl(''),
  });
  handleSubmit() {
    // this.loadingService.setLoading(true);
    this.github
      .getGithubData(this.userNameForm.value.userName || '')
      .subscribe((data) => console.log(data));
    // this.loadingService.setLoading(false);
  }
}
