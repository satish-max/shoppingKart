import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componenet/dashboard/dashboard.component';
import { MycartComponent } from './componenet/mycart/mycart.component';
import { SearchproductComponent } from './componenet/searchproduct/searchproduct.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'order/:id', component: OrderComponent },
  { path: 'dash/:id', component: DashboardComponent },
  { path: 'mycart/:id', component: MycartComponent },
  {path:'product/:id',component:ProductComponent},
  //  {path:'',redirectTo:'dash',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
