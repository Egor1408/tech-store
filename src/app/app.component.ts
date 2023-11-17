import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/layouts/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FooterComponent } from './shared/components/layouts/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        MainPageComponent,
        FooterComponent,
    ],
})
export class AppComponent implements OnInit {
    public isAuth!: boolean;

    constructor() {}

    ngOnInit() {
        this.isAuth = false;
    }
}

