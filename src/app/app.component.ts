
import { Component, OnInit,  ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { PanelbackService } from './service/panelback.service';
import { FooterService } from './footer/footer.service';
import { SidebarService } from './sidebar/sidebar.service';
import { NavbarService } from './navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  // visible = false;
  // statusback = false;
  // statusPanel = false;
  title = 'star-admin-angular';
  constructor (public nav: NavbarService, private cdref: ChangeDetectorRef,
    public panelback: PanelbackService,  public sidebar: SidebarService, public footerser: FooterService) {}

  ngOnInit(): void {


  }

    // this is use to remove the css class in the html


  // this is use to pass new value as soon there is a
  // value changed in the url
  ngAfterContentChecked() {
    // this.clickEvent();
    this.cdref.detectChanges();

     }


}
