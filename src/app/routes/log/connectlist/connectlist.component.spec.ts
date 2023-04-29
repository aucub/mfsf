import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogConnectlistComponent } from './connectlist.component';

describe('LogConnectlistComponent', () => {
  let component: LogConnectlistComponent;
  let fixture: ComponentFixture<LogConnectlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogConnectlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogConnectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
