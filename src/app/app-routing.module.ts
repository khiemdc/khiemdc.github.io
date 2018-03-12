import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';     // Add this
import { ShowcaseComponent } from './showcase/showcase.component';  // Add this
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this
import { ContactComponent } from './contact/contact.component';  // Add this
import { ProjectComponent } from './project/project.component';  // Add this
import { FooterComponent } from './footer/footer.component';  // Add this

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'showcase', component: ShowcaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
