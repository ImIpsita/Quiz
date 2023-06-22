import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcatagoryadminComponent } from './addcatagoryadmin.component';

describe('AddcatagoryadminComponent', () => {
  let component: AddcatagoryadminComponent;
  let fixture: ComponentFixture<AddcatagoryadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcatagoryadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcatagoryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
