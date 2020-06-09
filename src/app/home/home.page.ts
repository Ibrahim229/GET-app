import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) {
    this.getPosts()
  }
  posts: Post[] = [];

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getPosts() {
    this.data.getPosts().subscribe(res => {
      this.posts = res;
    })
  }

}
