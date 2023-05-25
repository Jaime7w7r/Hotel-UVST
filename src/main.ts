import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch((error) => {
      console.log('Error al registrar el Service Worker:', error);
    });
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
