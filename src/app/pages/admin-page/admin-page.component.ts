import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-admin-page',
	standalone: true,
	templateUrl: './admin-page.component.html',
	styleUrl: './admin-page.component.scss',
	imports: [
		CommonModule,
		RouterOutlet,
		RouterModule,
		AdminPageComponent
	],
})
export class AdminPageComponent {

	constructor() {}
}
