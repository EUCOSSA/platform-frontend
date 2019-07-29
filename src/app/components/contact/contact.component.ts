import { Component, OnInit } from '@angular/core';
import M from "materialize-css/dist/js/materialize";
/**this is the contact component used to display Eucossa's contacts */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  public options = {
    autoclose:true
  };
  ngOnInit() {
    let elems = document.querySelectorAll('.tabs');
    let instances = M.Tabs.init(elems,this.options);
    elems = document.querySelectorAll('.datepicker');
    instances = M.Datepicker.init(elems,this.options);
  }

}
