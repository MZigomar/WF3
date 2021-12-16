import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleAModule } from './modules/module-a/module-a.module';
import { ModuleBModule } from './modules/module-b/module-b.module';
import { ModuleCModule } from './modules/module-c/module-c.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleAModule,
    ModuleBModule,
    ModuleCModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
