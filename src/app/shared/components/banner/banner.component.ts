import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ISliderData } from '../../interfaces/sliderData.intarface';import { IProduct } from '../../interfaces/product.interface';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule,NgClass],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

		@Input() banner!: ISliderData;

	constructor(){}
}
