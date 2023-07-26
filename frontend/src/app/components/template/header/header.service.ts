import { Injectable, OnInit } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class HeaderService implements OnInit {
  [x: string]: any;

   constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private _headerData: new BehaviorSubject<HeaderData>{
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  Set headerData(headerData: HeaderData) {
    return _headerData.next(headerData);
  }

}
