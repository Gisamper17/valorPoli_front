import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilActComponent } from './perfil-act.component';

describe('PerfilActComponent', () => {
  let component: PerfilActComponent;
  let fixture: ComponentFixture<PerfilActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
