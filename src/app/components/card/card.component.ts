import { Component, OnInit,Input } from '@angular/core';
import { EucossaActivities } from 'src/app/models/activities';
/**displays eucossa activity obtained from the services component */

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  constructor() { }
 @Input() public activities:EucossaActivities[];
  ngOnInit() {
    
  }

}
