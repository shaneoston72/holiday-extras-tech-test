import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'he-app',
  template:`
    <div class="main-container">
      <header>
        <h1>Holiday Extras Tech Test</h1>
        <p>submitted by Shane Oston Stowe</p>
      </header>
      <div class="flex-container">
        <div *ngFor="let item of items" class="item-box">
          <img src="{{ item.media.m }}" alt="{{ item.title }}" class="flickr-photo"/>
          <div class="flickr-details">
            <h3 class="flickr-title">{{ item.title }}</h3>
            <p>
              <span class="smallType">by </span>
              <span class="flickr-author"> {{ item.author }}</span></p>
              <div class="flickr-description" [innerHTML]="item.description"></div>
              <p class="flickr-tags">Tags: {{ item.tags }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  data: Object;
  public items;

  constructor(public http: Http) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.http.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
      .subscribe((res: Response) => {
        console.log(res);
        this.data = res._body;
        this.items = this.transformRes(this.data);
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
