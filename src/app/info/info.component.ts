import { Component } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  gitData;
  bio;
  repoData;
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

  constructor(private githubData: DataService) {
    this.gitData = this.githubData.getData() || { bio: {}, repo: [] };
    this.bio = this.gitData.bio;
    this.repoData = this.gitData.repo;
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
  }
}
