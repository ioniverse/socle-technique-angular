import { Observable } from 'rxjs';
import { ConfigurationService } from '../configuration';
import { HttpService } from './http.service';

export abstract class HttpCrudService<T extends { id: string | number }> {
  /**
   * The resource path for the service.
   * This should be overridden in the child class.
   * @example '/users'
   */
  protected resourcePath = '';

  constructor(
    private _configService: ConfigurationService,
    private _http: HttpService
  ) {}

  private get _endpoint(): string {
    return `${this._configService.apiUrl}/${this.resourcePath}`;
  }

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(this._endpoint);
  }

  getById(id: number): Observable<T> {
    const url = `${this._endpoint}/${id}`;
    return this._http.get<T>(url);
  }

  create(item: T): Observable<T> {
    return this._http.post<T>(this._endpoint, item);
  }

  update(item: T): Observable<T> {
    const url = `${this._endpoint}/${item.id}`;
    return this._http.put<T>(url, item);
  }

  delete(id: number): Observable<void> {
    const url = `${this._endpoint}/${id}`;
    return this._http.delete<void>(url);
  }
}
