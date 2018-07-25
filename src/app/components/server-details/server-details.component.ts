import { Component, OnInit } from '@angular/core';
import { ServerdetailsService } from '../../services/serverdetails/serverdetails.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css'],
  providers : [ServerdetailsService]
})

export class ServerDetailsComponent implements OnInit {

  public serverdata  ;
  private sservice : ServerdetailsService;

  constructor(pservice : ServerdetailsService) {
  	this.sservice = pservice;
   }

  ngOnInit() {
  	this.getServerdetails();
  }

  getServerdetails() {
  	this.sservice.getServerDetails().subscribe(
  		data => { 
  			this.serverdata = data;
  		},
  		err => console.error(err),
  		() => console.log(this.serverdata)
  	);
  }
}
