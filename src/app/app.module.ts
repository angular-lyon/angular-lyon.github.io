import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
