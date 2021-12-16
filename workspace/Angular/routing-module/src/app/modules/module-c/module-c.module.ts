import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompCaComponent } from './comp-ca/comp-ca.component';
import { CompCbComponent } from './comp-cb/comp-cb.component';

@NgModule({
  declarations: [CompCaComponent, CompCbComponent],
  imports: [CommonModule]
})
export class ModuleCModule {}
