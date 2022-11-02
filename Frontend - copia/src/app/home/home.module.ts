import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { CoverComponent } from './components/cover/cover.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    CoverComponent,
    ProyectComponent,
    SkillsComponent,
    InfoFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
