import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: '<div title={{foo}}></div>'
})
export class AppComponent {
  foo: string;
}
