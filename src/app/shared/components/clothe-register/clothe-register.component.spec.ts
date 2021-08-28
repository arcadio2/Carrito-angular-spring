import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheRegisterComponent } from './clothe-register.component';

describe('ClotheRegisterComponent', () => {
  let component: ClotheRegisterComponent;
  let fixture: ComponentFixture<ClotheRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClotheRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClotheRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
