import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public isVisibleSidebar: boolean = false;
  public background: string = 'transparent';
  public color: string = 'rgb(255, 255, 255)';

  constructor(private title: Title){
    this.title.setTitle('HBO Max - Clone')
  }

  showSideBar(visible: boolean): void{
    this.isVisibleSidebar = visible;
  }

  closeSideBar(visible: boolean): void{
    this.isVisibleSidebar = visible;
  }

  scrollTo(event: any){
    const scrollTo = event.target;
    if(scrollTo.scrollTop >= 245){
      this.background = 'rgba(15, 15, 15, 0.98)';
      this.color = '#999999';
    }else{
      this.background = 'transparent';
      this.color = 'rgb(255, 255, 255)';
    }
  }
}
