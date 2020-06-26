/**
 * Created by F1 on 2017/5/28.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: './pages/user/user.module#UserModule' },
  { path: 'index', loadChildren: './pages/index/index.module#IndexModule' },
  { path: '**', redirectTo: 'user', pathMatch: 'full' },
  // { path: '', redirectTo: 'user', pathMatch: 'full' },
  // { path: 'index', redirectTo: 'index', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
