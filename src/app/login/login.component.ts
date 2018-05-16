import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../alert.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  moduleId: module.id,
//  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.formLogin(this.model.username, this.model.password)
                              .subscribe(
                                data => {
                                  console.log(`successful? - ${data}`);
                                  this.router.navigate([this.returnUrl]);
                                },
                                error => {
                                  console.log(`error? - ${error}`);
                                  this.alertService.error(error);
                                  this.loading = false;
                                },
                                () => {
                                  console.log('complete. apparently');
                                }
                              );
  }

}
