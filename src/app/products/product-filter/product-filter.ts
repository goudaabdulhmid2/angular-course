import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-filter',
  imports: [CurrencyPipe],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  @Input()
  categories: any[] = []

  @Input()
  cartTotal = 0;

  @Output()
  categoryChanged = new EventEmitter<number>();

  onCategoryChange(event: Event) {

    const value = +(event.target as HTMLSelectElement).value;

    this.categoryChanged.emit(value);

  }

}
