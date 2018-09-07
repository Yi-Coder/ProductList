import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

import {MdDialog} from '@angular/material';

import {Utils} from '../Utils';

import { _ } from 'underscore';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  selected = {};
  generatedItems = [];
  specification$ : Object;

    constructor(private data:DataService, public dialog: MdDialog) {
    }

    ngOnInit() {
      this.data.getPosts().subscribe(
        data => this.specification$=data
      );
    }

  Object.keys(this.specification$).forEach(function(key) {
    this.selected[key] = []
  })


  ItemsList( ): void{
    this.generatedItems = Utils._cartesianProductObj(this.selected);
    this.displayedColumns =Object.keys(this.specification$);
    console.log(this.displayedColumns);
    console.log(this.generatedItems);

    let dialogRef = this.dialog.open(DialogDemoComponent, {
      width: '600px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
 }



}
