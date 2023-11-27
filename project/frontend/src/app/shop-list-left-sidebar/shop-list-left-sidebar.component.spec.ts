import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListLeftSidebarComponent } from './shop-list-left-sidebar.component';

describe('ShopListLeftSidebarComponent', () => {
  let component: ShopListLeftSidebarComponent;
  let fixture: ComponentFixture<ShopListLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopListLeftSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopListLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
