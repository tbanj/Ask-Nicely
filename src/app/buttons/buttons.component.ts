import { Component, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';
import { PanelbackService } from '../service/panelback.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent implements OnInit, AfterContentChecked {
  model = 1;
  checkboxModel = {
   left: true,
   middle: false,
   right: false
 };
  constructor(public nav: NavbarService, private cdref: ChangeDetectorRef,
    public panelback: PanelbackService,  public sidebar: SidebarService, public footerser: FooterService) { }

  ngOnInit() {
  }


  ngAfterContentChecked() {
    this.nav.show();
    this.panelback.show();
    this.sidebar.show();
    this.footerser.show();
    this.cdref.detectChanges();

     }

}
