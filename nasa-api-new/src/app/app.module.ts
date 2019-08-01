import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsteroidComponent } from './asteroid/asteroid.component';
import { SpaceWeatherComponent } from './space-weather/space-weather.component';
import { NasaImageComponent } from './nasa-image/nasa-image.component';
import { SpaceDashboardComponent } from './space-dashboard/space-dashboard.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: SpaceDashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'space-weather',
    component: SpaceWeatherComponent,
    data: { title: 'Space Weather' }
  },
  {
    path: 'asteroids',
    component: AsteroidComponent,
    data: { title: 'Asteroids' }
  },
  {
    path: 'nasa-images',
    component: NasaImageComponent,
    data: { title: 'Nasa Images' }
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AsteroidComponent,
    SpaceWeatherComponent,
    NasaImageComponent,
    SpaceDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
