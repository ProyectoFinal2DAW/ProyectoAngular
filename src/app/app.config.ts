import { ApplicationConfig, provideZoneChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { 
  MSAL_INSTANCE, 
  MsalService, 
  MsalInterceptor, 
  MsalGuard, 
  MsalBroadcastService 
} from '@azure/msal-angular';
import { 
  InteractionType, 
  PublicClientApplication, 
  BrowserCacheLocation 
} from '@azure/msal-browser';

// MSAL factory function
export function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: '16176e00-0931-40e6-bca3-9c181a76f11f',
      authority: 'https://login.microsoftonline.com/481fa64d-78ed-4ec6-ba40-c327c2b194f6',
      redirectUri: 'http://monlab.alumnes-monlau.com/callback'
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: false,
    }
  });
}

export function MSALInitializerFactory(msalInstance: PublicClientApplication) {
  return () => msalInstance.initialize();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    
    // MSAL providers
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: APP_INITIALIZER,
      useFactory: MSALInitializerFactory,
      deps: [MSAL_INSTANCE],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ]
};