import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeVI from '@angular/common/locales/vi';
import { CategoriesService } from '../categories.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

registerLocaleData(localeVI);

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = {};
  categories: any = [];
  bigImage: any;
  id: any;
  isLoading = true;

  constructor(
    private productService: ProductService,
    private categoryService: CategoriesService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');

    forkJoin({
      categories: this.categoryService.getCategories(),
      product: this.productService.getProductById(this.id)
    })
      .pipe(
        map((result) => {
          const { categories, product } = result;
          this.categories = categories;
          this.product = product;
          this.bigImage = this.product.image;
          this.product.category_name = this.categories.find((x: { slug: any }) => x.slug === this.product.category)?.name;
          console.log(this.product.category_name);
          console.log(this.product);
        })
      )
      .subscribe(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
  }

  viewImage(image: any): void {
    this.bigImage = image;
  }
}
