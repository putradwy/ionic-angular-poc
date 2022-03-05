import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { AuthServices } from "../../services/auth-services";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    private alertController: AlertController,
    public authService: AuthServices,
  ) { }

  ngOnInit() {}

  // async onLogin () {
  //   const email = this.signInPage.value.email != null;
  //   const password = this.signInPage.value.password != null;
    
  //   if(email && password) {
  //     this.router.navigateByUrl('/homepage', { replaceUrl: true })
  //   } else {
  //     const alert = await this.alertController.create({
  //       header: "Login Failed",
  //       message: !email ? "Email is empty" : "Password is empty",
  //       buttons: ['OK']
  //     })
  //     alert.present();
  //   }
  // }

  onLogin(email, password) {
    console.log(email.value, password.value)
    this.authService.signIn(email.value, password.value)
      .then((res) => {
        if(res) {
          this.router.navigateByUrl('/homepage', { replaceUrl: true })          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        console.log("wkwkwk", error)
        window.alert(error.message)
    })
  }

}
