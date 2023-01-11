import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoaderService } from '../Loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(
    private http: HttpClient,
    private loadingService: LoaderService
  ) { }

  getGithubData(userName: string) {
    this.loadingService.setLoading(true);
    let url = `http://localhost:5000/api/v1/github/${userName}`;
    return this.http.get(url).pipe(
      finalize(() => {
        this.loadingService.setLoading(false);
      })
    );
  }
}
