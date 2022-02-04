import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../SharedServices/common-service.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit {

  public bakeryItems = [];

  constructor(
    private commonService : CommonServiceService
  ) { }

  ngOnInit() {
    this.loadBakeryList();
  }

  loadBakeryList(){
    this.commonService.getBakeryList().subscribe(data => {
      this.bakeryItems = data;
     });
  }

}
