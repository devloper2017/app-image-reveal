// import { createCustomElement } from '@angular/elements';
// import { AppImageReveal } from './lib/app-image-reveal';
// import { createApplication } from '@angular/platform-browser';

// (async () => {
//   const app = await createApplication();
//   const injector = app.injector;

//   const el = createCustomElement(AppImageReveal, { injector });

//   if (!customElements.get('app-image-reveal')) {
//     customElements.define('app-image-reveal', el);
//   }
// })();


import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';
import { AppImageReveal } from './lib/app-image-reveal';

bootstrapApplication(AppImageReveal).then((appRef: any) => {
  const injector = appRef.injector;
  const el = createCustomElement(AppImageReveal, { injector });
  if (!customElements.get('app-image-reveal')) {
    customElements.define('app-image-reveal', el);
  }
});