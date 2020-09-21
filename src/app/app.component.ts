import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './web-service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Supreeth | Angular-Web-Page';
  
  constructor(public loginservice: AuthenticationService) { }
  
  ngOnInit(): void {
  }
  
}
