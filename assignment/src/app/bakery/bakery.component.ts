import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../SharedServices/common-service.service';
import { Bakery } from './bakery';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit {

  public bakeryItems: Bakery[] = [];
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

  createForm() {
    this.bakeryForm = this.fb.group({
      id: ['', Validators.required],
      type: ['', Validators.required],
      name: ['', Validators.required],
      topping: ['', Validators.required],
    });
  }


  get bakeryFormControl() {
    return this.bakeryForm.controls;
  }

  // on form submit
  onSubmit() {
    this.submitted = true;
    if (this.bakeryForm.valid) {
      console.table(this.bakeryForm.value);
      this.commonService.postBakeryItems(this.bakeryForm.value).subscribe(data => {
        this.resetForm();
        this.loadBakeryList();
        alert('Bakery Item added succesfully!!!\n Item present at the bottom of table.');
      });
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

  // reset form
  resetForm() {
    this.bakeryForm.reset();
    this.bakeryForm.markAsPristine();
    this.bakeryForm.markAsUntouched();
    this.submitted = false;
  }
}
