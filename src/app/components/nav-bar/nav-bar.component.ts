import { Component, OnInit } from '@angular/core';
import js from "materialize-css/dist/js/materialize";
/**used to provide basic navigation on the client-side of the platform */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   options={
     outDuration:200,
     draggable:true,
   };
  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = js.Sidenav.init(elems,this.options);
  }

}
