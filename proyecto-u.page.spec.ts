import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectoUPage } from './proyecto-u.page';

describe('ProyectoUPage', () => {
  let component: ProyectoUPage;
  let fixture: ComponentFixture<ProyectoUPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
