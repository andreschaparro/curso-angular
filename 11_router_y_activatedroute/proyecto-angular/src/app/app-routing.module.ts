import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';

// Aquí se completan ingresan las rutas que vinculan una URL con un Componente
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  // Ingresar en el navegador http://localhost:4200/products/manzana para verificar que la siguiente ruta funciona
  { path: 'products/:category/:productId', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  // La siguiente ruta hace una redirección en caso de que se haya ingresado una inválida
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
