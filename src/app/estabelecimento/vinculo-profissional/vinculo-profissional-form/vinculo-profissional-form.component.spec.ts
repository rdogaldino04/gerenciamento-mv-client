import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoProfissionalFormComponent } from './vinculo-profissional-form.component';

describe('VinculoProfissionalFormComponent', () => {
  let component: VinculoProfissionalFormComponent;
  let fixture: ComponentFixture<VinculoProfissionalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoProfissionalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoProfissionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
