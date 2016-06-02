import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Jsonp, Http } from '@angular/http';

@Component({
  selector: 'he-app',
  template:`
    <div class="main-container">
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

  constructor(public jsonp: Jsonp) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.jsonp.get('http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=JSONP_CALLBACK')
      .map(res => res.json())
      .subscribe(data => this.items = data.items);
  }

}
