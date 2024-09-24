import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceMarineListItemComponent } from './space-marine-list-item.component';

describe('SpaceMarineListItemComponent', () => {
  let component: SpaceMarineListItemComponent;
  let fixture: ComponentFixture<SpaceMarineListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceMarineListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceMarineListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
