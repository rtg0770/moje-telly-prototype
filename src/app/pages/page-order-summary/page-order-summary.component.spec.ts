import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrderSummaryComponent } from './page-order-summary.component';

describe('PageOrderSummaryComponent', () => {
  let component: PageOrderSummaryComponent;
  let fixture: ComponentFixture<PageOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOrderSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
