import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule, MatCheckboxModule, MatIconModule,
  MatProgressBarModule, MatFormFieldModule, MatOptionModule,
  MatSelectModule, MatInputModule, MatCardModule, MatGridListModule,
  MatTabsModule, MatExpansionModule,
  MatSnackBarModule, MatToolbarModule, MatIconRegistry, MatMenuModule,
  MatProgressSpinnerModule, MatTooltipModule,
  MatSidenavModule, MatListModule, MatChipsModule, MatButtonToggleModule,
  MatRadioModule, MatDatepickerModule,
  MatNativeDateModule, MatSliderModule, MatAutocompleteModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,
    MatButtonModule, MatCheckboxModule, MatIconModule,
  MatProgressBarModule, MatFormFieldModule, MatOptionModule,
  MatSelectModule, MatInputModule, MatCardModule, MatGridListModule,
  MatTabsModule, MatExpansionModule,
  MatSnackBarModule, MatToolbarModule, MatMenuModule,
  MatProgressSpinnerModule, MatTooltipModule,
  MatSidenavModule, MatListModule, MatChipsModule, MatButtonToggleModule,
  MatRadioModule, MatDatepickerModule,
  MatNativeDateModule, MatSliderModule, MatAutocompleteModule
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor() {

  }
}
