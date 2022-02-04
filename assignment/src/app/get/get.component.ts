import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../SharedServices/common-service.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  public status: string;
  public tableHeader = [];
  public tableData = [];
  public error: string;
  public foundError: boolean = false;

  constructor(
    private commonService: CommonServiceService
  ) { }

  ngOnInit() {
    this.status = 'Active';  //can change status here
    this.getLocations(this.status);
    this.setTableHeader();
  }

  setTableHeader() {
    this.tableHeader = this.commonService.getLocationTableHeaders();
  }

  // Fetch reusable function that fetches data based on status = 'Active' and diversityZones having 'megaport'
  getLocations(status) {
    this.commonService.getPortList().subscribe(
      res => {
        if (res.data) {
          this.tableData = res.data.filter(item =>
            item.status == status &&
            item.diversityZones.megaport
          )

          this.foundError = false;
        }
        else {
          this.foundError = true;
          this.error = this.commonService.NO_RECORD_FOUND;
        }
      },
      error => {
        this.foundError = true;
        this.error = this.commonService.NO_RECORD_FOUND;
      }
    )

  }

}
