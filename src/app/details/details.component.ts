import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post$: Object;
  constructor(private data: DatabaseService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.post$ = params.id)
   }

  ngOnInit() {
    this.data.getPost(this.post$).subscribe(
      data => this.post$ = data
    )
  }

}
