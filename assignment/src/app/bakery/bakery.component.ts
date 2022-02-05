import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../SharedServices/common-service.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit {

  public bakeryItems = [];
  public searchValue: string;
  public bakeryForm: FormGroup;
  public submitted = false;


  constructor(
    private commonService: CommonServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loadBakeryList();
    this.createForm();
  }

  createForm(){
    this.bakeryForm = this.fb.group({
      id: ['', Validators.required],
      type: ['',  Validators.required],
      name: ['',  Validators.required],
      topping: ['',  Validators.required],
    });
  }


  get bakeryFormControl() {
    return this.bakeryForm.controls;
  }

  // on form submit
  onSubmit() {
    this.submitted = true;
    if (this.bakeryForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.bakeryForm.value);
    }
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
