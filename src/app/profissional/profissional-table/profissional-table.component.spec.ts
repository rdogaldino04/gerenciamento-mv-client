import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalTableComponent } from './profissional-table.component';

describe('ProfissionalTableComponent', () => {
  let component: ProfissionalTableComponent;
  let fixture: ComponentFixture<ProfissionalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
