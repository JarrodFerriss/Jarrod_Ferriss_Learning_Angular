import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceMarineListComponent } from './space-marine-list.component';

describe('SpaceMarineListComponent', () => {
  let component: SpaceMarineListComponent;
  let fixture: ComponentFixture<SpaceMarineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceMarineListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceMarineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
