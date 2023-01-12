import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';
import { LoaderService } from '../Loader/loader.service';
import { ErrorMessageService } from '../ErrorMessage/error-message.service';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(
    private http: HttpClient,
    private loadingService: LoaderService,
    private err: ErrorMessageService
  ) {}

  getGithubData(userName: string) {
    this.loadingService.setLoading(true);
    let url = `http://localhost:5000/api/v1/github/${userName}`;
    return this.http.get(url).pipe(
      finalize(() => {
        this.loadingService.setLoading(false);
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error ${error.error.message}`;
        } else {
          errorMessage = `Error Status: ${error.status} ${error.statusText}`;
        }
        this.err.setError(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
