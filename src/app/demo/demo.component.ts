import { Component, OnInit } from '@angular/core';
import { DemodbService } from '../demodb.service'
import { Observable } from 'rxjs'
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  users$: Object; 
  constructor(private ddb: DemodbService) { }

  ngOnInit() {
    this.ddb.getUsers().subscribe(
      ddb => this.users$ = ddb
    )
  }

}
