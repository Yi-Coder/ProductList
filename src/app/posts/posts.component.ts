import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  //selected= {Chassis:[],processor:[],RAID:[]};
  selected = {}
  Object.keys(this.specification$).forEach(function(key) {
    this.selected[key] = [];
  })
  specification$:Object;
  constructor(private data:DataService) {
  }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.specification$=data
    );
  //  console.log(selected)

  }

}
