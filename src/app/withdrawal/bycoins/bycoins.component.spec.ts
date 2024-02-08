import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BycoinsComponent } from './bycoins.component';

describe('BycoinsComponent', () => {
  let component: BycoinsComponent;
  let fixture: ComponentFixture<BycoinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BycoinsComponent]
    });
    fixture = TestBed.createComponent(BycoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
