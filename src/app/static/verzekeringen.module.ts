import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerzekeringenPage } from './verzekeringen.page';

const routes: Routes = [
  {
    path: '',
    component: VerzekeringenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerzekeringenPage]
})
export class VerzekeringenPageModule {}
