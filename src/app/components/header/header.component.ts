import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,

})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onSearch(event: any) {
    const searchTerm = event.target.value;
    console.log('Buscando:', searchTerm);
  }
}
