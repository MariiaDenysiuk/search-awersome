import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAwersomeComponent } from './search-awersome.component';

describe('SearchAwersomeComponent', () => {
  let component: SearchAwersomeComponent;
  let fixture: ComponentFixture<SearchAwersomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAwersomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAwersomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
