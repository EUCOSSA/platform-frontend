import { Component, OnInit } from '@angular/core';
import M from "materialize-css/dist/js/materialize";
/** this is the footer componts with basic info about the plarform */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
private options={};
  ngOnInit() {
    const elems = document.querySelectorAll('.tooltipped');
    const instances = M.Tooltip.init(elems, this.options);
  }

}
