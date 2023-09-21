import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
];

/**
 * @example
 * // Component file
 * import { ngIfAnim } from '@shared/animations';
 * @Component({
 *   ...
 *   animations: [ngIfAnim]
 * })
 * // Template
 * <div *ngIf="error" class="error" [@ngIfAnim]>{{error}}</div>
 */
export const ngIfAnim = trigger('ngIfAnim', fadeAnimation);
