import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {QueryPushComponent} from './push.component';

describe('QueryPushComponent', () => {
  let component: QueryPushComponent;
  let fixture: ComponentFixture<QueryPushComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [QueryPushComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
