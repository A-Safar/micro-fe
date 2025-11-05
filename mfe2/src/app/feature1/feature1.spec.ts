import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1 } from './feature1';

describe('Feature1', () => {
  let component: Feature1;
  let fixture: ComponentFixture<Feature1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feature1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
