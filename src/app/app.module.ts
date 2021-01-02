//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';

//providers-services
import { LogService } from './services/log.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, LogFormComponent, LogsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
