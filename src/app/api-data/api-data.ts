import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PostService, Post } from '../services/post';

@Component({
  selector: 'app-api-data',
  imports: [CommonModule],
  templateUrl: './api-data.html',
  styleUrl: './api-data.css',
})
export class ApiData {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getPosts();
  }
}