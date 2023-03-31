import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChxboxtestComponent } from './chxboxtest.component';

describe('ChxboxtestComponent', () => {
  let component: ChxboxtestComponent;
  let fixture: ComponentFixture<ChxboxtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChxboxtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChxboxtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
