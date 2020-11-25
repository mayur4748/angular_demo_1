import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodiesmenuComponent } from './foodiesmenu.component';

describe('FoodiesmenuComponent', () => {
  let component: FoodiesmenuComponent;
  let fixture: ComponentFixture<FoodiesmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodiesmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodiesmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
