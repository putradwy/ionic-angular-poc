import { Component, OnInit } from '@angular/core';
import { AuthServices } from "../../services/auth-services";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthServices,
    public router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  signUp(email, password) {
    this.authService.registerUser(email.value, password.value)      
      .then(async (res) => {
        const alert = await this.alertController.create({
          header: "Register Success",
          message: "Register Successful",
          buttons: [{
            text: 'Confirm',
            role: 'Confirm',
            id: 'confirm-button',
            handler: () => {
              this.router.navigateByUrl('/', { replaceUrl: true });
            }
          }],
        })
        alert.present();
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
