import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import { Scroll } from './scroll';

@Injectable()
export class ScrollServiceService {
	private socket;
	private serverURL = 'http://localhost:5000/';

	constructor() { }
  
	connect(): Rx.Subject<MessageEvent> {
		this.socket = io(this.serverURL);
		
		let observable = new Observable(observer => {
			this.socket.on('scroll_event', (data) => {
				// Scroll position received.
				observer.next(data);
			})
			return () => {
				this.socket.disconnect();
			}
		});
		let observer = {
			next: (data: Object) => {
				this.socket.emit('scroll_event', data, function(res) {
					// console.log(res);
				});
			},
		};
  
	  	return Rx.Subject.create(observer, observable);
	}

}
