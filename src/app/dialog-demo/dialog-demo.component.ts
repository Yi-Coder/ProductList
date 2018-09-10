import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { _ } from 'underscore';
import {MatTableDataSource} from '@angular/material';

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
  dataSource: item [];
  itemsToSubmit: item [];

  //columnsToDisplay:Object;

  constructor(
  public dialogRef: MatDialogRef<DialogDemoComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Object) {


  }

  ngOnInit() {

    this.itemsToSubmit  = this.data;
    //console.log(this.dataSource);
    //console.log (_.keys(this.dataSource));
    console.log (this.itemsToSubmit);
    //console.log (_.keys(this.itemsToSubmit));
  }

onNoClick(): void {
  this.dialogRef.close();
}


}
