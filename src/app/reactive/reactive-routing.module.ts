import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from '../auth/pages/basic-page/basic-page.component';
import { DynamicPageComponent } from '../auth/pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from '../auth/pages/switches-page/switches-page.component';

const routes: Routes = [
   { path: '', 
   children: [
    {path:'basic', component: BasicPageComponent},
  {path:'dynamic', component: DynamicPageComponent},
  {path:'switches', component: SwitchesPageComponent},
  {path:'**', redirectTo: 'basic'},
  ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
