import { createCustomElement } from '@angular/elements';
import { AppImageReveal } from './lib/app-image-reveal';
import { createApplication } from '@angular/platform-browser';

(async () => {
  const app = await createApplication();
  const injector = app.injector;

  const el = createCustomElement(AppImageReveal, { injector });

  if (!customElements.get('app-image-reveal')) {
    customElements.define('app-image-reveal', el);
  }
})();