import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {UserUeditComponent} from './uedit.component';

describe('UserUeditComponent', () => {
  let component: UserUeditComponent;
  let fixture: ComponentFixture<UserUeditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserUeditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
