import { Component, EventEmitter, Input, Output, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as optionsMenuJson from '@core/data/sidebar.json';
import { Genero } from '@core/models/genero.interface';
import { OptionsMenu } from '@core/models/options-menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  private router = inject(Router);

  @Output() onShowSideBar: EventEmitter<boolean> = new EventEmitter();
  @Input() public visible: boolean = false;
  public menu: OptionsMenu[] = [];
  public generos: Genero[] = [];
  public subMenu: boolean = false;

  ngOnInit(): void {
    this.getOptionsMenu()
  }

  closeSideBar(): void{
    this.onShowSideBar.emit(false);
    this.subMenu = false;
  }

  getOptionsMenu(): void{
    const { menu } : any = (optionsMenuJson as any);
    this.menu = menu;
  }

  showSubMenu(){
    this.subMenu = !this.subMenu;
    // obtener los datos del sub menu, una unica vez
    if(!(this.generos.length > 0)){
      const { generos } : any = (optionsMenuJson as any);
      this.generos = generos;
    }
  }

  navigatePage(page: string){
    // TODO: crear un pipe donde tome el valor de la pagina y transforme y modificar el json del menu
    page === 'inicio' ?  this.router.navigate(['']) : this.router.navigate([page]);
    this.closeSideBar();
  }
}
