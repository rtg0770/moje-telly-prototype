import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSelectPackageComponent } from './page-select-package.component';

describe('PageSelectPackageComponent', () => {
  let component: PageSelectPackageComponent;
  let fixture: ComponentFixture<PageSelectPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSelectPackageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSelectPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
