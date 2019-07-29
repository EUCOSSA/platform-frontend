import { Component, OnInit } from '@angular/core';
import { EucossaActivities } from 'src/app/models/activities';
import { ActivitiesService } from 'src/app/Eucossa-services/activities.service';
/**displays the services offered by eucossa */
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor(private ActivitiesService: ActivitiesService) { }
  public activities: EucossaActivities[];
  ngOnInit() {
    this.activities = this.ActivitiesService.getActivity();
  }


}
