import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { DrawerComponent } from './drawer/drawer.component';
import { TitleComponent } from './title/title.component';
import { TranslateModule } from '@ngx-translate/core';
import { PillComponent } from './pill/pill.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule, TranslateModule, FontAwesomeModule],
  declarations: [DrawerComponent, TitleComponent, PillComponent, NavigatorComponent],
  exports: [DrawerComponent, TitleComponent, PillComponent, NavigatorComponent],
})
export class SharedModule {}
