import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {authInterceptor} from "./helper/auth.interceptor";





export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes),
    provideHttpClient(withFetch()), provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor])),






  ],



};
