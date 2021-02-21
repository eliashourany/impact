import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '@shared';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, SharedModule],
  declarations: [AboutComponent],
  exports: [AboutComponent],
})
export class AboutModule {}
