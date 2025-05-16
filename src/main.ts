import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  MsalModule,
  MsalInterceptor,
  MSAL_INSTANCE
} from '@azure/msal-angular';
import {
  InteractionType,
  PublicClientApplication,
  BrowserCacheLocation
} from '@azure/msal-browser';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Importa provideAnimations

// Configuración de MSAL
export function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: '16176e00-0931-40e6-bca3-9c181a76f11f',
      authority: 'https://login.microsoftonline.com/481fa64d-78ed-4ec6-ba40-c327c2b194f6',
      redirectUri: 'http://localhost:8000/callback'
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

// Configuración de providers
const providers = [
  provideRouter(routes),
  importProvidersFrom(
    HttpClientModule,
    MsalModule.forRoot(
      MSALInstanceFactory(),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read']
        }
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me', ['user.read']]
        ])
      }
    )
  ),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: MSALInitializerFactory,
    deps: [MSAL_INSTANCE],
    multi: true,
  },
  provideAnimations() // Agregamos el proveedor de animaciones
];

// Arrancar la aplicación
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers
}).catch(err => console.error(err));
