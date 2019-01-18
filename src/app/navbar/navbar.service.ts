import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavbarService {

  visible: boolean;

  constructor() {
      this.visible = false;
     }


  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }

}

