import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoAddComponent } from './contenido-add.component';

describe('ContenidoAddComponent', () => {
  let component: ContenidoAddComponent;
  let fixture: ComponentFixture<ContenidoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
