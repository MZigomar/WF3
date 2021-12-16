import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { CompBaComponent } from './comp-ba/comp-ba.component';
import { CompBbComponent } from './comp-bb/comp-bb.component';

@NgModule({
  declarations: [CompBaComponent, CompBbComponent],
  imports: [CommonModule, HttpClientModule]
})
export class ModuleBModule {}
