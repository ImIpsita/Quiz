import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizesadminComponent } from './viewquizesadmin.component';

describe('ViewquizesadminComponent', () => {
  let component: ViewquizesadminComponent;
  let fixture: ComponentFixture<ViewquizesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquizesadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewquizesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
