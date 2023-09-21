import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserInfoService } from '@core/services/user';
import { PermissionEnum } from '@shared/enums';

@Directive({
  selector: '[aptiHasPermission]',
})
export class HasPermissionDirective {
  @Input() set aptiHasPermission(permissions: PermissionEnum[]) {
    if (this._userInfoService.hasAnyPermission(permissions)) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }

  constructor(
    private _userInfoService: UserInfoService,
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}
}
