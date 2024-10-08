import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSignInComponent } from './page-sign-in.component';

describe('PageSignInComponent', () => {
  let component: PageSignInComponent;
  let fixture: ComponentFixture<PageSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSignInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
