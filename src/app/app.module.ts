import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './article.component';
import { LoginService } from './article.service';

export const routeConfig:Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule,
		ReactiveFormsModule,
        RouterModule.forRoot(routeConfig, {useHash: true})
  ],
  declarations: [
        AppComponent,
        LoginComponent
  ],
  providers: [
        LoginService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
