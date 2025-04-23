import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSearch(event: any) {
    const searchTerm = event.target.value;
    console.log('Buscando:', searchTerm);
  }

}