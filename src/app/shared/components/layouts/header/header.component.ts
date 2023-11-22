import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
    ],
})

export class HeaderComponent implements OnInit {
    @Input() isAuth: boolean = false;
    navigation: string[] = [
        'Smartphone',
        'TV',
        'Laptop',
        'Accessories'
    ];

    constructor(
        public authService: AuthService,
        private cdr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {      
    }

    public logout() {
        this.authService.logout();
        this.cdr.markForCheck();
    }
}
