import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { DefaultAppComponent } from './default-app/default-app.component';


const routes: Routes = [
  {path: 'two', component: CompTwoComponent},
  {path: 'three', component: CompThreeComponent},
  {path: '', component: DefaultAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
