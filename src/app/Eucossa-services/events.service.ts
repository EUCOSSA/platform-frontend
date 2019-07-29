import { Injectable } from '@angular/core';
import EuccosaEvents from '../models/EuccosaEvents';
/**the events service is used to fetch the major eucossa events from the backend API
 *  to be displayed on the client side */
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }
  /**getEvents is a function that fetches all major events from the 
   * backEnd api and returns a eucossaEvent array
   *  which is then used by the client-side components e.g the home-page component 
  */
  getEvents():EuccosaEvents[]{
    
    return [
      {
        id: 1,
        imgUrl: "../../../assets/img/2019/2020executives.jpg",
        title: 'Euccosa Executives',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aperiam ',

      },
      {
        id: 2,
        imgUrl: "../../../assets/img/euccosa chairman.jpg",
        title: '  2018 Hackathon',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aperiam ',

      },
      {
        id: 3,
        imgUrl: "../../../assets/img/runnersUpHackathon@018.jpg",
        title: ' runnersUp Hackathon 2018 ',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aperiam ',

      }
    ]
  }
}
