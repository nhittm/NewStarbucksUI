import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ICategories } from '../icategories';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-category.component.html',
  styleUrl: './menu-category.component.css'
})
export class MenuCategoryComponent {
  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private router: ActivatedRoute
  ) { }
  listProduct: any[] = [];
  listCategories: any[] = [];
  filterProduct: any[] = [];
  slug:any = ''
  isLoading:boolean = true;
  category_name: any = ''
  ngOnInit(): void {
    this.slug = this.router.snapshot.paramMap.get('slug');
    this.productService.getProducts().subscribe(data => {
      this.listProduct = data
      this.filterProduct = data.filter((x: { category: string; }) => x.category == this.slug);
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });

    this.categoriesService.getCategories().subscribe(data => {
      this.listCategories = data as ICategories[];
      this.category_name = this.listCategories.find(x => x.slug == this.slug)?.name;
      console.log(this.listCategories);
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      
    });

  }
  filterProductByCategory(slug: any){
    this.filterProduct = this.listProduct.filter((x: { category: string; }) => x.category == slug);
    this.category_name = this.listCategories.find(x => x.slug == slug)?.name;
    this.slug = slug;
  }
}
