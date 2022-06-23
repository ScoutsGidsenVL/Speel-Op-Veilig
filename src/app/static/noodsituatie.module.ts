import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoodsituatiePage } from './noodsituatie.page';

const routes: Routes = [
  {
    path: '',
    component: NoodsituatiePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoodsituatiePage]
})
export class NoodsituatiePageModule {}
