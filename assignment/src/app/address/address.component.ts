import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var megaObject = {
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
    }
      ;

    let value = this.findValue(megaObject, 'industry.asxListed');  //set the path here as second parameter
    console.log('value : ', value);   //this is your result

  }

  // function to find the value of requested path
  findValue(object, searchPath) {
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

}
