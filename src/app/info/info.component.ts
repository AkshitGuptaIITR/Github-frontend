import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';
import { GithubService } from '../Github/github.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  userName: any = '';

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('userName');
  }
  public gitData;
  bio: any;
  repoData: any;
  paginate: Array<Array<any>> = [[]];
  currentPage: number = 1;

  handleNext = () => {
    if (this.currentPage < this.paginate.length) {
      this.currentPage = this.currentPage + 1;
    }
  };
  handleBack = () => {
    if (this.currentPage - 1 > 0) {
      this.currentPage = this.currentPage - 1;
    }
  };

  handleSelection = (i: number) => (this.currentPage = i + 1);

  constructor(
    private githubData: DataService,
    private githubApi: GithubService,
    private route: ActivatedRoute,
  ) {
    this.gitData = this.githubData.getData() || { bio: {}, repo: [] };
    if (!this.githubData.getData()) {
      (async () =>
        await githubApi
          .getGithubData(this.route.snapshot.paramMap.get('userName') || '')
          .subscribe((data) => {
            this.gitData = data;
            this.handleData(data);
          }))();
    } else {
      this.handleData(this.gitData);
    }
  }
  handleData = (data: any) => {
    this.bio = data.bio;
    this.repoData = data.repo;
    this.handlePagination();
  };

  handlePagination = () => {
    this.repoData.map((data: object) => {
      if (this.paginate[this.paginate.length - 1].length < 10) {
        this.paginate[this.paginate.length - 1].push(
          data || { name: '', language: '', description: '' }
        );
      } else {
        this.paginate.push([
          data || { name: '', language: '', description: '' },
        ]);
      }
    });
  };
}
