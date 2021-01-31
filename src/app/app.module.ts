import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChosenCarComponent} from './components/chosen-car/chosen-car.component';
import {CarsComponent} from './components/cars/cars.component';
import {CarComponent} from './components/car/car.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChosenCarComponent,
    CarsComponent,
    CarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/cars', component: CarsComponent, children: [{
        path: ':id', component: ChosenCarComponent
      }]
    },
      {
        path: 'link/home', component: HomeComponent
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
