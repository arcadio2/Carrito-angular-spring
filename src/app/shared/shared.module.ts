import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
