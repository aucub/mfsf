import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {UserTokenComponent} from './token.component';

describe('UserTokenComponent', () => {
  let component: UserTokenComponent;
  let fixture: ComponentFixture<UserTokenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserTokenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
