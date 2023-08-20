import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaColorComponent } from './veterinaria-color.component';

describe('VeterinariaColorComponent', () => {
  let component: VeterinariaColorComponent;
  let fixture: ComponentFixture<VeterinariaColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariaColorComponent]
    });
    fixture = TestBed.createComponent(VeterinariaColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
