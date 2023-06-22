import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadQuestioncatagoryComponent } from './load-questioncatagory.component';

describe('LoadQuestioncatagoryComponent', () => {
  let component: LoadQuestioncatagoryComponent;
  let fixture: ComponentFixture<LoadQuestioncatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadQuestioncatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadQuestioncatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
