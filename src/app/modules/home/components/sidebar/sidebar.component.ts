import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import * as optionsMenuJson from '@core/data/sidebar.json';
import { Genero } from '@core/models/genero.interface';
import { OptionsMenu } from '@core/models/options-menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

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
    console.log(page);
    this.subMenu = false;
    // navegar a una pantalla diferente
  }

}
