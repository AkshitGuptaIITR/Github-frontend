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

  constructor(private githubData: DataService) {
    this.gitData = this.githubData.getData() || { bio: {}, repo: [] };
    this.bio = this.gitData.bio;
    this.repoData = this.gitData.repo;
  }
}
