import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public post: Post;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
  
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data.getPostById(parseInt(id)).subscribe(res => {
      this.post = res;
      console.log(res)
    })
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Posts' : '';
  }
}
