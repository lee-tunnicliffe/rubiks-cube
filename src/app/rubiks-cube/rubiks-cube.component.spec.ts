/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RubiksCubeComponent } from './rubiks-cube.component';

describe('RubiksCubeComponent', () => {
  let component: RubiksCubeComponent;
  let fixture: ComponentFixture<RubiksCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubiksCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubiksCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
