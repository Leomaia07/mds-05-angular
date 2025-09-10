import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InterpolationComponent } from './data-binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventiBindingComponent } from './data-binding/event-binding/eventi-binding.component';
import { TwoWayDataBindingComponent } from './data-binding/two-way-data-binding/two-way-data-binding.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HelloWorldComponent,InterpolationComponent,PropertyBindingComponent,EventiBindingComponent,TwoWayDataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-word';
}
