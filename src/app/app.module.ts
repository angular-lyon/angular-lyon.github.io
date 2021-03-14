import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { BannerModule } from './banner.component';
import { HomeComponent } from './home.component';
import { ToolbarModule } from './toolbar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TransferHttpCacheModule,

    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
    ]),

    ToolbarModule,
    BannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
