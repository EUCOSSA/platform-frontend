import { Component, OnInit } from '@angular/core';
import { EventsService} from '../../Eucossa-services/events.service';
import EuccossaEvents from 'src/app/models/EuccosaEvents';
/**this is the landing page on the client side of the platform */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public recentMajorEvents:EuccossaEvents[];
  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    this.recentMajorEvents = this.eventsService.getEvents();
  }
   
}
