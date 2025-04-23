import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibretasPage } from './libretas.page';

describe('LibretasPage', () => {
  let component: LibretasPage;
  let fixture: ComponentFixture<LibretasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibretasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
