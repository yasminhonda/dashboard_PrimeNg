import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CardsComponent } from './components/cards/cards.component';
import { ConfigComponent } from './components/config/config.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChartComponent } from './components/chart/chart.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CalendarComponent,
    PerfilComponent,
    ConfigComponent,
    CardsComponent,
    ChartsComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TabMenuModule,
    CardModule,
    ChartModule,
    CalendarModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
