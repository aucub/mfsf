import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPageListComponent } from './page-list.component';

describe('UserPageListComponent', () => {
  let component: UserPageListComponent;
  let fixture: ComponentFixture<UserPageListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
