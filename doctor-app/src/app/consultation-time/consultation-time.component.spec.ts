import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationTimeComponent } from './consultation-time.component';

describe('ConsultationTimeComponent', () => {
  let component: ConsultationTimeComponent;
  let fixture: ComponentFixture<ConsultationTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
