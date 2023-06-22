import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcatagoryadminComponent } from './viewcatagoryadmin.component';

describe('ViewcatagoryadminComponent', () => {
  let component: ViewcatagoryadminComponent;
  let fixture: ComponentFixture<ViewcatagoryadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcatagoryadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcatagoryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
