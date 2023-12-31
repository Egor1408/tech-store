import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { ISliderData } from '../../interfaces/sliderData.intarface';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
	@Input() sliderData!:ISliderData[];

	bannerId:number = 0
	coordinate: number = 0

	position:string = `transform: translate(${0}px)`
	newPosition: string = `transform: translate(${this.coordinate}px)`

	setPosition(coor:number):any {
		this.newPosition = `transform: translate(${coor}px)`
	}

	slideToLeft() {
		if (this.bannerId>0) {
			this.coordinate += 1440
			this.setPosition(this.coordinate)
			this.position = this.newPosition
			this.bannerId --
		} else {
			this.coordinate = -1440*(this.sliderData.length-1)
			this.bannerId = this.sliderData.length-1
			this.setPosition(this.coordinate)
			this.position = this.newPosition
		}
	}
	slideToRight() {
		if (this.bannerId <= this.sliderData.length-2) {
			this.coordinate -= 1440
			this.setPosition(this.coordinate)
			this.position = this.newPosition
			this.bannerId ++
		} else if (this.bannerId > this.sliderData.length-2){
			this.coordinate = 0
			this.setPosition(this.coordinate)
			this.position = this.newPosition
			this.bannerId = 0
		}
	}

	constructor() {}
}
