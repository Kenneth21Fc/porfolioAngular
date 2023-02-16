import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyrctosComponent } from './proyrctos.component';

describe('ProyrctosComponent', () => {
  let component: ProyrctosComponent;
  let fixture: ComponentFixture<ProyrctosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyrctosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyrctosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
