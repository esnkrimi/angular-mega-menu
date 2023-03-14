import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'esn-luxury-mega-menu',
  templateUrl: `esn-luxury-mega-menu.component.html`,
  styleUrls: ['esn-luxury-mega-menu.sass'],
})
export class EsnLuxuryMegaMenuComponent implements OnInit {
@Input() data;
@Output() result = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  getKeys(obj){
    return Object.keys(obj)
  }

  getVals(obj){
    return Object.values(obj)
  }
  getRes(s){
    console.log(s)
    return s
  }

  callback(res) {
    this.result.emit(res)
  }
}
