import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCountryComponent } from './specific-country.component';

describe('SpecificCountryComponent', () => {
  let component: SpecificCountryComponent;
  let fixture: ComponentFixture<SpecificCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecificCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecificCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
