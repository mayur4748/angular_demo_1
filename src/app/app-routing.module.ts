import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FoodiesmenuComponent } from './foodiesmenu/foodiesmenu.component';
import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'about', component: AboutComponent},
  { path: 'menu', component: FoodiesmenuComponent },
  { path: 'contact', component: ContactusComponent }
];

@NgModule({
  declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
