import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class ConfigurationService {
  public get apiUrl() {
    return environment.apiUrl;
  }

  public get socketUrl() {
    return environment.socketUrl;
  }
}
