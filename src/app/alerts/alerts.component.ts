import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { FooterService } from '../footer/footer.service';
import { PanelbackService } from '../service/panelback.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit, AfterContentChecked {

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
