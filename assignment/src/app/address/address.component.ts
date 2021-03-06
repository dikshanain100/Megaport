import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public searchValue: string;
  public valueSearched: string;
  public megaObject;

  constructor() { }

  ngOnInit() {
    this.megaObject = {
      name: 'Megaport',
      address: {
        office: {
          unit: 'Level 3',
          street: '825 Ann Street',
          suburb: 'Fortitude Valley',
          city: 'Brisbane',
          state: 'Queensland',
          postcode: 4006,
        },
      },
      industry: {
        type: 'Internet and telecommunications',
        asxListed: true,
      },
    };

  }




  search() {
    let testArray = this.searchValue.split('.');
    if (testArray.length > 1) {
      this.valueSearched = this.searchInObject(this.megaObject, this.searchValue);
    }
    else {
      this.valueSearched = this.findByKey(this.megaObject, this.searchValue);
    }
  }

  // function to find the value of requested path
  searchInObject(object, searchPath) {
    var array = searchPath.split('.'); // create an array by spliting path 
    for (let i = 0; i < array.length; i++) {
      var k = array[i];
      if (k in object) {
        object = object[k]; //find inner object/values
      } else {
        return;
      }
    }
    return object;
  }

// function to find the value by property name
  findByKey(object, key) {
    var value;
    Object.keys(object).some((k) => {
      if (k === key) {
        value = object[k];
        return true;
      }
      if (object[k] && typeof object[k] === 'object') {
        value = this.findByKey(object[k], key);
        return value !== undefined;
      }
    });
    return value;
  }



}
