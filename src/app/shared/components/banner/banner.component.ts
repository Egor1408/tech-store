import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IBannerParams {
	url: string,
	title: string,
	description: string
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
	@Input() bannersParams: IBannerParams = {
		url: '../../../../assets/image/bannerimage.jpg',
		title: "GREAT BANNER",
		description: "this is a beast banner of fanners"
	}
}
