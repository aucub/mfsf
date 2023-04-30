import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {UserPushComponent} from './push.component';

describe('UserPushComponent', () => {
  let component: UserPushComponent;
  let fixture: ComponentFixture<UserPushComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserPushComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
