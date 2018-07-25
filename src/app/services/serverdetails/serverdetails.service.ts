import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ServerInfo } from '../models/ServerInfo';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

/* The interface is required to convert the data from the get query into the type we want. In this case the results
	is going to be of ServerInfo type so in the interface we define the same */
	
interface Servers {
	results: ServerInfo[];
}

@Injectable()

export class ServerdetailsService {

	constructor(private http: HttpClient) { }

	/** getServerDetails() {
		return this.http.get('http://localhost:8200/api/ServerManagement');
	} */

	getServerDetails() : Observable<ServerInfo[]> {

		return this.http.get<Servers>('http://localhost:8200/api/ServerManagement')
						.map(res => <ServerInfo[]>res.results);
	}

}
