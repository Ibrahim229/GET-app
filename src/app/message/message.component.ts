import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
    console.log(this.post)
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
