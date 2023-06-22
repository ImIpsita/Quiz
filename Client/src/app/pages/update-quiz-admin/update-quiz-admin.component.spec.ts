import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuizAdminComponent } from './update-quiz-admin.component';

describe('UpdateQuizAdminComponent', () => {
  let component: UpdateQuizAdminComponent;
  let fixture: ComponentFixture<UpdateQuizAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuizAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateQuizAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
