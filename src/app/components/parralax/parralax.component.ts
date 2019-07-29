import { Component, OnInit } from '@angular/core';
import M from "materialize-css/dist/js/materialize";
/**a componet used to show parrallax effect inside it parent componet */
@Component({
  selector: 'app-parralax',
  templateUrl: './parralax.component.html',
  styleUrls: ['./parralax.component.css']
})
export class ParralaxComponent implements OnInit {

  constructor() { }
options={}
  ngOnInit() {
    const elems = document.querySelectorAll('.parallax');
    const instances = M.Parallax.init(elems,this.options);
  }

}
