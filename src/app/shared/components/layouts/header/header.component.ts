import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

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

export class HeaderComponent implements OnInit {
    isAuth!: boolean;
    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        console.log(this.authService.token);
        
        this.isAuth = !!this.authService.token
    }

    navigation: string[] = [
        'Smartphone',
        'TV',
        'Laptop',
        'Accessories'
    ];
}
