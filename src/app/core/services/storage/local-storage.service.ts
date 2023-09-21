import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private ls = localStorage;

  public setItem(key: string, value: unknown) {
    const stringValue: string =
      typeof value === 'string' ? value : JSON.stringify(value);
    this.ls.setItem(key, stringValue);
    return true;
  }

  public getItem(key: string) {
    const value = this.ls.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  }

  public removeItem(key: string) {
    this.ls.removeItem(key);
  }

  public clear() {
    this.ls.clear();
  }
}
