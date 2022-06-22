import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/layout/header/header.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { ContactComponent } from './components/pages/layout/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component' 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
