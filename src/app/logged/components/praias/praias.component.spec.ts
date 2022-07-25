import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraiasComponent } from './praias.component';

describe('PraiasComponent', () => {
  let component: PraiasComponent;
  let fixture: ComponentFixture<PraiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
