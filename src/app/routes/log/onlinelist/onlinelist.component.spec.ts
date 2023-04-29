import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogOnlinelistComponent } from './onlinelist.component';

describe('LogOnlinelistComponent', () => {
  let component: LogOnlinelistComponent;
  let fixture: ComponentFixture<LogOnlinelistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOnlinelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOnlinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
