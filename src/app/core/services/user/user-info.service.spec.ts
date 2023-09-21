import { TestBed } from '@angular/core/testing';
import { PermissionEnum, RoleEnum } from '@shared/enums';
import { IUserInfo } from '@shared/models';
import { UserInfoService } from './user-info.service';

describe('UserInfoService', () => {
  let testUser: IUserInfo;
  let userInfoService: UserInfoService;

  beforeEach(() => {
    testUser = {
      id: '1',
      firstname: 'John',
      lastname: 'Doe',
      employeeNumber: '123456',
      fullname: 'John Doe',
      lastLogon: new Date(),
      logonCount: 1,
      role: { id: RoleEnum.DEVELOPER, name: 'User', code: 'D' },
      permission: { id: PermissionEnum.ADMIN, name: 'Read', code: 'A' },
      unit: { id: 1, name: 'Unit 1', code: 'U1' },
    };
    TestBed.configureTestingModule({
      providers: [UserInfoService],
    });
    userInfoService = TestBed.inject(UserInfoService);
  });

  it('should be created', () => {
    expect(userInfoService).toBeTruthy();
  });

  it('should set and get user', () => {
    userInfoService.user = testUser;
    expect(userInfoService.user).toBe(testUser);
  });

  it('should return true for hasRole when user has the specified role', () => {
    testUser.role = { id: RoleEnum.DEVELOPER, name: 'User', code: 'D' };
    userInfoService.user = testUser;
    expect(userInfoService.hasRole(RoleEnum.DEVELOPER)).toBe(true);
  });

  it('should return false for hasRole when user does not have the specified role', () => {
    testUser.role = { id: RoleEnum.DEVELOPER, name: 'User', code: 'D' };
    userInfoService.user = testUser;
    expect(userInfoService.hasRole(RoleEnum.SUPPORT1)).toBe(false);
  });

  it('should return true for hasAnyRole when user has at least one of the specified roles', () => {
    testUser.role = { id: RoleEnum.DEVELOPER, name: 'User', code: 'D' };
    userInfoService.user = testUser;
    const rolesToCheck = [RoleEnum.DEVELOPER, RoleEnum.SUPPORT1];
    expect(userInfoService.hasAnyRole(rolesToCheck)).toBe(true);
  });

  it('should return false for hasAnyRole when user does not have any of the specified roles', () => {
    testUser.role = { id: RoleEnum.CHANGE_MANAGER, name: 'User', code: 'D' };
    userInfoService.user = testUser;
    const rolesToCheck = [RoleEnum.DEVELOPER, RoleEnum.SUPPORT1];
    expect(userInfoService.hasAnyRole(rolesToCheck)).toBe(false);
  });

  it('should return true for hasPermission when user has the specified permission', () => {
    testUser.permission = { id: PermissionEnum.ADMIN, name: 'User', code: 'D' };
    userInfoService.user = testUser;
    expect(userInfoService.hasPermission(PermissionEnum.ADMIN)).toBe(true);
  });

  it('should return false for hasPermission when user does not have the specified permission', () => {
    testUser.permission = { id: PermissionEnum.ADMIN, name: 'User', code: 'D' };
    userInfoService.user = testUser;
    expect(userInfoService.hasPermission(PermissionEnum.OWNER)).toBe(false);
  });

  it('should return true for hasAnyPermission when user has at least one of the specified permissions', () => {
    testUser.permission = { id: PermissionEnum.ADMIN, name: 'User', code: 'D' };
    userInfoService.user = testUser;
    const permissionsToCheck = [PermissionEnum.ADMIN, PermissionEnum.OWNER];
    expect(userInfoService.hasAnyPermission(permissionsToCheck)).toBe(true);
  });

  it('should return false for hasAnyPermission when user does not have any of the specified permissions', () => {
    testUser.permission = { id: PermissionEnum.ADMIN, name: 'User', code: 'D' };
    userInfoService.user = testUser;
    const permissionsToCheck = [PermissionEnum.OWNER, PermissionEnum.DEFAULT];
    expect(userInfoService.hasAnyPermission(permissionsToCheck)).toBe(false);
  });
});
