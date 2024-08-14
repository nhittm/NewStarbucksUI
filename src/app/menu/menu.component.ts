import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { CategoriesService, } from '../categories.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ICategories } from '../icategories';
import { registerLocaleData } from '@angular/common';
import localeVI from '@angular/common/locales/vi';

registerLocaleData(localeVI);

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listProduct: any[] = [];
  listDrink: any[] = [];
  listFood: any[] = [];
  listGoods: any[] = [];
  listCategories: any[] = [];
  isLoading = true;
  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.listProduct = data;
      this.listDrink = data.filter((x: { category: string; }) => x.category == 'drink');
      this.listFood = data.filter((x: { category: string; }) => x.category == 'food');
      this.listGoods = data.filter((x: { category: string; }) => x.category == 'goods');
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });

    this.categoriesService.getCategories().subscribe(data => {
      this.listCategories = data as ICategories[];
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });

  }

   

}
