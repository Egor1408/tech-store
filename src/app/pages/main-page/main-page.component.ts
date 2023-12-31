import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../shared/interfaces/product.interface';
import { ProductItemComponent } from '../../shared/components/product-item/product-item.component';
import { ISliderData } from '../../shared/interfaces/sliderData.intarface';
import { SliderComponent } from '../../shared/components/slider/slider.component';

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
    public productItems: IProduct[] = [
        {
            id: 1,
            name: 'Realme C33',
            mainImg: 'https://avatars.mds.yandex.net/get-mpic/4322107/img_id3907963716317099786.jpeg/600x600',
            cost: 1599,
            shortDesc: 'camera 50 Mp',
        },
        {
            id: 2,
            name: 'Realme C55',
            mainImg: 'https://avatars.mds.yandex.net/get-mpic/1673800/img_id8231232241218984163.jpeg/600x600',
            cost: 1599,
            shortDesc: 'camera 50 Mp',
        },
        {
            id: 3,
            name: 'Realme C33',
            mainImg: 'img',
            cost: 1599,
            shortDesc: 'camera 50 Mp',
        },
        {
            id: 4,
            name: 'Realme C33',
            mainImg: 'img',
            cost: 1599,
            shortDesc: 'camera 50 Mp',
        },
        {
            id: 5,
            name: 'Realme C33',
            mainImg: 'img',
            cost: 1599,
            shortDesc: 'camera 50 Mp',
        },
        {
            id: 6,
            name: 'Realme C33',
            mainImg: 'img',
            cost: 1599,
            shortDesc: 'camera 50 Mp',
        },
    ]

    public sliderData: ISliderData[] = [
		{
			id: 1,
			image: './assets/image/banner/bannerimage.jpg',
			title: 'Realme 10 Pro+ 5G',
			description: ['SUBTITLE','property1','property1'],
			rightText: false,
			price: 76000,
		},
		{
			id: 2,
			image: './assets/image/banner/bannerimage.jpg',
			title: 'Realme 10 Pro+ 5G',
			description: ['SUBTITLE','property1','property1'],
			rightText: false,
			price: 76000,
		},
		{
			id: 3,
			image: './assets/image/banner/bannerimage.jpg',
			title: 'Realme 10 Pro+ 5G',
			description: ['SUBTITLE','property1','property1'],
			rightText: false,
			price: 76000,
		},
		{
			id: 4,
			image: './assets/image/banner/bannerimage.jpg',
			title: 'Realme 10 Pro+ 5G',
			description: ['SUBTITLE','property1','property1'],
			rightText: false,
			price: 76000,
		},
		{
			id: 5,
			image: './assets/image/banner/bannerimage.jpg',
			title: 'Realme 10 Pro+ 5G',
			description: ['SUBTITLE','property1','property1'],
			rightText: false,
			price: 76000,
		}
	]

	public sliderData2: ISliderData[] = [
		{
			id:1,
			image: './assets/image/banner/bannerimage.jpg',
		},
		{
			id:2,
			image: './assets/image/banner/bannerimage.jpg',
		}
	]

    constructor() {}
}
