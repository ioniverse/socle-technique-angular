import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInfoService } from '@core/services/user';
import { PermissionEnum } from '@shared/enums';
import { HasPermissionDirective } from './has-permission.directive';

@Component({
  template: `
    <ng-container *aptiHasPermission="permissions">
      <div id="content">Content visible with permission</div>
    </ng-container>
  `,
})
class TestComponent {
  public permissions: PermissionEnum[] = [];
}

describe('HasPermissionDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let userInfoServiceMock: Partial<UserInfoService>;

  beforeEach(() => {
    userInfoServiceMock = {
      hasAnyPermission: jest
        .fn()
        .mockImplementationOnce(() => true)
        .mockImplementationOnce(() => false),
      hasAnyRole: jest
        .fn()
        .mockImplementationOnce(() => true)
        .mockImplementationOnce(() => false),
    };
    TestBed.configureTestingModule({
      declarations: [HasPermissionDirective, TestComponent],
      providers: [{ provide: UserInfoService, useValue: userInfoServiceMock }],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display content when user has ADMIN permission', () => {
    component.permissions = [PermissionEnum.ADMIN];

    fixture.detectChanges();

    const contentElement = fixture.nativeElement.querySelector('#content');
    expect(contentElement).toBeTruthy();
  });

  it('should not display content when user is banned', () => {
    component.permissions = [PermissionEnum.BANNED];

    fixture.detectChanges();

    const contentElement = fixture.nativeElement.querySelector('#content');
    expect(contentElement).toBeFalsy();
  });
});
