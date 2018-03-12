import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { QuoteComponent } from './quote/quote.component';
import { DownloadTemplateComponent } from './download-template/download-template.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowcaseComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    QuoteComponent,
    DownloadTemplateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
