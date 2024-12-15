import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' 
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	standalone: true,
	imports: [
	CommonModule,
	HttpClientModule
	]
})

export class AppComponent implements OnInit{
	
	countries: any[] = [];
	constructor(private apiService: ApiService){}

	ngOnInit(){
		this.apiService.getCountries().subscribe(
			
			data => {
				this.countries = data as any[];
			},

			error => {
				console.log(error);
			}
		);
	}
}
