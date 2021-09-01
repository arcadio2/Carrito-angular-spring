import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


/**AQUI SE VAN A IMPORTAR TODOS LOS MODULOS DE MATERIAL QUE NECESITEMSO Y SOLO
 *  IMPORTAMOS EL MODULO EN OTRO */
@NgModule({
  exports:[
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
