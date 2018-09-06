import { Component, OnInit } from '@angular/core';
import {Specification} from '../model/Specification';
import {FormControl} from '@angular/forms';
import { MatSelectModule } from '@angular/material';

//import {MultiSelectModule} from 'primeng/multiselect';
//import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
     ngOnInit(){

     }

}
