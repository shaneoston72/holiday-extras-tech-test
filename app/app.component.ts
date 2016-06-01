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

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.http.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
      .subscribe((res: Response) => {
        this.data = res._body;
        this.result = this.transformRes(this.data);
      });
  }

  transformRes(data) {
    data = data.replace('jsonFlickrFeed(','');
    data = data.replace('})', '}');
    data = data.replace(/\\'/g, "'");
    data = JSON.parse(data);
    return data.items;
  }
}
