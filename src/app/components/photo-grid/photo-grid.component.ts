import { Component, OnInit, Input } from '@angular/core';
import M from "materialize-css/dist/js/materialize";

import EuccosaEvents from '../../models/EuccosaEvents';
/**
 * this is a component used to display major eucossa events on the home-page componet
 */
@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {
 @Input() public Events:EuccosaEvents ;
 private options={};
  constructor() { }
 
  ngOnInit() {
    const elems = document.querySelectorAll('.materialboxed');
    const instances = M.Materialbox.init(elems, this.options);
  }
}
