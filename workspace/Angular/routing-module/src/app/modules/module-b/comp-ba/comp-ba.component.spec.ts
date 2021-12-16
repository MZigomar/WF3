import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBaComponent } from './comp-ba.component';

describe('CompBaComponent', () => {
  let component: CompBaComponent;
  let fixture: ComponentFixture<CompBaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
