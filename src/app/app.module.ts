import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatList,
  MatListModule, MatSelectModule, MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BuilderComponent } from './components/builder/builder.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DynamicFormComponent } from './components/shared/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/shared/dynamic-form-question/dynamic-form-question.component';
import { AvailableInputsBoxComponent } from './components/available-inputs-box/available-inputs-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    AvailableInputsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
