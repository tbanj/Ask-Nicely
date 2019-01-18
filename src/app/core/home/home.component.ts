import { FooterService } from './../../footer/footer.service';
import { SidebarService } from './../../sidebar/sidebar.service';
import { PanelbackService } from './../../service/panelback.service';
import { NavbarService } from './../../navbar/navbar.service';
import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentChecked {

  constructor(public nav: NavbarService, private cdref: ChangeDetectorRef,
      public panelback: PanelbackService , public sidebar: SidebarService, public footerser: FooterService ) {

   }

  ngOnInit() {
    // use to check if there is need to show the navbar
    // this.nav.navCheck.next(true);
    // this.nav.show();
  }

  ngAfterContentChecked() {
    this.panelback.hide();
    this.nav.hide();
    this.sidebar.hide();
    this.footerser.hide();
    this.cdref.detectChanges();

     }

}
