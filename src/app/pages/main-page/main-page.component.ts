import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../../shared/components/product-item/product-item.component';
import { SliderComponent } from '../../shared/components/slider/slider.component';
import { IProduct } from '../../shared/interfaces/product.interface';
import { ISliderData } from '../../shared/interfaces/sliderData.intarface';
import { sliderData } from '../../bannerData';
import { productItems } from '../../productData';

@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    imports: [
        CommonModule,
        ProductItemComponent,
		SliderComponent
    ],
})
export class MainPageComponent {
	sliderData:ISliderData[] = [];
	productItems: IProduct[]= []

	public type:string[] = [
		"banner",
		"product"
	]

    constructor() {
		this.sliderData = sliderData
		this.productItems= productItems
	}
}
