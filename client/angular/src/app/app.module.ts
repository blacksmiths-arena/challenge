import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BannerComponent } from './banner/banner.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterComponent } from './filter/filter.component';
import { FilterService } from './filter/filter.service';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyButtonComponent,
    SearchInputComponent,
    BreadcrumbComponent,
    BannerComponent,
    TabsComponent,
    TabComponent,
    ProductGalleryComponent,
    AdvertsComponent,
    PaginationComponent,
    FilterComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
