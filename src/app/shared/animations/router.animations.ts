import {
  trigger,
  state,
  animate,
  style,
  transition,
} from '@angular/animations';

/**
 * @example
 * import { routerTransition } from './router.animations';
 * @Component({
 * selector: 'home',
 * template: `<h1>Home</h1>`,
 * animations: [routerTransition()],
 * host: {'[@routerTransition]': ''}
 * */

export function routerTransition() {
  return slideToLeft();
}

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '40%' })),
    state('*', style({ position: 'fixed', width: '0%' })),
    transition(':enter', [
      style({ transform: 'translateX(-40%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(40%)' })),
    ]),
  ]);
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '40%' })),
    state('*', style({ position: 'fixed', width: '0%' })),
    transition(':enter', [
      style({ transform: 'translateX(40%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(-40%)' })),
    ]),
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
    state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' })),
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' })),
    ]),
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
    state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' })),
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' })),
    ]),
  ]);
}
