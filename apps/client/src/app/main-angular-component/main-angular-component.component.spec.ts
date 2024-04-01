import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainAngularComponentComponent } from './main-angular-component.component';

describe('MainAngularComponentComponent', () => {
  let component: MainAngularComponentComponent;
  let fixture: ComponentFixture<MainAngularComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAngularComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainAngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
