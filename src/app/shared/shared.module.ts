import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    ModalComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[ModalComponent]
})
export class SharedModule { }
