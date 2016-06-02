import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import {JSONP_PROVIDERS} from '@angular/http';


bootstrap(AppComponent, [ HTTP_PROVIDERS, JSONP_PROVIDERS ]);
