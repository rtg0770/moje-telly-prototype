import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustLogoComponent } from './just-logo.component';

describe('JustLogoComponent', () => {
  let component: JustLogoComponent;
  let fixture: ComponentFixture<JustLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
