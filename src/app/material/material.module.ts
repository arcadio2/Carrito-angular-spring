import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';


/**AQUI SE VAN A IMPORTAR TODOS LOS MODULOS DE MATERIAL QUE NECESITEMSO Y SOLO
 *  IMPORTAMOS EL MODULO EN OTRO */
@NgModule({
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
