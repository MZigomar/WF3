import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCbComponent } from './comp-cb.component';

describe('CompCbComponent', () => {
  let component: CompCbComponent;
  let fixture: ComponentFixture<CompCbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
