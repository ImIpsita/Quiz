import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecatagoryadminComponent } from './updatecatagoryadmin.component';

describe('UpdatecatagoryadminComponent', () => {
  let component: UpdatecatagoryadminComponent;
  let fixture: ComponentFixture<UpdatecatagoryadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecatagoryadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecatagoryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
