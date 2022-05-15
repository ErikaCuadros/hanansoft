import { ComponentFixture, TestBed } from '@angular/core/testing';

import { developersComponent } from './developers.component';

describe('developersComponent', () => {
  let component: developersComponent;
  let fixture: ComponentFixture<developersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ developersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(developersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
