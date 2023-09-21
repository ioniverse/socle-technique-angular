import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { HasRoleDirective } from './directives/has-role.directive';
import { FullNamePipe } from './pipes';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [CommonModule, TranslateModule, MatSnackBarModule],
  declarations: [HasRoleDirective, HasPermissionDirective, FullNamePipe],
  exports: [
    // Modules
    CommonModule,
    TranslateModule,
    MatSnackBarModule,
    FormsModule,

    // Directives
    HasPermissionDirective,
    HasRoleDirective,

    // Pipes
    FullNamePipe,
  ],
  // No providers here! Since they’ll be already provided in CoreModule.
})
export class SharedModule {}
