import { Component, OnInit } from '@angular/core';
import { AlertmatrixService } from '../../services/alertmatrix/alertmatrix.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'alertmatrix',
  templateUrl: './alertmatrix.component.html',
  styleUrls: ['./alertmatrix.component.css'],
  providers : [AlertmatrixService]
})
export class AlertmatrixComponent implements OnInit {

  public alertmatrixdata;
  private amservice : AlertmatrixService;

  constructor(pService : AlertmatrixService ) { 
  	this.amservice = pService; 
  }

  ngOnInit() {
  	this.getAlertMatrixDetails();
  }

  getAlertMatrixDetails() {
  	this.amservice.getAlertMatrixDetails().subscribe(
  		data => {
  			this.alertmatrixdata = data;
  		},
  		err => console.error(err),
  		() => console.log(this.alertmatrixdata)
  	);
  }

}
