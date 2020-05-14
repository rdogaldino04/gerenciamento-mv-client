import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoProfissionalTableComponent } from './vinculo-profissional-table.component';

describe('VinculoProfissionalTableComponent', () => {
  let component: VinculoProfissionalTableComponent;
  let fixture: ComponentFixture<VinculoProfissionalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoProfissionalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoProfissionalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
