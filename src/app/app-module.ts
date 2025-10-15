import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { ReactiveFormsModule } from '@angular/forms';
import { Register } from './auth/components/register/register';
import { Login } from './auth/components/login/login';

registerLocaleData(en);

@NgModule({
  declarations: [
    App,
    Register,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoNgZorroAntdModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideNzI18n(en_US),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule {


}
