import { Component, OnInit } from '@angular/core';
import { DotaapiService } from '../../service/dotaapi.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})
export class HeroesPage implements OnInit {

 heroes:any;
 localized_name:string;

  constructor(private obtdota:DotaapiService) { }

  ngOnInit() {
    this.obtdota.getDota('heroes').subscribe(data =>{
      this.heroes=data;
      console.log(data);
      
    })
  }

}
