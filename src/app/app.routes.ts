import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BacketPageComponent } from './pages/backet-page/backet-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminProductsComponent } from './pages/admin-page/components/admin-products/admin-products.component';
import { AdminBannersComponent } from './pages/admin-page/components/admin-banners/admin-banners.component';
import { AdminUsersComponent } from './pages/admin-page/components/admin-users/admin-users.component';

const adminRoutes: Routes = [
    { path: 'products', component: AdminProductsComponent },
    { path: 'banners', component: AdminBannersComponent },
    { path: 'users', component: AdminUsersComponent },
]

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'backet-page', component: BacketPageComponent },
    { path: 'user-page', component: UserPageComponent },
    { path: 'search-page', component: SearchPageComponent },
    { path: 'catalog/:type', component: CatalogPageComponent },
    { path: 'login-page', component: LoginPageComponent },
    { path: 'admin-page', component: AdminPageComponent },
    { path: 'admin-page', component: AdminPageComponent, children: adminRoutes },
    { path: '**', redirectTo: '/' }
];

