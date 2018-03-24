import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SendService } from './send.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private scroll: SendService){ }

    ngOnInit() {
        this.scroll.scrollPos.subscribe(scrollPos => {
            // console.log(window.pageYOffset);
            this.moveScroll(scrollPos)
        })
    }

    @ViewChild('panel') private panel: ElementRef;

    public moveScroll(scrollPos) : void {
        try {
            window.scrollTo(scrollPos["x"], scrollPos["y"]);
                     
        } catch(err) { }  
    }
    
}
