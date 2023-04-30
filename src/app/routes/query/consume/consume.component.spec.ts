import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {QueryConsumeComponent} from './consume.component';

describe('QueryConsumeComponent', () => {
  let component: QueryConsumeComponent;
  let fixture: ComponentFixture<QueryConsumeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [QueryConsumeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
