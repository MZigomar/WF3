import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ModuleAModule } from './modules/module-a/module-a.module';

import { CompAaComponent } from './modules/module-a/comp-aa/comp-aa.component';
import { CompAbComponent } from './modules/module-a/comp-ab/comp-ab.component';
import { CompBaComponent } from './modules/module-b/comp-ba/comp-ba.component';
import { CompBbComponent } from './modules/module-b/comp-bb/comp-bb.component';

const routes: Routes = [
  //CompAA
  { path: 'app-comp-aa', component: CompAaComponent },
  //CompAB
  { path: 'app-comp-ab', component: CompAbComponent },
  //CompBA
  { path: 'app-comp-ba', component: CompBaComponent },
  //CompBB
  { path: 'app-comp-bb', component: CompBbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
