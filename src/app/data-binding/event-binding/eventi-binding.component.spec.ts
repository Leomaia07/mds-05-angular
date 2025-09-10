import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiBindingComponent } from './eventi-binding.component';

describe('EventiBindingComponent', () => {
  let component: EventiBindingComponent;
  let fixture: ComponentFixture<EventiBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventiBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventiBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
