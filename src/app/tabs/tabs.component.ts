import { Component, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';
import { PanelbackService } from '../service/panelback.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentChecked {

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
