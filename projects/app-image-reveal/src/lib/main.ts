import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppImageReveal } from './app-image-reveal';
import { Injector } from '@angular/core';

bootstrapApplication(AppImageReveal).then(appRef => {
  const injector: Injector = appRef.injector;
  const el = createCustomElement(AppImageReveal, { injector });
  if (!customElements.get('app-image-reveal')) {
    customElements.define('app-image-reveal', el);
  } else {
    customElements.define('app-image-reveal', el);
  }
});
