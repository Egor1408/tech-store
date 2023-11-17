import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs";

@Component({
    selector: 'app-catalog-page',
    standalone: true,
    templateUrl: './catalog-page.component.html',
    styleUrl: './catalog-page.component.scss',
    imports: [
        CommonModule,
    ],
})
export class CatalogPageComponent implements OnInit {

    public type!: string;
    private subscribeRoute: Subscription;

    constructor(private route: ActivatedRoute) {
        this.subscribeRoute = this.route.params.subscribe(params => this.type = params['type'])
    }

    ngOnInit(): void {
    }
}
