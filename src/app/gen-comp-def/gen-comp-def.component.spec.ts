import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenCompDefComponent } from './gen-comp-def.component';

describe('GenCompDefComponent', () => {
  let component: GenCompDefComponent;
  let fixture: ComponentFixture<GenCompDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenCompDefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenCompDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});