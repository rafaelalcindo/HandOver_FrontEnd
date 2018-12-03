import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public settingsIcon: string = "/assets/icones/settings.png";
  public logoEmpresa: string = "/assets/icones/handover.jpg";
  public iconeHamburger: string = "/assets/icones/hamburger.png"

  public settingsHover: boolean = false;
  public abrirSideDrawerNav: Subject<boolean> = new Subject();
  public abrirSideDrawerNav2: boolean= false;
  //public abrirSideDrawerNav: boolean =  false;

  constructor() { }

  ngOnInit() {
    this.abrirSideDrawerNav.subscribe(valor => {
      //console.log('valor Pai: ', valor);
    })
  }

  public dropDownSettings(event): void {
//    console.log('Evento', event);
    this.settingsHover = true;
  }

  public exitingDropDownSettings(): void {
      this.settingsHover = false;
  //    console.log('Entrou Exiting');
  }

  public abrirSideDrawerNavBar() {
    //console.log('Entrou!');
    this.abrirSideDrawerNav.next(true);
    //console.log('AbrirSideDrawerNav: ', this.abrirSideDrawerNav);
  }



}
