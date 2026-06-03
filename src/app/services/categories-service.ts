import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories = signal( [
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
  ]);

  getCategories(){
    return this.categories;
  }


}
