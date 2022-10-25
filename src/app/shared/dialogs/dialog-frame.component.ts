import {Component, Input} from '@angular/core';

@Component({
  selector: 'ua-dialog-frame',
  template: `
    <h2>{{title}}</h2>
    <section>
      <ng-content></ng-content>
    </section>
  `,
  styles: [':host{padding: 4rem; height: 100%}']
})
export class DialogFrameComponent {
  @Input()
  title: string = '';
}
