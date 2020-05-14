import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoProfissionalComponent } from './vinculo-profissional.component';

describe('VinculoProfissionalComponent', () => {
  let component: VinculoProfissionalComponent;
  let fixture: ComponentFixture<VinculoProfissionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoProfissionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
