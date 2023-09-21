import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserInfoService } from '@core/services/user';
import { RoleEnum } from '@shared/enums';

@Directive({
  selector: '[aptiHasRole]',
})
export class HasRoleDirective {
  @Input() set aptiHasRole(roles: RoleEnum[]) {
    if (this._userInfoService.hasAnyRole(roles)) {
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
