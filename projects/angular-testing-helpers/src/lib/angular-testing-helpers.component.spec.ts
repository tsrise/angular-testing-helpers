import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestingHelpersComponent } from './angular-testing-helpers.component';

describe('AngularTestingHelpersComponent', () => {
  let component: AngularTestingHelpersComponent;
  let fixture: ComponentFixture<AngularTestingHelpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTestingHelpersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTestingHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
