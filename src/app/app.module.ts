import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GoogleVisionComponent} from './google-vision/google-vision.component';
//import { GoogleVisionService} from './google-vision/google-vision.service';

//For InMemory testing 
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule
  ],
  declarations: [
      AppComponent,
      GoogleVisionComponent
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }