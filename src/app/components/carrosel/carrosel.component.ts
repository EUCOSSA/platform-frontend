import { Component, OnInit } from '@angular/core';
import M from "materialize-css/dist/js/materialize";
@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent implements OnInit {

  constructor() { }
  options={
    fullWidth: true,
    indicators: true,
    
  }
  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,this.options);
  }

}
