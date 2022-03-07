import { Component, OnInit } from '@angular/core';
import { AuthServices } from "../../services/auth-services";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(
    public authService: AuthServices,
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.signOut();
  }
}
