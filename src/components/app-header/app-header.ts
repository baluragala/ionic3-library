import { Input } from '@angular/core';
import { Component } from '@angular/core';

/**
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {

  @Input() iconName:string;
  @Input() navBarTitle:string;

  ngOnChanges(){
    console.log(this);
  }

}
