import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogDemoComponent implements OnInit {

    itemsToSubmit:Object;

  constructor(
  public dialogRef: MatDialogRef<DialogDemoComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Object) {}

  ngOnInit() {
    this.itemsToSubmit = this.data;
  }

onNoClick(): void {
  this.dialogRef.close();
}


}
