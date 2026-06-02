import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyPipe } from '@angular/common';

import { IProduct } from '../models/iproduct';
import { ProductFilter } from './product-filter/product-filter';

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

  products: IProduct[] = [
    {
      id: 1,
      name: "Laptop",
      imgUrl: "https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM",
      price: 1200,
      quantity: 10,
      catId: 1
    },
    {
      id: 2,
      name: "Mouse",
      imgUrl: "https://picsum.photos/200?random=2",
      price: 25,
      quantity: 0,
      catId: 1
    },
    {
      id: 3,
      name: "T-Shirt",
      imgUrl: "https://picsum.photos/200?random=3",
      price: 30,
      quantity: 1,
      catId: 2
    },
    {
      id: 4,
      name: "Jeans",
      imgUrl: "https://picsum.photos/200?random=4",
      price: 70,
      quantity: 25,
      catId: 2
    },
    {
      id: 5,
      name: "Coffee Mug",
      imgUrl: "https://picsum.photos/200?random=5",
      price: 12,
      quantity: 0,
      catId: 3
    },
    {
      id: 6,
      name: "Notebook",
      imgUrl: "https://picsum.photos/200?random=6",
      price: 8,
      quantity: 100,
      catId: 3
    }
  ];

  categories = [
    {
      id: 1,
      name: "Electronics"
    },
    {
      id: 2,
      name: "Clothing"
    },
    {
      id: 3,
      name: "Stationery"
    }
  ];

  selectedCategory = signal(0);
  cartTotal = signal(0);

  filteredProducts = computed(() => {

    const categoryId = this.selectedCategory();

    if (categoryId === 0) {
      return this.products;
    }

    return this.products.filter(
      product => product.catId === categoryId
    );

  });

  totalPrice = computed(() => {

  return this.filteredProducts()
    .reduce(
      (sum, product) => sum + product.price,
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
