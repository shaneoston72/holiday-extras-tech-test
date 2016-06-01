import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

class FlickrItem {
  imgUrl: string;
  photoTitle: string;
  photoAuthor: string;
  photoDescription: string;
  photoTags: string;

  constructor(imgUrl: string,
              photoTitle: string,
              photoAuthor: string,
              photoDescription: string,
              photoTags: string) {
                this.imgUrl = imgUrl;
                this.photoTitle = photoTitle;
                this.photoAuthor = photoAuthor;
                this.photoDescription = photoDescription;
                this.photoTags = photoTags;
              }
}

@Component({
  selector: 'simple-http',
  template: `
    <h2>Basic request</h2>
    <button type="button" (click)="makeRequest()">Make Request</button>
    <pre>{{ result }}</pre>
  `
})
class SimpleHTTPRequest {
  data: Object;
  result: [];

  constructor(public http: Http) {
  }

  makeRequest(): void {
    this.http.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
      .subscribe((res: Response) => {
        this.data = res._body;
        // console.log("response from get:" + this.data);
        this.transformRes(this.data);
      });
  }

  transformRes(data) {
    data = data.replace('jsonFlickrFeed(','');
    data = data.replace('})', '}');
    data = data.replace(/\\'/g, "'");
    data = JSON.parse(data);
    this.result = data.items;
    console.log(this.result);
  }
}

@Component({
  selector: 'flickr-box',
  inputs: ['flickrItem'],
  host: {
    class: 'item-box'
  },
  template: `
    <div >
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
  `
})
class FlickrBox {
  flickrItem = FlickrItem;
}

@Component({
  selector: 'he-app',
  directives: [FlickrBox, SimpleHTTPRequest],
  template: `
  <simple-http></simple-http>
    <div class="flex-container">
      <flickr-box *ngFor="let flickrItem of flickrItems" [flickrItem]="flickrItem">
      </flickr-box>
    </div>
  `
})
export class AppComponent {
  flickrItems: FlickrItem[];

  constructor() {
    this.flickrItems = [
      new FlickrItem(
        'https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg',
        'W-E Wedding-5790e-5710',
        'nobody@flickr.com (dspringdad533)',
        '<p><a href=\"https://www.flickr.com/people/dspringdad533/\">dspringdad533<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dspringdad533/26767653574/\" title=\"W-E Wedding-5790e-5710\"><img src=\"https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg\" width=\"160\" height=\"240\" alt=\"W-E Wedding-5790e-5710\" /><\/a><\/p>',
        ''),
      new FlickrItem(
        'https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg',
        'W-E Wedding-5790e-5710',
        'nobody@flickr.com (dspringdad533)',
        '<p><a href=\"https://www.flickr.com/people/dspringdad533/\">dspringdad533<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dspringdad533/26767653574/\" title=\"W-E Wedding-5790e-5710\"><img src=\"https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg\" width=\"160\" height=\"240\" alt=\"W-E Wedding-5790e-5710\" /><\/a><\/p>',
        ''),
      new FlickrItem(
        'https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg',
        'W-E Wedding-5790e-5710',
        'nobody@flickr.com (dspringdad533)',
        '<p><a href=\"https://www.flickr.com/people/dspringdad533/\">dspringdad533<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dspringdad533/26767653574/\" title=\"W-E Wedding-5790e-5710\"><img src=\"https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg\" width=\"160\" height=\"240\" alt=\"W-E Wedding-5790e-5710\" /><\/a><\/p>',
        ''),
      new FlickrItem(
        'https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg',
        'W-E Wedding-5790e-5710',
        'nobody@flickr.com (dspringdad533)',
        '<p><a href=\"https://www.flickr.com/people/dspringdad533/\">dspringdad533<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dspringdad533/26767653574/\" title=\"W-E Wedding-5790e-5710\"><img src=\"https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg\" width=\"160\" height=\"240\" alt=\"W-E Wedding-5790e-5710\" /><\/a><\/p>',
        ''),
      ];
  }
}
