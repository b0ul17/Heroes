import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { MissionComponent } from './mission.component';

describe('MissionComponent', () => {
  let component: MissionComponent;
  let fixture: ComponentFixture<MissionComponent>;
  let p: HTMLElement;
  let title: Title;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionComponent ]
    });
    fixture = TestBed.createComponent(MissionComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    p = fixture.nativeElement.querySelector('p');
    title = fixture.debugElement.injector.get(Title);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the caption property', () => {
    expect(p.textContent).toBeDefined();
  });

  it('should call the setTitle method', () => {
    spyOn(title, 'setTitle');
    fixture.detectChanges();
    expect(title.setTitle).toHaveBeenCalled();
  });
});
