import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyPipe } from '@angular/common';

import { IProduct } from '../models/iproduct';
import { ProductFilter } from './product-filter/product-filter';
import { ProductService } from '../services/product-service';
import { CategoriesService } from '../services/categories-service';

@Component({
  selector: 'app-products',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ProductFilter,
    CurrencyPipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  productServise = inject(ProductService)
  categorieService = inject(CategoriesService)

  products = this.productServise.getProducts();
  categories = this.categorieService.getCategories();

  selectedCategory = signal(0);
  cartTotal = signal(0);

  filteredProducts = computed(() => {

    const categoryId = this.selectedCategory();

    if (categoryId === 0) {
      return this.products();
    }

    return this.products().filter(
      product => product.catId === categoryId
    );

  });

  totalPrice = computed(() => {

    return this.filteredProducts().reduce(
      (sum: number, product: IProduct) => sum + product.price,
      0
    );

  });

  changeCategory(categoryId: number): void {

    this.selectedCategory.set(categoryId);

  }

  buyProduct(product: IProduct): void {

  if(product.quantity <= 0){
    return;
  }

  product.quantity--;

  this.cartTotal.update(
    total => total + product.price
  );

}

}
