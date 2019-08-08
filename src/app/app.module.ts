import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { DriversListComponent } from './components/drivers-list/drivers-list.component';
import { DriverComponent } from './components/driver/driver.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DriversListComponent,
    DriverComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMmn09szYBiZzveP5ueYg3jVR_ht9xklU'
    }),
    FlexLayoutModule,
    HttpClientModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
