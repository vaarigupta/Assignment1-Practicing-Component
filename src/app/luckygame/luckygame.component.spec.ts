import { ComponentFixture, TestBed } from '@angular/core/testing';

import { luckygameComponent } from './luckygame.component';

describe('luckygameComponent', () => {
  let component: luckygameComponent;
  let fixture: ComponentFixture<luckygameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ luckygameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(luckygameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
