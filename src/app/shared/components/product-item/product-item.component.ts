import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../interfaces/product.interface';

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
    @Input() data!: IProduct;

    public buyItem(id: number): void {
        console.log(`buy item id - ${id}`);
    }
}
