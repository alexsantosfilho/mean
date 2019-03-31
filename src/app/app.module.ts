import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DinheiroComponent } from './dinheiro/dinheiro.component';
import { DinheiroDetailComponent } from './dinheiro-detail/dinheiro-detail.component';
import { DinheiroCreateComponent } from './dinheiro-create/dinheiro-create.component';
import { DinheiroEditComponent } from './dinheiro-edit/dinheiro-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

const appRoutes: Routes = [
  {
    path: 'dinheiros',
    component: DinheiroComponent,
    data: { Percentualentrada: 'dinheiro List' }
  },
  {
    path: 'dinheiro-details/:id',
    component: DinheiroDetailComponent,
    data: { Percentualentrada: 'dinheiro Details' }
  },
  {
    path: 'dinheiro-create',
    component: DinheiroCreateComponent,
    data: { Percentualentrada: 'Create dinheiro' }
  },
  {
    path: 'dinheiro-edit/:id',
    component: DinheiroEditComponent,
    data: { Percentualentrada: 'Edit dinheiro' }
  },
  { path: '',
    redirectTo: '/dinheiros',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DinheiroComponent,
    DinheiroDetailComponent,
    DinheiroCreateComponent,
    DinheiroEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
