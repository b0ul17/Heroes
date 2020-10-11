import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';

@NgModule({
  declarations: [DialogContainerComponent],
  imports: [AppMaterialModule],
  exports: [
    CommonModule,
    DialogContainerComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
