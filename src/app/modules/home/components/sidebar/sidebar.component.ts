import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() onShowSideBar: EventEmitter<boolean> = new EventEmitter();
  @Input() public visible: boolean = false;

  closeSideBar(): void{
    this.onShowSideBar.emit(false);
  }
}
