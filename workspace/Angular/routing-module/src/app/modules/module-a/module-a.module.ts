import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompAaComponent } from './comp-aa/comp-aa.component';
import { CompAbComponent } from './comp-ab/comp-ab.component';

@NgModule({
  declarations: [CompAaComponent, CompAbComponent],
  imports: [CommonModule],
  exports: [CompAaComponent, CompAbComponent]
})
export class ModuleAModule {}
