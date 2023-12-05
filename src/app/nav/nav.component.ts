import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoginClick() {
    const URL = "https://cf-amplify.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=7rbfge7ic1s47l8icu8jo3ht0f&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmaster.d2be2dd4ktk3gw.amplifyapp.com%2F";
    window.location.assign(URL);
  }

}
