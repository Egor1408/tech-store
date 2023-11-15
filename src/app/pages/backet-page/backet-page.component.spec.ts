import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacketPageComponent } from './backet-page.component';

describe('BacketPageComponent', () => {
  let component: BacketPageComponent;
  let fixture: ComponentFixture<BacketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacketPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BacketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
