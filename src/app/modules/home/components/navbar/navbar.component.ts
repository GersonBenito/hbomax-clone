import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() onShowSideBar: EventEmitter<boolean> = new EventEmitter(); 

  showSideBar(): void {
    this.onShowSideBar.emit(true);
  }

}
