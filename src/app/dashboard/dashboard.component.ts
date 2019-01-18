import { PanelbackService } from './../service/panelback.service';
import { SidebarService } from './../sidebar/sidebar.service';
import { FooterService } from './../footer/footer.service';
import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss', './dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterContentChecked {

  constructor(public nav: NavbarService, private cdref: ChangeDetectorRef,
    public panelback: PanelbackService , public sidebar: SidebarService, public footerser: FooterService) { }

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
