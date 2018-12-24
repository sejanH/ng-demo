import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Object;

  constructor(private data: DatabaseService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )
  }

}
