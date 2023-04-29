import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {LogLinklistComponent} from './linklist.component';

describe('LogLinklistComponent', () => {
  let component: LogLinklistComponent;
  let fixture: ComponentFixture<LogLinklistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LogLinklistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogLinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
