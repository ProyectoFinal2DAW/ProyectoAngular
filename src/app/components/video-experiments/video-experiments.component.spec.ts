import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoExperimentsComponent } from './video-experiments.component';

describe('VideoExperimentsComponent', () => {
  let component: VideoExperimentsComponent;
  let fixture: ComponentFixture<VideoExperimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoExperimentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
