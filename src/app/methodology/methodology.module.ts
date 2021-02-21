import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodologyComponent } from './methodology.component';
import { SharedModule } from '@shared';
import { FlexModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MethodologyComponent],
  exports: [MethodologyComponent],
  imports: [CommonModule, SharedModule, FlexModule, FontAwesomeModule],
})
export class MethodologyModule {}
