import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListItemComponent } from './dog-list-item.component';

describe('DogListItemComponent', () => {
  let component: DogListItemComponent;
  let fixture: ComponentFixture<DogListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
