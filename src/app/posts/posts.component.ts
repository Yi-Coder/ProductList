import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {Utils} from '../Utils';
import { _ } from 'underscore';
import{MatDialog} from '@angular/material';
import {DialogDemoComponent} from '../dialog-demo/dialog-demo.component';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  selected = {};
  generatedItems = Object;
  specification$ : Object;
  displayedColumns: {};

  constructor(private dialog: MatDialog, public data:DataService) {

  }

  ngOnInit() {
      this.data.getPosts().subscribe(
      data => {
        this.specification$=data;
      //  Object.keys(this.specification$).forEach(function(key){
        //    this.selected[key] = []
        //  });
        //  console.log(this.specification$);
      })
    };


  ItemsList() {
  this.generatedItems = Utils._cartesianProductObj(this.selected
    //  this.generatedItems = Utils.objectProduct(this.selected);
    //this.displayedColumns = Object.keys(this.specification$);
    //console.log(this.displayedColumns);
    //console.log(this.generatedItems);
    const dialogRef = this.dialog.open(DialogDemoComponent, {
      data: this.generatedItems;
   });
 }

}
