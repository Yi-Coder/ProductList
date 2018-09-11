import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { _ } from 'underscore';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {PageEvent} from '@angular/material';


export interface Item {
    Chassis: string;
    Processor: string;
    RAID: string;
    PSU: string;
    Memeory: string;
    Rails: string;
    HardDrive: string;
}



@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogDemoComponent implements OnInit {

  displayedColumns: string[] = ['Chassis', 'Processor', 'RAID', 'PSU','Memeory','Rails','HardDrive'];
  itemsToSubmit: Item;
  dataSource = new MatTableDataSource<Item>(this.data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //columnsToDisplay:Object;

  constructor(
  public dialogRef: MatDialogRef<DialogDemoComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {


  }

  ngOnInit() {

    this.itemsToSubmit  = this.data;
    this.dataSource.paginator = this.paginator;
    //console.log(this.dataSource);
    //console.log (_.keys(this.dataSource));
    console.log (this.itemsToSubmit);
    //console.log (_.keys(this.itemsToSubmit));
  }

onNoClick(): void {
  this.dialogRef.close();
}


}

export class PaginatorConfigurableExample {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
