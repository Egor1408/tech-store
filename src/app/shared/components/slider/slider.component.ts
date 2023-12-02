import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { IBanner } from '../../interfaces/banner.intarface';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
	@Input() banners!: IBanner[];

	bannerId:number = 0
	coordinate: number = 0

	position:string = `transform: translate(${0}px)`
	newPosition: string = `transform: translate(${this.coordinate}px)`

	setPosition(coor:number):any {
		this.newPosition = `transform: translate(${coor}px)`
	}

	slideToLeft() {
		console.log(this.banners.length);
		if (this.bannerId>0) {
			this.coordinate += 1440
			this.setPosition(this.coordinate)
			this.position = this.newPosition
			this.bannerId --

		}
	}

	slideToRight() {
		if (this.bannerId <= this.banners.length-2) {

			this.coordinate -= 1440
			this.setPosition(this.coordinate)
			this.position = this.newPosition
			this.bannerId ++
		}
	}

	constructor() {}
}
