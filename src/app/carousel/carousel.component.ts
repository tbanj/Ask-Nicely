import { FooterService } from './../footer/footer.service';
import { PanelbackService } from './../service/panelback.service';
import { SidebarService } from './../sidebar/sidebar.service';
import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterContentChecked {

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
