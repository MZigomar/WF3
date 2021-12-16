import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAaComponent } from './comp-aa.component';

describe('CompAaComponent', () => {
  let component: CompAaComponent;
  let fixture: ComponentFixture<CompAaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompAaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
