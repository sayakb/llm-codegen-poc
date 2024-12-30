import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplButtonComponent } from './spl-button.component';

describe('SplButtonComponent', () => {
  let component: SplButtonComponent;
  let fixture: ComponentFixture<SplButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
