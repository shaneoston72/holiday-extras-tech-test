"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var FlickrItem = (function () {
    function FlickrItem(imgUrl, photoTitle, photoAuthor, photoDescription, photoTags) {
        this.imgUrl = imgUrl;
        this.photoTitle = photoTitle;
        this.photoAuthor = photoAuthor;
        this.photoDescription = photoDescription;
        this.photoTags = photoTags;
    }
    return FlickrItem;
}());
var SimpleHTTPRequest = (function () {
    function SimpleHTTPRequest(http) {
        this.http = http;
    }
    SimpleHTTPRequest.prototype.makeRequest = function () {
        var _this = this;
        this.http.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
            .subscribe(function (res) {
            _this.data = res._body;
            // console.log("response from get:" + this.data);
            _this.transformRes(_this.data);
        });
    };
    SimpleHTTPRequest.prototype.transformRes = function (data) {
        data = data.replace('jsonFlickrFeed(', '');
        data = data.replace('})', '}');
        data = data.replace(/\\'/g, "'");
        data = JSON.parse(data);
        this.result = data.items;
    };
    SimpleHTTPRequest = __decorate([
        core_1.Component({
            selector: 'simple-http',
            template: "\n    <h2>Basic request</h2>\n    <button type=\"button\" (click)=\"makeRequest()\">Make Request</button>\n    <pre>{{ result }}</pre>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SimpleHTTPRequest);
    return SimpleHTTPRequest;
}());
var FlickrBox = (function () {
    function FlickrBox() {
        this.flickrItem = FlickrItem;
    }
    FlickrBox = __decorate([
        core_1.Component({
            selector: 'flickr-box',
            inputs: ['flickrItem'],
            host: {
                class: 'item-box'
            },
            template: "\n    <div >\n      <img src=\"{{ flickrItem.imgUrl }}\" alt=\"\" className=\"flickr-photo\"/>\n      <div class=\"flickr-details\">\n        <h3 class=\"flickr-title\">{{ flickrItem.photoTitle }}</h3>\n        <p>\n          <span class=\"smallType\">by </span>\n          <span class=\"flickr-author\"> {{ flickrItem.photoAuthor }}</span></p>\n          <div class=\"flickr-description\" [innerHTML]=\"flickrItem.photoDescription\"></div>\n          <p class=\"flickr-tags\">Tags: {{ flickrItem.photoTags }}</p>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FlickrBox);
    return FlickrBox;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.flickrItems = [
            new FlickrItem('https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg', 'W-E Wedding-5790e-5710', 'nobody@flickr.com (dspringdad533)', '<p><a href=\"https://www.flickr.com/people/dspringdad533/\">dspringdad533<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dspringdad533/26767653574/\" title=\"W-E Wedding-5790e-5710\"><img src=\"https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg\" width=\"160\" height=\"240\" alt=\"W-E Wedding-5790e-5710\" /><\/a><\/p>', ''),
            new FlickrItem('https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg', 'W-E Wedding-5790e-5710', 'nobody@flickr.com (dspringdad533)', '<p><a href=\"https://www.flickr.com/people/dspringdad533/\">dspringdad533<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dspringdad533/26767653574/\" title=\"W-E Wedding-5790e-5710\"><img src=\"https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg\" width=\"160\" height=\"240\" alt=\"W-E Wedding-5790e-5710\" /><\/a><\/p>', ''),
            new FlickrItem('https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg', 'W-E Wedding-5790e-5710', 'nobody@flickr.com (dspringdad533)', '<p><a href=\"https://www.flickr.com/people/dspringdad533/\">dspringdad533<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dspringdad533/26767653574/\" title=\"W-E Wedding-5790e-5710\"><img src=\"https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg\" width=\"160\" height=\"240\" alt=\"W-E Wedding-5790e-5710\" /><\/a><\/p>', ''),
            new FlickrItem('https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg', 'W-E Wedding-5790e-5710', 'nobody@flickr.com (dspringdad533)', '<p><a href=\"https://www.flickr.com/people/dspringdad533/\">dspringdad533<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dspringdad533/26767653574/\" title=\"W-E Wedding-5790e-5710\"><img src=\"https://farm8.staticflickr.com/7756/26767653574_e54e5fede5_m.jpg\" width=\"160\" height=\"240\" alt=\"W-E Wedding-5790e-5710\" /><\/a><\/p>', ''),
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'he-app',
            directives: [FlickrBox, SimpleHTTPRequest],
            template: "\n  <simple-http></simple-http>\n    <div class=\"flex-container\">\n      <flickr-box *ngFor=\"let flickrItem of flickrItems\" [flickrItem]=\"flickrItem\">\n      </flickr-box>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map