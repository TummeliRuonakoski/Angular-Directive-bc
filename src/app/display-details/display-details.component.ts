import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  displayDetails = false;
  loki = [] as any;
  itemIndex: number = 0;
  current: string = new Date().toUTCString();


  onClick(){
    this.displayDetails = !this.displayDetails;
    this.itemIndex = this.loki.length + 1;
    this.loki.push(this.current + "+0200 (Itä-Euroopan normaaliaika) " + this.itemIndex);
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
