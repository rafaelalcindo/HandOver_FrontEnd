import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.css']
})
export class SideDrawerComponent implements OnInit, OnChanges {

  @Input() sideDrawerOpen: Subject<boolean>;
  public sideDrawerOpen2: boolean = false;
  public displayBackDrop: boolean = false;

  constructor() { }

  ngOnInit() {
    this.sideDrawerOpen.subscribe(valor => {
      //console.log('Valor vindo do Pai: ', valor);
      this.sideDrawerOpen2 = valor;
      this.displayBackDrop = valor;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
   /* console.log('SideDrawerOpen: ',this.sideDrawerOpen);
    console.log('Mudanças: ', changes.sideDrawerOpen.currentValue);
    if (changes.sideDrawerOpen.currentValue) {
      this.displayBackDrop = true;
    }
    */
  }

  public fecharSideDrawer(): void {
    this.sideDrawerOpen2 = false;
    this.displayBackDrop = false;
  }

}
