import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
  ], 
  exports: [
    AuthUserComponent
  ]
})
export class UserModule { }
