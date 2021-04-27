import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCrearComponent } from './vista-crear.component';

describe('VistaCrearComponent', () => {
  let component: VistaCrearComponent;
  let fixture: ComponentFixture<VistaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
