import { moment } from 'fake-moment';

export class XFoo extends HTMLElement {
  createdCallback() {
    this.textContent = 'today is: ' + moment();
  }
}

console.log('is moment undefined in x-foo?', typeof moment == 'undefined');
