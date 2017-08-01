import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { User } from './article';

@Injectable()
export class LoginService {
    //URLs for CRUD operations
    Url = "/api/login";
	//Create constructor to get Http instance
	constructor(private http:Http) { 
	}

    login(user: User):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.Url, user, options)
               .map(success => success.status)
               .catch(this.handleError);
    }		
	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
    }
}