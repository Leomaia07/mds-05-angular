import { Routes } from '@angular/router';
import {TemplateDrivenComponent} from './forms/template-driven/template-driven.component';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {EventiBindingComponent} from './data-binding/event-binding/eventi-binding.component';
import {PropertyBindingComponent} from './data-binding/property-binding/property-binding.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ButtonComponent} from './angular-material/button/button.component';
import {FormFieldComponent} from './angular-material/form-field/form-field.component';
import {ExpansionPanelComponent} from './angular-material/expansion-panel/expansion-panel.component';

export const routes: Routes = [
  {path: "home", component:HelloWorldComponent},
  {path: "template-driven", component:TemplateDrivenComponent},
  {path: "two-way-data-binding", component:TwoWayDataBindingComponent},
  {path: "interpolation", component:InterpolationComponent},
  {path: "event-binding", component:EventiBindingComponent},
  {path: "proprety-binding", component:PropertyBindingComponent},
  {path: "button", component:ButtonComponent},
  {path: "form-field", component:FormFieldComponent},
  {path: "expansion-panel", component:ExpansionPanelComponent},
];
