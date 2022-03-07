import { Component, OnInit } from '@angular/core';
import { AuthServices } from "../../services/auth-services";
import { Router } from '@angular/router';
import { Utility } from "../../utils/utils"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthServices,
    public router: Router,
    public util: Utility,
  ) { }

  ngOnInit() {}

  signUp(email, password) {
    this.util.loading(true)
    this.authService.registerUser(email.value, password.value)      
      .then((res) => {
        this.util.loading(false)
        this.util.alert({
          header: "Register Success",
          message: "Register Successful",
          buttons: [{
            text: 'Confirm',
            role: 'Confirm',
            id: 'confirm-button',
            handler: () => {
              this.router.navigateByUrl('/', { replaceUrl: true });
            }
          }]
        })
      }).catch((error) => {
        this.util.loading(false)
        this.util.alert({
          header: "Register Failed",
          message: this.util.parseFbErrorCode(error.code),
          buttons: ["OK"]
        })
      })
  }
}
