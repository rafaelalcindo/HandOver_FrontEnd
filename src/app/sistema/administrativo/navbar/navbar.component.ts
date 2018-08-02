import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public settingsIcon: string = "/assets/icones/settings.png";
  public logoEmpresa: string = "/assets/icones/handover.jpg";

  constructor() { }

  ngOnInit() {
  }

}
