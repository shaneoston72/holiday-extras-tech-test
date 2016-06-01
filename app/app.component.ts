import { Component } from '@angular2.core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'he-app',
  template:`
  `
})
export class AppComponent {
  public items;

  constructor(private http: Http) { }
}
