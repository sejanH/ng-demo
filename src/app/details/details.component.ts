import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post$: Object;
  constructor(private data: DatabaseService, private router: ActivatedRoute) {
    //this.router.params.subscribe(params => this.post$ = params.id)
    this.post$ = this.router.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.data.getPost(this.post$).subscribe(
      data => this.post$ = data
    )
  }

}
