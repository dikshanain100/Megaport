import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  constructor(private router: Router) { }


  //  To navigate to different modules 
  redirectModule(module) {
    if (module == 1) {
      this.router.navigate(['/bakery']);
    }
    else if (module == 2) {
      this.router.navigate(['/address']);
    }
    else {
      this.router.navigate(['/get']);
    }
  }
}
