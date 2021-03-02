import { Component, OnInit } from '@angular/core';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faFacebook = faFacebook
  faGoogle = faGoogle
  faApple = faApple

  constructor() { }

  ngOnInit(): void {

  }

}
