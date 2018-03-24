import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollDirective } from './scroll.directive';
import { ScrollServiceService } from './scroll-service.service';
import { SendService } from './send.service';

@NgModule({
	declarations: [
		AppComponent,
		ScrollDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpModule
	],
	providers: [
		ScrollServiceService,
		SendService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
