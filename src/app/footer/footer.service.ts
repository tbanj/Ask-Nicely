import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FooterService {
    // navCheck = new Subject<boolean>();
  footerVisible: boolean;

  constructor() {
      this.footerVisible = false;
     }


  hide() { this.footerVisible = false; }

  show() { this.footerVisible = true; }

  toggle() { this.footerVisible = !this.footerVisible; }


}

