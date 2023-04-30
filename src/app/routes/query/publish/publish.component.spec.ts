import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {QueryPublishComponent} from './publish.component';

describe('QueryPublishComponent', () => {
  let component: QueryPublishComponent;
  let fixture: ComponentFixture<QueryPublishComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [QueryPublishComponent]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
