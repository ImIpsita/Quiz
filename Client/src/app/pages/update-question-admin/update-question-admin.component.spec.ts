import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionAdminComponent } from './update-question-admin.component';

describe('UpdateQuestionAdminComponent', () => {
  let component: UpdateQuestionAdminComponent;
  let fixture: ComponentFixture<UpdateQuestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuestionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateQuestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
