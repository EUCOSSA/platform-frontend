import { Injectable } from '@angular/core';
import { EucossaActivities } from '../models/activities';
/**
 * used to fetched data from the backend relating to eucossa activities
 */
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }
  /**fetches a  list of eucossa current activities from the
   * backend api and return an array of type EucossaActivities
   */
  getActivity(): EucossaActivities[] {

    return [
      {
        id: 1,
        imgurl: "../../../assets/img/port3.jpg",
        title: 'hackerthons',
        description: ' Buid your know how by learning new stuffs.',

      },
      {
        id: 2,
        imgurl: "../../../assets/img/port5.jpg",
        title: ' Tech Fridays',
        description: 'Get the lates updates in the tech related field.',

      },
      {
        id: 3,
        imgurl: "../../../assets/img/port6.jpg",
        title: 'Dev festivals',
        description: 'Unveil the anonymosity of the complex stuff ',

      }
    ]
  }
}
