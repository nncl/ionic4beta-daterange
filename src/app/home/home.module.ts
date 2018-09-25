import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyDateRangePickerModule } from 'mydaterangepicker';
import { NgxDateRangePickerModule } from 'ngx-daterangepicker';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    MyDateRangePickerModule,
    NgxDateRangePickerModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
