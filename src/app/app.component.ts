import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: '<div title={{ba}}></div>'
})
export class AppComponent {
  foo: string;
  bar: number;
}
