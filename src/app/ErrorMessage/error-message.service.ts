import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  private isError: boolean = false;
  private message: string = '';

  constructor() { }

  setError(message: string) {
    this.isError = true;
    this.message = message;
    setTimeout(() => {
      this.isError = false;
      this.message = '';
    }, 2500);
  }

  getError() {
    return this.isError;
  }

  getMessage() {
    return this.message;
  }
}
