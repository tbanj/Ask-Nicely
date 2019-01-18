import { Injectable } from '@angular/core';

@Injectable()
export class PanelbackService {

  visiblePanel: boolean;
  visibleBack: boolean;

  constructor() {
      this.visiblePanel = false;
      this.visibleBack = false;
     }


  hide() { this.visiblePanel = false;
    this.visibleBack = false; }

  show() { this.visiblePanel = true;
    this.visibleBack = true; }

  toggle() { this.visiblePanel = !this.visiblePanel;
    this.visibleBack = !this.visibleBack ; }



}

