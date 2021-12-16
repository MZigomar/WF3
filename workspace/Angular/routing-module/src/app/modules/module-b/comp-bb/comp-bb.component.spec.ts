import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBbComponent } from './comp-bb.component';

describe('CompBbComponent', () => {
  let component: CompBbComponent;
  let fixture: ComponentFixture<CompBbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
