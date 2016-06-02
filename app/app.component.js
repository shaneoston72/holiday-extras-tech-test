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
var AppComponent = (function () {
    function AppComponent(jsonp) {
        this.jsonp = jsonp;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    AppComponent.prototype.getItems = function () {
        var _this = this;
        this.jsonp.get('http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=JSONP_CALLBACK')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.items = data.items; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'he-app',
            template: "\n    <div class=\"main-container\">\n      <div class=\"flex-container\">\n        <div *ngFor=\"let item of items\" class=\"item-box\">\n          <img src=\"{{ item.media.m }}\" alt=\"{{ item.title }}\" class=\"flickr-photo\"/>\n          <div class=\"flickr-details\">\n            <h3 class=\"flickr-title\">{{ item.title }}</h3>\n            <p>\n              <span class=\"smallType\">by </span>\n              <span class=\"flickr-author\"> {{ item.author }}</span></p>\n              <div class=\"flickr-description\" [innerHTML]=\"item.description\"></div>\n              <p class=\"flickr-tags\">Tags: {{ item.tags }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map