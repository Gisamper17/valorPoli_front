import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoBodyComponent } from './contenido-body.component';

describe('ContenidoBodyComponent', () => {
  let component: ContenidoBodyComponent;
  let fixture: ComponentFixture<ContenidoBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
