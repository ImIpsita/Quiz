import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllQuizesNormalComponent } from './view-all-quizes-normal.component';

describe('ViewAllQuizesNormalComponent', () => {
  let component: ViewAllQuizesNormalComponent;
  let fixture: ComponentFixture<ViewAllQuizesNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllQuizesNormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllQuizesNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
