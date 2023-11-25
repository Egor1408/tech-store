import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBanner } from '../../interfaces/banner.intarface';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

	@Input() banner!:IBanner;

	constructor(){}
}
