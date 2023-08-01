import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Method to handle user logout
  logout() {
    // Remove the token and user-related information from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('EmailId');
    localStorage.removeItem('Role');

    // Navigate the user back to the login page or any other desired route
    this.router.navigate(['']); // You can specify the login page route here
  }
}
