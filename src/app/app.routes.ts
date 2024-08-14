import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StoresComponent } from './stores/stores.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'menu/:slug', component: MenuCategoryComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'news', component: NewsComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    { path: 'stores', component: StoresComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '/home' }
];
