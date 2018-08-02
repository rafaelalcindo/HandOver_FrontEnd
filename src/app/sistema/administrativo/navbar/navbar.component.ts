import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public settingsIcon: string = "/assets/icones/settings.png";
  public logoEmpresa: string = "/assets/icones/handover.jpg";

  public settingsHover: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public dropDownSettings(event): void {
    console.log('Evento', event);
    this.settingsHover = true;
  }

  public exitingDropDownSettings(): void {
      this.settingsHover = false;
      console.log('Entrou Exiting');
  }

}
