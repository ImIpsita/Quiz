import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionadminComponent } from './addquestionadmin.component';

describe('AddquestionadminComponent', () => {
  let component: AddquestionadminComponent;
  let fixture: ComponentFixture<AddquestionadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquestionadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddquestionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
