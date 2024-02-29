import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojectAdComponent } from './editproject-ad.component';

describe('EditprojectAdComponent', () => {
  let component: EditprojectAdComponent;
  let fixture: ComponentFixture<EditprojectAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprojectAdComponent]
    });
    fixture = TestBed.createComponent(EditprojectAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
