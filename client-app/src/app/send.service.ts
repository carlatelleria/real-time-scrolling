import { Injectable } from '@angular/core';
import { ScrollServiceService } from './scroll-service.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Scroll } from './scroll';

@Injectable()
export class SendService {

	scrollPos: Subject<any>;
	
	constructor(private scrollService: ScrollServiceService) {
		this.scrollPos = <Subject<any>>scrollService
			.connect()
			.map((response: any): any => {
				return response;
			})
	 }
	
	sendScrollPosition(scroll: Scroll) {
		this.scrollPos.next(scroll);
	}

}
