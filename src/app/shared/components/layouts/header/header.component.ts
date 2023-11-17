import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [
        CommonModule,
        RouterModule,
    ],
})

export class HeaderComponent {
    @Input() isAuth!: boolean;
    navigation: string[] = [
        'Smartphone',
        'TV',
        'Laptop',
        'Accessories'
    ];
}
