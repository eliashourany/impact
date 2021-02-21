import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@app/material.module';
import { ShellComponent } from './shell.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared';
import { AboutModule } from '@app/about/about.module';
import { MethodologyModule } from '@app/methodology/methodology.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    I18nModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule,
    AboutModule,
    MethodologyModule,
  ],
  declarations: [ShellComponent],
})
export class ShellModule {}
