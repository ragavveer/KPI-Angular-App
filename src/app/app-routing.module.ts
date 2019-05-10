import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: FirstPageComponent
  },
  {
    path: 'second',
    component: SecondPageComponent
  },
  {
    path: 'third',
    component: ThirdPageComponent
  },
  {
    path: 'fourth',
    component: FourthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
