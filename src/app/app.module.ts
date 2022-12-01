import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/navbar/navigation-bar/navigation-bar.component';
import { SigninDialogComponent } from './components/navbar/signin-dialog/signin-dialog.component';
import { MaterialModule } from './material/material.module';
import {MatIconModule} from '@angular/material/icon';
import { SearchBarComponent } from './components/navbar/search-bar/search-bar.component';
import { RouterModule,Routes } from '@angular/router';
import { SelectCitiesComponent } from './components/navbar/select-cities/select-cities.component';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes:Routes=[
  
//  { path:"search-bar", component:SearchBarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SigninDialogComponent,
    SearchBarComponent,
    SelectCitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
