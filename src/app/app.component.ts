import { Component } from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InterpolationComponent } from './data-binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventiBindingComponent } from './data-binding/event-binding/eventi-binding.component';
import { TwoWayDataBindingComponent } from './data-binding/two-way-data-binding/two-way-data-binding.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import {ButtonComponent} from './angular-material/button/button.component';
import {FormFieldComponent} from './angular-material/form-field/form-field.component';
import {ExpansionPanelComponent} from './angular-material/expansion-panel/expansion-panel.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-root',
  imports: [
    // ButtonComponent,
    // FormFieldComponent,
    // ExpansionPanelComponent,
    RouterLink,
    RouterOutlet,RouterModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'hello-word';
}
