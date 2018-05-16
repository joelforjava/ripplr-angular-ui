import { Component, OnInit } from '@angular/core';
import { Ripple, RippleService } from '../ripple.service';

@Component({
  moduleId: module.id,
//  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.css']
})
export class RippleComponent implements OnInit {
  ripples: Ripple[] = [];
  constructor(private rippleService: RippleService) {
    this.rippleService.getRipples()
        .then(ripples => {
          this.ripples = ripples;
          if (ripples) {
            for (let ripple of ripples) {
              console.log(`Found a ripple! ${ripple.id}`);
            }
          } else {
            console.log("Can't process ripples");
          }
        })
          .catch(this.handleError);

  }

  ngOnInit() {
  }
  private handleError(error: any): Promise<any> {
    console.log("An error has occurred: " + error);
    return Promise.reject(error.message || error);
  }

}
