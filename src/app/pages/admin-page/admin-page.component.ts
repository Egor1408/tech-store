import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../shared/services/admin.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IBanner } from '../../shared/interfaces/banner.interface';

@Component({
	selector: 'app-admin-page',
	standalone: true,
	templateUrl: './admin-page.component.html',
	styleUrl: './admin-page.component.scss',
	imports: [
		CommonModule,
		FormsModule,
        ReactiveFormsModule,
	],
})
export class AdminPageComponent {

	newBannerForm: FormGroup = new FormGroup({
		id: new FormControl(null, [Validators.required]),
		imgPath: new FormControl(null, [Validators.required]),
		title: new FormControl(null, [Validators.required]),
		subTitle: new FormControl(null, [Validators.required]),
	});

	constructor(adminService: AdminService) {}

	submit() {
		const banner: IBanner = {
			id: this.newBannerForm.value.id,
			imgPath: this.newBannerForm.value.imgPath,
			title: this.newBannerForm.value.title,
			subTitle: this.newBannerForm.value.subTitle,
		}
		console.log(banner);
    }
}
