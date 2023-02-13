import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { UserModalComponent } from './user-modal/user-modal.component';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[UserModalComponent]

})
export class UserModule { }
