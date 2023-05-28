import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public isVisibleSidebar: boolean = false;

  showSideBar(visible: boolean): void{
    this.isVisibleSidebar = visible;
  }

  closeSideBar(visible: boolean): void{
    this.isVisibleSidebar = visible;
  }

}
