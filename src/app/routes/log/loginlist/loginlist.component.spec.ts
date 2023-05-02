import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {LogLoginlistComponent} from './loginlist.component';

describe('LogLoginlistComponent', () => {
  let component: LogLoginlistComponent;
  let fixture: ComponentFixture<LogLoginlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LogLoginlistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogLoginlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
