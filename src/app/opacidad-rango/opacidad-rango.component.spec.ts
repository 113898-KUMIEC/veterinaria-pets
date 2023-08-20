import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpacidadRangoComponent } from './opacidad-rango.component';

describe('OpacidadRangoComponent', () => {
  let component: OpacidadRangoComponent;
  let fixture: ComponentFixture<OpacidadRangoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpacidadRangoComponent]
    });
    fixture = TestBed.createComponent(OpacidadRangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
