import { Directive, HostListener, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SendService } from './send.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Scroll } from './scroll';

@Directive({
	selector: '[appScroll]'
})

export class ScrollDirective {	
	constructor(private sendService: SendService) { }
  
	@HostListener('window:scroll', ['$event']) 
		onWindowScroll() {
			const y = window.pageYOffset;
			const x = window.pageXOffset;
			// console.log(event);
			this.sendService.sendScrollPosition(new Scroll(x, y));
		}
}
