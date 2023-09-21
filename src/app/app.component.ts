import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'apti-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _translateService: TranslateService) {
    // Use the browser's language, if available, else set it to the default language
    const browserLang = _translateService.getBrowserLang();
    _translateService.use(browserLang?.match(/en|fr/) ? browserLang : 'fr');
  }
}
