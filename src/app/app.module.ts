import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// custom compponents
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarroselComponent } from './components/carrosel/carrosel.component';
import { ParralaxComponent } from './components/parralax/parralax.component';
import { ServicesComponent } from './components/services/services.component';
import { CardComponent } from './components/card/card.component';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ActivitiesService } from './Eucossa-services/activities.service';
import { EventsService } from './Eucossa-services/events.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    CarroselComponent,
    ParralaxComponent,
    ServicesComponent,
    CardComponent,
    PhotoGridComponent,
    FooterComponent,
    AboutPageComponent,
    ContactPageComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActivitiesService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
