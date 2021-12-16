import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompBaComponent } from './comp-ba/comp-ba.component';
import { CompBbComponent } from './comp-bb/comp-bb.component';

@NgModule({
  declarations: [CompBaComponent, CompBbComponent],
  imports: [CommonModule],
  exports: [CompBaComponent, CompBbComponent]
})
export class ModuleBModule {}
