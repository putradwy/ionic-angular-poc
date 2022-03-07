import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from "../../services/auth-services";
import { Utility } from "../../utils/utils"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    public authService: AuthServices,
    public util: Utility,
  ) { }

  ngOnInit() {}

  onLogin(email, password) {
    const uEmail = email && email.value || null
    const uPassword = password && password.value || null

    if (uEmail && uPassword) {
      this.util.loading(true)
      this.authService.signIn(uEmail, uPassword)
        .then((res) => {
          if(res) {
            this.util.loading(false)
            this.router.navigateByUrl('/homepage', { replaceUrl: true })          
          }
        }).catch((error) => {
          this.util.loading(false)
          this.util.alert({
            header: "Login Failed",
            message: this.util.parseFbErrorCode(error.code),
            buttons: ["OK"]
          })
      })
    } else {
      this.util.alert({
        header: "Login Failed",
        message: "INTERNAL_ERROR",
        buttons: ["OK"]
      })
      return false;
    }
  }
}
