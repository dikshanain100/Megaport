import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../SharedServices/common-service.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit {

  public bakeryItems = [];
  public searchValue: string;

  constructor(
    private commonService: CommonServiceService
  ) { }

  ngOnInit() {
    this.loadBakeryList();
  }

  loadBakeryList() {
    this.commonService.getBakeryList().subscribe(data => {
      this.bakeryItems = data;
    });
  }

  // sort table column in ascending based on column name
  sortByAsc(value) {
    this.bakeryItems.sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  // sort table column in descending based on column name
  sortByDesc(value) {
    this.bakeryItems.sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

}
