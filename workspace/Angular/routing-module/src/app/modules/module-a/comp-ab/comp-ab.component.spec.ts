import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAbComponent } from './comp-ab.component';

describe('CompAbComponent', () => {
  let component: CompAbComponent;
  let fixture: ComponentFixture<CompAbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
