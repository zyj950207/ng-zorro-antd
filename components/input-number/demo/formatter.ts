import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-input-number-formatter',
  template: `
    <nz-input-number [(ngModel)]="demoValue" [nzMin]="1" [nzMax]="100" [nzStep]="1" [nzFormatter]="formatterDollar" [nzParser]="parserDollar"></nz-input-number>
    <nz-input-number [(ngModel)]="demoValue" [nzMin]="1" [nzMax]="100" [nzStep]="1" [nzFormatter]="formatterPercent" [nzParser]="parserPercent"></nz-input-number>
  `
})
export class NzDemoInputNumberFormatterComponent {
  demoValue = 100;
  formatterPercent = value => `${value} %`;
  parserPercent = value => value.replace(' %', '');
  formatterDollar = value => `$ ${value}`;
  parserDollar = value => value.replace('$ ', '');
}
