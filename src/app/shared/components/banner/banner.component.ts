import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { IBanner } from '../../interfaces/banner.intarface';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule,NgClass],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

		@Input() banner!:IBanner;

	constructor(){}
}
