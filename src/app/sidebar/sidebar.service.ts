import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SidebarService {
    // navCheck = new Subject<boolean>();
  sideVisible: boolean;

  constructor() {
      this.sideVisible = false;
     }


  hide() { this.sideVisible = false; }

  show() { this.sideVisible = true; }

  toggle() { this.sideVisible = !this.sideVisible; }

  doSomethingElseUseful() { }

}

