import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public isVisibleSidebar: boolean = false;

  constructor(private title: Title){
    this.title.setTitle('HBO Max - Clone')
  }

  showSideBar(visible: boolean): void{
    this.isVisibleSidebar = visible;
  }

  closeSideBar(visible: boolean): void{
    this.isVisibleSidebar = visible;
  }

}
