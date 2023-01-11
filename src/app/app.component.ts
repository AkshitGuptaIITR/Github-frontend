import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'github-frontend';
  userNameForm = new FormGroup({
    userName: new FormControl(''),
  });
  handleSubmit() {
    console.log(this.userNameForm.value);
  }
}
