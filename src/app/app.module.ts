import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SliderModule } from './slider.component';
import { AppComponent } from './app.component';
import { BannerModule } from './banner.component';
import { ToolbarModule } from './toolbar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    HttpClientJsonpModule,

    ToolbarModule,
    BannerModule,
    SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
