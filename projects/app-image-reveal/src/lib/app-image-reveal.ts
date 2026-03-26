import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectorRef, NgZone, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-reveal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-image-reveal.html',
  styleUrls: ['./app-image-reveal.scss']
})
export class AppImageReveal implements OnInit, AfterViewInit {
  @Input() imageUrl = '';
  @Input() fillColor = '#898989';
  @Input() startValue = 0;
  @Input() endValue = 100;
  @Input() duration = 3000;
  @Input() showProgress = true;
  @Input() progressSize = '13px';
  @Input() progressColor = '#fff';

  progress = 0;
  fadeOut = false;
  private hasStarted = false;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit() {
    this.progress = this.startValue;
  }

  ngAfterViewInit() {
    requestAnimationFrame(() => this.startAnimation());
  }

  startAnimation() {
    if (this.hasStarted) return;
    this.hasStarted = true;

    const steps: number[] = [];
    let current = this.startValue;

    while (current < this.endValue) {
      let jump = current < this.endValue * 0.4
        ? Math.floor(Math.random() * 20) + 30
        : current < this.endValue * 0.8
          ? Math.floor(Math.random() * 15) + 40
          : Math.floor(Math.random() * 10) + 30;

      if (jump <= 0) jump = 5;
      current = Math.min(current + jump, this.endValue);
      steps.push(current);
    }

    if (steps.length === 0) return;
    const delay = this.duration / steps.length;
    let index = 0;

    this.ngZone.runOutsideAngular(() => {
      const interval = setInterval(() => {
        this.ngZone.run(() => {
          this.progress = steps[index++];
          this.cdr.detectChanges();
        });

        if (index >= steps.length) {
          clearInterval(interval);
          this.ngZone.run(() => {
            this.fadeOut = true;
            this.cdr.detectChanges();
            setTimeout(() => {
              this.showProgress = false;
              this.cdr.detectChanges();
            }, 500);
          });
        }
      }, delay);
    });
  }

  get clipPath(): string {
    return `inset(${this.progress}% 0 0 0)`;
  }
}
