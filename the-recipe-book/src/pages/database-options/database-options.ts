import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
    selector: 'sl-options',
    template:
        `
<ion-grid text-center>
  <ion-row>
    <ion-col>
      <h3>Store & Load</h3>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <button ion-button outline (click)="onAction('load')">Load</button>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <button ion-button outline (click)="onAction('store')">Store</button>
    </ion-col>
  </ion-row>
</ion-grid>`
})
export class DatabaseOptionsPage {

  constructor(private viewCtrl: ViewController) { }

  protected onAction(action: string) {
    this.viewCtrl.dismiss({action: action});
  }
}
