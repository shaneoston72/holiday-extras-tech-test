import { Component } from '@angular2.core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'he-app',
  template:`
    <div class="main-container">
      <h1>Holiday Extras Tech Test</h1>
      <p>submitted by Shane Oston Stowe</p>
      <div class="flex-container">
        <div *ngFor="let flickrItem of flickrItems" [flickrItem]="flickrItem">
          <img src="{{ flickrItem.imgUrl }}" alt="" className="flickr-photo"/>
          <div class="flickr-details">
            <h3 class="flickr-title">{{ flickrItem.photoTitle }}</h3>
            <p>
              <span class="smallType">by </span>
              <span class="flickr-author"> {{ flickrItem.photoAuthor }}</span></p>
              <div class="flickr-description" [innerHTML]="flickrItem.photoDescription"></div>
              <p class="flickr-tags">Tags: {{ flickrItem.photoTags }}</p>
          </div>
        </div>
      </div>
    </div>
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
