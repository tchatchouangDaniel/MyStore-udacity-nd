import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { SliderComponent } from './components/slider/slider.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'cart', component: CartPageComponent, data: { animation: 'Cart' } },
  {
    path: 'product/:id',
    component: ProductDetailPageComponent,
    data: { animation: 'Product' },
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: { animation: 'Checkout' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
