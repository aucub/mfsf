import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {LogPushComponent} from './push.component';

describe('LogPushComponent', () => {
  let component: LogPushComponent;
  let fixture: ComponentFixture<LogPushComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LogPushComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
