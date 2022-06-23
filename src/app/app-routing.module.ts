import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// @ts-ignore
const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(h => h.HomePageModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'wegwijs', loadChildren: () => import ('./static/wegwijs.module').then(s => s.WegwijsPageModule) },
  { path: 'crisis-en-noodsituaties', loadChildren: () => import ('./static/noodsituatie.module').then(s => s.NoodsituatiePageModule) },
  { path: 'veilige-activiteit', loadChildren: () => import ( './static/activiteit.module').then(s => s.ActiviteitPageModule) },
  // eslint-disable-next-line max-len
  { path: 'verzekeringen-en-aansprakelijkheid', loadChildren: () => import ( './static/verzekeringen.module').then(s => s.VerzekeringenPageModule)},
  { path: 'thema/:title', loadChildren: () => import ( './thema.module').then(t => t.ThemaPageModule) },
  { path: 'intro', loadChildren: () => import ( './intro.module').then(i => i.IntroPageModule) },
  { path: 'vragen-en-antwoorden', loadChildren: () => import ( './faq.module').then(f => f.FaqPageModule) },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
