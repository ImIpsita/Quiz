import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquizadminComponent } from './addquizadmin.component';

describe('AddquizadminComponent', () => {
  let component: AddquizadminComponent;
  let fixture: ComponentFixture<AddquizadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquizadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddquizadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
