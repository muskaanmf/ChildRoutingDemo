import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynotesComponent } from './bynotes.component';

describe('BynotesComponent', () => {
  let component: BynotesComponent;
  let fixture: ComponentFixture<BynotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynotesComponent]
    });
    fixture = TestBed.createComponent(BynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
