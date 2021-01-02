import { Component, OnInit } from '@angular/core';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBell = faBell;
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
