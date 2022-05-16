import { ComponentFixture, TestBed } from '@angular/core/testing';

import { blockchainComponent } from './blockchain.component';

describe('blockchainComponent', () => {
  let component: blockchainComponent;
  let fixture: ComponentFixture<blockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ blockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(blockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
