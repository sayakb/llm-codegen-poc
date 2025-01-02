import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenCompAbcComponent } from './gen-comp-abc.component';

describe('GenCompAbcComponent', () => {
  let component: GenCompAbcComponent;
  let fixture: ComponentFixture<GenCompAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenCompAbcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenCompAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});