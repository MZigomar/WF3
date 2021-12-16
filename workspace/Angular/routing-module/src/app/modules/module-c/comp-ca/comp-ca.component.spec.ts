import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCaComponent } from './comp-ca.component';

describe('CompCaComponent', () => {
  let component: CompCaComponent;
  let fixture: ComponentFixture<CompCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
