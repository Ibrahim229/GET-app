import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: Http) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map((res: Response) => res.json().map((post: Post) => new Post().deserialize(post))));
  }

  public getPostById(id: number): Observable<Post> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(map((res: Response) => new Post().deserialize(res.json())))
  }
}
