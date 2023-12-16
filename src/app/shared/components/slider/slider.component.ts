import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { ISliderData } from '../../interfaces/sliderData.intarface';
import { IProduct } from '../../interfaces/product.interface';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, BannerComponent, ProductItemComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
	@Input() sliderData!:ISliderData[];
	@Input() productItems!: IProduct[];
	@Input() type!: string;

	bannerId:number = 0
	offset: number = 0

	position:string = `transform: translate(${0}px)`
	newPosition: string = `transform: translate(${this.offset}px)`

	setPosition(coor:number):void {
		this.newPosition = `transform: translate(${coor}px)`
	}

	slideToLeft() {
		if (this.bannerId>0) {
			this.offset += 1440
			this.setPosition(this.offset)
			this.position = this.newPosition
			this.bannerId --
		} else {
			this.offset = -1440*(this.sliderData.length-1)
			this.bannerId = this.sliderData.length-1
			this.setPosition(this.offset)
			this.position = this.newPosition
		}
	}
	slideToRight() {
		if (this.bannerId <= this.sliderData.length-2) {
			this.offset -= 1440
			this.setPosition(this.offset)
			this.position = this.newPosition
			this.bannerId ++
		} else if (this.bannerId > this.sliderData.length-2){
			this.offset = 0
			this.setPosition(this.offset)
			this.position = this.newPosition
			this.bannerId = 0
		}
	}

	constructor() {}
}
