import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilComponentsComponent } from './stencil-components.component';

describe('StencilComponentsComponent', () => {
  let component: StencilComponentsComponent;
  let fixture: ComponentFixture<StencilComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StencilComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StencilComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
